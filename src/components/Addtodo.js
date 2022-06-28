import React, { useState } from 'react'
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const Addtodo = ({ handleAdd }) => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'no content.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return
    }
    const todo = {
      id: nanoid(),
      body: content
    }
    console.log(todo);
    handleAdd(todo)
    setContent('');
  }
  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack m='8'>
        <Input variant='filled' placeholder='Add here!' value={content}
          onChange={(e) =>
            setContent(e.target.value)} />
        <Button colorScheme='pink' px='8' type='submit'  >Add ToDo</Button>
      </HStack>

    </form>
  )
}

export default Addtodo