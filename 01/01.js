function handleClick(n){
    // document.querySelector('#msg').innerHTML = '<h1>안녕하세요!</h1>';
    // 매개변수 사용해서 구분 & ``-> 백틱문자열 & ${변수}
    document.querySelector('#msg').innerHTML = `<h1>안녕하세요 - "${n}"</h1>`;
}

// // dom이 렌더링된 후에 제어
document.addEventListener("DOMContentLoaded", ()=>{
    // // document.getElementById('msg').innerHTML = '안녕하세요.' ;(아래랑 다른 방법으로)
    // document.querySelector('#msg').innerHTML = '<h1>안녕하세요</h1>';
});

