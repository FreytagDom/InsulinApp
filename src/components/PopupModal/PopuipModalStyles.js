import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
export const ModalContent = styled.div`
  background-color: burlywood;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.9);
`;
export const Text = styled.p`
  color: blueviolet;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1rem;
  max-width: 13rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;
export const StyledButton = styled.button`
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  height: 2rem;
  width: 6rem;
  ${(props) =>
    props.primary
      ? `
    background-color: #007bff;
    color: white;
  `
      : `
    background-color: #f0f0f0;
    color: black;
  `}
`;
