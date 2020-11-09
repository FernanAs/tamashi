import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.element';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

useEffect(() => {
    showButton()
}, [])

window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>  
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        <img src="https://d6ozfheqtj1tz.cloudfront.net/ChIJNVtl48l1IocRZFjnQKHocts/lOJCQwFDpq.png" alt=""/>
                    </NavLogo>
                <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/food">Food</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/our-policy">Our Policy</NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/sign-up">
                                <Button primary>LEAVE A MESSAGE</Button>
                            </NavBtnLink>
                        ): (
                            <NavBtnLink to="/sign-up">
                                <Button fontBig primary>
                                    LEAVE A MESSAGE
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
