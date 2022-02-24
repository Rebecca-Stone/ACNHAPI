//will need to import useState and useEffect later
import React from "react";
//unsure if i will need axios or yup
//these are the 2nd gen components
import Animal from "./AnimalCard/Animal";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div>
      <Search />
      <Animal />
    </div>
  );
}

export default App;

//i want the app color to be the same as the animals text bubble
