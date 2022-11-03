import React from 'react';

function WithMouse(Comp: any) {

    class HOC extends React.Component<any, any>{
        //logic
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
                      <Comp x={this.state.x} y={this.state.y}/>
                  </div>
                </>
            );
        }
    }

    return HOC;
}

export default WithMouse;