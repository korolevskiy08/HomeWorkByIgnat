import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import classes from './Click.module.css'


function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    console.log(show)
    const stop = () => {
        // stop
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }

    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date === undefined ? 'Click Start' : date?.toLocaleTimeString()
    const stringDate = date === undefined ? '' : date.toLocaleDateString()

    return (
        <div className={classes.contentWrapper}>

            <div className={classes.content}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div>
                    {stringTime}
                </div>

                {show && (
                    <div className={classes.stringDate}>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
