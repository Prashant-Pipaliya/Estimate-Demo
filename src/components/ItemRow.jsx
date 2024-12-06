import React, { useState, useEffect, useMemo } from "react";
import { FaEdit, FaCheck } from "react-icons/fa";

const ItemRow = ({ item, onItemTotalChange, setShowToast }) => {
  const [quantity, setQuantity] = useState(Number(item.quantity));
  const [unitCost, setUnitCost] = useState(Number(item.unit_cost) / 100);
  const [isEditing, setIsEditing] = useState(false);

  const itemTotal = useMemo(() => quantity * unitCost, [quantity, unitCost]);

  useEffect(() => {
    onItemTotalChange(itemTotal);
  }, [itemTotal, onItemTotalChange]);

  const handleQuantityChange = (e) => {
    const value = e.target.value;

    if (/^[0-9]*\.?[0-9]*$/.test(value)) {
      setQuantity(value);
      setShowToast(false);
    } else {
      setShowToast(true);
    }
  };

  const handleUnitCostChange = (e) => {
    const value = e.target.value;

    if (/^[0-9]*\.?[0-9]*$/.test(value)) {
      setUnitCost(Number(value));
      setShowToast(false);
    } else {
      setShowToast(true);
    }
  };

  // Toggle between edit and view mode
  const toggleEdit = () => {
    if (quantity === "" || quantity === undefined) {
      setQuantity(0);
    }
    if (unitCost === "" || unitCost === undefined) {
      setUnitCost(0);
    }

    setIsEditing(!isEditing);
  };

  return (
    <>
      <tr>
        <td>{item.item_type_display_name}</td>
        <td>{item.item_type_name}</td>
        <td>
          {isEditing ? (
            <input
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              className="form-control shadow-none"
            />
          ) : (
            quantity
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text"
              value={unitCost}
              step="0.01"
              onChange={handleUnitCostChange}
              className="form-control shadow-none"
            />
          ) : (
            `$${unitCost.toFixed(2)}`
          )}
        </td>
        <td>{item.unit}</td>
        <td>${itemTotal.toFixed(2)}</td>
        <td className="text-center">
          <button onClick={toggleEdit}>
            {isEditing ? <FaCheck color="green" /> : <FaEdit color="gray" />}
          </button>
        </td>
      </tr>
    </>
  );
};

export default ItemRow;
