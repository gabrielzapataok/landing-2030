window.onload = function(){
    let bg1 = document.getElementById('bg1')
    let bg2 = document.getElementById('bg2')
    window.addEventListener('scroll',function parallex(){
        bg1.style.top = `${window.pageYOffset * .6}px`
        bg2.style.top = `${window.pageYOffset * .4 - 500}px`
    });
}