import { FlexColumn } from '@/components/global/Flex';
import styled from 'styled-components';

/** @todo optimise large scale displays */
const Content = styled(FlexColumn)`
  grid-area: content;
  grid-row: 2 / span 3;

  padding: 1rem;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  /** Desktop  */
`;

export default Content;
