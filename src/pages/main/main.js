import './style.css'
import ProfileIcon from '../../Icons/ProfileIcon'
import Container from '../../components/Container'
import Messagge from '../../Icons/Message'
import Heart from '../../Icons/Heart'
import Bell from '../../Icons/Bell'
import Garbage from '../../Icons/Garbage'
import Clock from '../../Icons/Clock'
import SellHouse from '../../Icons/SellHouse'
import Scale from '../../Icons/Scale'
import Plus from '../../Icons/Plus'
import GridSpacer from '../../components/GridSpacer'
import { useState } from 'react'
import Menu from '../../components/Menu'
import MenuItem from '../../components/Menu/MenuItem'
import Logo from '../../components/Logo'
import ArrowDown from '../../Icons/ArrowDown'
import Search from '../../Icons/Search'
import { Link } from 'react-router-dom'

const Main = () => {

    const [loginMenu, setLoginMenu] = useState(false)
    const [rotateLoginArrow, setLoginArrow] = useState(false)
    const [rotateSearchArrow, setSearchArrow] = useState (false)

    const between = (x, min, max) => {
        return x >= min && x <= max
    }

    const handleDropdown = (event) => {
        // console.log(event.clientX, event.clientY)

        if (event.clientX > 1100 && event.clientY < 60){
            setLoginArrow(!rotateLoginArrow)
            setLoginMenu(!loginMenu)

        }

        // if (event.clientX < 200 && between(event.clientY, 250, 350)){
        //     setSearchArrow(!rotateSearchArrow)

        // }

    }

    const handleSearchMenu = () => {

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
                                {/* <i className = {rotateLoginArrow ?`arrow down up` : `arrow down`}></i> */}

                                <ArrowDown rotateArrow = {rotateLoginArrow} condition_1 = {'arrow down up'} condition_2 = {'arrow down'}/>
                              
                            </button>
                        </nav>

                        <GridSpacer />

                        {loginMenu && 

                        <Menu className={'loginMenu'}>
                            <MenuItem icon={<ProfileIcon/>} text={'Accedi / Registrati'}/>
                            <MenuItem icon={<Messagge />} text={'Messaggi'}/>
                            <MenuItem icon={<Heart />} text={'Annunci salvati'}/>
                            <MenuItem icon={<Bell />} text={'Ricerche salvate'}/>
                            <MenuItem icon={<Garbage />} text={'Annunci Nascosti'}/>
                            <MenuItem icon={<Clock />} text={'Recenti'}/>
                            <MenuItem children={<hr/>} />
                            <MenuItem icon={<SellHouse />} text={'Vendi casa'}/>
                            <MenuItem icon={<Scale />} children={
                                <div className='badgeAlert'>
                                    Valuta casa
                                    <p>Novità</p>
                                </div>
                            }/>
                            <MenuItem icon={<Plus />} text={'Pubblica annuncio'}/>

                        </Menu>
                        
                        }

                        


                    </header>

                    <Logo />

                    <nav>
                        <div className='searchBar-Menu'>
                            <button>Compra</button>
                            <button>Affitta</button>
                            <button>Vendi</button>
                            <button>Valuta</button>
                            <button>Aste</button>
                            <button>Agenzie</button>
                        </div>


                        <div className='searchBar'>

                            <Search />
                            <button onClick={handleDropdown}>
                                Text dependent on selection
                                <ArrowDown rotateArrow = {rotateSearchArrow} condition_1 = {'arrow up down'} condition_2 = {'arrow down'}/>
                            </button>
                            <input type='text' placeholder='Text dependent on button selection'/>

                            <button>
                                Cerca
                            </button>


                            

                        </div>

                        <div className='searchBar-Label'>
                            
                            <p>
                                N.1
                            </p>

                            <p>

                                RiminiImmobiliare.it è il N.1 nella provincia di Rimini. 
                            </p>

                            <Link>
                                Scopri perché
                            </Link>

                        </div>

                        
                        
                    </nav>

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