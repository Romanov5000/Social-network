import React from 'react';
import style from './PublicationInput.module.css';


export default function PublicationInput () {
    return(
        <div className={style.PublicationInput}>
            <input type="text"/>
            <button>klick</button>
        </div>
    )
}