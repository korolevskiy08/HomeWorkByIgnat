import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import MinimumDistanceSlider from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {

    const [value, setValue] = useState<[number, number]>([0, 100]);

    const numberCallbackForSuperRange = (number: number) => {
        if (number < value[1]) setValue([number, value[1]])
    }

    const onChangeValueDoubleRange = (value: [number, number]) => {

        setValue(value)
    }


    return (
        <div>
            <hr/>
            homeworks 11
            <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <span>{value[0]}</span>
                    <SuperRange
                        // сделать так чтоб value1 изменялось
                        onChangeRange={numberCallbackForSuperRange}
                        value={value[0]}
                    />
                    <span>{value[1]}</span>
                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <span>{value[0]}</span>
                    <MinimumDistanceSlider
                        setValue={onChangeValueDoubleRange}
                        value={value}

                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <span>{value[1]}</span>
                </div>

                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperRange/>*/}
                {/*<AlternativeSuperDoubleRange/>*/}
                <hr/>
            </div>
        </div>

    )
}

export default HW11
