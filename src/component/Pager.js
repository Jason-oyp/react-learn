import React from 'react'
import './pager.css'
export default function Pager(props) {
    if (props.total === 0) {
        return null;
    }
    const totalPages = Math.ceil(props.total / props.limit);
    if (props.current > totalPages) {
        return null;
    }
    const middlePages = getMiddlePages(props.current, props.planeNumber, totalPages).map((item, i) => {
        return (<span className={item === props.current ? "item active" : "item"}
            onClick={() => {
                props.onChangeCurrent(item);
            }}
            key={i}
        >{item}</span>)
    });

    return (
        <div className='pager'>
            <span className={props.current === 1 ? "item disabled" : "item"}
                onClick={() => {
                    props.onChangeCurrent(1);
                }}
            >首页</span>
            <span className={props.current === 1 ? "item disabled" : "item"}
                onClick={() => {
                    if (props.current !== 1) {
                        props.onChangeCurrent(props.current - 1)
                    }
                }}
            >上一页</span>


            {middlePages}



            <span className={props.current === totalPages ? "item disabled" : "item"}
                onClick={() => {
                    if (props.current !== totalPages) {
                        props.onChangeCurrent(props.current + 1);
                    }

                }}
            >下一页</span>
            <span className={props.current === totalPages ? "item disabled" : "item"}
                onClick={() => {
                    props.onChangeCurrent(totalPages);
                }}
            >尾页</span>
            <span>{props.current}/{totalPages}</span>
        </div >
    )
}

function getMiddlePages(current, planeNumber, totalPages) {
    let min = current - Math.floor(planeNumber / 2);
    if (min < 1) {
        min = 1;
    }
    let max = min + planeNumber - 1;
    if (max > totalPages) {
        max = totalPages;
    }
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}