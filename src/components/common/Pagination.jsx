import React from 'react';
import PropType from 'prop-types';
import _ from 'lodash'; 

const Pagination = props => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    console.log(currentPage)

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return <nav>
        <ul className="pagination">
            {pages.map(page => (
                <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                    <a 
                        className="page-link" 
                        onClick={() => onPageChange(page)}>{page}
                    </a>
                </li>
            ))}
        </ul>
    </nav>;
};

Pagination.propTypes = {
    itemsCount: PropType.number.isRequired,
    pageSize: PropType.number.isRequired,
    currentPage: PropType.number.isRequired,
    onPageChange: PropType.func.isRequired
};

export default Pagination;