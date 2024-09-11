import classes from './styles.module.scss'

export interface Props {
    maxWidth?: string;
    children: React.ReactElement;
    header: string;
}

export const WidgetWrapper = ({
    header, maxWidth, children
}: Props): React.ReactElement => {
    return (
        <div className={classes['container']} style={{ maxWidth }}>
            <h3 className={classes['header']}>
                {header}
            </h3>
            <div className={classes['body']}>
                {children}
            </div>
        </div>
    )
}