import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContextMenu = styled.div`
  position: absolute;
  top: 0rem;
  min-height: 100px;
  min-width: 100px;

  border: 1px solid red;

  z-index: 40000;
`;

const Wrapper = styled.div`
  position: relative;
`;

const ContextMenu = ({ children, isOpen }: any) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(true);
  console.log('visible:', visible);
  return (
    <Wrapper onClick={toggle}>
      {children[0]}
      {visible && <StyledContextMenu>{children[1]}</StyledContextMenu>}
    </Wrapper>
  );
};

export default ContextMenu;
