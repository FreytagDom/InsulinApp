import styled from 'styled-components';
import SavedDataInjected from '../components/SavedData/SavedData';

export default function DataInjected() {
  
  return (
    <WrapperSaved>
      <SavedDataInjected  />
    </WrapperSaved>
  );
}

const WrapperSaved = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;
