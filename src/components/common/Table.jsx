import React from 'react';
import Table_Header from './Table_Header';
import Table_Body from './Table_Body'

const Table = (props) => {
    const { columns, sortColumn, onSort, data } = props;
    return (
        <table className="table">
            <Table_Header
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <Table_Body columns={columns} data={data} />
        </table>
    );
};

export default Table;
