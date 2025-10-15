import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster as SonnerToaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SSOLogin from "./pages/SSOLogin";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/sso-login" element={<SSOLogin />} />
                {/* Redirect all other routes to landing page */}
                <Route path="*" element={<Index />} />
              </Routes>
              <SonnerToaster 
                position="top-center"
                expand={false}
                richColors
                closeButton
                toastOptions={{
                  style: {
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    color: '#374151',
                  },
                }}
              />
            </div>
          </Router>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
