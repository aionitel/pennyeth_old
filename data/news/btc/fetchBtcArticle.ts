import axios from 'axios'
import { bitcoin_images } from '../../images';

// fetch latest news articles for bitcoin and return object with relevant data

interface NewsArticleProps {
  title: string,
  authors: string,
  image: string,
  date: string,
  url: string,
}

const fetchBtcArticle = async () => {
  const url = 'https://data.messari.io/api/v1/news/btc';

  // will return array of various articles with relevant data
  const { data: res } = await axios.get(url);

  // get array of articles from res
  const data = res.data;

  // select random article from returned array
  const article = data[Math.floor(Math.random()*data.length)];

  const newsPoster = bitcoin_images[Math.floor(Math.random()*bitcoin_images.length)];

  const btc_article: NewsArticleProps = {
    title: article.title,
    authors: article.author.name,
    image: newsPoster,
    date: article.published_at,
    url: article.url
  }

  return btc_article;
}

export default fetchBtcArticle;