document.addEventListener('DOMContentLoaded', ()=>{
const txt1 = document.querySelector('#txt1');
const bt81 = document.querySelectorAll('.bt81');
const bt82 = document.querySelectorAll('.bt82');
const bt83 = document.querySelectorAll('.bt83');

// 반복문으로 EventListener 4번 실행
// 젤 먼저 배열 선언해줘야 함
let arr = [];

// @ -- if문 없이 하려면 object 활용
let obj = {
    '사과' : '🍏',
    '바나나' : '🍌',
    '오렌지' : '🍊',
    '수박' : '🍉',
    '당근' : '🥕',
    '오이' : '🥒',
    '아보카도' : '🥑',
    '브로콜리' : '🥦',
}
// 버튼 첫째줄 ! 배열추가
    for (let bt of bt81){
        bt.addEventListener('click', (e)=>{
            e.preventDefault();
            console.log(bt.textContent)
            
            // if (bt.textContent == '사과') arr.push('🍏');
            // else if (bt.textContent == '바나나') arr.push('🍌');
            // else if (bt.textContent == '오렌지') arr.push('🍊');
            // else if (bt.textContent == '수박') arr.push('🍉');

// @ -- if문 없이 하려면 object 활용
            arr.push(obj[bt.textContent]);

            txt1.value = arr.join(' ');
        });
    }
    
// 버튼 둘째줄 ! 배열삭제
for (let bt of bt82){
    bt.addEventListener('click', (e)=>{
        e.preventDefault();
        
        console.log(arr);
        // " 지우기"라는 글자를 없애야 인식
        console.log(obj[bt.textContent.replace(' 지우기','')]);
        
        // 배열 필터의 개념
        // k 변하지 않을 거니까 let말고 const로 변수만들기
        const k = obj[bt.textContent.replace(' 지우기','')];
        arr = arr.filter((item)=>{return item != k});
        // return말고 다른 식없을 때는 return 생략가능, 이때, 중괄호도 같이 삭제
        // arr = arr.filter(item=>item != k); -> 같은 의미, 여기에 return이 있다는거 알아야함

        txt1.value = arr.join(' ');
    });
    }

// 버튼 셋째줄 ! 바꾸기
for (let bt of bt83){
    bt.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(bt.textContent.split('→'));
        
        let tm = bt.textContent.split('→');
        arr = arr.map((item)=>{
            console.log(item, obj[tm[0]])
            // 삼항연산자 (조건) ?  (조건이 참일 때 결과) : (조건이 거짓일 때 결과)
            return item == obj[tm[0]] ? obj[tm[1]] : item;
        });
        // return 생략가능
        // arr = arr.map(item => item == obj[tm[0]] ? obj[tm[1]] : item);

        txt1.value = arr.join(' ');
    });
    }
});