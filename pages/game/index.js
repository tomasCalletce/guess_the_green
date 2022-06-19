import { Box, Text, Button, Input } from '@chakra-ui/react'


export default function Game() {


  return (
   <Box Box w="100%" h="100vh" bgGradient="linear(to-b,#595cff,#c6f8ff)" display="flex" flexDirection="column" alignItems="center" >
      <Box w="100%" height="5vh" bg="white" display="flex" justifyContent="space-between" pl="1rem" pr="1rem" >
        <Box display="flex" alignItems="center" justifyContent="center">
            <Text fontSize="2xl" fontWeight="bold">question 1 of 10</Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
            <Text fontSize="2xl" fontWeight="bold">Timer: ddd</Text>
        </Box>
      </Box>
      <Box w="100%" height="90vh" display="flex" flexDirection="column" alignItems="center">
        <Box height="50vh" w="100%" display="flex" alignItems="center" justifyContent="center" bg="lightcoral">
            <Text fontSize="4xl">What is the anual revenue of Apple?</Text>
        </Box>
        <Box height="50vh" w="40%" display="flex" flexDirection="column" alignItems="center" p="1rem" bg="lightgray">
            <Box>
                <Text>Leaderboard</Text>
            </Box>
        </Box>
      </Box>
      <Box>
        <Text fontSize=".8rem">
          made by juanc and tomas with ❤️
        </Text>
      </Box>
   </Box>
  )
}
