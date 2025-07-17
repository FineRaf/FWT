import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../api";

export function usePaintings(page: number = 9, limit: number = 9) {
  return useQuery({
    queryKey: ['paintings', page],
    queryFn: async () => {
      const response = await axiosInstance.get('/paintings', {
        params: {
          _page: page,
          _limit: limit
        }
      });

      return {
        data: response.data,
        total: Number(response.headers['x-total-count'])
      };
    }
  });
}
