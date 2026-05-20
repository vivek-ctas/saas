"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// NOTE: @tanstack/react-query removed — no useQuery/useMutation calls exist
// in any screen or component. Removing it eliminates ~40 KiB from the bundle.

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  );
}
