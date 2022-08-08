import * as React from 'react';
import {Box, Slider} from "@mui/material";


type SuperDoubleRangePropsType = {
    value: [number, number]
    setValue: (value:[number, number]) => void
}

function valuetext(value: number) {
    return `${value}°C`;
}

const minDistance = 1;

export default function MinimumDistanceSlider ({setValue, value}:SuperDoubleRangePropsType){


        const handleChange1 = (
            event: Event,
            newValue: number | number[],
            activeThumb: number,
        ) => {
            if (!Array.isArray(newValue)) {
                return;
            }

            if (activeThumb === 0) {
                setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
            } else {
                setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
            }
        };


        return (
            <Box sx={{width: 300}}>
                <Slider
                    onChange={handleChange1}
                    getAriaLabel={() => 'Minimum distance'}
                    value={value}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            </Box>
        );

}
