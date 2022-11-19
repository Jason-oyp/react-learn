import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    componentWillReceiveProps(nextProps) {
        // 看看该生命周期能不能改属性值，no
        // console.log(nextProps.n = 5)
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 看看该生命周期能不能改属性值，no
        // console.log(nextProps.n = 7, nextState)
        return true
    }
    render() {
        return (
            <>
                <div>旧版生命周期</div>
                <div>属性：{this.props.n}</div>
            </>

        )
    }
}
