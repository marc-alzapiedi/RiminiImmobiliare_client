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
    const [form, setForm] = useState({nome: '', cognome: '', telefono: '', consent: false, comunicazioni: false, news: false})
    const [loginRegisterForm, setRegisterForm] = useState(true) //true
    const [register, setRegister] = useState(false) // false
    const [login, setLogin] = useState(false) // false

    console.log(isOpen)
    // console.log(text)
    
    const handleRegister = (event) => {
        event.preventDefault()
        console.log(event)
        
        console.log('submit fired')
        
        
        fetch(`${process.env.REACT_APP_API_URL}/registerlogin/${event.target[4].value}`)
        .then(response => response.json())
        .then((data)=> {
            const resStatus = data
            if (resStatus.status === 'fail'){
                setRegisterForm(!loginRegisterForm)
                setRegister(!register)
            } else {
                setRegisterForm(!loginRegisterForm)
                setLogin(!login)
            }
            console.log(resStatus.status)
        })
    }
    
    const Open = (event) => {
        event.preventDefault()
        console.log('click fired')
        setIsOpen(true)
        
    }
    
    const close = (event) => {
        event.preventDefault()
        console.log('login button clicked')
        setIsOpen(false)
        
    }
    
    
    
    const handleChange = (event) => {
        const {value, name, type, checked} = event.target
        
        if(type === 'checkbox') {
            setForm({
                ...form, [name]: checked
            })
        } else {
            
            setForm({
                ...form,
                [name]: value
            })
        }
        
        setUser({
            ...user,
            [name]: value
        })
        
        
        
    }

    
    return (
        
        
        
        <li>
            {!icon ? children : text === 'Accedi / Registrati' ?
                
                <button onClick={Open}> 
                <p>
                {icon}
                </p>
                <p>
                {text}
                </p>
            </button>
            : 
            text !== 'Accedi / Registrati' ? 
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

                {
                loginRegisterForm && 

                <>
                <form  className="loginRegister" onSubmit = {handleRegister}>



                    <div>
                        <p>Accedi o registrati</p>
                        <button onClick={close}>
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

                    <input type="email" name="email" placeholder="EMAIL" onChange={handleChange} value={user.email} required
                    />

                    <button type="submit">
                        ACCEDI O REGISTRATI
                    </button>

                </form>
                </>
                
                }
                {
                    register && 
                    <form className="register">

                        <div>
                            <p>Accedi o registrati</p>
                            <button onClick={close}>
                                <Xbutton/>
                            </button>
                        </div>

                        <div>
                            <p>Finisci di creare il tuo account.</p>
                            <p>Ti stai registrando con 
                                <span> </span>
                                <em>
                                {user.email}
                                </em>
                            </p>
                            <button>
                                <strong>
                                    Modifica
                                </strong>
                            </button>
                        </div>

                        <div>
                            <input type="text" name="nome" placeholder="Nome" onChange={handleChange} value={form.nome} required/>
                            <input type="text" name="cognome" placeholder="Cognome" onChange={handleChange} value={form.cognome} required/>
                        </div>

                        <div>
                            <input type="tel" placeholder="Telefono" name="telefono" onChange={handleChange} value={form.telefono} required/>
                        </div>

                        <div>
                            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={user.password} required/>
                        </div>
                        
                        <div>
                            <label>
                                <input type="checkbox" name="consent" id="consent" onChange={handleChange} checked={form.consent} required/>
                                Sono maggiorenne, ho letto e accetto Condizioni e Informativa Privacy
                            </label>

                            <label>
                                <input type="checkbox" name="comunicazioni" id="comunicazioni" onChange={handleChange} checked = {form.communicazioni}/>
                                Voglio ricevere comunicazioni informative e promozionali
                            </label>

                            <label>
                                <input type="checkbox" name="news" id="news" onChange={handleChange} checked = {form.news}/>
                                Voglio tenermi aggiornato con le news immobiliari
                            </label>
                        </div>

                        <button>
                            REGISTRATI
                        </button>


                    </form>
                }
                {
                    login && 
                    <form className="login">
                        <div>
                            <p>Accedi o registrati</p>
                            <button onClick={close}>
                                <Xbutton/>
                            </button>
                        </div>

                        <div>
                            <p>Bentornato!</p>
                            <p>Stai accedendo come</p>
                            <p>{user.email}</p>
                            <button><strong>Modifica</strong></button>
                        </div>

                        <div>
                            <input type="password" name="passwordLogin" placeholder="Password" onChange={handleChange} value={user.passwordLogin} required/>
                        </div>

                        <button>
                            Password dimenticata?
                        </button>

                        <button>
                            ACCEDI
                        </button>

                    </form>
                }


            </div>
        }
            
                
        </li>


    )
}

export default MenuItem