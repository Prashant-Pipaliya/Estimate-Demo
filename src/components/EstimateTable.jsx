import React, { useEffect, useState } from "react";
import SectionRow from "@components/SectionRow";

const EstimateTable = ({ sections, searchTerm, onGrandTotalChange }) => {
  const [sectionTotals, setSectionTotals] = useState({});

  const handleSectionTotalUpdate = (sectionId, updatedTotal) => {
    setSectionTotals((prevTotals) => {
      if (prevTotals[sectionId] !== updatedTotal) {
        return { ...prevTotals, [sectionId]: updatedTotal };
      }
      return prevTotals;
    });
  };
  
  // filter sections according to search filed
  const filteredSections = sections?.filter((section) =>
    section?.section_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const total = filteredSections
      .map((section) => sectionTotals[section.section_id] || 0)
      .reduce((sum, curr) => sum + curr, 0);

    onGrandTotalChange(total);
  }, [filteredSections, sectionTotals, onGrandTotalChange]);

  return (
    <div>
      {filteredSections?.map?.((section) => (
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
