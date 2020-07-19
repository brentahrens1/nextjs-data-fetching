import Link from 'next/link'

export function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/details"><a>Go to the todo list</a></Link>
        </div>
    )
}