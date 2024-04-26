/*
1. DOM에서 제어할 노드를 가져오기
2. 버튼이 눌러지면 
    [확인 버튼일때]
        - 랜덤수 생성 -> 랜덤수(1~100)는 다시 하기 전까지 변경되면 안됨
        - input 박스 값이 없으면 '값을 입력하세요' 메시지를 출력
        - input 박스 값이 1에서 100 사이 숫자가 아니면 '입력오류' 메시지를 출력
        - input 박스 값이 랜덤수보다 작으면 up이미지
        - input 박스 값이 랜덤수보다 크면 down이미지
        - input 박스 값이 랜덤수와 같으면 good이미지
        - input이 보이지 않아야 함
        - 버튼의 캡션을 '숫자를 생성해주세요 !'로 변경
    [숫자를 생성해주세요 ! 버튼일때]
        - 초기화 : 랜덤수 새로 생성, input 박스 보이기
*/

// @ ~ 함수호출로 화면 이미지 바꾸기 -> 한번 맞추고 이미지 다시 바꿔줄 때 함수 활용할 수 있음
// 위에서 showImg 함수 정의만 해줌
const showImg = (imgName) => {
    updownimg.setAttribute('src', `./img/${imgName}.png`) ;
    updownimg.setAttribute('alt', `${imgName}`) ;
  }

document. addEventListener("DOMContentLoaded", ()=>{
    const updownimg = document.querySelector('#updownimg');
    const input = document.querySelector('#txt1');
    const bt = document.querySelector('#bt');
    
    //랜덤수
    let n ; 
    let flag = true ;
    let imgName ;

    //버튼을 누를때마다 랜덤수가 생성되면 안되니까 n을 if문 밖에서 미리 만들어야함!
    bt.addEventListener('click', (e)=>{
        //form 태그사용 시 다시 호출되지 않도록
        e.preventDefault();
        //"If (!flag)"는 flag가 false라면을 의미 (true면 랜덤값 만들고 false면 안만듦)
        if (flag){
            flag=false
            n= Math.floor(Math.random() * 100)+1; 
            console.log("n =", n);
            // -----맞추고 다시 시작했을 때, 이미지 바꿔주고
            updownimg.setAttribute('src',`./img/what.png`);
            updownimg.setAttribute('alt','what');
            // @ 이때, 함수활용하려면 showImg('what')
            // -----input.style.display가 다시 보이도록 none을 지워줘야함
            input.style.display = 'inline';
            bt.textContent = '확인';
        }
        
        //입력값 체크
        if (input.value==""){
            alert("값을 입력하세요 !");
            //다시 커서가 입력칸으로 돌아가도록 함
            input.focus();
            return ;
        }

        //입력값 체크 : 1~100
        //parseInt 타입을 정수로 바꿔줌, ===은 타입까지 비교하는 연산자
        const user = parseInt(input.value);
        if (user>100 || user<0){
            alert('[입력오류] 1~100 사이의 숫자를 입력하세요');
            input.focus();
            return ; //함수를 종료하고 싶을 때 -> return을 만나면 if문을 벗어남
        }

        // - input 박스 값이 랜덤수보다 작으면 up이미지
        // - input 박스 값이 랜덤수보다 크면 down이미지
        // - input 박스 값이 랜덤수와 같으면 good이미지

        //변수(imgName)써서 공통된 내용 줄일 수 있음
        if (user<n) imgName = 'up';
        else if (user>n) imgName = 'down';
        else { //user와 n 값이 같을 때 입력칸이 사라짐
            imgName='good';
            input.style.display = 'none';
            bt.textContent = '숫자를 다시 생성해주세요' //까지만 하면 숫자가 다시 생성되지 않음
            flag = true; // 앞에 if문에서 flag값이 바껴야 다시 숫자 생성
        }

        if (imgName === 'up'|| imgName === 'down'){
        input.value = ''; //입력칸을 다시 빈칸으로 만들어줌
        input.focus(); //다시 커서가 입력칸으로 돌아가도록 함
        }

        updownimg.setAttribute('src',`./img/${imgName}.png`); //백틱문자열 사용
        updownimg.setAttribute('alt','${imgName}');
        // @ 위에서 정의한 함수 활용할 수도 있음
        input.value = "";
        console.log(user);
    });
});