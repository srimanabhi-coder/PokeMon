import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Card from "./components/card/Card";
function App() {
  // useEffect(() => {
  //   async function search() {
  //     let res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  //     // let res = await fetch("https://pokeapi.co/api/v2/type/2/")
  //     let data = await res.json();
  //     console.log(data);
  //   }
  //   search();
  // }, []);
  const [pageNumber, setPageNumber] = useState(0);
  let url = `https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}&limit=20`;
  const [pokemon_data, setPokemon_data] = useState([]);

  const apiCall = async () => {
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    setPokemon_data(data.results);
  };

  useEffect(() => {
    apiCall();
  }, [pageNumber]);
  return (
    <div className="App">
      <Container className="mt-5 container-fluid">
        <Row>
          <Col className="col-lg-6 text-center">
            <div className="search_bar">
              <input
                type="text"
                name=""
                id="search_text"
                className="form-control"
                placeholder="search by name or id"
              />
            </div>
          </Col>
          <Col></Col>
          <Col className="col-lg-4 text-end">
            <div className="type">
              <select name="" id="" className="form-control">
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
              </select>
            </div>
          </Col>
        </Row>

        <Container className="container-fluid">
          <Row className="card-row mt-5 pt-5">
            {pokemon_data.map((val, index) => {
              return (
                <Col className="col-lg-3 cards_in_app px-4">
                  <Card
                    name={val.name}
                    id={pageNumber + index + 1}
                    url_info={val.url}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>

        <Row className="mt-5">
          <Col className="col-lg-6 text-start">
            <button
              className="btn prev btn-primary"
              onClick={() => {
                if (pageNumber === 0) {
                  return;
                } else {
                  setPageNumber((prev) => prev - 20);
                }
              }}
            >
              Prev
            </button>
          </Col>

          <Col className="col-lg-6 text-end">
            <button
              className=" btn next btn-primary"
              onClick={() => {
                setPageNumber(pageNumber + 20);
              }}
            >
              Next
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
