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


document. addEventListener("DOMContentLoaded", ()=>{
    const updownimg = document.querySelector('#updownimg');
    const input = document.querySelector('#txt1');
    const bt = document.querySelector('#bt');
    
    //랜덤수
    let n ; 
    let flag = true ;

    //버튼을 누를때마다 랜덤수가 생성되면 안되니까 n을 if문 밖에서 미리 만들어야함!
    bt.addEventListener('click', (e)=>{
        //form 태그사용 시 다시 호출되지 않도록
        e.preventDefault();
        //!flag = false라면 (true면 랜덤값을 안만듦)
        if (flag){
            flag=false
            n= Math.floor(Math.random() * 100)+1; 
            console.log("n =", n);
        }
        
        //입력값 체크
        if (input.value==""){
            alert("값을 입력하세요 !");
            //다시 커서가 입력칸으로 돌아가도록 함
            input.focus();
            return ;
        }
    
        if (intput.value)

        console.log(n);
    });
});