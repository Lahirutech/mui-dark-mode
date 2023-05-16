import React, { useEffect, useState } from 'react';

function useCoinData(coin: string) {
  const [data, setData] = useState<{ rate: string }>();
  const [isLoading, setIsLoading] = useState(true);

  console.log('process', process.env.NEXT_COIN_KEY);
  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/callcoins?coinName=${coin}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('data', data);
        setData(data.rate);
      });
  }, [coin]);

  return { data, isLoading };
}

export default useCoinData;
