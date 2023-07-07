import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import Carousel from "../components/Banner/Carousel";

const Homepage = () => {
  return (
    <>
      <Banner />
      <br></br>
      <br></br>

      <div style={{
           textAlign: "center",
           fontSize: 40,
           fontFamily: "Rajdhani"

      }
      }>
        Trending</div>
      <br></br>
      <Carousel />
      <br></br>
      <br></br>
      <br></br>
      
      <CoinsTable />
    </>
  );
};

export default Homepage;
