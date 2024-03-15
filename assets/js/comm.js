document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(Flip);

    const doFlipR = (e) => {
        const cardParent = e.target.closest('.venues-wrap');
        const flipCards = document.querySelectorAll('.rightt.picture,.rightt.behind')
        // const state = Flip.getState(flipCards);
        const states = Array.from(flipCards).map(card => Flip.getState(card));


        // 카드의 부모 요소에 'hoverR' 클래스를 토글
        cardParent.classList.toggle('hoverR');

        // states.forEach(state => {
        //     Flip.from(state, {
        //         duration: 0.5,
        //         ease: 'power1.inOut',
        //     });
        // });
        flipCards.forEach((card, index) => {
            Flip.from(states[index], {
                duration: 0.5,
                ease: 'power1.inOut',
            });
        });
    };

    const clickBtnsR = document.querySelectorAll('.change-button');

    // 모든 버튼에 이벤트 핸들러 등록
    clickBtnsR.forEach(btn => {
        btn.addEventListener('click', doFlipR);
    });

    const doFlipL = (e) => {
        const cardParent = e.target.closest('.venues-wrap');
        const flipCards = document.querySelectorAll('.leftt.picture,.leftt.behind')
        // const state = Flip.getState(flipCards);
        const states = Array.from(flipCards).map(card => Flip.getState(card));


        // 카드의 부모 요소에 'hoverR' 클래스를 토글
        cardParent.classList.toggle('hoverL');

        // states.forEach(state => {
        //     Flip.from(state, {
        //         duration: 0.5,
        //         ease: 'power1.inOut',
        //     });
        // });
        flipCards.forEach((card, index) => {
            Flip.from(states[index], {
                duration: 0.5,
                ease: 'power1.inOut',
            });
        });
    };

    const clickBtnsL = document.querySelectorAll('.change-button');

    // 모든 버튼에 이벤트 핸들러 등록
    clickBtnsL.forEach(btn => {
        btn.addEventListener('click', doFlipL);
    });

    // 스크롤 트리거 배경색 바꾸기
    gsap.registerPlugin(ScrollTrigger)

    const sections = document.querySelectorAll('.page-section')

    gsap.utils.toArray(sections).forEach((item)=>{
        let color = item.getAttribute('data-bgcolor')

        ScrollTrigger.create({
            trigger : item,
            start : "top 50%",
            end : "bottom 5%",

            onEnter : () => gsap.to('body',{
                backgroundColor : color,
                duration : .4
            }),
            onEnterBack : () => gsap.to('body',{
                backgroundColor:color,
                duration :.4
            })
        })
    })

    // 스크롤 트리거 타이틀 텍스트 바꾸기
    const onText = [
        {id : '#Department'},
        {id : '#Venues'},
        {id : '#Archive'}

    ]
    const changeText = [
        {id : '#department'},
        {id : '#venues'},
        {id : '#archive'}
    ]

    // map함수로 id값 추출하기
    const onTextId = onText.map(item => item.id);
    const changeTextId = changeText.map(item => item.id);

    onTextId.forEach((id, index) => {

        const onChangeText = document.querySelector(id);
        const changeID = document.querySelector(changeTextId[index]);

        ScrollTrigger.create({
            trigger: onChangeText,
            start: "top 50%",
            bottom : "bottom 5%", 
            onLeave: () => {
                gsap.to(changeID, { opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
                gsap.to(changeID, { opacity: 0, duration: 0.5 });
            },
            
        });
    });
    


});
