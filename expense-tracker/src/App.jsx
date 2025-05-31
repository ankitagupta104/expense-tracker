import React from 'react';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/dashboard/Home";
import Income from "./pages/dashboard/Income";
import Expense from "./pages/dashboard/Expense";
import UserProvider from './context/UserContext';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income/>} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>

    <Toaster
    toastOptions={{
      className:"",
      style : {
        fontSize:'13 px'
      },
    }}
    />
    </UserProvider>
  )
}

export default App

const Root =() => {
  //check if token exists in localstorage
  const isAuthenticated = !!localStorage.getItem("token");

  //redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to= "/login" />
  );
};