import "animate.css/animate.min.css";

const Animate = (props) => {
    const prefix = `animate__animated`;
    const name = props.name && `animate__${props.name}`;

    const style = {
        animationDelay: props.delay || ".1s",
        animationDuration: props.duration || "1s",
    };

    return (
        <div className={`${prefix} ${name}`} style={style}>
            {props.children}
        </div>
    );
};

export default Animate;
