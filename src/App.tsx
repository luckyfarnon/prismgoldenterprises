
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/services/ServicePage";
import WorkPage from "./pages/work/WorkPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/import-export" element={<ServicePage serviceType="import-export" />} />
          <Route path="/services/construction" element={<ServicePage serviceType="construction" />} />
          <Route path="/services/information-technology" element={<ServicePage serviceType="information-technology" />} />
          <Route path="/work/import-export" element={<WorkPage workType="import-export" />} />
          <Route path="/work/construction" element={<WorkPage workType="construction" />} />
          <Route path="/work/information-technology" element={<WorkPage workType="information-technology" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
