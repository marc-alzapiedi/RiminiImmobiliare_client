import { Link } from "react-router-dom"
import ArrowRight from "../../../Icons/ArrowRight"

const MenuItem = ({icon, text, children}) => {
    return (
        <li>
            {
            icon ? 
            <Link>
                {icon}
                {children ? children : <p>{text}</p>}
                {text !== 'Accedi / Registrati' && <ArrowRight />}
            </Link> : children
            }
            

            
        </li>
    )
}

export default MenuItem