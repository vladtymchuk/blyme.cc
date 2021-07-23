import React from "react";
import s from './styles/Preview.module.css'

const Preview = (props) => {
    return (
        <div className={s.container}>
            <div className={s.titleBox}>
                <p className={s.title}>Site Will Be Soon</p>
            </div>
            <div className={s.joke}>
                <p className={s.jokeTitle}>We need a time _()^()_</p>
            </div>
        </div>
    )
}

export default Preview