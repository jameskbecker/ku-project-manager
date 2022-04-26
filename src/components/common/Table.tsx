import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '@kupm/components/common/Flex';

export const StyledTableHeader = styled(FlexRow)`
  display: none;
  justify-content: flex-start;
  flex: 0 1 auto;
  gap: 1rem;

  font-weight: 600;
  padding: 0.5rem 1rem;

  user-select: none;

  & > * {
    flex: 1 1;
  }

  @media screen and (min-width: 600px) {
    display: flex;
  }
`;

export const TableCell = styled(FlexRow)<any>`
  flex: ${({ size }) => (size ? size : 'auto')} 1;
`;

export const TableHeader = ({ columns }: any) => {
  const getColumns = columns.map((c: any, i: number) => (
    <TableCell key={i} size={c.size}>
      {c.name}
    </TableCell>
  ));
  return <StyledTableHeader>{getColumns}</StyledTableHeader>;
};
