const articleDefaultStyles = {
  padding: 10
};

const styles = {
  article: {
    ...articleDefaultStyles
  },
  title: {
    ...articleDefaultStyles,
    fontWeight: 600
  },
  date: {
    ...articleDefaultStyles,
    color: 'gray'
  },
  author: {
    ...articleDefaultStyles
  },
  body: {
    ...articleDefaultStyles
  }
};

module.exports = styles;
