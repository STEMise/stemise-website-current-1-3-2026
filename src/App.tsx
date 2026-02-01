import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Index = lazy(() => import("./pages/Index"));
const Team = lazy(() => import("./pages/Team"));
const Partners = lazy(() => import("./pages/Partners"));
const Donations = lazy(() => import("./pages/Donations"));
const Courses = lazy(() => import("./pages/Courses"));
const Kits = lazy(() => import("./pages/Kits"));
const Contact = lazy(() => import("./pages/Contact"));
const Timeline = lazy(() => import("./pages/Timeline"));
const NotFound = lazy(() => import("./pages/NotFound"));
import ScrollToHash from "@/components/ScrollToHash";
import PageLoader from "@/components/PageLoader";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageLoader />
        <ScrollToHash />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/kits" element={<Kits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/timeline" element={<Timeline />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
