// 1. DOM에서 이미지와 버튼을 가져오기 => DOM 생성이 된 후에
// 2. 버튼에 click이벤트를 만들기
// 3. 랜덤수 생성 (1~6) => Math.floor(Math.random() * 6)+1
// 4. 랜덤수에 해당하는 이미지를 이미지 src속성에 넣기

document.addEventListener("DOMContentLoaded", ()=>{
    // 1. DOM에서 이미지와 버튼을 가져오기 => DOM 생성이 된 후에
    const img = document.querySelector('#btDiv>img');
    const bt = document.querySelector('#btDiv>button');

    // 2. 버튼에 click이벤트를 만들기
    bt.addEventListener('click', ()=>{

    // 3. 랜덤수 생성 (1~6) => Math.floor(Math.random() * 6)+1
        const n = Math.floor(Math.random() * 6)+1;

    // 4. 랜덤수에 해당하는 이미지를 이미지 src속성에 넣기
        // 문자열 안에서 변수를 쓰고 싶을 때 백틱 문자열 사용 & 이미지파일명도 중요
        img.setAttribute('src',`./img/${n}.png`);
        // alt속성 : 개발자도구 name으로 나타남
        img.setAttribute('alt',`${n}`);
    });
});