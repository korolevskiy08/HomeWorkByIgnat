import React from 'react'
import Affair from './Affair'
import {AffairType, deleteAffair, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (buttonValue: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (buttonValue: FilterType) => {
        props.setFilter(buttonValue)
    } // need to fix
    const setHigh = (buttonValue: FilterType) => {
        props.setFilter(buttonValue)
    }
    const setMiddle = (buttonValue: FilterType) => {
        props.setFilter(buttonValue)
    }
    const setLow = (buttonValue: FilterType) => {
        props.setFilter(buttonValue)
    }

    return (
        <div>

            {mappedAffairs}
            <SuperButton onClick={() => setAll('all')}>All</SuperButton>
            <SuperButton onClick={() => setHigh('high')}>High</SuperButton>
            <SuperButton onClick={() => setMiddle('middle')}>Middle</SuperButton>
            <SuperButton onClick={() => setLow('low')}>Low</SuperButton>
            {/*<button onClick={() => setAll('all')}>All</button>*/}
            {/*<button onClick={() => setHigh('high')}>High</button>*/}
            {/*<button onClick={() => setMiddle('middle')}>Middle</button>*/}
            {/*<button onClick={() => setLow('low')}>Low</button>*/}
        </div>
    )
}

export default Affairs
