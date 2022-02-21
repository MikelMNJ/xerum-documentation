export const menuCode = `<Menu />`;

export const paginationCode = `const res = {
  total_pages: 5,
  current_page: 1,
  page_size: 30,
  page_data, // Arr 150 length
};

<Pagination
  totalPages={res.total_pages}
  currentPage={res.current_page}
  onPageChange={page => req({ page })}
/>

<Pagination
  totalPages={res.total_pages}
  currentPage={res.current_page}
  onPageChange={page => req({ page })}
  prevIcon="fa-solid fa-arrow-left"
  pageIcon="fa-solid fa-square"
  nextIcon="fa-solid fa-arrow-right"
/>`;