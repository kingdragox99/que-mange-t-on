import React, { useState, useRef } from 'react';
import { Box, Heading, Center, Button, Text, Input } from '@chakra-ui/react'

function App() {

  // custom ajout
  const inputRef = useRef(null);
  // Set le nom du resto
  const [resto, setResto] = useState('');
  // Set le nom du resto en array
  const [restoArray, setRestoArray] = useState(["Bonus tu a gagner un roll", "Burger King", "Kebab", "Pasta", "La pompe a essence", "Pizza", "Poké Ball", "Point Chaud", "Petit tomates", "Le choix de Dorian", "Tacos", "Rien"]);
  // Pas content count
  const [non, setNon] = useState(0);
  // Pas content tu casse les couilles
  const [nonMessage, setNonMessage] = useState('');
  // Tu a ajouté
  const [ajout, setAjout] = useState('');

  // Function ajoute custom
  function handleClick() {
    restoArray.push(inputRef.current.value);
    setAjout(inputRef.current.value)
  }

  // Function pour set le resto
  function random() {
    console.log(restoArray)
    // Match random 10
    let n = Math.floor(Math.random() * restoArray.length);
    // Si restoArray = "Bonus tu a gagner un roll" alors l'user a un bonus
    if (restoArray[n] === "Bonus tu a gagner un roll") {
      setResto("Bonus tu as gagné un roll");
      setNon(non - 1)
      // Si non display le non du resto
    } else {
      setResto(restoArray[n])
    }
  }

  // si pas de resto choisi alors on demande a l'user de random
  if (resto === '') {
    return (
      <Box>
        <Center><Heading m='25px'>Que mange t'on ?</Heading></Center>
        <Center>
          <Box display='flex' justifyContent='center' justifyItems='center' alignContent='center' _hover={{ transitionDuration: '700ms', background: "red", w: '95vw' }} transitionDuration='700ms' w='90vw' h='400px' borderRadius='lg' overflow='hidden' bg='tomato'>
            <Center>
              <Box display='flex' flexDir='column' justifyContent='center' justifyItems='center' alignContent='center' _hover={{ transitionDuration: '700ms', background: "red", w: '95vw' }} transitionDuration='700ms' w='90vw' h='400px' borderRadius='lg' overflow='hidden' bg='tomato'>
                <Text fontWeight="extrabold" color='white' textAlign='center' fontSize='3xl'>Vous allez manger :</Text>
                <Center><Button mt='10px' w='100px' h='40px' colorScheme='green' onClick={() => { random() }}>Clic ici</Button></Center>
              </Box>
            </Center>
          </Box>
        </Center>
        <Text textAlign='center'>Tu a ajouté {ajout}</Text>
        <Center><Input mt='10px' w='200px' placeholder='Que veux tu ajouté ?' size='md' bg='white' ref={inputRef} /></Center>
        <Center><Button mt='10px' w='150px' h='40px' colorScheme='green' onClick={handleClick}>Ajouter a la liste</Button></Center>
      </Box>
    );
    // si il l'user a random alors on lui affiche le nom du resto
  } else if (non <= 3) {
    return (
      <Box>
        <Center><Heading m='25px'>Que mange t'on ?</Heading></Center>
        <Center>
          <Box display='flex' flexDir='column' justifyContent='center' justifyItems='center' alignContent='center' _hover={{ transitionDuration: '700ms', background: "red", w: '95vw' }} transitionDuration='700ms' w='90vw' h='400px' borderRadius='lg' overflow='hidden' bg='tomato'>
            <Text fontWeight="extrabold" color='white' textAlign='center' fontSize='3xl'>Vous allez manger :</Text>
            <Text fontWeight="extrabold" color='white' textAlign='center' fontSize='xl' mt='10px'>{resto}</Text>
            <Text fontWeight="extrabold" color='white' textAlign='center' fontSize='xl' mt='10px'>{nonMessage}</Text>
          </Box>
        </Center>
        <Center><Button mt='10px' w='150px' h='40px' colorScheme='green' onClick={() => {
          // si pas content non count +1
          if (non < 3) {
            setNon(non + 1)
            setResto('')
            // si count non = 3 alors : tu casse les couilles à pas être content
          } else {
            setNonMessage('tu casse les couilles à pas être content');
          }
        }}>Pas content ? {non}/3</Button></Center>
      </Box >
    );
  }
}

export default App;