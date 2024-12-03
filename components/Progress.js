import styles from "../styles/Progress.module.scss";

function Progress(props) {
    const { min, max, title, percent, className } = props;
    return (
        <div className={`${styles.progress} ${className}`}>
            {title && <h5>{title} </h5>}
            {percent && <span className={styles.progress__num}>{`% ${percent}`}</span>}
            <div className={styles.progress__bar}>
                <span className={styles.progress__bar__line} min={min || 0} max={max || 100} style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
}

export default Progress;
