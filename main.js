window.addEventListener(("scroll"),()=>{
    document.querySelector("#LogoCloud").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("#Mountain1").style.marginBottom = `${106 - window.scrollY}px`
    document.querySelector("#leftCloud").style.marginLeft = `-${window.scrollY}px`
    document.querySelector("#mainCloud").style.marginTop = `-${window.scrollY}px`
    document.querySelector("#rightCloud").style.marginRight =`-${window.scrollY}px`
    document.querySelector("#hamsterCloud").style.marginTop =`-${window.scrollY}px`
    document.querySelector("#hamsterCloud2").style.marginTop =`-${window.scrollY * 3.2}px`
})