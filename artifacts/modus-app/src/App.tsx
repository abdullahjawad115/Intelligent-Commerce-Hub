import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Onboarding } from "@/pages/Onboarding";
import { Dashboard } from "@/pages/Dashboard";
import { Sales } from "@/pages/Sales";
import { Recommendations } from "@/pages/Recommendations";
import { Inventory } from "@/pages/Inventory";
import { Integrations } from "@/pages/Integrations";
import { Manufacturing } from "@/pages/Manufacturing";
import { ManufacturingProvider } from "@/context/ManufacturingContext";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Onboarding} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/sales" component={Sales} />
      <Route path="/recommendations" component={Recommendations} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/manufacturing" component={Manufacturing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ManufacturingProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </ManufacturingProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
