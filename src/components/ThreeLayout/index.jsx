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
            }
        }
    }
    render() {
        const props = Object.assign({}, this.state.defaultProps, this.props)
        return (
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
        )
    }
}
