import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Stats_Modal from "../stats_modal/Stats_Modal";
import "./Card.css";
const Card = ({ name, id, url_info }) => {
  console.log(id);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
            className="img-fluid"
            alt="poki"
            width="80px"
            height="80px"
          />
        </div>
        <div className="col-lg-12">
          <ul>
            <li>Name :{name}</li>
            <li>Id : {id}</li>
            <li>type:</li>
            <li>Img</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* <button className="btn btn-success form-control">
            Click to open
          </button> */}
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Click to open
          </Button>

          <Stats_Modal
            show={modalShow}
            url_info={url_info}
            onHide={() => setModalShow(false)}
          />
          {/* <Stats_Modal /> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
