import styles from "../styles/Button.module.scss";

export default function Button(props) {
    let type = "default";

    if ("menu" === props.type) {
        type = styles["button--menu"];
    }

    return (
        <button className={`${styles.button} ${props.className} ${props.active && styles["active"]} ${type}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
