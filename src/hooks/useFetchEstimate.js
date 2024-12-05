import { useQuery } from "@tanstack/react-query";
import { fetchEstimateData } from "../api/estimateApi";
const useFetchEstimate = () => {
  const query = useQuery({
    queryKey: ["estimateData"],
    queryFn: fetchEstimateData,
  });

  return query;
};

export default useFetchEstimate;
