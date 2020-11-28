import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import "./styles.scss";
import { ReactComponent as Logo } from '../../assets/Icons/logo.svg';
import { ReactComponent as BellIcon } from '../../assets/Icons/bell.svg';
import { ReactComponent as ArrowIcon } from '../../assets/Icons/left.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(prevState => !prevState);

    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">
                <Logo className="mr-2" />
                TravelWiser
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink>Search</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Find Destination</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Community <ArrowIcon /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><BellIcon width='20' height='18' /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>John Smith <ArrowIcon /> </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;
