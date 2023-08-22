import { Link } from "react-router-dom"
import Turtle from "../../Icons/Turtle"

const Logo = () => {
    return (
        <main>
            <Link>                            
                <Turtle />
                Rimini Immobiliare
            </Link>
            <Link>
                Il N.1 per vendere e comprare
            </Link>
        </main>
    )
}

export default Logo