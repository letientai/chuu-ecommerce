import React from 'react'
import './Pagination.scss';
const Pagination = ({
    cardPerPage,
    totalProducts, 
    currentPage ,
    setCurrentPage,
    setLoading
}) => {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalProducts / cardPerPage); i++) {
        pageNumbers.push(i);
    }
    const handlePagination = async (page)=> {
        window.scrollTo(0, 0);
        await setCurrentPage(page);
        setTimeout(()=> {
            setLoading(false);
        },[1000])
    }
    return (
        <nav>
            <ul className="d-flex list__pages" >
                {pageNumbers.map((page, i) => {
                    return (
                        <li
                            onClick={ (e) =>{
                                setLoading(true);
                                handlePagination(page);
                            }}
                            className={
                                i + 1 === currentPage ? 
                                'active list__pages__item' :
                                "list__pages__item"
                            }
                            key={i}
                        >{page}</li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination
