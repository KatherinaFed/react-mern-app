import { Pagination } from '@mui/material';
import { PaginatorContainer } from './styles';

type PaginatorT = {
  page: number;
  pageSize: number;
  totalEventsCount: number;
  onPageChanged: (arg: number) => void;
};

const Paginator = ({
  page,
  pageSize,
  totalEventsCount,
  onPageChanged,
}: PaginatorT) => {
  const count = Math.ceil(totalEventsCount / pageSize);

  const handleChange = (e: any, p: number) => {
    e.preventDefault();

    onPageChanged(p);
  };

  return (
    <PaginatorContainer>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </PaginatorContainer>
  );
};

export default Paginator;
