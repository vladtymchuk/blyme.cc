import React from "react";
import s from './styles/Header.module.css'
import logo from "./media/logoBlyme.png"

const Header = (props) => {
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={s.tabs}>
                <a className={s.tab}>
                    <div>Home</div>
                </a>
                <a className={s.tab}>
                    <div>Docs</div>
                </a>
                <a className={s.tab}>
                    <div>About</div>
                </a>
                <a className={s.tab}>
                    <div>Community</div>
                </a>
            </div>
        </div>
    )
}

export default Header