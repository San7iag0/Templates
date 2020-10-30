// method to 

function copy(){

    let copyText = document.getElementById('inp');

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand('copy');

}

document.getElementById('btn').onclick = function(){
    copy();
}
