import React from 'react';
import style from './Messages.module.css';
import Dialogs from './Dialogs';
import MessageItem from './MessageItem';



const Messages = (props) => {

    return (
        <section className={style.Messages}>
            <div>
            <Dialogs/>
            </div>
            <MessageItem />
        </section>
    )
} 

  export default Messages;