const PopDiv=document.createElement('div');
PopDiv.id="PopDiv";
document.body.appendChild(PopDiv)

const images = document.querySelectorAll('.hellox');
images.forEach((image) => {
    image.addEventListener('click', () => {
        PopDiv.classList.add('active');
        const imag = document.createElement('img');
        imag.src = image.src;
        while (PopDiv.firstChild) {
            PopDiv.removeChild(PopDiv.firstChild);
        }
        PopDiv.append(imag);
    });
    PopDiv.addEventListener('click', () => {
        PopDiv.classList.remove('active');
    });
});