import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

import "../index.css"

const Home = () => {
  return (
    <>
      
      <div className=" jumbotron h2 font-weight-bold p-3 mt-5 mb-3 text-center">

        <Jumbotron />
        {/* {loading ? <h4>Loading...</h4> : <h4>All Products</h4>} */}
        {/* {JSON.stringify(products)} */}
      </div>

      <figure className="text-center fade-in-cite">
        <blockquote className="blockquote">
          <h3 className="font-italic">"So shoppt man heute!"</h3>
        </blockquote>
        <figcaption className="blockquote-footer">
          
          <cite title="Source Title">Berühmter Experte:  E-Commerce Heute - Magazin</cite>
        </figcaption>
      </figure>

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron fade-in">
        Brandneu!
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron fade-in">
        Am Heißesten!
      </h4>
      <BestSellers />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron fade-in">
        Entdecke die Shopping Welt!
      </h4>
      <CategoryList />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron fade-in">
        Alles auf einen Blick!
      </h4>
      <SubList />

      <br />
      <br />
    </>
  );
};

export default Home;
