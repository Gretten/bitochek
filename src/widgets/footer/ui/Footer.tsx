import Divider from '@mui/material/Divider/Divider';
import classes from './footer.module.scss';
import common from '@/shared/styles/shared.module.scss';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {

    return (
        <footer className={classes['footer']}>
            <Divider />
            <div className={`${common['container']}  ${classes['footer-content-container']}`}>
                <div>
                    <div>Проект БИТОЧЕК</div>
                    <div>2024 - настоящее время</div>
                </div>
                <div>
                    <div className={classes['footer-links']}>
                        <a href="https://t.me/somerift"  target='_blank' className={classes['footer-link']}>
                            <span className={classes['footer-subheader']}>Связаться с автором</span>
                            <TelegramIcon />
                        </a>
                        <a href="https://github.com/Gretten/bitochek" target='_blank' className={classes['footer-link']}>
                            <span className={classes['footer-subheader']}>Посмотреть репозиторий</span>
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}