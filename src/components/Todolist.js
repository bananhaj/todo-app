import React from 'react';
import { HStack, IconButton, VStack, Text, StackDivider, Spacer, Badge } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Todolist = ({ todos, handleDelete }) => {
  if (!todos.length){
    return (
      <Badge colorScheme='green' m='4' p='4' borderRadius='lg'> No Todolist values </Badge>
    )
  }
  return (
    <VStack divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >

      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound='true' onClick={() => handleDelete(todo.id)} />
        </HStack>))}
    </VStack>
  )
}

export default Todolist