import React, { useState } from "react";
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from './components/Themes';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import AddEdit from "./pages/addedit/AddEdit";
import Home from './pages/home/Home';
import View from "./pages/View/View";
import Plants from "./pages/plants/Plants";
import Gardener from "./pages/gardener/Gardener";
import ViewGardener from "./pages/View/ViewGardener";
import AddEditGardener from "./pages/addedit/AddEditGardener";
import Helper from "./components/Helper.js";

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
      <button className='btn btn-outline-success' onClick={() => themeToggler()}> Change Theme</button>
      
       
    <BrowserRouter>
    <Header />
    <div className="App">
    <ToastContainer position="top-center"/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Plants" element={<Plants />} />
    <Route path="/addPlant" element={<AddEdit />} />
    <Route path="/Gardener" element={<Gardener />} />
    <Route path="/update/:id" element={<AddEdit />} />
    <Route path="/view/:id" element={<View />} />
    <Route path="/viewGardener/:id" element={<ViewGardener />} />
    <Route path="/addGardener" element={<AddEditGardener />} />
    <Route path="/updategardener/:id" element={<AddEditGardener />} />
    <Route path="/helper" element={<Helper />} />
    </Routes>
    </div>
    </BrowserRouter>
    
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
