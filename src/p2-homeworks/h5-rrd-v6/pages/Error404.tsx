import React from 'react'
import classes from './error.module.css'


function Error404() {
    return (
        <div className={classes.errorBlock}>
            <div>404</div>
            <div className={classes.content}>
                <img
                    src="https://lh5.googleusercontent.com/TdEpMGc4e3d4xqHX6CWvsUHVWtrumiDWb48x52OaS8eHj-zGOS_X6FiHrzVz4IwxtucxSFaSqDsDRkyIJ0AtuC3PlHInRYQAgPmRyxWbJgCGdj1lFD8wrwlcm1x1TJwBZbN3drYu"
                    alt="Error 404"/>
            </div>
        </div>
    )
}

export default Error404
