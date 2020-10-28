document.querySelectorAll('[data-clipboard]').forEach(element => {
    element.addEventListener('click', event => {
        copyToClipboard(event.target.getAttribute('dara-clipboard'));
    });
});

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
