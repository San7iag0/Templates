const onClick = event => {
    const button = event.target;

    const appendRipple = document.createElement('div');
    appendRipple.classList.add('ripple');

    const size = button.offsetWidth * 2 + 'px'
    appendRipple.style.height = appendRipple.style.width = size;

    const x = event.clientX - button.offsetLeft - button.offsetWidth;
    const y = event.clientY - button.offsetTop  - button.offsetWidth;

    appendRipple.style.left = x + 'px';
    appendRipple.style.top = y + 'px';

    button.appenChild(appendRipple);

    setTimeout(() => {
        button.removeChild(appendRipple);
    }, 600);
}

document.querySelectorAll( 'btn' ).forEach( button => {
    button.addEventListener( 'click', onClick );
});
 