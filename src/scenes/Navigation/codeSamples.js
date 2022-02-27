export const menuCode = `const links = [
  {
    name: "Home",
    path: "#home",
    icon: "fa-solid fa-home"
  },
  {
    name: "Settings",
    path: "#settings",
    icon: "fa-solid fa-gears"
  },
  {
    name: "My account",
    path: "#account",
    icon: "fa-solid fa-user",
    subMenu: [
      { name: "Info", path: "#Info" },
      { name: "Billing", path: "#billing" },
    ],
  },
];

<Menu
  links={links}
  openIcon="fa-solid fa-plus"
  closeIcon="fa-solid fa-minus"
/>`;

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