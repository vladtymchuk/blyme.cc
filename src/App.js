import React from "react";
import s from './App.module.css';
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";

function App() {
    return (
        <div className={s.container}>
            <Header/>
            <Preview/>
        </div>
    );
}

export default App;
