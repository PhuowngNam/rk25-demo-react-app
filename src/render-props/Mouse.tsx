import React, {Component} from 'react';

class Mouse extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    private handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        return (
            <>
                <div onMouseMove={e => this.handleMouseMove(e)}>
                    {/*cach 1: render-prop*/}
                    {/*{this.props.render(this.state)}*/}
                    {this.props.children(this.state)}
                </div>
            </>
        );
    }
}

export default Mouse;