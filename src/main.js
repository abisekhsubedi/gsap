console.log(gsap)
console.log(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

const tabItems = document.querySelectorAll('[data-element="sticky-tab-title"]');
const tabContents = document.querySelectorAll('[data-element="sticky-tab-content"]');
const scrollSection = document.querySelector('[data-element="sticky-tabs-scroll-section"]');


// set scroll section height to 100 x number of the viewport height units
scrollSection.style.height = `${100 * tabItems.length}vh`;

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: scrollSection,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    },
    defaults: {
        ease: 'none'
    }
})


// set all tabs content element height to 0 and first one to 100%
gsap.set(tabContents, {height: 0});
gsap.set(tabContents[0], {height: '100%'})

for(let i = 0; i < tabContents.length - 1; i++){
    tl
    .to(
        tabContents[i],
        { height: "0%"}
        )
    .to(
        tabContents[i+1],
        { height: "100%"},
        "<"
    );
}


const title = document.querySelector('.top-section');

// list of random emojis
const emojis = ['👋', '🍌', '🌶️', '⚡️', '😇', '🤯', '💀', '👻', '👽', '🤖', '🎃', '👾', '🤡', '👹', '👺', '🤠', '🤥', '🤓', '🤪', '🤫', '🤭', '🧐', '🤨', '🧐', '🤩', '🥳', '🤮', '🤯', '🤠', '🤥', '🤓', '🤪', '🤫', '🤭', '🧐', '🤨', '🧐', '🤩', '🥳', '🤮', '🤯', '🤠', '🤥', '🤓', '🤪', '🤫', '🤭', '🧐', '🤨', '🧐', '🤩', '🥳', '🤮', '🤯', '🤠', '🤥', '🤓', '🤪', '🤫', '🤭', '🧐', '🤨', '🧐', '🤩', '🥳', '🤮', '🤯', '🤠', '🤥', '🤓', '🤪', '🤫', '🤭', '🧐', '🤨', '🧐', '🤩', '🥳', '🤮', '🤯', '🤠', '🤥', '🤓', '🤪', '🤫', '🤭', '🧐', '🤨', '🧐', '🤩', '🥳', '🤮', '🤯', '🤠', '🤥', '🤓', '🤪', '🤫', '🤭', '🧐', '🤨', '🧐', '🤩', '🥳', '🤮', '🤯', '🤠'];

function getEmojiHTML(){
    let html = ''   ;
    for (let i = 0; i < emojis.length; i++){
        html += `<span class="emoji" data-index=${i}>${emojis[Math.floor(Math.random() * emojis.length)]}</span>`

        if(i === 5){
        break;
        }
    }
    return html;
}
title.insertAdjacentHTML('beforeend',getEmojiHTML());

const changeEmoji = () => {
        const spans = document.querySelectorAll('.emoji');
        let rand1 = Math.floor(Math.random() * emojis.length);
        let rand2 = Math.floor(Math.random() * 5);
        console.log(emojis[rand1])
        console.log(spans[rand2]);

        spans[rand2].textContent = emojis[rand1];

}
setInterval(() => {
    changeEmoji()
}, 1200);
// requestAnimationFrame(changeEmoji)
