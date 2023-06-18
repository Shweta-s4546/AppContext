import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments";
import Pnf from "./Components/Pnf";

function App(){
  return(
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path={`/`} element={ <Home/> }/>
      <Route path={`/users`} element={ <Users/> }/>
      <Route path={`/posts`} element={ <Posts/> }/>
      <Route path={`/comments`} element={ <Comments/> }/>
      <Route path={`/*`} element={ <Pnf/> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App