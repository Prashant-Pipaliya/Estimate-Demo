import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import EstimateTable from "@components/EstimateTable";
import Header from "@components/Header";
import useFetchEstimate from "@hooks/useFetchEstimate";

const App = () => {
  const { data, isLoading, isError, error } = useFetchEstimate();
  const [searchTerm, setSearchTerm] = useState("");
  const [grandTotal, setGrandTotal] = useState(0);

  const handleSearchChange = (value) => setSearchTerm(value);

  if (isLoading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner />
      </div>
    );
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <div className="position-sticky top-0 bg-white">
        <Header
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          grandTotal={grandTotal}
        />
      </div>
      <EstimateTable
        sections={data?.data?.sections}
        searchTerm={searchTerm}
        onGrandTotalChange={setGrandTotal}
      />
    </div>
  );
};

export default App;
