import Header from "./Header";
import styles from "../styles/Layout.module.scss";

export default function Contact({ children }) {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
        </>
    );
}
