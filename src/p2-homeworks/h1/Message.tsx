import React from 'react'
import c from './Message.module.css'

type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageDataType) {
    return (
        <div className={c.message}>
            <div>
                <img className={c.avatar}
                     src="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg" alt=""/>

            </div>
            <div className={c.messageData}>
                <div>
                    {props.name}
                </div>
                <div className={c.MessageTime}>
                    <div>
                        {props.message}
                    </div>
                    <div className={c.time}>
                        {props.time}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Message
