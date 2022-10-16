import React from "react";

export type CategoryType = {
    code: string,
    cateName: string
}

export type ProductType = {
    id: string,
    name: string,
    description: string,
    status: string
}

export type DataContextType = {
    data: {
        categoryList: CategoryType[],
        productList: ProductType[],
    }

}

export const defaultDataContext: DataContextType = {
    data: {
        categoryList: [],
        productList: [],
    }
}

export const DataContext = React.createContext<DataContextType>(defaultDataContext);