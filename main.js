window.addEventListener(("scroll"),()=>{
    document.querySelector("Home h1").style.marginTop = `${window.scrollY}px`
    document.querySelector("Mountain1").style.marginBottom = `${window.scrollY}px`
    document.querySelector("leftCloud").style.marginLeft = `${window.scrollY}px`
    document.querySelector("mainCloud").style.marginTop = `${window.scrollY}px`
    document.querySelector("rightCloud")`${window.scrollY}px`
})