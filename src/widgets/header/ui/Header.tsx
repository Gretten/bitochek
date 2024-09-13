import classes from './header.module.scss';
import common from '@/shared/styles/shared.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png'
import { Routes } from '@/shared/routes';
import { useTabs } from '@/widgets/Header/model/useTabs';

export const Header = () => {

    const { activeTab, setActiveTab } = useTabs({
        initialState: '/portfolio'
    });
    return (
        <header className={classes['header']}>
            <div className={`${common['container']} ${classes['header-line']}`}>
                <div className={classes['header-logo']}>
                    <img src={logo} alt="Bitochek-logo" height="30"/>
                </div>
                <nav className={classes['header-navbar']}>
                    <Tabs value={activeTab} onChange={(_, value) => setActiveTab(value) }>
                        <Tab label="Портфолио" value={Routes.Portfolio} to={Routes.Portfolio} component={Link} />
                        <Tab label="Валюта" value={Routes.Asset} to={Routes.Asset} component={Link} />
                        <Tab label="Новости" value={Routes.News} to={Routes.News} component={Link} />
                    </Tabs>
                </nav>
                <div className={classes['header-login']}>
                    <Tab label="Войти" value={Routes.Login} to={Routes.Login} component={Link} />
                </div>
            </div>
        </header>
    )
}