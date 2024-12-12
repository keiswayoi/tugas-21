import { useParams } from "react-router-dom"
export default function People() {
    const {id} = useParams()
    return(
        <>
            <h1>People</h1>
            <p>This is people page</p>
            <p>This is people with id {id}</p>
        </>
    )
}