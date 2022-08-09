import axios from 'axios';

interface NewsArticleProps {
  title: string,
  image: string,
  date: string,
  url: string,
}

const fetchNews = async () => {
  const url = 'https://newsdata.io/api/1/news?apikey=pub_9308743bb708ffc3b2ea624ac3d4c33e8da0&language=en&q=cryptocurrency';

  const { data: res } = await axios.get(url);

  // array of 10 articles fetched from api
  const articles: NewsArticleProps[] = res.results.map(item => {
    return {
      title: item.title,
      image: item.image_url,
      date: item.pubDate,
      url: item.link
    }
  })

  console.log(articles)

  return articles;
}

export default fetchNews;