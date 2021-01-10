import React from 'react';
import style from './NavBar.module.css';

export default function NavBar (){
    return (
        <section className = {style.NavBar}>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </section>
    )
}