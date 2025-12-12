// components/ClientShell.jsx
"use client";

import React from "react";
import VisitTracker from "./VisitTracker";

export default function ClientShell({ children }) {
  return (
    <>
      <VisitTracker />
      {children}
    </>
  );
}
