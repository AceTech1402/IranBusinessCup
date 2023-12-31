import { RouterProvider } from "react-router-dom";
import Router from "./routes/routes.tsx";
import { Suspense } from "react";
function App() {
  return (
    <>
      <Suspense>
        <RouterProvider router={Router} />
      </Suspense>
    </>
  );
}

export default App;
