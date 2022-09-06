import axios from 'axios'

interface Block {
  type: string;
  ticker: string;
  hash: string;
  height: number;
  nonce: number;
  size: number;
  bits: number;
  time: string;
  depth: number;
  txs: string[];
  prevBlock: string;
  merkleRoot: string;
}

// For fetching data about certain block
// ticker (btc or eth) and hash or height of block required

const fetchBlock = async (ticker: string, query: string) => {
  const url = `https://api.blockcypher.com/v1/${ticker}/main/blocks/${query}`;

  const { data: res } = await axios.get(url);

  const block: Block = {
    type: "Block",
    ticker,
    hash: res.hash,
    height: res.height,
    nonce: res.nonce,
    size: res.size,
    time: res.time,
    bits: res.bits,
    depth: res.depth,
    txs: res.txids,
    prevBlock: res.prev_block,
    merkleRoot: res.mrkl_root,
  }

  return block;
}

export default fetchBlock;