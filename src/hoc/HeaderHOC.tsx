import React from 'react';

function HeaderHOC(OtherComponent: any) {
    class HOC extends React.Component<any, any> {
        render() {
            return (
                <>
                    <h1>Header</h1>
                    <OtherComponent {...this.props}/>
                </>
            );
        }
    }
    return HOC;
}

export default HeaderHOC;