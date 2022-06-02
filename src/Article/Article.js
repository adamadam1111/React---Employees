import React from 'react';
import styles from './Article.module.css';

const article = props => {

    return (
        <div className={styles.article}>
            <h2>{props.title}</h2>
            <p className={styles.blue}>{props.content}</p>
            <button className={styles.black} onClick={props.deleteClick}>Delete</button>
            <br />
            <br />
        </div>
    );
}
export default article;