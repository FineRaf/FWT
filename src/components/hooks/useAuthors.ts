import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../api";

export function useAuthors() {
  return useQuery({
    queryKey: ['authors'],
    queryFn: async () => {
      const response = await axiosInstance.get('/authors');
      return {
        data: response.data as {id: number, name: string}[],
      };
    }
  });
}
