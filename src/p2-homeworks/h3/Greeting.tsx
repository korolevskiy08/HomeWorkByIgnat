import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.inputClassOff : s.inputClassOnn   // need to fix with (?:)

    return (
        <div>
            <SuperInputText error={error}
                            value={name}
                            onChange={setNameCallback}
                            className={inputClass}/>
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
            {/*<button disabled={!name} onClick={addUser}>add</button>*/}
            <SuperButton disabled={!name}
                         onClick={addUser}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
