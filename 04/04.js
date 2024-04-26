/*
1. DOM에서 제어할 노드를 가져오기 => DOM이 생성된 후에
    (1번 이미지, 2번 이미지, 버튼 6개, 결과창 가져오기)

2. 6개 버튼에 click을 확인

3. 버튼 클릭이 되면 
    - 해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자가 됨(user) => 해당하는 이미지로 변경
    - 랜덤수를 생성 => 컴퓨터 숫자로 지정(com) => 해당하는 이미지로 변경
    - user와 com 숫자를 비교
    - 메세지에 결과 출력
*/

document.addEventListener("DOMContentLoaded", ()=>{
        // 1. DOM에서 제어할 노드를 가져오기 => DOM이 생성된 후에
        // 아래 두개 같은 의미 (selector 쓰는 방식 알기*)
        const comImg = document.getElementById('com');
        const userImg = document.querySelector('#user');
        const msg = document.querySelector('#msg');
        // 6개 버튼을 한꺼번에 다 가져오려면 querySelectorAll 
        const bts = document.querySelectorAll('.bt4');
        // console.log(bts);

        // //반복문1
        // console.log('**반복문1**')
        // for(let i = 0; i < bts.length ; i++) {
        //   console.log(bts[i])
        // }

        // //반복문2
        // console.log('**반복문2**');
        // for(let i in bts) {
        //   console.log(bts[i])
        // }

        // //반복문3
        // console.log('**반복문3**');
        // bts.forEach(bt => {
        //   console.log(bt)
        // })

        // //반복문 4
        // console.log('**반복문4**');
        // for (let bt of bts) {
        //   console.log(bt)
        // }
        // for (let [i,bt] of bts.entries()) {
        //   console.log(i, bt)
        // }

        // 2. 6개 버튼에 click을 확인 (반복문으로 버튼 6개를 각각 가져옴)
        for (let bt of bts){
            bt.addEventListener('click',()=>{
    //   3. 버튼 클릭이 되면 
    //     - 해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자가 됨(user) => 해당하는 이미지로 변경
    //     - 랜덤수를 생성 => 컴퓨터 숫자로 지정(com) => 해당하는 이미지로 변경
    //     - user와 com 숫자를 비교
    //     - 메세지에 결과 출력

            // "n선택"에서 0부터 시작해서 1앞까지의 숫자만 떼어내기
            // console.log(bt.textContent.slice(0,1))
            // 사용자 숫자 만들기 : 위에 그 수를 정수로 바꾸기
            const user = parseInt(bt.textContent.slice(0,1));
            // 컴퓨터 숫자 만들기 : 1~6 랜덤수 생성 (소수점 버리기)
            const com = Math.floor(Math.random() * 6)+1;
            // com이미지, user이미지 바꾸기
            comImg.setAttribute('src',`../03/img/${com}.png`);
            comImg.setAttribute('alt',`computer num ${com}`);
            userImg.setAttribute('src',`../03/img/${user}.png`);
            userImg.setAttribute('alt',`user num ${user}`);

            if (com==user) msg.innerHTML = '< 맞음 >';
                else msg.innerHTML = '< 틀림 >';
            
            });
        }
       
});
