import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { TransVw } from '../styles/size';



const App = () => {
    const [headerH,setHeaderH] = useState<number>(0)

    useEffect(()=>{
        const header = document.querySelector('header')
        setHeaderH(header!.offsetHeight)
    },[])

    return (
        <Layout>
            <main>            
                <TopSection headerHeight={20}>
                    <h2>
                        FRONT-END<br/>DEVELOPER<i>💗</i>
                    </h2>
                    <p></p>
                </TopSection>

            </main>
        </Layout>
    );
};

const TopSection = styled.section<{headerHeight: number}>`
    display: flex;
    align-items: center;
    height: ${props => `calc(100vh - ${props.headerHeight}px)`};
    > h2{
        font-size: ${TransVw(300)};
        & i {
            font-size: 6rem;
        }
    }
`

export default App;