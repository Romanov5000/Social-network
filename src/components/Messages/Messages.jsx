import React from 'react';
import style from './Messages.module.css';
import Dialogs from './Dialogs';


export default function Messages () {
    return (
        <section className={style.Messages}>
            <div>
            <Dialogs 
            name='vlad'
            id = '1'
            />
            <Dialogs 
            name='vlad'
            id = '2'
            />
            <Dialogs 
            name='vlad'
            id = '3'
            />
            </div>
            <div className={style.messageItem}>
                hello
            </div>
        </section>
    )
} 