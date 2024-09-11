import AppRouter from "@/app/router/AppRouter"
import { TableProvider } from "@/features/AddAssetType";
import { Loader } from "@/widgets/Loader/ui/Loader";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<Loader />}>
        <TableProvider>
             <AppRouter />
        </TableProvider>
    </Suspense>
  )
}

export default App
