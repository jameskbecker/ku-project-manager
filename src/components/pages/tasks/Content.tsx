import styled from 'styled-components';
import { FlexColumn } from '@kupm/components/global/Flex';

/** @todo optimise large scale displays */
const Content = styled(FlexColumn)`
  grid-area: content;
  justify-content: flex-start;

  /* align-items: stretch; */

  /** Tablet  */
  @media screen and (min-width: 600px) {
    flex-direction: row;
    gap: 0;
    height: auto;
    overflow: auto;
  }

  /** Desktop  */
`;

export default Content;
