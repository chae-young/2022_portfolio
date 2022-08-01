import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SubSection from '../components/Layout/SubSection';
import { TransVw } from '../styles/size';

const App = () => {
  const [headerH, setHeaderH] = useState<number>(0);

  useEffect(() => {
    const header = document.querySelector('header');
    setHeaderH(header!.offsetHeight);
  }, []);

  return (
    <Layout>
      <main>
        <TopSection headerHeight={20}>
          <h2>
            FRONT-END
            <br />
            DEVELOPER<i>💗</i>
          </h2>
          <p></p>
        </TopSection>
        <article>
          안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.
        </article>
        <SubSection title="Work">
          <ProjectList>
            <li>
              <img src="https://www.ben-hamilton.co.uk/images/spike_mobiles1.webp"></img>
            </li>
            <li>
              <img src="https://www.ben-hamilton.co.uk/images/spike_mobiles1.webp"></img>
            </li>
            <li>
              <img src="https://www.ben-hamilton.co.uk/images/spike_mobiles1.webp"></img>
            </li>
          </ProjectList>
        </SubSection>
      </main>
    </Layout>
  );
};
const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > li {
    width: calc(50% - 2rem);
    background: red;
    &:nth-child(n + 3) {
      margin-top: 4rem;
    }
  }
  & img {
    width: 100%;
  }
`;
const TopSection = styled.section<{ headerHeight: number }>`
  display: flex;
  align-items: center;
  height: ${(props) => `calc(100vh - ${props.headerHeight}px)`};
  > h2 {
    font-size: ${TransVw(300)};
    & i {
      font-size: 6rem;
    }
  }
`;

export default App;
