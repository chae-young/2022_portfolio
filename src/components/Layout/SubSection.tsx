import React from 'react';

import { TransVw } from '../../styles/size';
import styled from 'styled-components';

interface subSectionProps {
  title: string;
  children: React.ReactNode;
}

const SubSection = ({ title, children }: subSectionProps) => {
  return (
    <SubArticle>
      <h3>{title}</h3>
      <div>{children}</div>
    </SubArticle>
  );
};

const SubArticle = styled.article`
  margin-top: 8rem;
  & h3 {
    font-size: ${TransVw(100)};
  }
  > div {
    padding-top: 4rem;
  }
`;
export default SubSection;
