import Link from 'next/link'

export default function Details({todoList}) {
    return (
        <div>
            {todoList.map((e, idx) => (
                <div key={idx}>
                    <Link as={`/${e.title}/${e.userId}`} href="/[todo]/[id]">
                        <a>{e.title}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

Details.getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todoList = await response.json()
    return { todoList: todoList }
}

