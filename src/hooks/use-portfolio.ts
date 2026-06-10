"use client";

import portfolio from "@/data/portfolio";
import type { PortfolioContent } from "@/types/portfolio";

export function usePortfolio(): PortfolioContent {
  return portfolio;
}
