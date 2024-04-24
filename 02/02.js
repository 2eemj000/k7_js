// * document.addEventListener("DOMContentLoaded", ()=>{}); 틀 만들어놓고 시작 *
// 왼쪽 밑에 dom tree가 다 만들어지면 이벤트를 달아주겠다는 의미
// 괄호 뒤에 두번째 인수는 어떤 일을 할지, ()=>{} : 콜백함수
// document.addEventListener("DOMContentLoaded");는 method라서 ()로 표시
// document.querySelector('#msg').innerHTML = `<h1>안녕하세요 - "${n}"</h1>`;는 property라서 =으로 표시


document.addEventListener("DOMContentLoaded", ()=>{
    // 디버깅할 때 쓰이는 프린트문 (개발자도구>console창)
    console.log('DOM 완성');
    const msg = document.querySelector('#msg');
    const btDiv = document.getElementById('btDiv');
    // bt1이라는 버튼 요소 하나를 만듦 / const(상수선언 = 한번 만들면 안바뀌는 것) & let(변수선언)
    const bt1 = document.createElement("button");
    const bt1Txt = document.createTextNode('버튼11');


    // bt1에 대한 속성 추가 - bt1Txt를 자식노드로 붙인 것
    // bt1.setAttribute('id', 'bt11');
    // bt1.appendChild(bt1Txt);
    // btDiv.append(bt1);


    // bt2도 똑같이 만들기 -> 함수로 일반화해서 줄일 수 있음
    const btCreate=(bt, idTxt, captionNode, parentNode)=>{
        bt.setAttribute('id', idTxt);
        bt.appendChild(captionNode);
        parentNode.append(bt);
    }
    const bt2 = document.createElement("button");
    const bt2Txt = document.createTextNode('버튼21');
    btCreate(bt1, 'bt11', bt1Txt, btDiv);
    btCreate(bt2, 'bt21', bt2Txt, btDiv);
    // bt2.setAttribute('id', 'bt21');
    // bt2.appendChild(bt2Txt);
    // btDiv.append(bt2);


// bt1을 누르면 "안녕하세요" 띄우고, bt2를 누르면 사라지도록 설정
    bt1.addEventListener('click', ()=>{
        // id가 msg인 것을 불러옴, innerHTML은 속성이니까 =으로 표시
        // if (msg.innerHTML=='') {
            msg.innerHTML = '<h1>안녕하세요</h1>';
        // } else 
        //     msg.innerHTML='';
    });

    bt2.addEventListener('click', ()=>{
            msg.innerHTML='';
    });

});

