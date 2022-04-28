import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

const StyledSidebarButton = styled(Link)<any>`
  padding: 0.5rem 0.75rem;
  margin: 0 1rem;

  font-size: 0.75rem;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $active, theme }) =>
    $active ? theme.text : theme.text} !important;
  background: ${({ $active, theme }) =>
    $active ? theme.highlight : 'transparent'};
  border-radius: 0.25rem;
  box-sizing: border-box;

  opacity: ${({ $active }) => ($active ? 1 : 0.8)};
  cursor: pointer;

  :hover {
    transition: 0.5s ease-in-out;
    background: ${({ theme }) => theme.highlight};
    opacity: 1;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.brandAlt};
    outline-offset: 0;
  }

  & > :first-child {
    padding: 0 0.5em 0 0;
  }

  ${({ theme, color }) =>
    color &&
    css`
      & > * {
        color: ${color} !important;
      }
      :hover {
        background: ${color};

        & > * {
          color: ${theme.textButton} !important;
        }
      }
    `}
`;

const SidebarButton = ({ to, $active, color, icon, style, text }: any) => {
  const { isCollapsed } = useSelector((state: any) => state.sidebar);
  return (
    <StyledSidebarButton {...{ to, $active, color, style }}>
      <FontAwesomeIcon icon={icon} />
      {!isCollapsed && <span>{text}</span>}
    </StyledSidebarButton>
  );
};

export default SidebarButton;
