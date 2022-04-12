import Header from "../components/Header";
import Layout from "../components/Layout";
import React from "react";
import dataUser from "./api/data.json";

const Users = dataUser.map((data) => {
  return console.log(data);
});

export default Users;
