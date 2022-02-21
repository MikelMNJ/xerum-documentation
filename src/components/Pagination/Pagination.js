import React from 'react';
import { iconValid } from 'helpers/validators';
import './Pagination.scss';

const Pagination = props => {
  const {
    totalPages,
    currentPage,
    onPageChange,
    prevIcon,
    pageIcon,
    nextIcon,
    className,
    ...rest
  } = props;

  const page = currentPage || 1;
  const total = totalPages || 1;
  const onFirst = page === 1;
  const onLast = page === total;
  const prev = !onFirst && page - 1;
  const next = !onLast && page + 1;

  const changePage = num => {
    const isDifferent = page !== num;

    if (num && onPageChange && isDifferent) {
      onPageChange(num);
    }
  };

  const icon = (icon, fallback) => (
    iconValid(icon) || `fa-solid fa-${fallback}`
  );

  const pageNum = () => {
    const renderContent = [];

    pageNum: for (let i = 1; i <= total; i++) {
      const pageNumClasses = `pageNum ${page === i ? "active" : ""}`;
      let workingPage = i;

      if (pageIcon) {
        workingPage = <i className={icon(pageIcon, "circle")} />
      }

      renderContent.push(
        <div key={i} className={pageNumClasses} onClick={() => changePage(i)}>
          {workingPage}
        </div>
      );
    }

    return renderContent;
  };

  const buildClasses = () => {
    let classList = "pagination";
    if (className) classList += ` ${className}`;
    return classList;
  }

  return (
    <div className={buildClasses()} {...rest}>
      <i
        className={`prev ${icon(prevIcon, "angles-left")}`}
        onClick={() => changePage(prev)}
      />

      {pageNum()}

      <i
        className={`next ${icon(nextIcon, "angles-right")}`}
        onClick={() => changePage(next)}
      />
    </div>
  );
};

export default Pagination;