import React from 'react';

function StyleHoc(OtherComponent: any) {
    class HOC extends React.Component<any, any> {
        render() {
            return <OtherComponent {...this.props} style={{ color: 'red' }}/>;
        }
    }
    return HOC;
}

export default StyleHoc;