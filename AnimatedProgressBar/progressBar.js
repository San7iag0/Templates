const progressBar = document.querySelector('.progress');

const changeProgress = progress => {
    progressBar.style.width = `${progress}%`
}


// change progress after 1 second

setTimeout(() => changeProgress(22), 10000);
setTimeout(() => changeProgress(46), 10000);
setTimeout(() => changeProgress(60), 10000);
setTimeout(() => changeProgress(80), 10000);
setTimeout(() => changeProgress(96), 10000);
setTimeout(() => changeProgress(100), 10000);
