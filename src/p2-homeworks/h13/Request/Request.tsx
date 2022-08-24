import React, {ChangeEvent, useEffect, useState} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestAPI";
import loader from '../../../assets/img/6os.gif'

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [preloader, setPreloader] = useState<boolean>(false)

    const valueChecked = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.checked
        setChecked(value)
        console.log(value)
    }

    const PostOnclickValue = () => {
        setPreloader(true)
        requestAPI.setCheckBox(checked)
            .then((res) => {
                setPreloader(false)
                setMessage(`${res.data.errorText}: ${res.data.info}`)
                console.log(res.data)
            })
            .catch((error) => {
                setPreloader(false)
                setMessage(`${error.response.data.errorText}: ${error.message}`)
                console.log(error.response ? error.response.data.errorText : error.message);
            })
            .finally(() => {
                setPreloader(false)
            })
    }

    return (
        <div>
            <SuperButton
                onClick={PostOnclickValue}
            >POST</SuperButton>
            <SuperCheckbox
                onChange={valueChecked}
            />
            <div>
                {preloader
                    ? <img style={{width: '200px', height: '200px'}} src={loader} alt="loader"/>
                    : message
                }
            </div>
        </div>
    );
};

