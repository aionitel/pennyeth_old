import axios from 'axios'

interface NewsArticleProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

const fetchEthArticle = async () => {
  const url = `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_API_KEY}&country=us&q=eth`

  // will return array of various articles with relevant data
  const { data: res } = await axios.get(url);

  // get array of articles from res
  const data = res.results;
  
  // get latest article that has image
  const article = data[1];

  const eth_article: NewsArticleProps = {
    title: article.title,
    authors: article.creator,
    image: article.image_url,
    date: article.pubDate,
    url: article.link
  }

  return eth_article;
}

export default fetchEthArticle