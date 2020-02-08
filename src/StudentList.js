import React, { Component } from 'react'
import Student from './Student'


export default class StudentList extends Component {
    render() {
        const students = this.props.students.map((item) => (<Student {...item} key={item.id} />));
        return (
            <ul>
                {students}
            </ul>
        )
    }
}
