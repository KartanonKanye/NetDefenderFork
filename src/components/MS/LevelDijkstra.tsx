import userDataService from '../../services/userDataService';
import { useNavigate } from 'react-router-dom';
import { Box, Center, Flex, Text, Button, FormLabel, Textarea, useToast, FormControl } from '@chakra-ui/react';
import React, { useState } from 'react';

const LevelDijkstra =  ({weekNumber, taskID} : {weekNumber: number; taskID: string}) => {
    const navigate = useNavigate();
    const toast = useToast();
    return (
        <>
            <Flex align="center" direction="column" marginTop="20px">
            <iframe src="https://opendsa-server.cs.vt.edu/embed/DijkstraPE" height="625" width="70%" scrolling="no"></iframe>
            <Button onClick={() => { navigate('/') }} >Finish</Button>
            </Flex>
        </>
    )
}

export default LevelDijkstra