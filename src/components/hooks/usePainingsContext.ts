import { useContext } from "react";
import { PaintingsContext } from "../provider/paintingsContext";

export function usePainingsContext(){
    return useContext(PaintingsContext)
}
