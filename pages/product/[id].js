import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

import Announcement from "../../components/Announcement";
import ProductItemPage from "../../components/ProductItemPage";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Announcement />
      <Navbar />
      <ProductItemPage />
    </>
  );
};

export default Product;
