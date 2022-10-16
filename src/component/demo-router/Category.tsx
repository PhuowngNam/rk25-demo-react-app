import React from 'react';
import {Link, useParams} from "react-router-dom";
import {DataContext} from '../../context/DataContext';

const Category = (props: any) => {
    const param = useParams();
    return (
        <DataContext.Consumer>
            {
                context => {
                    const category = context.data.categoryList.filter(c => c.code === param?.code);
                    return (
                        <>
                            {context.data.categoryList.map(category => {
                                return (
                                    <li>
                                        <Link to={`/category/${category.code}`}>
                                            {category.cateName}
                                        </Link>
                                    </li>
                                )
                            })}
                            {category.length !== 0 &&
                            <h3>code: {category[0].code} - name: {category[0].cateName}</h3>}
                        </>
                    )
                }
            }
        </DataContext.Consumer>
    );
}

export default Category;