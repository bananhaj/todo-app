import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import Todolist from "./components/Todolist";
import Addtodo from './components/Addtodo';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'get bread '
    }
    , {
      id: 2,
      body: 'get ready '
    }
  ]
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || initialTodos)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const deleteTodos = (id) => {
    const newTodos = todos.filter(todos => {
      return todos.id !== id;
    })
    setTodos(newTodos);

  }
  const addTodos = (todo) => {
    setTodos([...todos, todo])
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (

    <VStack p={4}>
      <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading
        mb={8}
        fontWeight='extrabold'
        size='2xl'
        bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
        bgClip='text'
      >To Do App</Heading>
      <Todolist todos={todos} handleDelete={deleteTodos} />
      <Addtodo handleAdd={addTodos} />
    </VStack>

  );
}

export default App;
