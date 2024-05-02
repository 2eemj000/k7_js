document.addEventListener('DOMContentLoaded', () => {
    const bt11 = document.querySelector('#bt11');
    const div81 = document.querySelector('#div81');

    bt11.addEventListener('click', (e) => {
        e.preventDefault();
        let arr = [];
        //언제끝날지 모를때는 while반복문
        while (arr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (!arr.includes(n)) arr.push(n)
        }
        // map안에는 콜백함수
        let tags = arr.map((item) => {
            return `<span class="sp${Math.floor(item / 10)}">${item}</span>`;
        });

        // 배열 중간 추가
        tags.splice(6, 0, '<span class="plus">+</span>');

        // 배열 문자열 만들기
        tags = tags.join('');
        div81.innerHTML = tags;
        console.log(tags)
    });
});