import styled from 'styled-components';
import { FlexColumn } from '@kupm/common/Flex';

/** @todo optimise large scale displays */
const Content = styled(FlexColumn)`
  grid-area: content;
  grid-row: 2 / span 3;
  padding: 1rem;

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(0, min-content);
  }

  /** Desktop  */
`;

export default Content;
