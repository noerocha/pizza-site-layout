import React from "react";
import Hero from "../components/hero/";
import FeatureContainer from "../containers/feature";
import FooterContainer from "../containers/footer";
import ProductsContainer from "../containers/products";
import { productData, sweetProducts } from "../data";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsContainer heading="Choose you favourite" data={productData} />
      <FeatureContainer />
      <ProductsContainer heading="Sweet treats for You" data={sweetProducts} />
      <FooterContainer />
    </>
  );
}
