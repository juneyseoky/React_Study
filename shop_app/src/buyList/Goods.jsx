import React from 'react';

function Goods(props) {
    return (
        <div>
            <span>{`${props.name} ${props.num}개 ${props.priceSum}원`}</span>
        </div>
    )
}

export default Goods;