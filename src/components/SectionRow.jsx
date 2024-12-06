import React, { useState, useEffect, useCallback } from "react";
import { Tooltip, ToastContainer, Toast } from "react-bootstrap";

import ItemRow from "@components/ItemRow";
import SectionHeader from "@components/SectionHeader";

const SectionRow = ({ section, onSectionTotalUpdate }) => {
  const [sectionTotal, setSectionTotal] = useState(0);
  const [itemTotals, setItemTotals] = useState({});
  const [showToast, setShowToast] = useState(false);

  // Update item totals only if the value has changed to avoid unnecessary re-renders
  const handleItemTotalChange = useCallback((itemId, itemTotal) => {
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
      <SectionHeader section={section} sectionTotal={sectionTotal} />
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
                setShowToast={setShowToast}
              />
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer position="bottom-start" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          className="bg-dark text-white h-50 d-flex justify-content-center align-items-center py-2"
        >
          <Toast.Body>Please enter a valid number.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default SectionRow;
