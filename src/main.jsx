import { createRoot } from 'react-dom/client'
import './index.css'
import "../src/styles/estimate.css"
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
