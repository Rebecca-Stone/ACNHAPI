//will need to import useState and useEffect later
import React from "react";
//unsure if i will need axios or yup
//these are the individual components
import Header from "./AnimalCard/Header";
import Search from "./Search";
import Photo from "./AnimalCard/Photo";
import Content from "./AnimalCard/Content";
import Footer from "./AnimalCard/Footer";

function Animal() {
  return (
    <div>
      <Header />
      <Search />
      <Photo />
      <Content />
      <Footer />
    </div>
  );
}

export default Animal;

//i want the background color to be the same as the animals text bubble
