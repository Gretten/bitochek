import { ReactNode } from "react";

export interface RouteConfig {
    path: string;
    component: ReactNode;
    exact?: boolean;
  }
  