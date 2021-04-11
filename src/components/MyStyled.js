import styled from "styled-components";

const MyCard = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  max-width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;
const MyCardBody = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const MyCardText = styled.p`
  color: var(--mainBlack);
  text-align: center;
  text-transform: capitalize;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
`;

const MyCardImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export { MyCard, MyCardBody, MyCardText, MyCardImg };
