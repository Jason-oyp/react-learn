import React, { Component } from 'react'
import './index.css'

export default class ThreeLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultProps: {
                leftWidth: '200px',
                rightWidth: '200px',
                minWidth: '800px'
            },
            n: 1
        }
    }
    handleCLick() {
        this.setState({
            ...this.state,
            n: this.state.n + 1
        }, () => {
            console.log(this.state.n)
        })

        this.setState((cur) => {
            console.log(this.state === cur)
            return {
                ...this.state,
                n: cur.n + 1
            }
        })
    }
    render() {
        const props = Object.assign({}, this.state.defaultProps, this.props)
        return (
            <>
                <div>{this.state.n}</div>
                <button onClick={() => {
                    this.handleCLick()
                }}>n + 1</button>
                <div className='layout' style={{
                    minWidth: props.minWidth
                }}>
                    <div className="main">
                        {props.children}
                    </div>
                    <div
                        className="aside-left"
                        style={{
                            width: props.leftWidth
                        }}
                    >
                        {props.left}
                    </div>
                    <div
                        className="aside-right"
                        style={{
                            width: props.rightWidth
                        }}
                    >
                        {props.right}
                    </div>
                </div>
            </>
        )
    }
}
