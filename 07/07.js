document.addEventListener('DOMContentLoaded',()=>{
const txt1 = document.querySelector('#txt1');
const txt2 = document.querySelector('#txt2');
const bts = document.querySelectorAll('.bt7');
// querySelectorAll 할때는 id 하나로 가져오면 한개라고 인식해버림


// #1 회문확인
// 배열이니까 가져올 수 있음
bts[0].addEventListener('click',(e)=>{
    console.log(bts)
    // 다시 되돌아가지 못하게
    e.preventDefault();

    // 글자를 배열로 가져올 수 있음
    // replace(" ",'') : 띄어쓰기 무시하기
    // replaceAll(' ','') : 모든 띄어쓰기 무시하기
    let t1 = txt1.value.replaceAll(' ','').split('');
    console.log(t1)
    // 아래처럼 전개연산자로도 가능
    // let t1 = [...txt1.value];
    let t2 = [];
    for(let i=t1.length-1 ; i>=0 ; i--) {
        t2.push(t1[i])
    }


    //@ -- 비교1 : 문자열 (*join()만 하면 default로 쉼표로 구분됨)
    t1 = t1.join('');
    t2 = t2.join('');
    if (t1==t2) txt2.value = '회문입니다';
    else txt2.value = '회문이 아닙니다';

    //@ -- 비교1-2 : 문자열 (reverse)
    // let t1 = txt1.value;
    // let t2 = txt1.vlaue.replace(" ",'').split('').reverse().join('');

    //@ -- 비교2 : 배열
    // for(let i=0 ; i<t1.length ; i++){
    //     if(t1[i]!=t2[i]){
    //         txt2.value='회문이 아닙니다';
    //         break;
    //     } else {
    //         txt2.value='회문입니다';
    //     }
    // }

    console.log(t1,t2);
    });

// #2 숫자합계
bts[1].addEventListener('click',(e)=>{
    e.preventDefault();

    // 1. split 활용
    // let t1 = txt1.value.replace(" ",'').split('');

    // for(let i=0 ; i<t1.length ; i++){
    //     console.log(t1);
    //     if(t1[i]>=0 && t1[i]<=9){
    //        sum=sum+parseInt(t1[i]);
    //     }
    //     txt2.value = sum;
    // }

    // 2. of 연산자 활용하면 한개씩 접근가능
    // total 변수 초기화
    total=0;
    for(let c of txt1.value){
        if (c>='0' && c<=9){
            total = total + parseInt(c);
        }
        // isNaN() 활용 (*isNaN() : 유효한 숫자 값에 대해 False를 반환)
        // if (!isNaN(c)){
        //     total = total + parseInt(c);
        // }
    }
    txt2.value = total;
    });
});