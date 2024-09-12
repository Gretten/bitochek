import classes from './styles.module.scss'

export interface Props {
    children: React.ReactElement;
    header: string;
    styles?: Record<string, string>
}

export const WidgetWrapper = ({
    header, children, styles
}: Props): React.ReactElement => {
    return (
        <div className={classes['container']} style={styles}>
            <h3 className={classes['header']}>
                {header}
            </h3>
            <div className={classes['body']}>
                {children}
            </div>
        </div>
    )
}