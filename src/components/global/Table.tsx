import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

export const Table = styled.table`
  //border-collapse: collapse;
  border-spacing: 1em;
  table-layout: fixed;
  border: 2px solid red;
  height: 100%;
`;

export const TableHeader = styled.thead`
  border: 2px solid green;
`;

export const TableBody = styled.tbody`
  border: 2px solid orange;

  td,
  td * {
    max-height: inherit !important;
    border: 2px solid black;
  }
`;

export const TableRow = styled.tr`
  border-radius: 0.5em;
  overflow: hidden;
  white-space: nowrap;
  height: 2em !important;

  border: 2px solid turquoise;
  background: linear-gradient(
    45deg,
    ${theme.primaryA} 0%,
    ${theme.primaryB} 100%
  );

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  ${({ onClick }) =>
    onClick &&
    `
  :hover {
    transform: scale(1.01);
    transition: 0.25s ease-in-out;
  }
`}
`;

export const TableHeaderCell = styled.th`
  text-align: left;

  border: 2px solid yellow;
`;

export const TableCell = styled.td`
  border: 2px solid magenta;
`;
