import React from 'react';
import styled from 'styled-components';

const StyledContextMenu = styled.div`
  position: absolute;
  top: 2rem;
  min-height: 100px;
  min-width: 100px;

  border: 1px solid red;

  z-index: 40;
`;

const Wrapper = styled.div`
  position: relative;

  overflow: visible;
`;

const ContextMenu = ({ children, isOpen }: any) => (
  <Wrapper>
    {children[0]}
    <StyledContextMenu>{children[1]}</StyledContextMenu>
  </Wrapper>
);

export default ContextMenu;
