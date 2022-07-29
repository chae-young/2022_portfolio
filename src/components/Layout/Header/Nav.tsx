import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Nav = () => {
    return (
        <NavWrap>
            <li><Link to="/">home</Link></li>            
            <li><Link to="/">project</Link></li>
            <li><Link to="/">about</Link></li>
            <li><Link to="/">contact</Link></li>
        </NavWrap>
    );
};

const NavWrap = styled.nav`
    display: flex;
    justify-content: space-between;

    & li + li{
        margin-left: 40px;
    }

    & a {
        font-size:${({theme}) => theme.font.font24};


        &:hover{
            color:rgb(0,0,0)
        }
    }
`

export default Nav;