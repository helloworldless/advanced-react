import React from 'react';
import styles from './Article.styles.js';

const formatDate = (dateString) =>
  new Date(dateString).toDateString();

const Article = ({article, actions}) => {
  const author = actions.lookupAuthor(article.authorId);

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{formatDate(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

export default Article;
