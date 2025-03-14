import React from 'react';
import './Pagination.css'

const Pagination = ({ totalMenu, postPerPage,setCurrentPage }) => {

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalMenu/postPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className='pagination'>
            {
                pages.map((page, index) => {
                    return (
                            <button onClick={()=>setCurrentPage(page)} key={index}>{page}</button>
                        )
                })
            }
        </div>
    );
};

export default Pagination;