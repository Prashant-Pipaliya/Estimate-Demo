import React from "react";
import useFetchEstimate from "./hooks/useFetchEstimate";
import EstimateTable from "./components/EstimateTable";
import Spinner from "react-bootstrap/Spinner";

const App = () => {
  const { data, isLoading, isError, error } = useFetchEstimate();

  if (isLoading) return <div className="d-flex justify-content-center align-items-center vh-100"><Spinner /></div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <EstimateTable sections={data?.data?.sections} />
    </div>
  );
};

export default App;
