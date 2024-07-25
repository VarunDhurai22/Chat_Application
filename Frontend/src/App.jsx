import React from 'react'
//import Left from './home/Leftpart/Left'
//import Right from './home/Rightpart/Right'
import Signup from './components/Signup';
import Login from './components/Login';
import { useAuth } from "./context/Authprovider"

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    // <div className="flex h-screen">
    //   <Left/>
    //   <Right/>
    // </div>
    <Signup/>
    //<Login/>
  );
}

export default App