import { Link } from "react-router-dom"
import { useState } from "react"
import ArrowRight from "../../../Icons/ArrowRight"
import './style.css'
import Xbutton from "../../../Icons/Xbutton"
import Google from "../../../Icons/Google"
import Apple from "../../../Icons/Apple"
import Facebook from "../../../Icons/Facebook"


const MenuItem = ({icon, text, children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({email: '', password: '', usernameLogin: '', passwordLogin: ''})


    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleChange = (event) => {
        const {value, name} = event.target

        setUser({
            ...user,
            [name]: value
        })


    }

    const handleRegister = (event) => {
        event.preventDefault()

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch('http://localhost:4000/register', options)
        .then(response => response.json())
        .then((data)=> {
            console.log(data)
        })
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

                <form onSubmit={handleRegister}>

                    <div>
                        <p>Accedi o registrati</p>
                        <button>
                            <Xbutton/>
                        </button>

                    </div>


                    <button>
                        <Google/>
                        CONTINUA CON GOOGLE
                    </button>

                    <button>
                        <Apple />
                        CONTINUA CON APPLE
                    </button>

                    <button>
                        <Facebook/>
                        CONTINUA CON FACEBOOK
                    </button>

                    <p>Oppure</p>

                    <input type="email" name="email" placeholder="EMAIL" onChange={handleChange} value={user.email}/>

                    <button>
                        ACCEDI O REGISTRATI
                    </button>

                </form>
            </div>
        }
            
                
        </li>


    )
}

export default MenuItem