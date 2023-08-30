import './style.css'
import Container from "../../components/Container"
import Logo from '../../components/Logo'
import ProfileIcon from '../../Icons/ProfileIcon'
import ArrowDown from '../../Icons/ArrowDown'
import { useState } from 'react'
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

const Aste = () => {

    const [rotateLoginArrow, setLoginArrow] = useState(false)
    const [loginMenu, setLoginMenu] = useState(false)

    const handleDropdown = () => {

        setLoginArrow(!rotateLoginArrow)
        setLoginMenu(!loginMenu)



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

            <div>

            </div>

        </Container>
         
      
    )

}

export default Aste