import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  height: 100%;

  background: #000000c5;
  z-index: 100;
  cursor: pointer;

  & > * {
    flex: 0 1 auto;
  }
`;

export default ModalBackdrop;
