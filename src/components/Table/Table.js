import React, { useState } from 'react';
import { hexValid } from 'helpers/validators';
import { buildRows, buildHeaders } from 'helpers/tableHelpers';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import colors from 'theme/colors.scss';
import './Table.scss';

const labelPresent = (rows, labelBG) => {
  const hasLabel = rows => rows?.find(obj => (
    Object.keys(obj).includes("label")
  ));

  if (hasLabel(rows)) {
    return `1.5rem solid ${labelBG || colors.deepBlue}`;
  }

  return "inherit";
};

const Table = props => {
  const {
    content,
    style,
    className,
    sortable,
    defaultSort,
    draggable,
    labelColor,
    labelBG,
    dragIcon,
    rest
  } = props;

  const [ ascending, setAscending ] = useState(sortable ? false : null);
  const [ sortedColumn, setSortedColumn ] = useState(sortable && defaultSort || null);

  const borderStyle = { borderLeft: labelPresent(content?.rows, hexValid(labelBG)) };
  const columnStyle = { gridTemplateColumns: `repeat(${columns()}, 1fr)`, ...style };
  const labelStyle = { color: hexValid(labelColor) };
  const args = {
    headers: content?.headers,
    rows: content?.rows,
    sortable,
    sortedColumn,
    setSortedColumn,
    draggable,
    ascending,
    setAscending,
    columnStyle,
    borderStyle,
    labelStyle,
    dragIcon,
  };

  function columns() {
    const ignoredKeys = [ "onClick", "label" ];
    const rowKeys = Object.keys(content?.rows?.[0] || {});
    const index = key => rowKeys.indexOf(key);

    ignoredKeys.forEach(key => {
      if (index(key) !== -1) {
        // Remove key for column calculation.
        rowKeys.splice(index(key), 1);
      }
    });

    return rowKeys.length || content?.headers?.length || 1;
  };

  const buildClasses = () => {
    let classList = "table";
    if (className) classList += ` ${className}`;
    return classList;
  };

  const handleDragEnd = result => {
    if (result.source && result.destination) {
      const { source: { index: fromIndex }, destination: { index: toIndex } } = result;

      if (fromIndex !== toIndex) {
        const workingArr = [ ...content?.rows ];
        const [ reordered ] = workingArr.splice(fromIndex, 1);
        workingArr.splice(toIndex, 0, reordered);

        if (sortedColumn) setSortedColumn(null);
        draggable(workingArr);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="rows">
        {provided => (
          <ul
            className={buildClasses()}
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...rest}
          >
            {buildHeaders(args)}
            {content && buildRows(args)}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Table;