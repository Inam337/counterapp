import {  Container,
  Paper,
  Box,
  Typography,
  Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, } from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <ThemeProvider theme={theme}>
      <Container component={Box} py={4}>
        <Paper component={Box} p={3} align="center">
          <Typography align="center" variant="h1">
            {counter}
          </Typography>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;