import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import React from "react";
import Name from "./name.js";
import Price from "./price.js";
import Description from "./description.js";
import Image from "./image.js";
import product from "./product.js";

function App() {
  const firstName = "Prince"; 

  return (
    <Container>
      <h1>Bonjour, {firstName ? firstName : "là"} !</h1>
      <Card style={{ width: "18rem" }} className="mx-auto mt-4">
        {firstName && <Card.Img variant="top" src={product.image} />}
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;

