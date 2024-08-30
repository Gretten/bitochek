import classes from './header.module.scss';
import common from '@/shared/styles/shared.module.scss';

export const Header = () => {

    return (
        <header className={classes['header']}>
            <div className={`${common['container']} ${classes['header-line']}`}>
                <div className={classes['header-logo']}>
                    Logo!
                </div>
                <nav className={classes['header-navbar']}>
                    Nav!
                </nav>
                <div className={classes['header-login']}>
                    Login!
                </div>
            </div>
        </header>
    )
}