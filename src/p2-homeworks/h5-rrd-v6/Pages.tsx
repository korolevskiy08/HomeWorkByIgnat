import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import classes from './pages.module.css'
import { Junior } from './pages/Junior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior'
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior />}/>
                <Route path={'/junior-plus'} element={<div className={classes.stylesComponent}>Junior-plus</div>}/>
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
