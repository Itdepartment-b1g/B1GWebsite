import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import XForge from "./pages/XForge";
import XSlimbar from "./pages/XSlimbar";
import Amz from "./pages/Amz";
import Alpha from "./pages/Alpha";
import XUltra from "./pages/XUltra";
import ForgeAlpha from "./pages/ForgeAlpha";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<Products />} />
          <Route path="/XForge" element={<XForge />} />
          <Route path="/XSlimbar" element={<XSlimbar />} />
          <Route path="/amz" element={<Amz />} />
          <Route path="/alpha" element={<Alpha />} />
          <Route path="/xultra" element={<XUltra />} />
          <Route path="/forgealpha" element={<ForgeAlpha />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
