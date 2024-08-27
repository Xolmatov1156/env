import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import "./App.css";
import { ThreeDots } from 'react-loader-spinner';
import CustomRoutes from "./routes";

function App() {
    
    return (
        <CustomRoutes/>
    );
}

export default App;
