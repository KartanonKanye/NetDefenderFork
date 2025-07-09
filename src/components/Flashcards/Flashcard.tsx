import { Box, Button, Card, CardBody, CardHeader, Center, Heading, IconButton, Text, useToast } from '@chakra-ui/react';
import { ArrowBackIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import * as FlashcardData from './FlashcardData';
import userDataService from '../../services/userDataService';
import { useNavigate } from 'react-router-dom';
import { log } from 'console';

// FlashcardContent is the format for each flashcard.
// Each flashcard should have a title and the content of the flashcard, along with an id to identify it.
interface FlashcardContent {
  id: number;
  title: string;
  content: string;
}

async function changeLabel() {
  const button = await document.querySelector('#NextButton');
  if (button) {
    button.innerHTML = 'Finish'
  }
  else {
    console.log("button not found");
  }
}

const Flashcard = ({
  content,
  weekNumber,
  taskID
}: {
  content: FlashcardContent[];
  weekNumber: number;
  taskID: string;
}) => {
  var [count, setCount] = useState(0);
  const flashcards: FlashcardContent[] = content;
  const [flashcard, setFlashcard] = useState(flashcards[0]);

  const navigate = useNavigate();
  const toast = useToast();

  // function that sets level as completed and adds points to user's score
  const handleLevelComplete = async () => {
    const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');

    if (userAuthDataJSON) {
      const user = JSON.parse(userAuthDataJSON);
      const userAuthData = user;
      const userData = await userDataService.getUserData({
        userId: userAuthData.user_id,
        userToken: userAuthData.token
      });

      const updatedUserData = userData;
      const currentTask = userData.levels[weekNumber - 1].find((obj) => obj.id === taskID);

      if (currentTask) {
        if (!currentTask.completed) {
          updatedUserData.levels[weekNumber - 1].find((obj) => obj.id === taskID)!.completed = true;
        }

        updatedUserData.points = userData.points + currentTask.points;

        await userDataService.updateUserData({
          userId: userAuthData.user_id,
          userToken: userAuthData.token,
          userData: updatedUserData
        });
      }

      toast({
        title: 'Good job!',
        status: 'success',
        duration: 1500
      });
    }
  };

  return (
    <>
      <Center h="100vh" w="100vw">
        <Box display="flex" flexDir="column" justifyContent="space-evenly" gap="4em" marginX="2em">
          <IconButton
            onClick= {() => { navigate('/') }}
            icon={<ArrowBackIcon />}
            boxSize={10}
            border="1px"
            aria-label={''}
          />
          <Card
            alignSelf="center"
            justifySelf="center"
            w={['xs', 'md', 'lg']}
            bg="game.black"
            borderColor="game.gray"
            borderWidth="2px"
          >
            <CardHeader>
              <Heading textColor="game.white">{flashcard.title}</Heading>
            </CardHeader>
            <CardBody>
              <Box display="flex" gap="1em" alignItems="start">
                <InfoOutlineIcon color="game.white" />
                <Text color="game.white">{flashcard.content}</Text>
              </Box>
            </CardBody>
          </Card>
          <Box display="flex" justifyContent="space-between">
            <Button id = 'PreviousButton'
              w={['6em', '8em']}
              onClick={() => {
                if (count >= 1) {
                  count -= 1;
                  setCount(count);
                }

                setFlashcard(flashcards[count]);
                console.log(count);
                
              }}
            >
              Previous
            </Button>
            <Button id='NextButton'
              w={['6em', '8em']}
              onClick={() => {
                count += 1;
                setCount(count);
                if (count == flashcards.length - 1) {
                  changeLabel();
                }
                if (count == flashcards.length) {
                  handleLevelComplete();
                  navigate('/');
                }
                setFlashcard(flashcards[count]);
                
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export type { FlashcardContent };
export default Flashcard;
