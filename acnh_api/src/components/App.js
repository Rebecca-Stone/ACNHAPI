//will need to import useState and useEffect later
import React from "react";
//unsure if i will need axios or yup
//these are the 2nd gen components
import Animal from "./AnimalCard/Animal";
import Search from "./Search";
import "./App.css";

//may need to make initial form values

//may need to make initial form errors

//could disable the button on the form if no search filters are applied

function App() {
  //a state to keep track of search filters values

  //a state to keep track of errors

  //a state to disable and enable submit button 

  //will need to setFormValues

  //will need a way to enable and disable the button
  return (
    <div>
      {/* thinking about making a route for a filter form */}
      {/* thinking about making a route for the favorite animals */}
      <Search />
      <Animal />
    </div>
  );
}

export default App;

//i want the app color to be the same as the animals text bubble
