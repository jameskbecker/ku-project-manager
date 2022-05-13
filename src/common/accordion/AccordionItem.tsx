import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexRow } from '../Flex';
import Separator from '../Separator';

const StyledAccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem 0;

  h3 {
    flex: 1 1;
    user-select: none;
    cursor: pointer;
  }
`;

const AccordionItem = ({ name, open, children }: any) => {
  const [isOpen, setIsOpen] = useState(open || false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledAccordionItem>
      <FlexRow>
        <h3 onClick={toggleOpen}>{name}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </FlexRow>
      <Separator />

      {isOpen && children}
    </StyledAccordionItem>
  );
};

export default AccordionItem;
