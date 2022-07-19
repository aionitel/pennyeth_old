import axios from 'axios'

// fetch latest news articles for bitcoin and return object with relevant data

interface NewsArticleProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

const fetchBtcArticle = async () => {
  const url = `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_API_KEY}&country=us&q=bitcoin`

  // will return array of various articles with relevant data
  const { data: res } = await axios.get(url);

  // get array of articles from res
  const data = res.results;
  
  // filter out all articles that do not have a cover image
  // get latest article out of resulting array
  const articles = data.filter((article: any) => article.image_url !== null)
  const article = articles[0];

  const btc_article: NewsArticleProps = {
    title: article.title,
    authors: article.creator,
    image: article.image_url,
    date: article.pubDate,
    url: article.link
  }

  return btc_article;
}

export default fetchBtcArticle;