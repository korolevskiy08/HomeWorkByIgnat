import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['default', 'dark', 'green'];

function HW12() {

    const dispatch = useDispatch()

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }

    return (
        <div>
            <hr/>
            <span>
                homeworks 12
                <div className={s.select}>
                     <SuperSelect
                         options={themes}
                         onChange={onChange}
                     />
                </div>

            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
