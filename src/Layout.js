import React from 'react'
import { Route, Routes } from "react-router-dom";
import Repo from './components/Repo';
import Profile from './Pages/Profile';


const pages = [
    
    {

    exact: true,
    path: "./Pages/Profile.js",
    component: Profile,

}


]