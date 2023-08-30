import { Link } from "react-router-dom"
import Turtle from "../../Icons/Turtle"

const Logo = () => {
    return (
        <div className="Logo">
            <Link to={"/"}>                            
                <Turtle />
                Rimini Immobiliare
            </Link>
            <Link>
                Il N.1 per vendere e comprare
            </Link>
        </div>
    )
}

export default Logo