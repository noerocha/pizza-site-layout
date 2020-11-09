import React from "react";
import Feature from "../components/features";

const FeatureContainer = () => {
  return (
    <Feature>
      <h1>Pizza of the Day</h1>
      <p>Trufle alfredo sauce topped with 24 karat gold dust.</p>
      <Feature.Button>Order Now</Feature.Button>
    </Feature>
  );
};

export default FeatureContainer;
