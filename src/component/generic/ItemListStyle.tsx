import React from "react";

export const ItemListStyle = (props: any) => {
    return (
        <>
            <div style={{
                color: "red"
            }}>
                {props.children}
            </div>
        </>
    )
}