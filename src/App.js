import { Container } from "react-bootstrap";
import NavbarDetails from "./components/NavbarDetails";
import HeaderDetails from "./components/HeaderDetails";
import Categroy from "./components/Categroy";
import CardList from "./components/CardList";
import { data } from "./data.js";
import React, { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(data);


  // Logic To Do Name of Categroeyes More Dynamic
  const allCategroy = ['الكل', ...new Set(data.map((cat) => cat.categroy))];


  // Functions For Filtering Items By Category
  const filterCategroy = (cat) => {
    if (cat === 'الكل') {
      setItemsData(data);
    } else {
      const newArray = data.filter((item) => item.categroy === cat);
      setItemsData(newArray);
    }
  }


  // Function For Filtering Items By Title In Input Search  
  const filterSearch = (title) => {
    if (title !== "") {
      const newArray = data.filter((item) => item.title === title);
      setItemsData(newArray);
    }
  }

  // Return My Components
  return (
    <div className="font">
      <NavbarDetails filterSearch={filterSearch} />
      <Container>
        <HeaderDetails />
        <Categroy allCategroy={allCategroy} filterCategroy={filterCategroy} />
        <CardList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
