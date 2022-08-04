import React, { useRef } from 'react';
import { Center, Button, Text, Input } from '@chakra-ui/react'

const AddFood = (a, b) => {
    let { foodCount } = a;
    let { ajout } = b;

    if (foodCount < 3) {
        return (
            <>
                <Text textAlign='center'>{ajout}</Text>
                <Center><Input mt='10px' w='200px' placeholder='Que veux tu ajouté ?' size='md' bg='white' /></Center>
                <Center><Button mt='10px' w='150px' h='40px' colorScheme='green' >Ajouter a la liste</Button></Center>;
            </>
        );
    } else {
        return (<p></p>)
    }
};

export default AddFood;