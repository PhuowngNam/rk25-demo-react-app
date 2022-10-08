import React from "react";

export const BodyVertical = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center'
        }}>
            <div style={{
                height: 100,
                backgroundColor: '#AAAAAA'
            }}>Column 1
            </div>
            <div style={{
                height: 100,
                backgroundColor: '#BBBBBB'
            }}>Column 2
            </div>
            <div style={{
                height: 100,
                backgroundColor: '#CCCCCC'
            }}>Column 3
            </div>
        </div>
    )
}