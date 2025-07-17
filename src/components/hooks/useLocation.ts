import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../api";

export function useLocation() {
  return useQuery({
    queryKey: ['location'],
    queryFn: async () => {
      const response = await axiosInstance.get('/locations');
      return {
        data: response.data as {id: number, location: string}[],
      };
    }
  });
}
