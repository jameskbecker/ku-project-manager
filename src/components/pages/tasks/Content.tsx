import styled from 'styled-components';
import { FlexColumn } from '../../global/Flex';

/** @todo optimise large scale displays */
const Content = styled(FlexColumn)`
  grid-area: content;
  justify-content: flex-start;

  /* align-items: stretch; */

  /** Tablet  */
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    height: auto;
    overflow: auto;
  }

  /** Desktop  */
`;

export default Content;
