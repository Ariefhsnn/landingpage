import Header from "../components/Header";
import Layout from "../components/Layout";
import React from "react";
import dataUser from "./api/data.json";

const Book = () => {
  dataUser.map((data) => {
    return (
      <Layout>
        <Header />
        <p></p>
      </Layout>
    );
  });
};

export default Book;
