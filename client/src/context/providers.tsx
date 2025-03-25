"use client";
import { ToastProvider } from "./ToastContext";
import React from 'react';
 
export function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
