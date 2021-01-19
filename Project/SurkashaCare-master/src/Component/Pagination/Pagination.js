import React from 'react';
import './Pagination.css';

const Pagination = ({ totalpost, postperpage, changePage }) => {
    console.log(postperpage)
    const pageNumbers = [];

    if (totalpost.length === 0)
        return <div></div>;

    let pageCount = Math.ceil(totalpost.length / postperpage);
    for (let i = 0; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    return (
            <div className="page-align-box" >
            <nav>
                <ul className="pagination">
                    {pageNumbers.map((page) => (
                        <li key={page} className="page-item"> <a href="#" className="page-link" onClick={() => changePage(page)}>{page}</a></li>
                    ))}
                </ul>
            </nav>
            </div>



    )

}




export default Pagination;