import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
