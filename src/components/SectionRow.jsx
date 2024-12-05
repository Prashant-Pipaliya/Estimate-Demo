import React, { useState, useEffect, useCallback } from "react";
import ItemRow from "./ItemRow";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

const SectionRow = ({ section, onSectionTotalUpdate }) => {
  const [sectionTotal, setSectionTotal] = useState(0);
  const [itemTotals, setItemTotals] = useState({});

  const renderTooltip = (props) => (
    <Tooltip id="header-tooltip" {...props}>
      Total cost for this section: ${sectionTotal.toFixed(2)}
    </Tooltip>
  );

  const handleItemTotalChange = useCallback((itemId, itemTotal) => {
    // Update item totals only if the value has changed to avoid unnecessary re-renders
    setItemTotals((prevTotals) => {
      if (prevTotals[itemId] !== itemTotal) {
        return { ...prevTotals, [itemId]: itemTotal };
      }
      return prevTotals;
    });
  }, []);

  useEffect(() => {
    const total = Object.values(itemTotals).reduce(
      (sum, curr) => sum + curr,
      0
    );
    setSectionTotal(total);
    onSectionTotalUpdate?.(total);
  }, [itemTotals, onSectionTotalUpdate]);

  // Return early if no items in section
  if (!section?.items || section.items.length === 0) {
    return null;
  }

  return (
    <div className="mb-5">
      <SectionHeader
        section={section}
        sectionTotal={sectionTotal}
      />
      <div className="overflow-x-auto">
        <table className="text-center">
          <thead className="custom-bg">
            <tr>
              <th>Type</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Unit Cost ($)</th>
              <th>Unit</th>
              <th>Cost Code</th>
              <th>Total ($)</th>
              <th>Tax</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {section?.items?.map((item) => (
              <ItemRow
                key={item.item_id}
                item={item}
                onItemTotalChange={(total) =>
                  handleItemTotalChange(item.item_id, total)
                }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionRow;
