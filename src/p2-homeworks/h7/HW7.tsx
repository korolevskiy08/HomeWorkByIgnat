import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import style from '../h5-rrd-v6/pages.module.css'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[0])

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div className={style.alignContentCenter}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={style.alignContentCenter}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
