//will need to import useState and useEffect later
import React from "react";
//unsure if i will need axios or yup
//these are the individual components
import Header from './Header'
import Photo from "./Photo";
import Content from "./Content";
import Footer from "./Footer";

function Animal() {
  return (
    <div>
      <Header />
      <Photo />
      <Content />
      <Footer />
    </div>
  );
}

export default Animal;

//i want the background color to be the same as the animals text bubble
