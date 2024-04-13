
import PageTemplate from '../components/pageTemplate';
import { useEffect } from 'react';
import { Box, VStack, Button } from '@chakra-ui/react';
import  SearchPreviewItem  from '../components/searchPreviewItem';
const Dashboard = () => {
  // const counter = useSelector(state => state.counter.value);
  // const dispatch = useDispatch();
  /* <p>Counter: {counter}</p>
  <button onClick={() => dispatch(increment())}>Increment</button>
  <button onClick={() => dispatch(decrement())}>Decrement</button> */
  const pageTitle = "Dashboard"
  
  useEffect(() => {
   console.log("Test execute")
  }, []);
  
  return (
    <PageTemplate props={{pageTitle}}>
    <VStack>
      <SearchPreviewItem/>
      <SearchPreviewItem/>
      <SearchPreviewItem/>
    </VStack>
  </PageTemplate>
  );
}

export default Dashboard;