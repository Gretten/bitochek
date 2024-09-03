import classes from './header.module.scss';
import common from '@/shared/styles/shared.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={classes['header']}>
            <div className={`${common['container']} ${classes['header-line']}`}>
                <div className={classes['header-logo']}>
                    Logo!
                </div>
                <nav className={classes['header-navbar']}>
                    <Tabs>
                        <Tab label="Portfolio" value="/portfolio" to="/portfolio" component={Link} />
                        <Tab label="Asset" value="/asset" to="/asset" component={Link} />
                        <Tab label="News" value="/news" to="/news" component={Link} />
                    </Tabs>
                </nav>
                <div className={classes['header-login']}>
                    <Tab label="Login" value="/login" to="/login" component={Link} />
                </div>
            </div>
        </header>
    )
}