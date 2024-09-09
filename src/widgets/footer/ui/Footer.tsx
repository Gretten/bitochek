import Divider from '@mui/material/Divider/Divider';
import classes from './footer.module.scss';
import common from '@/shared/styles/shared.module.scss';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {

    return (
        <footer className={classes['footer']}>
            <Divider />
            <div className={`${common['container']}  ${classes['content-container']}`}>
                <div>Проект БИТОЧЕК</div>
                <div>2024 - настоящее время</div>
                <div>
                    <a href="https:/google.com/"  target='_blank'>
                        <TelegramIcon />
                    </a>
                    <a href="https:/google.com/" target='_blank'>
                        <GitHubIcon />
                    </a>
                </div>
            </div>
        </footer>
    )
}