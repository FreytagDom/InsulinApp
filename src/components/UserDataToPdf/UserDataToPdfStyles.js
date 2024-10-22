import styled from 'styled-components';
import { StyleSheet } from '@react-pdf/renderer';

export const ExportButton = styled.button`
  background-color: #fe4b13;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  height: 1.8rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  width: auto;
  cursor: pointer;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: #d63200;
  }
`;

export const Styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 40,
    columnGap: 5,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    color: 'rebeccapurple',
  },
  footer: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#c92a2a',
  },
  image: {
    bottom: 25,
    left: 200,
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: '50%',
  },
  title: {
    fontSize: 18,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 10,
    marginTop: 5,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 60,
  },
  card: {
    width: '40%',
    height: '100',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    fontSize: 10,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 30,
    left: 500,
    textAlign: 'center',
    color: 'grey',
  },
});
