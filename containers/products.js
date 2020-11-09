import React from "react";
import Products from "../components/products";

const ProductsContainer = ({ heading, data }) => {
  return (
    <Products>
      <Products.Heading>{heading}</Products.Heading>
      <Products.Wrapper>
        {data.map((product, index) => (
          <Products.Card key={index}>
            <Products.Img src={product.img} alt={product.alt} />
            <Products.Info>
              <Products.Title>{product.name}</Products.Title>
              <Products.Desc>{product.desc}</Products.Desc>
              <Products.Price>{product.price}</Products.Price>
              <Products.Button>{product.button}</Products.Button>
            </Products.Info>
          </Products.Card>
        ))}
      </Products.Wrapper>
    </Products>
  );
};

export default ProductsContainer;
