import "./App.css";
import styled from "styled-components";
import RoutesComponent from "./components/RoutesComponent";
const Container = styled.div`
  background-color: aquamarine;
  @media (max-width: 700px) {
    font-size: medium;
  }
`;

const App = () => {
  return (
    <Container>
      <RoutesComponent />
    </Container>
  );
};

export default App;
