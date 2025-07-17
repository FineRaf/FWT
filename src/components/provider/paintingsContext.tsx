import { createContext, useState, type PropsWithChildren } from "react";
import { usePaintings } from "../hooks/usePaintings";

export const PaintingsContext = createContext<{data: {data: object[], total: number}, page: number, limit: number, setPaintignsData: ({page: number, limit: number})=>void}>({
    data: {data: [], total:0},
    limit: 6,
    page: 1,
    setPaintignsData: ()=>{}
})

export function PaintigsContextProvider({ children }:PropsWithChildren){
    const [pages, setPaintignsData] = useState({page: 1, limit: 6})

    const { data } = usePaintings(pages.page, pages.limit);

    return <PaintingsContext.Provider value={{data, page:pages.page, limit: pages.limit, setPaintignsData }}>{children}</PaintingsContext.Provider>
}
