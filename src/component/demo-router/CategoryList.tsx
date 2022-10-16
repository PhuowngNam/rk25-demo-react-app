import React from 'react';
import {DataContext} from '../../context/DataContext';
import {Link} from "react-router-dom";

const CategoryList = (props: any) => {

    return (
        <DataContext.Consumer>
            {
                context => {
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
                        </>
                    )
                }
            }
        </DataContext.Consumer>
    );
}

export default CategoryList;