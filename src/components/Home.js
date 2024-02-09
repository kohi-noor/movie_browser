import React from "react";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero text="Small Heath, Birmingham" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitFusce eget
              orci imperdiet, tincidunt lectus eget, elementum tortor. Curabitur
              vitae nibh quis augue feugiat euismod vel hendrerit sem. Aliquam
              interdum mi ac lectus tincidunt, in viverra turpis condimentum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
