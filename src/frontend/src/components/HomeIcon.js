import {React} from 'react'
import {Link} from 'react-router-dom'
import './HomeIcon.scss'

export const HomeIcon = () => {
    return (
        <div className = "HomeIcon">
            <h1>
                <Link to={`/`}>
                    IPL-Dashboard
                </Link>
            </h1>
        </div>
    )
}