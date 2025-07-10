import { Box, Button, Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UserProgress from '../components/UserProgress';
import Folder from '../components/Folder';
import Notification from '../components/Notification';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IStudent, defaultStudent } from '../interfaces/Student';
import userDataService from '../services/userDataService';
import { IUserAuthData } from '../services/loginService';
import Tutorial from '../pages/Tutorial';
import LevelView from '../components/LevelView';

const releaseDates = [new Date(2024, 2, 12), new Date(2024, 2, 18), new Date(2024, 3, 6), new Date(2024, 3, 9)];
const currentDate = new Date();

const Home = ({
  setUserAuthData,
  userAuthData
}: {
  setUserAuthData: Dispatch<SetStateAction<IUserAuthData>>;
  userAuthData: IUserAuthData;
}) => {
  const [userData, setUserData] = useState<IStudent>(defaultStudent);
  const [userDataFetched, setUserDataFetched] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showLevel, setShowLevel] = useState(false);
  const [showPart1, setShowPart1] = useState(false);
  const [showPart2, setShowPart2] = useState(false);

  // const [showMessages, setShowMessages] = useState(false);
  const [levelToShow, setLevelToShow] = useState(1);
  const levelData = userData.levels;
  const levels = [1, 2, 3, 4, 5];

  // get user data from api
  const fetchData = async () => {
    const data = await userDataService.getUserData({ userId: userAuthData.user_id, userToken: userAuthData.token });
    setUserData(data);
    setShowTutorial(!data.tutorial_completed);
    setUserDataFetched(true);
  };

  const updateTutorial = async () => {
    if (userDataFetched) {
      const updatedUserData = userData;
      updatedUserData.tutorial_completed = true;
      await userDataService.updateUserData({
        userId: userAuthData.user_id,
        userToken: userAuthData.token,
        userData: updatedUserData
      });
    }
  };

  // fetch user data on page load
  useEffect(() => {
    fetchData();
  }, []);

  // update tutorial status in api after tutorial is completed
  useEffect(() => {
    updateTutorial();
  }, [showTutorial]);

  // function that allows user to log out of app
  const handleLogout: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      setUserAuthData({ token: '', username: '', name: '', user_id: '' });
      window.localStorage.removeItem('userAuthDataJSON');
    } catch (error) {
      console.error(error);
    }
  };

  const renderLevels = () => {
    return <LevelView levelData={levelData[levelToShow - 1]} setShowLevel={setShowLevel} />;
  };

  // Renders the folder icons on the main menu
  // Checks through all weeks:
  // - If all levels for the previous week have been completed:
  // - -> Renders folder as clickable and shows associated levels on click
  // - else:
  // - -> Renders folder as unclickable and locked, no effect on clicked

  const renderFolders = () => {
    // another option for storing folder data and then passing them into the folder components:
    // folderData = {1: {folderType: 'unlocked', name: 'Week 1', number/id: 1}
    return (
      <>
      <Flex gap={4}>
      {levels.map(lvlnumber =>
        <Box onClick={() => {
              setLevelToShow(lvlnumber);
              setShowLevel(!showLevel)
            }}
            cursor="pointer">
              <Folder showLevel={showLevel} levelToShow={levelToShow} folderType='unlocked' name='test' number={lvlnumber}/>
        </Box>
      )}
        </Flex>
      </>
    )
  };

  const renderCourseParts = () => {
    return (
      <>
      <Flex gap={4}>
      <Box onClick={()=>setShowPart1(!showPart1)} cursor="pointer">
        <Folder folderType='unlocked' number={1} showLevel={showLevel} levelToShow={levelToShow} name='Part 1'/>
      </Box>
      <Box onClick={()=>setShowPart2(!showPart2)} cursor="pointer">
        <Folder folderType='unlocked' number={2} showLevel={showLevel} levelToShow={levelToShow} name='Part 2'/>
      </Box>
      </Flex>
</>
      
    )
  }

  const renderPart1 = () => {
    return (
      <>
      <p>Part1</p>
      </>
    )
  } 

  if (showTutorial) {
    return <Tutorial setShowTutorial={setShowTutorial} />;
  } else {
    return (
      <>
        <Grid templateRows="1fr 3fr 1fr" templateColumns="25em auto 25em" h="100vh">
          <GridItem colSpan={1}>
            <Box maxW="25em" p="0 0 2em 0">
              <UserProgress name={userData.name} points={userData.points} rating={userData.rating} />
              <Button onClick={handleLogout} m="2em 0 0 2em">
                Logout{' '}
              </Button>
            </Box>
          </GridItem>

          <GridItem colSpan={1} colStart={3} pos="relative" p="2em 1em 0 1em">
            <Flex dir="row" align="center" justify="space-evenly">
              <Box minH="100px">
                <Notification containsMessages={false} nextMessage="" />
              </Box>
              <Link to="/sandbox">
                <Box minW="105px" minH="130px">
                  <Image src="../sandbox_icon.svg" />
                  <Text>Decryption</Text>
                </Box>
              </Link>
            </Flex>
          </GridItem>

          <GridItem colSpan={3} pos="relative">
            <Center m="0 0 0 0">{showLevel && renderLevels()}</Center>
          </GridItem>

          <GridItem rowSpan={1} colSpan={3} padding="3em 10em 2em 10em">
            {showPart2 ? renderFolders() : (showPart1 ? renderPart1() : renderCourseParts())}
          </GridItem>
        </Grid>
      </>
    );
  }
};

export default Home;
