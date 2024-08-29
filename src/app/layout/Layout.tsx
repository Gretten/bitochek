import { Footer } from "@/widgets/footer"
import { Header } from '@/widgets/header';
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