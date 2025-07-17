import { createContext } from "react";

export const PaintingsContext = createContext<{
    data: { data: object[]; total: number };
    page: number;
    limit: number;
    setPaintignsData: (params: { page: number; limit: number }) => void;
}>({
    data: { data: [], total: 0 },
    limit: 6,
    page: 1,
    setPaintignsData: () => {}
}); 