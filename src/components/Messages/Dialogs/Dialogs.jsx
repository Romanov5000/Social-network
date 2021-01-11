import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

export default function Dialogs (props) {
    const {name, id} = props;
    return (
        <div className={style.dialogs}>
                <div className={style.dialogItem}>
                    <NavLink to={'/Messages/' + id}>{name}</NavLink>
                </div>
            </div>
    )
}