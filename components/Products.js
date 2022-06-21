import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import data from "../data.json";
import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  deleteDoc,
  onSnapshot,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { db } from "../firebase";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <div>
        <Typography
          sx={{
            lineHeight: "28px",
            display: "flex",
            color: "#428cfd",
            fontSize: "18px",
            justifyContent: {
              lg: "flex-start",
              xs: "center",
            },
            alignItems: "center",
            fontWeight: "500",
            marginLeft: { xs: "0px", md: "80px" },
            paddingTop: "30px",
          }}
          variant="h8"
        >
          Sport Gear
        </Typography>
        <Typography
          sx={{
            lineHeight: "28px",
            display: "flex",
            color: "black",
            fontSize: "32px",
            justifyContent: {
              lg: "flex-start",
              xs: "center",
            },
            alignItems: "center",
            fontWeight: "bold",
            marginLeft: { xs: "0px", md: "80px" },
            paddingTop: "30px",
          }}
          variant="h8"
        >
          Top Products
        </Typography>

        <main className="grid">
          {data &&
            data.map((i) => (
              <ProductCard
                // key={i.id}
                // id={i.id}
                title={i.name}
                count={i.count}
                rate={i.rate}
                image={i.img}
                price={i.price}
                link={`/product/${i.productPrice}/`}
              />
            ))}
        </main>
      </div>
    </>
  );
};

export default Products;
