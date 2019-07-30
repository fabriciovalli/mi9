import React from 'react';
import styled from "styled-components";
import LogoImage from '../assets/mwgLogoWhite.png';

const Nav = styled.div`
    height: 12vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #40de5d;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    -webkit-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);
    z-index: 99;
`;

const NavHeader = styled.div`
    padding: 20px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    box-sizing: border-box;
`;

const Logo = styled.img`
    height: 100%;
`;


const Header = props => {
    return (
        <Nav>
            <NavHeader>
                <Logo src={LogoImage} />
            </NavHeader>
        </Nav>
    );
};

export default Header;