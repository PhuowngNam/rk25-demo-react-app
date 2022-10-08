import React from "react";

export const BodyHorizontal = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            height: 100,
        }}>
            <div style={{
                width:300,
                backgroundColor: '#AAAAAA'
            }}>Column 1
            </div>
            <div style={{
                width:300,
                backgroundColor: '#BBBBBB'
            }}>Column 2
            </div>
            <div style={{
                width:300,
                backgroundColor: '#CCCCCC'
            }}>Column 3
            </div>
        </div>
    )
}