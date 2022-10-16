import React from 'react';
import {DataContext} from '../../context/DataContext';
import {Link, useParams} from "react-router-dom";

function ProductList() {
    const params = useParams();

    return (
        <DataContext.Consumer>
            {
                context => {
                    return (
                        <div style={{
                            display: 'flex',
                            marginTop: '20px'
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#F0F0F0',
                                marginRight: '10px'
                            }}>
                                <h2>Products</h2>
                                {context.data.productList.map(product => {
                                    return (
                                        <Link to={`/product/${product.id}`}
                                              style={{
                                                  marginBottom: '10px'
                                              }}
                                        >
                                            {product.name}
                                        </Link>
                                    )
                                })}
                            </div>
                            <div>
                                <ProductDetail id={params.id}/>
                            </div>
                        </div>
                    )
                }
            }
        </DataContext.Consumer>
    );
}

const ProductDetail = ({id}: { id: string | undefined }) => {
    return (
        <DataContext.Consumer>
            {
                context => {
                    const products = context.data.productList.filter(item => item.id === id);
                    return (
                        <>
                            {products.length === 0 && <span>Please select a product.</span>}
                            {products.length != 0 && (
                                <div>
                                    <h2>{products[0].name}</h2>
                                    <p>{products[0].description}</p>
                                    <hr/>
                                    <h4>{products[0].status}</h4>
                                </div>
                            )}
                        </>
                    )
                }
            }
        </DataContext.Consumer>
    )
}
export default ProductList;