import React from 'react'

export default function WithLog(Comp) {
    return class WithLogWrapper extends React.Component {
        componentDidMount() {
            console.log(`组件${Comp.name}被创建`);
        }
        componentWillUnmount() {
            console.log(`组件${Comp.name}将会被销毁`);
        }
        render() {
            return (
                <Comp {...this.props} />
            )
        }
    }
}
