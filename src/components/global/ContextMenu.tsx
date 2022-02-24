import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { FlexColumn, FlexRow } from './Flex';
import Separator from './Separator';

const StyledContextMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 0rem;
  height: auto
  width: auto;
  display: flex;
  flex-direction: column;

  background: ${theme.disabled};
  border-radius: 0.5rem;
  padding: 0.5rem;

  box-shadow: 0 0 0 1px #00000040;
  z-index: 400;

  & > :last-child {
    border-bottom: none;
  }
`;

const ToggleWrapper = styled(FlexRow)`
  span {
    user-select: none;
    cursor: pointer;
  }
`;

const Wrapper = styled(FlexColumn)`
  position: relative;
  justify-content: center;
  align-items: center;

  overflow: visible;
`;

const ContextItem = styled(FlexRow)`
  justify-content: center;

  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  background: transparent;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;

  cursor: pointer;

  :hover {
    color: ${theme.textBrand};
    background: ${theme.brand};
    transition: 0.5s ease-in-out;
  }
`;

const ContextMenu = ({ children, items }: any) => {
  const [visible, setVisible] = useState(false);
  const toggle = (e: any) => {
    e.stopPropagation && e.stopPropagation();
    setVisible(!visible);
  };
  console.log('visible', visible);
  return (
    <Wrapper onClick={toggle}>
      <ToggleWrapper>{children}</ToggleWrapper>
      {visible && (
        <StyledContextMenu>
          {items.map((item: any, i: number) => (
            <ContextItem key={i} onClick={item.onClick}>
              {item.label}
            </ContextItem>
          ))}
        </StyledContextMenu>
      )}
    </Wrapper>
  );
};

export default ContextMenu;
