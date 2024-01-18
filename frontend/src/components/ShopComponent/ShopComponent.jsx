import React, { useState } from "react";
import Filter from "../Filter/Filter";
import Product from "../Product/Product";

function ShopComponent() {
  const [filteredCriteria, setFilteredCriteria] = useState({});

  const handleFilterChange = (criteria) => {
    setFilteredCriteria(criteria);
  };

  return (
    <div className="container max-w-lg px-4 py-20 mx-auto mt-px md:max-w-none md:text-center text-center">
      <section className="container px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10 items-start tails-selected-element">
        <Filter onFilterChange={handleFilterChange} />
        <Product criteria={filteredCriteria} />
      </section>
    </div>
  );
}

export default ShopComponent;
