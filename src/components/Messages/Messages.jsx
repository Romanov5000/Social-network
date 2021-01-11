import React from 'react';
import style from './Messages.module.css';
import Dialogs from './Dialogs';
import MessageItem from './MessageItem';


export default function Messages () {

    const dialogNameList = [
        {name: 'Vlad', id: 1},
        {name: 'Vera', id: 2},
        {name: 'Julia', id: 3},
        {name: 'Tania', id: 4},
    ]

    return (
        <section className={style.Messages}>
            <div>
            <Dialogs 
            dialogNameList = {dialogNameList}
            />
            </div>
            <MessageItem />
        </section>
    )
} 