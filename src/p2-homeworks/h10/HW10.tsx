import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingStateType} from "./bll/loadingReducer";
import preloader from '../../assets/img/37.gif'

function HW10() {

    const loading = useSelector<AppStoreType, LoadingStateType>(state => state.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {/*should work (должно работать)*/}
                {loading.isFetching
                    ? (
                        <div style={{width: '150px'}}>
                            <img src={preloader} alt={'preloader'}/>
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<Alternative/>*/}
                <hr/>

        </div>
    )
}

export default HW10
