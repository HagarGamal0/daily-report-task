import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login";
import Tasks from "./pages/tasks";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={false}
        toastStyle={{
          width: "300px",
          fontSize: "14px",
          borderRadius: "8px",
        }}
      />
    </div>
    <BrowserRouter>
      <Suspense
        fallback={<h1> loading </h1>}
      >
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route index path="/" element={<Tasks />} />
                 
        </Routes>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>
  )
}

export default App
