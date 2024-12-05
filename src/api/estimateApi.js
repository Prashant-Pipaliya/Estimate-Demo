import axios from "axios";

export const fetchEstimateData = async () => {
  const response = await axios.get("../../public/React JS- Estimate_detail.json");
  return response?.data;
};

