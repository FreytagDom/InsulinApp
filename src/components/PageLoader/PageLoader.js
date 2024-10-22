import { Page, Container, Ring, H3 } from './PageLoaderStyles';

export default function Loading() {
  return (
    <Page>
      <Container>
        <Ring></Ring>
        <Ring></Ring>
        <Ring></Ring>
        <Ring></Ring>
        <H3>loading</H3>
      </Container>
    </Page>
  );
}
