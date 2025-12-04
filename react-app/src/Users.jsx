import { useState } from "react"

export default function Users(props) {
    const [users, setUsers] = useState([]);

    return (
        <>
            {JSON.stringify(users)}
        </>
    )
}