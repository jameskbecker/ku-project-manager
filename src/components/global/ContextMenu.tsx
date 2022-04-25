import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from './Flex';

const StyledContextMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 0rem;
  height: auto
  width: auto;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.disabled};
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
  flex: 1 1;
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
  color: ${({ color, theme }) => (color ? color : theme.textBody)};
  background: transparent;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;

  cursor: pointer;
  white-space: nowrap;

  :hover {
    color: ${({ theme }) => theme.textBrand};
    background: ${({ color, theme }) => (color ? color : theme.brand)};
    transition: 0.5s ease-in-out;
  }
`;

const ContextMenu = (props: any) => {
  const [visible, setVisible] = useState(false);
  const toggle = (e: any) => {
    e.stopPropagation && e.stopPropagation();
    setVisible(!visible);
  };

  return (
    <Wrapper {...props} onClick={toggle}>
      <ToggleWrapper>{props.children}</ToggleWrapper>
      {visible && (
        <StyledContextMenu>
          {props.items.map((item: any, i: number) => (
            <ContextItem key={i} onClick={item.onClick} color={item.color}>
              {item.label}
            </ContextItem>
          ))}
        </StyledContextMenu>
      )}
    </Wrapper>
  );
};

export default ContextMenu;
