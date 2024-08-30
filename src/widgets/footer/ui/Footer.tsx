import classes from './footer.module.scss';
import common from '@/shared/styles/shared.module.scss';

export const Footer = () => {

    return (
        <footer className={classes['footer']}>
            <div className={`${common['container']}`}>
                Hello Footer!
            </div>
        </footer>
    )
}