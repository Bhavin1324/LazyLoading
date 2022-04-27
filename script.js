const options = {
    threshold: .5,
    rootMargin: "-20px",
}
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('fadeout-scale',entry.isIntersecting);
    })
},options)


let boxes = document.querySelectorAll('.box');
boxes.forEach(box=>{
    observer.observe(box);
})

//infinaite scrolling
let container = document.querySelector('.container');
const lastElementObserver = new IntersectionObserver(entries=>{
    const lastElem = entries[0];
    if(!lastElem.isIntersecting){return;}
    loadNewBox();
    lastElementObserver.unobserve(lastElem.target);
    lastElementObserver.observe(document.querySelector('.box:last-child'))
},options)
lastElementObserver.observe(document.querySelector('.box:last-child'));
function loadNewBox(){
    const elem = document.createElement('div');
    elem.classList.add('box');
    elem.textContent = 'New added BOX';
    container.append(elem);
    observer.observe(elem);
}