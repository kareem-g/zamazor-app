import { Add, AddPhotoAlternate, Google, Image } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import {
  getFirestore,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  collection,
} from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UserDashboard = () => {
  const db = getFirestore();
  const ColProducts = collection(db, "products");

  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);

  const initialValues = {
    productName: "",
    productDesc: "",
    productPrice: "",
    rate: "",
    count: "",
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(file.name);

  const onSubmit = async (values, { resetForm }) => {
    console.log("Upload is complete! :", file.name);
    console.log(values);

    addDoc(ColProducts, {
      name: values.productName,
      desc: values.productDesc,
      price: parseFloat(values.productPrice),
      img: data.img,
      rate: values.rate,
      count: values.count,
    }).catch((e) => {
      console.log("error: ", e);
    });
    resetForm();
    setFile("");
    setData({});
  };

  return (
    <>
      <Box>
        <Box>
          <Stack
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop="30px"
          >
            <Typography
              marginBottom="10px"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              DashBoard
            </Typography>
            <Box>
              <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={onSubmit}
                render={({ submitForm, isSubmitting, values }) => (
                  <Form noValidate>
                    <Box
                      justifyContent="center"
                      alignItems="center"
                      display="flex"
                      flexDirection="column"
                      marginBottom="20px"
                    >
                      <img
                        width="100px"
                        height="100px"
                        style={{ borderRadius: "50%", marginBottom: "10px" }}
                        src={
                          file
                            ? URL.createObjectURL(file)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                      />
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<AddPhotoAlternate />}
                      >
                        {file ? file.name : "Upload Image"}
                        <input
                          name="img"
                          type="file"
                          id="file"
                          accept="image/png, image/gif, image/jpeg"
                          onChange={(e) => setFile(e.target.files[0])}
                          hidden
                        />
                      </Button>
                    </Box>

                    <Field
                      type="name"
                      label="Product Name"
                      name="productName"
                      variant="outlined"
                      fullWidth
                      component={TextField}
                    />
                    <br />
                    <br />
                    <Field
                      type="name"
                      label="Product Description"
                      name="productDesc"
                      variant="outlined"
                      fullWidth
                      component={TextField}
                    />
                    <br />
                    <br />
                    <Field
                      type="name"
                      label="Product Price"
                      name="productPrice"
                      variant="outlined"
                      fullWidth
                      component={TextField}
                    />
                    <br />
                    <br />

                    <Field
                      type="number"
                      label="Rate"
                      name="rate"
                      variant="outlined"
                      fullWidth
                      component={TextField}
                    />
                    <br />
                    <br />

                    <Field
                      type="number"
                      label="Count"
                      name="count"
                      variant="outlined"
                      fullWidth
                      component={TextField}
                    />
                    <br />
                    <br />

                    <Button
                      startIcon={<Add />}
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                      disabled={isSubmitting && per !== null && per < 100}
                    >
                      Add Product
                    </Button>
                    <br />
                    <br />

                    {isSubmitting}
                  </Form>
                )}
              ></Formik>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default UserDashboard;
