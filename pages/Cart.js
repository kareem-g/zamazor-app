import React from "react";
import nookies from "nookies";
const Cart = (props) => {
  return <div>Cart! Welcome</div>;
};

export async function getServerSideProps(ctx) {
  const { userToken } = nookies.get(ctx);
  if (userToken) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Cart;
