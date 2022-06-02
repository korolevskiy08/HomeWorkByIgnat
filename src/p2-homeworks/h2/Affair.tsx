import React from 'react'
import {AffairType} from "./HW2";
// import {AffairType} from "./HW2";
import c from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }// need to fix

    return (
            <div className={c.content}>
                <div>{props.affair.name}</div>
                <div className={`${props.affair.priority === 'low' ? c.low :
                    props.affair.priority === 'high' ? c.high : c.middle
                }`}>{props.affair.priority}</div>
                <div><button onClick={() => deleteCallback(props.affair._id)}>X</button></div>
            </div>
    )
}

export default Affair
