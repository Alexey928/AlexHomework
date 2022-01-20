import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string// need to fix any <-- V!
    setNameCallback: (event:ChangeEvent<HTMLInputElement>)=>void // need to fix any<--- v!
    addUser: ()=>void // need to fix any <-- V!
    error: string // need to fix any <-- V!
    totalUsers: number // need to fix any <-- V!
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов<--- V!
) => {

    const inputClass = error ? s.error : s.olwrite // need to fix with (?:)<---- V!

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.errMeseg}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
