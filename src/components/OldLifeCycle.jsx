import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    state = {
        n: 1
    }
    // componentWillReceiveProps(nextProps) {
    //     // 看看该生命周期能不能改属性值，no
    //     console.log(Object.isFrozen(nextProps))
    // }
    shouldComponentUpdate(nextProps, nextState) {
        // 看看该生命周期能不能改属性值，no
        // console.log(nextProps.n = 7, nextState)
        return true
    }
    getSnapshotBeforeUpdate(props, state) {
        console.log('get', props, state)
        return null
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
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
