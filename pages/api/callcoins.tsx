import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const coinName = req.query;
  const apiUrl = `https://rest.coinapi.io/v1/exchangerate/${coinName}/USD`;
  fetch(apiUrl, {
    headers: {
      'X-CoinAPI-Key': process.env.NEXT_COIN_KEY as string,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return res.status(200).json({ data });
    });
}
