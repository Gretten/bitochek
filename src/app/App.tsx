import AppRouter from "@/app/router/AppRouter"
import { Loader } from "@/widgets/Loader/ui/Loader";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<Loader />}>
        <AppRouter />
    </Suspense>
  )
}

export default App
