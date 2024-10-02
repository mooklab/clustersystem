

const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        // entry.isIntersecting ? entry.target.classList.add('animate') : entry.target.classList.remove('animate')
        if (entry.isIntersecting) {
            entry.target.classList.add('animate')
        } else {
            entry.target.classList.contains('loop') && entry.target.classList.remove('animate')
        }
        
    })
}, {
    rootMargin: '0px 0px -10% 0px'
})

var animateElements = document.querySelectorAll('.observe, h1, h2, h3')
animateElements.forEach( element => observer.observe(element))