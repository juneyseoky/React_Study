import React from "react";

function Book(props) {

    return (
        // 하나의 Block 요소로 감싸야 됨
        <div>
            <h1>{`도서명 : ${props.name}`}</h1>
            <h1>{`페이지 정보 : ${props.numOfPage}`}</h1>
            <hr />
        </div>
    )
}

// 모듈명으로 다른 파일에서 사용가능함
export default Book; 