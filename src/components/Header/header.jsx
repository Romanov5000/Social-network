import React from 'react';
import style from './header.module.css';

export default function Header () {
    return(
        <header className={style.Header}>
            <img src="https://cdn2.iconfinder.com/data/icons/random-set-1/467/Asset_79-512.png" alt="logo"/>
        </header>
    )
}