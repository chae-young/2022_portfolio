import React, { forwardRef } from 'react';

import styled from 'styled-components';
import Nav from './Nav';

interface HeaderProps{

}

const Header = () => {
    return (
        <HeaderWrap>
            <Nav/>
        </HeaderWrap>
    );
};

const HeaderWrap = styled.header`

`

export default forwardRef(Header);