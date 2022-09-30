import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Stats_Modal = (props) => {
  //   console.log(props.url_info);

  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function getStats() {
      let resp = await fetch(props.url_info);
      let data = await resp.json();
      console.log(data);
      setStats(data);
    }
    getStats();
  }, []);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Pokemon Stats</h4>
          <p>Name : {stats.name}</p>
          <p>Height :{stats.height}</p>
          <p> Weight :{stats.weight}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Stats_Modal;
