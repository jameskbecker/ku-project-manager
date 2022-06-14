import { FlexColumn, FlexRow } from '@kupm/common/Flex';
import React, { useState } from 'react';
import styled from 'styled-components';
import ContextMenuItem from './ContextMenuItem';

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

const Container = styled(FlexColumn)`
  flex: 1 1;
  position: relative;
  justify-content: center;
  align-items: center;

  overflow: visible;
`;

const ContextMenu = (props: any) => {
  const [visible, setVisible] = useState(false);
  const toggle = (e: any) => {
    e.stopPropagation && e.stopPropagation();
    setVisible(!visible);
  };

  return (
    <Container {...props} onClick={toggle}>
      <ToggleWrapper>{props.children}</ToggleWrapper>
      {visible && (
        <StyledContextMenu>
          {props.items.map(({ label, ...itemProps }: any, i: number) => (
            <ContextMenuItem key={i} {...itemProps}>
              {label}
            </ContextMenuItem>
          ))}
        </StyledContextMenu>
      )}
    </Container>
  );
};

export default ContextMenu;
