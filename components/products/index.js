import React from "react";
import {
  Container,
  Heading,
  Wrapper,
  Card,
  Img,
  Info,
  Title,
  Desc,
  Price,
  Button,
} from "./styles";

const Products = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Products.Heading = ({ children, ...restProps }) => {
  return <Heading {...restProps}>{children}</Heading>;
};

Products.Wrapper = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Products.Card = ({ children, ...restProps }) => {
  return <Card {...restProps}>{children}</Card>;
};

Products.Img = ({ children, ...restProps }) => {
  return <Img {...restProps}>{children}</Img>;
};
Products.Info = ({ children, ...restProps }) => {
  return <Info {...restProps}>{children}</Info>;
};

Products.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Products.Desc = ({ children, ...restProps }) => {
  return <Desc {...restProps}>{children}</Desc>;
};

Products.Price = ({ children, ...restProps }) => {
  return <Price {...restProps}>{children}</Price>;
};

Products.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

export default Products;
