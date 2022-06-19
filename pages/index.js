import { Box, Text, Button, Input } from '@chakra-ui/react'


export default function Home() {

  const home = (
    <Box display="flex" flexDirection="column" >
      <Text fontSize="7xl" >get the 💸</Text>
      <Box w="100%" display="flex" justifyContent="space-between">
        <Button w="49%">new game</Button>
        <Button w="49%">join game</Button>
      </Box>
    </Box>
  )

  const newGame = (
    <Box display="flex" flexDirection="column" >
      <Text fontSize="6xl" >send code too friends 🕹</Text>
      <Box w="100%" display="flex" boxShadow='xl' p='6' rounded='md' bg='white' justifyContent="center" alignItems="center">
        <Text fontSize="4xl" fontWeight="bold" >45333</Text>
      </Box>
      <Box w="100%" display="flex" justifyContent="space-between" mt="1rem">
        <Button w="49%">new game</Button>
        <Box w="49%" bg='white' display="flex" justifyContent="center" alignItems="center" rounded='md'>
          <Text >timer: </Text>
          <Text fontWeight="extrabold">56sec</Text>
        </Box>
      </Box>
    </Box>
  )

  const joinGame = (
    <Box display="flex" flexDirection="column" alignItems="center" >
      <Text fontSize="6xl" >ask a friend for a code ⚡️</Text>
        <Box w="50%" display="flex" flexDirection="column" justifyContent="space-between" mt="1rem" bg="white" p="1rem" boxShadow='xl' rounded='md' >
          <Input placeholder='Buscar' border="1px" borderColor='gray.400' bg="white" mb=".2rem" />
          <Button w="100%">join game</Button>
        </Box>
    </Box>
  )

  return (
   <Box Box w="100%" h="100vh" bgGradient="linear(to-b,#595cff,#c6f8ff)" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
      {home}
      <Box>
        <Text fontSize=".8rem">
          made by juanc and tomas with ❤️
        </Text>
      </Box>
   </Box>
  )
}
