import { Link } from "react-router-dom"
import ArrowRight from "../../../Icons/ArrowRight"

const MenuItem = ({icon, text, children}) => {


    

    return (
        <li>

            {!icon ? children : icon.type.name === 'ProfileIcon' ?
            
            <button>
                <p>
                {icon}
                </p>
                <p>
                {text}
                </p>
            </button>
             : 
            icon.type.name !== 'ProfileIcon' ? 
            <Link>
                {icon}
                {children ? children : <p>{text}</p>}
                {text !== 'Accedi / Registrati' && <ArrowRight />}
            </Link> : children
            
            }
            {/* {
            icon ? 
            <Link>
                {icon}
                {children ? children : <p>{text}</p>}
                {text !== 'Accedi / Registrati' && <ArrowRight />}
            </Link> : children
            } */}
             
        </li>
    )
}

export default MenuItem