
const clickButton = document.querySelectorAll('.button');
const docBody = document.querySelector('body');

clickButton.forEach(function(button){
    button.addEventListener('click', function(event){
     
        switch (event.target.id) {
            case 'cyan':
                docBody.style.backgroundColor = event.target.id
                break;

            case 'red':
                docBody.style.backgroundColor = event.target.id
                break;

            case 'blue':
                docBody.style.backgroundColor = event.target.id
                break;

            case 'orange':
                docBody.style.backgroundColor = event.target.id
                break;
        
            default:
                break;
        }

    })
})