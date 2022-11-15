document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth", block : "center"
        });
    },true);
});

function copyText(htmlElement){
    if (!htmlElement){
        return;
    }

    let elementText = htmlElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();


    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
    alert("Copied to ClipBoard");

}

document.querySelector('#PhoneBtn').onclick = function ()
{
    copyText(document.querySelector('#Phone'));
}

document.querySelector('#tgbtn').onclick = function ()
{
    copyText(document.querySelector('#tg'));
}