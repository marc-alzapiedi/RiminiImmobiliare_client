import './style.css'
import Container from '../../components/Container'
import Logo from '../../components/Logo'
import ProfileIcon from '../../Icons/ProfileIcon'
import ArrowDown from '../../Icons/ArrowDown'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Messagge from '../../Icons/Message'
import Heart from '../../Icons/Heart'
import Bell from '../../Icons/Bell'
import Garbage from '../../Icons/Garbage'
import Clock from '../../Icons/Clock'
import SellHouse from '../../Icons/SellHouse'
import Scale from '../../Icons/Scale'
import Plus from '../../Icons/Plus'
import GridSpacer from '../../components/GridSpacer'
import Menu from '../../components/Menu'
import MenuItem from '../../components/Menu/MenuItem'
import Piani from '../../Icons/Piani'
import Bagni from '../../Icons/Bagni'
import Camere from '../../Icons/Camere'
import Superficie from '../../Icons/Superficie'

function insertAtIndex(str, substring, index) {
    if (index === 1){
        return str
    }
    return str.slice(0, index) + substring + str.slice(index);
}

const Aste = () => {

    const params = useParams()
    const navigate = useNavigate()
    console.log(params)

    const [rotateLoginArrow, setLoginArrow] = useState(false)
    const [loginMenu, setLoginMenu] = useState(false)
    const [rotateBuyArrow, setBuyArrow] = useState(false)
    const [buyMenu, setBuyMenu] = useState(false)
    const [rotateTypeArrow, setTypeArrow] = useState(false)
    const [typeMenu, setTypeMenu] = useState(false)
    const [dropdownData, setData] = useState(
        {searchbar: params.type}
    )
    const [dropdownType, setdropType] = useState(false)
    const [dropdownBuy, setdropBuy] = useState(false)
    const [dataToList, setListData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/affitta/${params.type}/${params.province}`)
        .then((response) => response.json())
        .then((data) => {
            const list = data
            setListData(list.data)
        })
    }, [params.type, params.province])


    const handleDropdown = (event) => {
        console.log(event.target.className)

        if (event.target.innerText === 'Aste' || event.target.className === 'arrow down buyArrow' ||  event.target.className === 'arrow up down buyArrow'){
            setBuyArrow(!rotateBuyArrow)
            setBuyMenu(!buyMenu)
            setdropBuy(!dropdownBuy)
        }

        if (event.target.className === 'type' || event.target.className === 'arrow down typeArrow' ||  event.target.className === 'arrow up down typeArrow'){
            setTypeArrow(!rotateTypeArrow)
            setTypeMenu(!typeMenu)
            setdropType(!dropdownType)

      
                
        }
            
            
        if (event.target.innerText !== 'Aste' && event.target.className !== 'type' && event.target.className !== 'arrow down buyArrow' && event.target.className !== 'arrow up down buyArrow' && event.target.className !== 'arrow down typeArrow' && event.target.className !== 'arrow up down typeArrow'){
                
            setLoginArrow(!rotateLoginArrow)
            setLoginMenu(!loginMenu)
        }
            
            
            
            
    }
        
    const handleChange = (event) => {
        const {name, value, checked} = event.target
        // console.log(name, value, checked, dropdownData)
            
            
        setData({...dropdownData, [name]: value})
            
        if (checked){
            console.log(dropdownData.searchbar)
            setdropType(!dropdownType)
            setTypeArrow(!rotateTypeArrow)
            navigate(`/aste/${value}/${params.province}`)
        }
            
    }

    // console.log(dropdownData.searchbar)
        
    const handleClick = (event) => {
        console.log(event.target.innerText, event)
        if (event.target.innerText === 'Vendite'){
            navigate(`/compra/${dropdownData.searchbar}/${params.province}`)

        }

        if (event.target.innerText === 'Affitte'){
            navigate(`/affitta/${dropdownData.searchbar}/${params.province}`)

        }

    }

    return (
        <Container className={'Aste'}>
            <header className='top-bar'>
                <Logo />

                <nav className='loginLinks'>
                            <a href='https://www.w3schools.com/css/css_pseudo_classes.asp' className='logIns'>
                                PUBBLICA ANNUNCI 
                            </a>
                            <a href='https://www.w3schools.com/css/css_pseudo_classes.asp' className='logIns'> Accedi</a>
                            <button className='logIns' onClick={handleDropdown}>
                                <ProfileIcon />
                               
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

            <header className='second-bar'>
                <button onClick={handleDropdown} className='buy'>
                    Aste
                    <ArrowDown rotateArrow = {rotateBuyArrow} condition_1 = {'arrow up down buyArrow'} condition_2 = {'arrow down buyArrow'}/>
                </button>
                    
                <button onClick={handleDropdown} className='type'>
                    {dropdownData.searchbar}
                    <ArrowDown rotateArrow = {rotateTypeArrow} condition_1 = {'arrow up down typeArrow'} condition_2 = {'arrow down typeArrow'}/>
                </button>

                <button className='saveSearch' onClick={handleClick}>
                    <Bell />
                    Salva Ricerca
                    
                </button>
            </header>

            <div className='dropDown'>
            {dropdownBuy ? <Menu className={'buyDropdown'}>
                        <MenuItem children={
                            <button onClick={handleClick}>Vendite</button>
                        }/>
                        <MenuItem children={
                            <button onClick={handleClick}>Affitte</button>
                        }/>
                        <MenuItem children={
                            <button onClick={handleClick}>Aste</button>
                        }/>
            </Menu> : <GridSpacer />}

            
            {dropdownType ? <Menu className={'searchDropdown'}>
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
            </div>

            <ul>
                {dataToList.map((object, index) => (
                    <li key={index}>
                        <img src={object.image} alt=''/>
                        <div className='listDetails'>
                            <div>
                               {insertAtIndex(object.price, '.', object.price.length - 3)}
                               <div className='navButtons'>
                                <button>

                                    <div>
                                        <Messagge />
                                    
                                        MESSAGGIO
                                    </div>

                                 
                                </button>

                                <button>
                                    <Garbage />
                                </button>

                                <button>
                                    <Heart />
                                </button>
                            </div> 
                            </div>

                            <p>
                                {object.address}
                            </p>

                            <div className='propertyDetails'>
                                <div className='propertySpecs'>
                                    <Piani />
                                    {object.floors}
                                    <p>

                                        Piani
                                    </p>
                                </div>
                                <div className='propertySpecs'>
                                    <Bagni />
                                    {object.bathrooms}
                                    <p>

                                        Bagni
                                    </p>
                                </div>

                                <div className='propertySpecs'>
                                    <Camere />
                                    {object.bedrooms}
                                    <p>

                                        Camere
                                    </p>
                                </div>

                                <div className='propertySpecs'>
                                    <Superficie />
                                    {`${object.sqFootage} m²`}
                                    <p>

                                        Superficie 
                                    </p>
                                </div>

                            </div>

                            <div className='description'>
                                <p>
                                    {object.descriptionTitle}
                                </p>

                                <p>
                                    {object.description}
                                </p>

                            </div>

                            






                        </div>
                    </li>
                ))}
                                
            </ul>

        </Container>
         
      
    )

}

export default Aste