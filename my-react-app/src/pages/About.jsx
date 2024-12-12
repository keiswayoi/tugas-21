import { Link } from "react-router-dom"
const PEOPLE = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
    {
        id: 3,
        name: 'Doe John'
    },
    {
        id: 4,
        name: 'Doe Jabe'
    }
]
export default function About() {
    return(
        <>
            <h1>About</h1>
            <p>This is about page</p>
            <ul>
                {
                    PEOPLE.map(el => (
                        <li key={el.id}>
                            <Link to={`/people/${el.id}`}>{el.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}