import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCatagories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];
// console.log(allCatagories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCatagories] = useState(allCatagories);

  const filterItems = (category) => {
    if (category === "all") {
      return setMenuItem(items);
    }
    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItem(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
