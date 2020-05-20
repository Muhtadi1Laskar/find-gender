import React, { useState } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [showData, setShowData] = useState(false);

  const apiCall = async () => {
    const name = document.getElementById("gender-input").value;
    if(name) {
      const res = await fetch(
        `https://gender-api.com/get?name=${name}&key=whUrNZLgHuKVWlWtZw`
      );
      res
        .json()
        .then((res) => {
          console.log(res);
          setData(res);
          setShowData(true);
        })
        .then((err) => {
          return err;
        } );
    }
    else {
      alert("Enter a valid name");
    }
    
  };

  const renderTags = () => {
    if (data.gender === "male") {
      return (
        <div className="card">
          <Image
            src={"https://image.flaticon.com/icons/png/512/123/123172.png"}
          />
          <div className="text">
            <p>Gender : {data.gender} </p>
            <p>Name : {data.name_sanitized}</p>
            <p>Accuracy : {data.accuracy}</p>
          </div>
        </div>
      );
    } else if (data.gender === "female") {
      return (
        <div className="card">
          <Image
            src={"https://image.flaticon.com/icons/png/512/123/123164.png"}
          />
          <div className="text">
            <p>Gender : {data.gender} </p>
            <p>Name : {data.name_sanitized}</p>
            <p>Accuracy : {data.accuracy}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <Container className="container-body">
      <Row>
        <h1>Check Gender</h1>
      </Row>
      <Row>
        <input
          name="input"
          id="gender-input"
          className="input"
          placeholder="Enter your name"
        />
      </Row>
      <Row>
        <button className="btn" onClick={apiCall}>
          Submit
        </button>
      </Row>
      <Row>{showData === true && renderTags()}</Row>
    </Container>
  );
}

export default App;
