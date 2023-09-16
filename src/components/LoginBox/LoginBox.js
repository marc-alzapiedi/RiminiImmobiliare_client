import { useState } from "react"
import './style.css'

const LoginBox = ({children, Wrapper = 'form'}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }


    return (
        <Wrapper onClick = {toggleIsOpen}>
            {children}

            {isOpen && 
            <div onClick={toggleIsOpen}>
            
            </div>
            }

        </Wrapper>
    )
}


export default LoginBox