import './style.css'
import ProfileIcon from '../../Icons/ProfileIcon'
import Container from '../../components/container'
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
import { Link, useNavigate } from 'react-router-dom'




const Main = () => {
    const navigate = useNavigate()

    const [loginMenu, setLoginMenu] = useState(false)
    const [rotateLoginArrow, setLoginArrow] = useState(false)
    const [rotateSearchArrow, setSearchArrow] = useState (false)
    const [dropdownMenu, setDropDown] = useState(false)
    const [buttonStyle, setButtonStyle] = useState({
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    })


    const [dropdownData, setData] = useState(
        {searchbar: 'Case - Appartamenti'}
    )


    const between = (x, min, max) => {
        return x >= min && x <= max
    }

    const handleDropdown = (event) => {


        console.log(event.target.className, event.target)
        console.log(event.clientX, event.clientY)

        
        if (between(event.clientY, 1, 60)){
            setLoginArrow(!rotateLoginArrow)
            setLoginMenu(!loginMenu)
            
        }
        
        if ((event.target.className === 'active' || event.target.className === 'arrow down' || event.target.className === 'arrow up down') && event.clientY !== 0){
            setSearchArrow(!rotateSearchArrow)
            setDropDown(!dropdownMenu)
            
        }
        
    }
    
    const handleChange = (event) => {


        const {name, value, checked} = event.target
        // console.log(name, value, checked, dropdownData)
        
        
        setData({...dropdownData, [name]: value})
        
        if (checked){
            
            setDropDown(!dropdownMenu)
            setSearchArrow(!rotateSearchArrow)
        }
        
    }

    const handleClick = (event) => {
        
        const {target} = event
        // console.log(target.className, dropdownData.searchbar)


        Object.keys(buttonStyle).map(key => {
            return buttonStyle[key] = false
        })

        setButtonStyle({...buttonStyle, [Object.entries({...target})[0][1].index]: !Object.values(buttonStyle)[Object.entries({...target})[0][1].index]})
        
    
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        
        if (event.target[2].className === 'compra'){
            navigate(`/compra/${dropdownData.searchbar}/${event.target[1].value}`)

            
        }

        if (event.target[2].className === 'affitta'){
            navigate(`/affitta/${dropdownData.searchbar}/${event.target[1].value}`)

        }

        if (event.target[2].className === 'aste'){
            navigate(`/aste/${dropdownData.searchbar}/${event.target[1].value}`)
        }

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

                                <ArrowDown rotateArrow = {rotateLoginArrow} condition_1 = {'arrow down up login'} condition_2 = {'arrow down login'}/>
                              
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
                            <button onClick={handleClick} className = {buttonStyle[0] && 'active'}>Compra</button>
                            <button onClick={handleClick} className={buttonStyle[1] && 'active'}>Affitta</button>
                            <button onClick={handleClick} className={buttonStyle[2] && 'active'}>Vendi</button>
                            <button onClick={handleClick} className={buttonStyle[3] && 'active'}>Valuta</button>
                            <button onClick={handleClick} className={buttonStyle[4] && 'active'}>Aste</button>
                            <button onClick={handleClick} className={buttonStyle[5] && 'active'}>Agenzie</button>
                        </div>


                        <form className='searchBar' onSubmit={handleSubmit}>

                            {(buttonStyle[1] || buttonStyle[0] || buttonStyle[4]) &&
                            <>
                                <Search  className={"compra affitta aste"}/>
                                <button onClick={handleDropdown} className={(buttonStyle[0] || buttonStyle[1] || buttonStyle[4]) ? 'active' : 'unactive'}>
                                    {dropdownData.searchbar}
                                    <ArrowDown rotateArrow = {rotateSearchArrow} condition_1 = {'arrow up down'} condition_2 = {'arrow down'}/>
                                </button>
                                <input type='text' placeholder='Inserisci comune, zona o metro' className={"compra affitta aste"} required/>

                                <button className={buttonStyle[0] ? 'compra' : buttonStyle[1] ? 'affitta' : 'aste'}>
                                    Cerca
                                </button>
                            </>}

                            {(buttonStyle[2] || buttonStyle[3]) && 
                            <>
                                <Search  className = 'vendi valuta'/>
                                <input type='text' placeholder="Inserisci l'indirizzo dell'immobile" className = 'vendi valuta'/>
                                <button className = 'vendi valuta' >
                                    {buttonStyle[2] ? 'Vendi' : 'Valuta'}
                                </button>
                            </>
                            }

                            {
                                buttonStyle[5] && 
                                <>
                                <Search  className={'agenzie'}/>
                                <input type='text' placeholder="Inserisci il nome dell'agenzia" className={'agenzie'}/>
                                <input type='text' placeholder='Inserisci comune, zona o metro' className={'agenzie'}/>
                                <button className={'agenzie'}>
                                    Cerca
                                </button>

                                </>
                            }

                            



                                

                        </form>

                        <div className='Label'>


                            {dropdownMenu ? <Menu className={'searchDropdown'}>
                                <MenuItem children={
                                    <label>
                                        <input type='radio' name='searchbar' value={'Case - Appartamenti'} onChange={handleChange} checked={dropdownData.searchbar === 'Case - Appartamenti'}/>
                                        Case - Appartamenti
                                    </label>
                                }/>
                                <MenuItem children={
                                    <label>
                                        <input type='radio' name='searchbar' value={'Nuove costruzioni'} onChange={handleChange} checked = {dropdownData.searchbar === 'Nuove costruzioni'}/>
                                        Nuove costruzioni
                                    </label>
                                } />
                                <MenuItem children={
                                    <label>
                                        <input type='radio' name='searchbar' value={'Garage - Posti auto'} onChange={handleChange} checked = {dropdownData.searchbar === 'Garage - Posti auto'}/>
                                        Garage - Posti auto
                                    </label>
                                }/>


                                <MenuItem children={
                                    <label>
                                        <input type='radio' name='searchbar' value={'Palazzi - Edifici'} onChange={handleChange} checked = {dropdownData.searchbar === 'Palazzi - Edifici'}/>
                                        Palazzi - Edifici
                                    </label>
                                }/>

                                <MenuItem children={
                                    <label>
                                        <input type='radio' name='searchbar' value={'Uffici - Coworking'} onChange={handleChange} checked = {dropdownData.searchbar === 'Uffici - Coworking'}/>
                                        Uffici - Coworking
                                    </label>
                                }/>

                                <MenuItem children={
                                    <label>
                                        <input type='radio' name='searchbar' value={'Negozi - Locali commerciali'} onChange={handleChange} checked = {dropdownData.searchbar === 'Negozi - Locali commerciali'}/>
                                        Negozi - Locali commerciali
                                    </label>
                                }/>

                                <MenuItem children={
                                    <label>
                                        <input type='radio' name='searchbar' value={'Magazzini - Depositi'} onChange={handleChange} checked = {dropdownData.searchbar === 'Magazzini - Depositi'}/>
                                        Magazzini - Depositi
                                    </label>
                                }/>
                                
                                <MenuItem children={
                                    <label>
                                        <input type='radio' name='searchbar' value={'Capannoni'} onChange={handleChange} checked = {dropdownData.searchbar === 'Capannoni'}/>
                                        Capannoni
                                    </label>
                                }/>

                                <MenuItem children={
                                    <label>
                                        <input type='radio' name='searchbar' value={'Terreni'} onChange={handleChange} checked = {dropdownData.searchbar === 'Terreni'}/>
                                        Terreni
                                    </label>
                                }/>
                            </Menu> : <GridSpacer />}

                                

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
                            

                        </div>

                        
                        
                    </nav>




                </section>

               

            </Container>
        </>
    )
}

export default Main