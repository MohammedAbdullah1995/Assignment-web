import React from "react";
import { AppState } from "./types";
import initialAppState from "./state";

// create context
export const StateContext = React.createContext<AppState>(initialAppState)
export const DispatchContext = React.createContext(((payload:any)=>{}))
StateContext.displayName = 'AppLevelContext'