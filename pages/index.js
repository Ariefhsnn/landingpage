import About from "../components/About";
import CaseStudies from "../components/CaseStudies";
import Content from "../components/Content";
// import Counter from "../components/Counter";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import Layout from "../components/Layout";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Tailwind">
      <Header />
      <Content />
      <Feature />
      <About />
      {/* <Counter /> */}
      <Service />
      <CaseStudies />
      <Testimonial />
      <Footer />
    </Layout>
  );
}
