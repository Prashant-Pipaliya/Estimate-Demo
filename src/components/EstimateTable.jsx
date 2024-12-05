import React, { useEffect, useState } from "react";
import SectionRow from "./SectionRow";

const EstimateTable = ({ sections }) => {
  const [grandTotal, setGrandTotal] = useState(0);
  const [sectionTotals, setSectionTotals] = useState({});

  const handleSectionTotalUpdate = (sectionId, updatedTotal) => {
    setSectionTotals((prevTotals) => {
      // Only update if the section total has changed
      if (prevTotals[sectionId] !== updatedTotal) {
        return { ...prevTotals, [sectionId]: updatedTotal };
      }
      return prevTotals;
    });
  };

  useEffect(() => {
    const total = Object.values(sectionTotals).reduce(
      (sum, curr) => sum + curr,
      0
    );
    setGrandTotal(total);
  }, [sectionTotals]);

  return (
    <div>
      <div className="d-flex flex-sm-row flex-column justify-content-between align-items-md-center my-3 px-2 sticky-header">
        <h2 className="fs-4">Estimate</h2>
        <h3 className="fs-4">Grand Total: ${grandTotal.toFixed(2)}</h3>
      </div>
      <hr />
      {sections?.map?.((section) => (
        <SectionRow
          key={section.section_id}
          section={section}
          onSectionTotalUpdate={(total) =>
            handleSectionTotalUpdate(section.section_id, total)
          }
        />
      ))}
    </div>
  );
};

export default EstimateTable;
