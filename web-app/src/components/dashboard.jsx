import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/slice';
import { Heading, Box, Text, Container } from '@chakra-ui/react';
import { useEffect } from 'react';

const Dashboard = () => {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
   console.log("Test execute")

  }, []);
  
  return (
    <Container>
      <Heading>Dashboard</Heading>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Box>
        <Text></Text>
      </Box>
    </Container>
  );
}

export default Dashboard;