const html = document.documentElement

const documentHeight = () => {
    html.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

documentHeight();
window.addEventListener("resize", documentHeight);

function adjustFontSize() {
    var windowSize = window.innerWidth;
    var fontSize = 16
    if (windowSize >= 1920) {
        fontSize = windowSize / 120
    }

    if (windowSize <= 1500 && windowSize >= 1280) {
        fontSize = (-20790.545 / windowSize) + 29.860
    }

    if (windowSize < 1280 && windowSize >= 1024) {
        fontSize = (-10790.168 / windowSize) + 24.433
    }

    if (windowSize <= 375) {
        fontSize = (-4800 / windowSize) + 28.8
    }
    html.style.fontSize = fontSize + 'px';
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();

document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header')
    var scrolled = window.scrollY

    function doSomethingWithHeader() {
        if (scrolled >= header.clientHeight) {
            if (!html.classList.contains('header-scroll')) {
                html.classList.add('header-scroll')
            }
        } else {
            if (html.classList.contains('header-scroll')) {
                html.classList.remove('header-scroll')
            }
        }
    }
    doSomethingWithHeader()

    document.addEventListener('scroll', function () {
        scrolled = window.scrollY;
        doSomethingWithHeader()
    })
})

