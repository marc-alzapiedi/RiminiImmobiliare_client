import './style.css'
import ProfileIcon from '../../Icons/ProfileIcon'
import Logo from '../../Icons/Logo'
import Container from '../../components/container'
import Messagge from '../../Icons/Message'
import Heart from '../../Icons/Heart'
import Bell from '../../Icons/Bell'
import Garbage from '../../Icons/Garbage'
import Clock from '../../Icons/Clock'
import SellHouse from '../../Icons/SellHouse'
import Scale from '../../Icons/Scale'
import Plus from '../../Icons/Plus'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import ArrowRight from '../../Icons/ArrowRight'

const Main = () => {

    // const [loginMenu, setLoginMenu] = useState(false)

    const handleDropdown = (event) => {

    }

    return (
        <>
            <Container>
                <section className="top-header">
                    <header>
                        <nav className='headerLinks'>
                            <a href='https://www.w3schools.com/css/css_pseudo_classes.asp' className='nav'>Agenzie</a>
                            <a href='https://www.w3schools.com/css/css_pseudo_classes.asp' className='nav'>Prezzi immobili</a>
                            <a href='https://www.w3schools.com/css/css_pseudo_classes.asp' className='nav'>Vendi casa</a>
                            <a href='https://www.w3schools.com/css/css_pseudo_classes.asp' className='nav'>Valuta casa</a>
                            <a href='https://www.w3schools.com/css/css_pseudo_classes.asp' className='nav'>Mutui</a>
                        </nav>

                        <nav className='loginLinks'>
                            <a href='https://www.w3schools.com/css/css_pseudo_classes.asp' className='logIns'>
                                PUBBLICA ANNUNCI 
                            </a>
                            <a href='https://www.w3schools.com/css/css_pseudo_classes.asp' className='logIns'> Accedi</a>
                            <button className='logIns' onClick={handleDropdown}>
                                <ProfileIcon />
                                <i className='arrow down'></i>
                            </button>
                        </nav>

                        <div className='loginMenu'>
                            <ul>
                                <li>
                                    <ProfileIcon />
                                    <Link >
                                        Accedi / Registrati
                                    </Link>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <Messagge />
                                    <Link>
                                        Messaggi
                                        <ArrowRight />
                                    </Link>
                                </li>

                                <li>
                                    <Heart />
                                    <Link>
                                        Annunci salvati
                                        <ArrowRight />
                                    </Link>
                                </li>

                                <li>
                                    <Bell />
                                    <Link>
                                        Ricerche salvate
                                        <ArrowRight />
                                    </Link>
                                    
                                </li>

                                <li>
                                    <Garbage />
                                    <Link>
                                        Annunci nascosti
                                        <ArrowRight />
                                    </Link>
                                </li>

                                <li>
                                    <Clock />
                                    <Link>
                                        Recenti
                                        <ArrowRight />
                                    </Link>
                                </li>

                                <li>
                                    <hr/>
                                </li>

                                <li>
                                    <SellHouse />
                                    <Link>
                                        Vendi casa
                                        <ArrowRight />
                                    </Link>
                                </li>

                                <li>
                                    <Scale />
                                    <Link>
                                        Valuta casa
                                        <p className='badgeAlert'>Novità</p>
                                        <ArrowRight />
                                    </Link>
                                </li>

                                <li>
                                    <Plus />
                                    <Link>
                                        Pubblica annuncio
                                        <ArrowRight />
                                    </Link>

                                </li>

                            </ul>
                        </div>


                    </header>

                    <main>
                        <h1>                            
                            <Logo />
                            Rimini Immobiliare
                        </h1>
                    </main>

                    {/* <form>
                        <button>Compra</button>
                        <button>Affitta</button>
                        <button>Vendi</button>
                        <button>Valuta</button>
                        <button>Aste</button>
                        <button>Agenzie</button>

                        <div className='searchBar'>
                            <div className='dropdown'>
                                <button onClick={handleDropdown()} className='dropbtn'>
                                    Text according to the buttons
                                    <i className='arrow down'></i>
                                </button>
                                <form id='myDropdown' className='dropdown-content'>
                                    <button>
                                        Case - Appartamenti
                                        <input type='radio' id='case' name='first_dropdwn' value={"Case - Appartamenti"}></input>
                                        <i className='arrow down'></i>
                                    </button>
                                    <br/>
                                    <button>
                                        Nuove costruzioni
                                        <input type='radio' id='costruzioni' name='second_dropdwn' value={"Nuove - costruzioni"}></input>
                                        <i className='arrow down'></i>
                                    </button>
                                    <br/>
                                    <label htmlFor='garage'>Garage - Posti auto</label>
                                    <input type='radio' id='garage' name='third-dropdwn' value={"Garage - Posti auto"}></input>
                                    <br/>
                                    <label htmlFor='palazzi'>Palazzi - Edifici</label>
                                    <input type='radio' id='palazzi' name='fourth-dropdwn' value={"Palazzi - Edifici"}></input>
                                    <br />
                                    <label htmlFor='uffici'>Uffici - Coworking</label>
                                    <input type='radio' id='uffici' name='fifth-dropdwn' value={"Uffici - Coworking"}></input>
                                    <br />
                                    <label htmlFor='negozi'>Negozi - Locali commerciali</label>
                                    <input type='radio' id='negozi' name='sixth-dropdwn' value={"Negozi - Locali commerciali"}></input>
                                    <br />
                                    <label htmlFor='magazzini'>Magazzini - Depositi</label>
                                    <input type='radio' id='magazzini' name='seventh-dropdwn' value={"Magazzini - Depositi"}></input>
                                    <br />
                                    <label htmlFor='Capannoni'>Capannoni</label>
                                    <input type='radio' id='capannoni' name='eigth-dropdwn' value={"Caponnoni"}></input>
                                    <br />
                                    <label htmlFor='terreni'>Terreni</label>
                                    <input type='radio' id='terreni' name='sixth-dropdwn' value={"Terreni"}></input>
                                </form>
                            </div>
                            <input type='text' name='search' placeholder='Inserisci comune, zona o metro' />
                            <button>CERCA</button>
                        </div>

                        
                        
                    </form> */}

                </section>

                <section className='body_1'>
                    Ex esse deserunt duis velit excepteur labore voluptate sit elit deserunt. Pariatur culpa qui aute commodo in in dolor do. Lorem non in id dolore enim duis eu ullamco. Duis officia sit qui dolor excepteur qui. Nostrud adipisicing sint eu magna laborum commodo culpa enim irure do sint elit voluptate. Incididunt commodo officia eiusmod ut proident labore in. Irure nostrud anim do aute laboris dolor laborum.
                </section>

                <section className='body_2'>
                    Non enim aliqua quis Lorem dolor adipisicing ea. Voluptate cillum ex culpa quis commodo aliqua elit consectetur dolore incididunt aliquip ullamco. Amet laborum veniam fugiat incididunt et sunt cillum ex duis ex. Laborum duis deserunt ullamco ullamco ad est aute magna laboris amet sunt esse.

                </section>

                <section className='bottom_footer'>
                    Dolore excepteur anim exercitation aliqua. Laboris esse et consequat laboris aliquip pariatur pariatur ad est deserunt duis sunt nisi. Qui qui pariatur sint cupidatat commodo sint velit do reprehenderit laboris ad est commodo quis. Amet sit duis enim est. Ullamco eu reprehenderit esse mollit velit ut nisi consequat sint mollit ad.

                </section>

                <footer>
                    Ea sit mollit exercitation id ut dolor occaecat commodo aute nulla. Ea aliqua adipisicing deserunt culpa esse commodo enim dolor excepteur ea. Aliquip aliquip do elit duis veniam sit cupidatat cupidatat. Tempor anim ea eu laboris enim minim veniam sunt occaecat ut et sunt aute. Veniam adipisicing non do nisi laborum. Ullamco labore tempor incididunt aliquip ad. Nulla voluptate consectetur consectetur laborum non non tempor.
                </footer>

            </Container>
        </>
    )
}

export default Main