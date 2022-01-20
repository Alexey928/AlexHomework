import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: Array<string>
    addUserCallback: (user: string) => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов <--- типо для продвинутых ;)
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if (name.trim().length > 1) {
            alert(`мы добавили ${name}`);
            addUserCallback(name)
            setError("");
            setName("");

        } else {
            setError("Wot a fack!!!") //  <---- можно решить  через тернарник обвепнув цепь команд в {} но лутше написать полноценный валидатор с цензурой и проимпортить его отдельно ;)(Я Так Думаю)
        }

    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
