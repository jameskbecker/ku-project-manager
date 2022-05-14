import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexRow } from '../Flex';
import Separator from '../Separator';

const StyledAccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  padding: 0.5rem 0;

  h3 {
    flex: 1 1;
    user-select: none;
    cursor: pointer;
  }
`;

const StyledAccordionContainer = styled(FlexRow)`
  padding: 0.5rem 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.highlight};
`;

const AccordionItem = ({ name, open, children }: any) => {
  const [isOpen, setIsOpen] = useState(open || false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const AccordionContainer = () => (
    <StyledAccordionContainer>
      <h3 onClick={toggleOpen}>{name}</h3>
      <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
    </StyledAccordionContainer>
  );

  return (
    <StyledAccordionItem>
      <AccordionContainer />
      {isOpen && children}
    </StyledAccordionItem>
  );
};

export default AccordionItem;
