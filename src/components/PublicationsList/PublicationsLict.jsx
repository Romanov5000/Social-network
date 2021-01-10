import React, {useState} from 'react';
import style from './PublicationsList.module.css';

export default function PublicationsList (props) {
    const {list} = props;

    const element = list.map((item) => {
        return <p key={item.id}>{item.text}</p>
    })
    return (
        <div className={style.PublicationsList}>
        {element}
        </div>
    )
}