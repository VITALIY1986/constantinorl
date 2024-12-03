import styles from "../styles/Heading.module.scss";

const Heading = (props) => {
    return (
        <div className={`${styles.heading} ${props.className}`} style={props.style}>{props.children}</div>
    )
}

Heading.Title = (props) => props.children;

Heading.Subtitle = (props) => props.children;

export default Heading;
