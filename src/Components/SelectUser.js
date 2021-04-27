import { useEffect, useState } from "react";
import { doGet } from "../service"

function Selectuser({ onChange, name }) {

    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState('')

    async function getUsers() {
        const users = await doGet('/users')
        setUsers(users)
    }
    useEffect(() => {
        getUsers()
    }, [])

    function onChangeSelect(event) {
        let id = event.target.value
        let id1 = id === '' ? '' : parseInt(id)
        setCurrentUser(id1)
        if (onChange)
            onChange(id1)
    }

    return <select name={name} className="form-control" value={currentUser} onChange={onChangeSelect}>
        {
            users.map(item => <option value={item.id} key={item.id}>
                {item.name}
            </option>)
        }
    </select>
}

export default Selectuser