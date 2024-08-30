import { Footer } from "@/widgets/footer";
import { Header } from '@/widgets/header';
import { LayoutProps } from "./types";
import classes from './layout.module.scss';

export const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div id={classes['layout']}>    
        <Header />
        <main className={`${classes['main']}`}>
            {children}
        </main>
        <Footer />
    </div>
)