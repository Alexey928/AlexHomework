import React from 'react'
import style from "./Message.module.css"


type MasegePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: MasegePropsType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt={"avo"}/>
            <div className={style.MesegeContentWraper}>
                {props.message}
                <div className={style.time}>{props.time}</div>
                <div className={style.userName}>{props.name}</div>
            </div>
        </div>
    )
}
export default Message
