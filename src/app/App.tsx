import AppRouter from "@/app/router/AppRouter"
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
    </Suspense>
  )
}

export default App
