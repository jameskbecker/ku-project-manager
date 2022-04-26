import styled from 'styled-components';
import { FlexColumn } from '@kupm/components/global/Flex';

/** @todo optimise large scale displays */
const Content = styled(FlexColumn)`
  grid-area: content;
  justify-content: flex-start;
  align-items: stretch;

  padding: 1rem;
  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: auto;
  }

  /** Desktop  */
`;

export default Content;
