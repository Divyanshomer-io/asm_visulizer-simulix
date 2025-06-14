
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import Landing from "./pages/Landing";
import Visualizations from "./pages/Visualizations";
import Games from "./pages/Games";
import Blog from "./pages/Blog";
import Simulator from "./pages/Simulator";
import SimulatedAnnealingToy from "./pages/SimulatedAnnealingToy";
import AliasMethod from "./pages/AliasMethod";
import Bootstrapping from "./pages/Bootstrapping";
import HuberMean from "./pages/HuberMean";
import ImportanceSampling from "./pages/ImportanceSampling";
import NeuralNetwork from "./pages/NeuralNetwork";
import RandomForest from "./pages/RandomForest";
import DeepRL from "./pages/DeepRL";
import BiasVarianceTradeoff from "./pages/BiasVarianceTradeoff";
import LowRankVAE from "./pages/LowRankVAE";
import QLearningMaze from "./pages/QLearningMaze";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import HiLoBayesianGame from "./pages/HiLoBayesianGame";
import KMeansGame from "./pages/KMeansGame";

// Configure React Query with safe defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

const App = () => (
  <ErrorBoundary onError={(error, errorInfo) => {
    console.error('App level error:', error, errorInfo);
  }}>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <TooltipProvider>
          <ErrorBoundary>
            <Toaster />
          </ErrorBoundary>
          <ErrorBoundary>
            <Sonner />
          </ErrorBoundary>
          <BrowserRouter>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/visualizations" element={
                  <ErrorBoundary>
                    <Visualizations />
                  </ErrorBoundary>
                } />
                <Route path="/games" element={
                  <ErrorBoundary>
                    <Games />
                  </ErrorBoundary>
                } />
                <Route path="/blog" element={
                  <ErrorBoundary>
                    <Blog />
                  </ErrorBoundary>
                } />
                <Route path="/simulator" element={
                  <ErrorBoundary>
                    <Simulator />
                  </ErrorBoundary>
                } />
                <Route path="/simulated-annealing-toy" element={
                  <ErrorBoundary>
                    <SimulatedAnnealingToy />
                  </ErrorBoundary>
                } />
                <Route path="/alias-method" element={
                  <ErrorBoundary>
                    <AliasMethod />
                  </ErrorBoundary>
                } />
                <Route path="/bootstrapping" element={
                  <ErrorBoundary>
                    <Bootstrapping />
                  </ErrorBoundary>
                } />
                <Route path="/huber-mean" element={
                  <ErrorBoundary>
                    <HuberMean />
                  </ErrorBoundary>
                } />
                <Route path="/importance-sampling" element={
                  <ErrorBoundary>
                    <ImportanceSampling />
                  </ErrorBoundary>
                } />
                <Route path="/neural-network" element={
                  <ErrorBoundary>
                    <NeuralNetwork />
                  </ErrorBoundary>
                } />
                <Route path="/random-forest" element={
                  <ErrorBoundary>
                    <RandomForest />
                  </ErrorBoundary>
                } />
                <Route path="/deep-rl" element={
                  <ErrorBoundary>
                    <DeepRL />
                  </ErrorBoundary>
                } />
                <Route path="/bias-variance" element={
                  <ErrorBoundary>
                    <BiasVarianceTradeoff />
                  </ErrorBoundary>
                } />
                <Route path="/low-rank-vae" element={
                  <ErrorBoundary>
                    <LowRankVAE />
                  </ErrorBoundary>
                } />
                <Route path="/hi-lo-bayesian" element={
                  <ErrorBoundary>
                    <HiLoBayesianGame />
                  </ErrorBoundary>
                } />
                <Route path="/qlearning-maze" element={
                  <ErrorBoundary>
                    <QLearningMaze />
                  </ErrorBoundary>
                } />
                <Route path="/kmeans-game" element={
                  <ErrorBoundary>
                    <KMeansGame />
                  </ErrorBoundary>
                } />
                <Route path="/about" element={
                  <ErrorBoundary>
                    <About />
                  </ErrorBoundary>
                } />
                <Route path="*" element={
                  <ErrorBoundary>
                    <NotFound />
                  </ErrorBoundary>
                } />
              </Routes>
            </ErrorBoundary>
          </BrowserRouter>
        </TooltipProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
