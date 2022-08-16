import React, {ChangeEvent} from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import classes from './pages.module.css'
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, themeReducerType} from "../h12/bll/themeReducer";
import s from "../h12/HW12.module.css";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function Pages() {

    const theme = useSelector<AppStoreType, themeReducerType>(theme => theme.theme)

    const styleTheme = theme.backgroundValue === 'default' ? '' :
        theme.backgroundValue === 'dark' ? s.dark : s.green

    return (
        <div className={styleTheme}>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
