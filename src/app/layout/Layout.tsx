import { Footer } from "@/widgets/footer";
import { Header } from '@/widgets/header';
import { Outlet } from "react-router-dom";
import common from '@/shared/styles/shared.module.scss';
import classes from './layout.module.scss';

export const Layout: React.FC = () => (
    <div id={classes['layout']}>    
        <Header />
        <main className={`${classes['main']} ${common['container']}`}>
            <Outlet />
        </main>
        <Footer />
    </div>
)