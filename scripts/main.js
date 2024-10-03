const tabsBlocks = document.querySelectorAll('div.tabs')
tabsBlocks.forEach( tabBlock => {
    let tabCaptionsSlider = new Swiper(tabBlock.querySelector('div.swiper.tabs_captions'), {
        slidesPerView: 'auto',
        spaceBetween: 40,
        slideToClickedSlide: true
    })
    
    let tabContensSlider = new Swiper(tabBlock.querySelector('div.swiper.tabs_contents'), {
        autoHeight: true,
        spaceBetween: 30,
        thumbs: {
            swiper: tabCaptionsSlider
        },
        hashNavigation: {
            watchState: true,
        },
        on: {
            slideChange: function () {
                const currentSlide = this.slides[this.realIndex]
                const coordinate = currentSlide.getAttribute('data-coordinate')
                setTimeout( function () {
                    map.panTo( JSON.parse( coordinate ) ).then(function(){
                        map.setZoom( 15 )
                    })
                }, 500)
            }
        }
    })
    
    tabContensSlider.on('slideChange', () => { tabCaptionsSlider.slideTo(tabContensSlider.activeIndex) })
    tabCaptionsSlider.on('slideChange', () => { tabContensSlider.slideTo(tabCaptionsSlider.activeIndex) })
    tabContensSlider.on('click', () => {
        setTimeout(() => {
            tabContensSlider.updateAutoHeight(1000)
        }, 500)
    })
})

new Swiper('section.projects div.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    initialSlide: 1,
    navigation: {
        prevEl: document.querySelector('section.projects div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.projects div.swiper-navigation > *:last-child')
    },
    pagination: {
        el: document.querySelector('section.projects div.swiper-pagination'),
        clickable: true
    }
})

new Swiper('section.continuity div.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        prevEl: document.querySelector('section.continuity div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.continuity div.swiper-navigation > *:last-child')
    },
    pagination: {
        el: document.querySelector('section.continuity div.swiper-pagination'),
        clickable: true
    }
})

new Swiper('section.gallery div.swiper', {
    slidesPerView: 1,
    navigation: {
        prevEl: document.querySelector('section.gallery div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.gallery div.swiper-navigation > *:last-child')
    },
    pagination: {
        el: document.querySelector('section.gallery div.swiper-pagination'),
        clickable: true
    },
    on: {
        init: handleSlideChange,
        transitionEnd: handleSlideChange
    }
})

new Swiper('section.about div.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        prevEl: document.querySelector('section.about div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.about div.swiper-navigation > *:last-child')
    },
    pagination: {
        el: document.querySelector('section.about div.swiper-pagination'),
        clickable: true
    }, 
    breakpoints: {
        640: {
            slidesPerView: 2
        }
    }
})

function handleSlideChange (swiper) {
    var currentSlide = this.realIndex + 1
    var totalSlides = this.slides.length
    var counterCurrent = document.querySelector('section.gallery div.counter span.current')
    var counterTotal = document.querySelector('section.gallery div.counter span.total')

    counterCurrent.innerHTML = currentSlide.toString().padStart(2, '0')
    counterTotal.innerHTML = '/ ' + totalSlides.toString().padStart(2, '0')
}

const tags = document.querySelectorAll('small.tag')
window.addEventListener('scroll', event => {

    imageEl = document.querySelector('section.what div.image')
    if( imageEl.getBoundingClientRect().top < 0 ) {
        
        // imageEl.offsetHeight
        percents = Math.abs( imageEl.getBoundingClientRect().top / ( imageEl.offsetHeight / 200 ) )
        imageEl.classList.add('show')

        tags.forEach( (tag, index) => {
            tag.classList.remove('show')
            if ( percents < 33 ) {
                ( index == 0 || index == 1  ) && tag.classList.add('show')
            }
            if ( percents > 33 && percents < 66 ) {
                ( index == 2 || index == 3 ) && tag.classList.add('show')
            }
            if ( percents > 66 ) {
                ( index == 4 || index == 5 ) && tag.classList.add('show')
            }
        })

    } else {
        imageEl.classList.remove('show')
    }
})



// const imageElement = document.querySelector('section.what div.image')
// const scrollElement = document.querySelector('section.what div.scroll')
// const stickyElement = document.querySelector('section.what div.sticky')

// imageElement && imageElement.addEventListener('scroll', () => {
//     const height = imageElement.offsetHeight
//     const stickyOffsetTop = stickyElement.getBoundingClientRect().top - scrollElement.getBoundingClientRect().top
//     const tags = document.querySelectorAll('small.tag')


//     tags.forEach( (tag, index) => {
//         tag.classList.remove('show')
//         percents = stickyOffsetTop / (scrollElement.offsetHeight - height) * 100
//         if ( percents < 33 ) {
//             ( index == 0 || index == 1  ) && tag.classList.add('show')
//         }
//         if ( percents > 33 && percents < 66 ) {
//             ( index == 2 || index == 3 ) && tag.classList.add('show')
//         }
//         if ( percents > 66 ) {
//             ( index == 4 || index == 5 ) && tag.classList.add('show')
//         }
//     })
// })