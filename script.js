
const ratio = .6

observer = null;

/**
 * 
 * @param {HTMLElement} element 
 * @returns 
 */
const activate = function (element){
    const id = element.getAttribute('id')
    const anchor = document.querySelector(`a[href='#${id}']`)

    if(anchor === null){
        return null
    }

    anchor.parentElement
        .querySelectorAll('.active')
        .forEach(node => node.classList.remove('active'))

    anchor.classList.add('active')
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

/**
 * 
 * @param {NodeListOf.<Element>} element 
 */
const observe = function (element) {

    if( observer !== null){
        element.forEach(elem => observer.unobserve(elem)){

        }
    }
    const y = Math.round(window.innerHeight * ratio)

    observer = new IntersectionObserver(callback , {
        rootMargin: `-${window.innerHeight - y -1}px 0px -${y}px 0px`
    })

    spies.forEach(function (spy){
        observer.observe(spy);
    })
}

if(spies.length > 0){
    observe(spies);

    window.addEventListener('resize', function() {
        observe(spies);
    })
}