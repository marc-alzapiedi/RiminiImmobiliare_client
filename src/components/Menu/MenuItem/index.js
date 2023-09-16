import { Link } from "react-router-dom"
import { useState } from "react"
import ArrowRight from "../../../Icons/ArrowRight"
import './style.css'


const MenuItem = ({icon, text, children}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (

        
        
        <li>
            {!icon ? children : icon.type.name === 'ProfileIcon' ?
                
            <button onClick={toggleIsOpen}> 
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
        {
            isOpen && 
            <div className="loginRegisterForm">
                <div>
                    <div>
                        <p>
                            Con il tuo account puoi:
                        </p>
                        <ul>
                            <li>Salvare le tue ricerche</li>
                            <li>Salvare gli annunci migliori</li>
                            <li>Contattare con più facilità le agenzie</li>
                            <li>Ricevere aggiornamenti personalizzati</li>
                        </ul>
                    </div>

                </div>

                <form>

                    <div>
                        <p>Accedi o registrati</p>
                        <button>
                            X
                        </button>

                    </div>


                    <button>
                        CONTINUA CON GOOGLE
                    </button>

                    <button>
                        CONTINUA CON APPLE
                    </button>

                    <button>
                        CONTINUA CON FACEBOOK
                    </button>

                    <p>Oppure</p>

                    <input type="email"/>

                </form>
            </div>
        }
            
                
        </li>


    )
}

export default MenuItem