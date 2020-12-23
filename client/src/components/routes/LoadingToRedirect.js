/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line no-param-reassign
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && history.push('/');

    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div className="container p-5 text-center">
      <p>
        Redireting you in
        {' '}
        {count}
        {' '}
        seconds
      </p>
    </div>
  );
};

export default LoadingToRedirect;
