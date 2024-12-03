import styles from "../styles/Timeline.module.scss";

function Timeline(props) {
    const { title, className, children } = props;

    return (
        <div className={`${styles.timeline} ${className}`}>
            {title && <h4 className={styles.timeline__title}>{title}</h4>}
            {children && <ul>{children}</ul>}
        </div>
    );
}

Timeline.Item = (props) => {
    const { icon, title, subtitle, description } = props.item;

    return (
        <li className={`${styles.timeline__item}`}>
            <div className={`${styles.timeline__item__head}`}>
                <div className="flex">
                    {icon && <div className={`${styles.timeline__item__icon}`}>{icon}</div>}
                    <div>
                        {title && <h5 className="font-secondary">{title}</h5>}
                        {subtitle && <h6 className="text-sm font-secondary">{subtitle}</h6>}
                    </div>
                </div>
            </div>
            <div className={`${styles.timeline__item__body}`}>{description && <p className="text-sm">{description}</p>}</div>
        </li>
    );
};

Timeline.Item.defaultProps = {
    title: "Title",
    subtitle: "Subtitle",
    description: "description",
};

export default Timeline;
