import React from 'react'

export default function Student(prop) {
    return (
        <li>
            <p>【姓名】{prop.name} </p>
            <p>【邮箱】{prop.email} </p>
            【性别】{prop.sex === 1 ? "男" : "女"}
        </li>
    )
}
