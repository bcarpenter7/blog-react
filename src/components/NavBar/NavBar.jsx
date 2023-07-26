
import { Link } from 'react-router-dom'

export default function NavBar(){

    return (
        <nav>
            <Link to="/actors">Actor List</Link>
            &nbsp; | &nbsp;
            <Link to="/">Movie List</Link>
        </nav>
    )
}