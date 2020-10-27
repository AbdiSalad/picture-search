import styled from "@emotion/styled";
import Box from "./components/box";

function App() {
  const Container = styled.div`
    margin: 3em auto;
    text-align: center;
  `;

  const pictures = async (q) => {
    const apiRes = await fetch(``);
  };
  return (
    <Container className="App container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for pictures"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        ></input>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>

      <Box />
    </Container>
  );
}

export default App;
