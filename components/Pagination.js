import styles from "../styles/Pagination.module.scss";

const Pagination = (props) => {
    const model = `pagination--style-${props.model}`;
    const color = `pagination--${props.color}`;

    return (
        <div className={`pagination ${model} ${color} ${styles.pagination} ${props.className}`} style={props.style}>
            <ul>{props.children}</ul>
        </div>
    );
};

Pagination.defaultProps = {
    model: 1,
    color: "black",
};

export default Pagination;
