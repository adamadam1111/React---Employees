import React, { Component } from 'react';
import './App.css';
import Article from './Article/Article';
import styles from './App.module.css';

class App extends Component {

  state = {
    articles: [
      { id: 'AP001', title: "junior code:Fh45", content: "Experience 4 months" },
      { id: 'AP002', title: "manager code:Fh75", content: "Experience 3 years, 5 months" },
      { id: 'AP003', title: "junior code:Fh41", content: "Experience 5 months" },
      { id: 'AP004', title: "expert code:Fh65", content: "Experience 6 years, 2 months" },
      { id: 'AP005', title: "expert code:Fh68", content: "Experience 7 years, 2 months" },
      { id: 'AP006', title: "expert code:Fh45", content: "Experience 7 years, 2 months" },
      { id: 'AP007', title: "junior code:Fh47", content: "Experience 11 months" },
      { id: 'AP008', title: "expert code:Fh266", content: "Experience 7 years, 2 months" },
      { id: 'AP009', title: "mid code:Fh45", content: "Experience 2 years, 9 months" },
      { id: 'AP010', title: "senior code:Fh50", content: "Experience 5 years, 4 months" }
    ],
    showArticles: false
  }

  toggleArticlesHandler = () => {
    const doesShow = this.state.showArticles;
    this.setState({ showArticles: !doesShow });
  }

  deleteArticleHandler = (articleIndex) => {
    const articles = [...this.state.articles];
    articles.splice(articleIndex, 1);
    this.setState({ articles: articles });
  }

  render() {
    let articles = null;
    let buttonStyles = [styles.toggleButton];

    if (this.state.showArticles) {
      articles = this.state.articles.map((article, index) => {
        return (<Article
          title={article.title}
          content={article.content}
          deleteClick={() => this.deleteArticleHandler(index)}
          key={article.id}
        />);
      });
    }

    const articleStyles = [];

    if (this.state.articles.length === 1) {
      articleStyles.push('OneArticle');
    }
    if (this.state.articles.length >= 5) {
      articleStyles.push('MoreThan5Article');
    } else {
      articleStyles.push('GrayArticles');
    }

    return (

      <div className='App'>
        <button className={buttonStyles.join(' ')}
          onClick={this.toggleArticlesHandler}>A List of Essential Workers</button>
        <div className={articleStyles.join(' ')}>
          {articles}
        </div>
      </div>
    );
  }
}

export default App;