import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

import { doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import Announcement from "../../components/Announcement";
import ProductItemPage from "../../components/ProductItemPage";

const Product = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  const docRef = doc(db, "products", id);
  useEffect(() => {
    getDoc(docRef).then((doc) => {
      const item = doc.data();
      setData(item);
    });
  }, []);

  // console.log(data);

  return (
    <>
      <Announcement />
      <Navbar />
      <ProductItemPage image={data.img} title={data.name} price={data.price} />
    </>
  );
};

export async function getServerSideProps(params, context) {
  return {
    props: {},
  };
}

export default Product;
