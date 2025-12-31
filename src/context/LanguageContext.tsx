import { createContext } from "react";
import type { LanguageContextType } from "../utils/types";

export const LanguageContext =
    createContext<LanguageContextType | undefined>(undefined);
