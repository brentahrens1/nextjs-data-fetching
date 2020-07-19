import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

export default function Id({todoList}) {
    const router = useRouter()
    const [todos, setTodos] = useState(todoList)
    useEffect(() => {
        async function loadData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?title=' + router.query.id + '&todo' + router.query.todo)
            const todoList = await response.json()
            setTodos(todoList)
        }
        if (todoList.length == 0) {
             loadData()
        }
    }, [])
return <div><h2>{router.query.id}</h2>
    <h3>{router.query.todo}</h3>
    </div>
}

Id .getInitialProps = async (ctx) => {
    if (!ctx.req) {
        return {
            todoList: {}
        }
    }
    const query = ctx.query
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?title=' + query.id + '&todo' + query.todo)
    const todoList = await response.json()
    return { todoList: todoList }
}