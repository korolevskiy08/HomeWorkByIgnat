import React from 'react'
import {AffairType} from "./HW2";
// import {AffairType} from "./HW2";
import c from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }

    return (
            <div className={c.content}>
                <div>{props.affair.name}</div>
                <div className={`${props.affair.priority === 'low' ? c.low :
                    props.affair.priority === 'high' ? c.high : c.middle
                }`}>{props.affair.priority}</div>
                <div>
                    <SuperButton onClick={() => deleteCallback(props.affair._id)}>X</SuperButton>
                </div>
            </div>
    )
}

export default Affair
