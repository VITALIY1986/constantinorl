import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Post.module.scss";

const Post = (props) => {
    const post = props.post;
    const model = `post--style-${props.model}`;
    const color = `post--${props.color}`;

    const hover = props.hover || "zoom-in";
   
    return (
        <article className={`${styles.post} ${styles[model]} ${styles[color]}`} style={props.style}>
            <div className={styles.post__inner}>
                {post.coverImage.url && (
                    <div className={`${styles.post__cover} ${hover}`}>
                        <div className={styles.post__cover__inner}>
                            <div className={styles.post__cover__media}>
                                <div className={styles.post__cover__media__image}>
                                    <div className={styles.post__cover__loading}>
                                        <span className={`afc-spinner afc-spinner--${props.color}`}></span>
                                    </div>
                                    <Link href={`/posts/${post.slug}`}>
                                      
                                            <div className="relative">
                                                <Image src={post.coverImage.url} alt={post.title} width={props.image_width} height={props.image_height}  />
                                            </div>
                                       
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <span className={styles.post__cover__overlay}></span>
                    </div>
                )}
                <div className={styles.post__content}>
                    <div className={styles.post__content__inner}>
                        {post.category && (
                            <div className={`${styles.post__content__category} ${styles["post__content__category--style-1"]}`}>
                                <Link href={`/posts/${post.slug}`}>
                                    <a>
                                        <span>{post.category}</span>
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        )}
                        <h3 className={styles.post__content__title}>
                            <Link href={`/posts/${post.slug}`}>
                                <a>{post.title}</a>
                            </Link>
                        </h3>
                        {post.excerpt && props.max_words > 0 && (
                            <p className={styles.post__content__excerpt}>
                                {post.excerpt.split(" ").splice(0, props.max_words).join(" ")}
                                {post.excerpt.split(" ").length > props.max_words && " ..."}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};

Post.defaultProps = {
    title: "Title",
    quality: 70,
    max_words: 0,
    image_width: 600,
    
};

export default Post;
