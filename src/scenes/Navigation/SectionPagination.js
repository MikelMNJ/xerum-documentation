import React, { Fragment, useState } from "react";
import { paginationCode } from './codeSamples';
import { paginationTable } from './tables';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Pagination from 'components/Pagination/Pagination';
import colors from 'theme/colors.scss';

const defaultRes = {
  total_pages: 5,
  current_page: 1,
  page_size: 30,
  page_data: [],
};

const SectionPagination = props => {
  const [ res, req ] = useState(defaultRes);
  const [ res2, req2 ] = useState(defaultRes);

  return (
    <Fragment>
      <div>
        <h3 id="pagination">{`<Pagination />`}</h3>

        <Table content={paginationTable} className="xTable" />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}")}<br />
        {codeSnippet(".yourClassName .prev {}")}<br />
        {codeSnippet(".yourClassName .pageNum {}")}<br />
        {codeSnippet(".yourClassName .next {}")}<br />

        <p>
          Your custom <i>className</i> will apply to the pagination container by default.
        </p>
      </div>

      <SampleBox name="Pagination" code={paginationCode}>
        <Pagination
          className="test"
          totalPages={res.total_pages}
          currentPage={res.current_page}
          onPageChange={page => req({ ...defaultRes, current_page: page })}
        />

        <Pagination
          totalPages={res2.total_pages}
          currentPage={res2.current_page}
          onPageChange={page => req2({ ...defaultRes, current_page: page })}
          prevIcon="fa-solid fa-arrow-left"
          pageIcon="fa-solid fa-square"
          nextIcon="fa-solid fa-arrow-right"
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionPagination;