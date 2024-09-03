import { Footer } from "@/widgets/footer";
import { Header } from '@/widgets/header';
import classes from './layout.module.scss';
import { Outlet } from "react-router-dom";
import common from '@/shared/styles/shared.module.scss';

export const Layout: React.FC = () => (
    <div id={classes['layout']}>    
        <Header />
        <main className={`${classes['main']} ${common['container']}`}>
            <Outlet />
        </main>
        <Footer />
    </div>
)