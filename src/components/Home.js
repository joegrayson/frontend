import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import MetaData from './layouts/MetaData'
import Product from './product/Product'
import Loader from './layouts/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { getProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const alert = useAlert();

    const dispatch = useDispatch();

    const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products)

    const { keyword } = useParams(); 

    //const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getProducts(keyword, currentPage));

    }, [dispatch, alert, error, keyword, currentPage])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'bili ka halaman boi'} />

                    <h1 id="products_heading">Succulent Plants</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">
                            {console.log(products)}
                            {products && products.map(product => (
                                <Product key={product.id} product={product} />
                            ))}

                        </div>
                    </section>


                    {resPerPage < productsCount && (
                        <div className="d-flex justify-content-center mt-5">
                        <Pagination activePage={currentPage}
                                    itemsCountPerPage={resPerPage}
                                    totalItemsCount={productsCount}
                                    onChange={setCurrentPageNo}
                                    nextPageText={'Next'}
                                    prevPageText={'Previous'}
                                    firstPageText={'First'}
                                    lastPageText={'Last'}
                                    itemClass="page-item"
                                    linkClass="page-link"
                        />  
                    </div>
                    )} 
                </Fragment>
            )}
        </Fragment>
    )
}

export default Home
