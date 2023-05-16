import React, { useEffect, useState } from 'react';
import useCoinData from './useCoinDataHook';

export default function Coindata() {
  const [coin, setCoin] = useState<string>('BTC');
  const { data, isLoading } = useCoinData(coin);

  const setCoinName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCoin(e.target.value);
  };

  return (
    <div>
      <select onChange={(e) => setCoinName(e)}>
        {' '}
        <option value='BTC'>Bit Coin</option>
        <option value='ETH'>Ethereum</option>
      </select>
      Current Rate: {isLoading ? 'loading' : data?.rate}
    </div>
  );
}
