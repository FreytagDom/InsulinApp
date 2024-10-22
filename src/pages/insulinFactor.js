import styled from 'styled-components';
import InsulinFactor from '../components/InsulinFactor/InsulinFactor';

export default function InsulinFactorPage() {

  return (
    <Wrapper>
        <InsulinFactor />
   </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;