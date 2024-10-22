import styled from 'styled-components';
import CorrectionFactor from '../components/SetCorrectionFactor/SetCorrectionFactor';

export default function CreateCorretionfactor() {

  return (
    <Wrapper>
        <CorrectionFactor />
   </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;
