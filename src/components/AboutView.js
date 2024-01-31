import React from "react";
import Hero from "./Hero";

function AboutView() {
  return (
    <>
      <Hero text="he Shelby Co. Limited" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac justo rutrum, pulvinar arcu at, pretium enim. In pretium mattis
              arcu, vitae facilisis diam porta in. Phasellus suscipit est ac
              ligula luctus posuere. Integer tristique ornare dui id lacinia.
              Quisque gravida vel quam id porta. Ut convallis nulla at tristique
              interdum. Donec ac venenatis eros, at facilisis elit. In eget diam
              vehicula nisl consectetur faucibus. Nulla facilisi. Fusce eget
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

export default AboutView;
