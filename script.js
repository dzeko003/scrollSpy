const activate = function (element){
    const id = element.getAttribute('id')
    const anchor = document.querySelector(`a[href='#${id}']`)

}


/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 * @param {IntersectionObserver} observer 
 */
const callback = function (entries, observer){
console.log(entries);

entries.forEach( function (entry){
    if(entry.intersectionRatio > 0){
        activate(entry.target);
    }
})
}


const spies = document.querySelectorAll('[data-spy]')

if(spies.length > 0){

    const observer = new IntersectionObserver(callback , {})

    spies.forEach(function (spy){
        observer.observe(spy);
    })
}