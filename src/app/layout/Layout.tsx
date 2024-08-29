import Footer from "../../widgets/footer/ui/Footer"
import Header from "../../widgets/header/ui/Header"
import { LayoutProps } from "./types"

export const Layout: React.FC<LayoutProps> = ({ children }) => (
    <>    
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>

)