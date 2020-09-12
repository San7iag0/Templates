const progressBar = document.querySelector('.progress');

const changeProgress = progress => {
    progressBar.style.width = `${progress}%`
}


// change progress after 1 second

setTimeout(() => changeProgress(22), 10000);

