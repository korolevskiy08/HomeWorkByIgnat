import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, themeReducerType} from "./bll/themeReducer";

const themes = ['default', 'dark', 'green'];

function HW12() {

    const theme = useSelector<AppStoreType, themeReducerType>(theme => theme.theme)
    const dispatch = useDispatch()

    const styleTheme = theme.backgroundValue === 'default' ? '' :
        theme.backgroundValue === 'dark' ? s.dark : s.green


    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }

    return (
        // <div className={s[theme]}>
        <div className={styleTheme}>
            <hr/>
            <span className={s[theme + '-text']}>
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
