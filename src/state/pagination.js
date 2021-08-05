import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(1);
  const handlePageClick = (change) => {
    setPage(prevState => (prevState += change));
  };

  return [page, handlePageClick];
};

export default usePagination;
