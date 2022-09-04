import axios from 'axios'

interface Block {
  ticker: string;
  hash: string;
  height: number;
  nonce: number;
  time: string;
  prevBlock: string;
}

const fetchBlock = async (ticker: string, query: string) => {
  const url = `https://api.blockcypher.com/v1/${ticker}/main/blocks/${query}`;

  const { data: res } = await axios.get(url);

  const block: Block = {
    ticker,
    hash: res.hash,
    height: res.height,
    nonce: res.nonce,
    time: res.time,
    prevBlock: res.prev_block
  }

  return block;
}

export default fetchBlock;