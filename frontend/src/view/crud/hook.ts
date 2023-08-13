import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// export const url: any = `https://diyoruz.onrender.com`;
export const url: any = `https://diyorbek.alwaysdata.net`;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
