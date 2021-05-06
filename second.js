const newPeople = localStorage.getItem('people')
const cardBody = document.querySelector('.card-body')
window.addEventListener('load', () =>{
    const names = [];
    for(let i = 0; i < newPeople; i++){
        let input = document.createElement('input')
        input.classList.add('form-control')
        input.classList.add('mb-3')
        input.classList.add('pt-3')
        input.classList.add('pb-3')
     
        cardBody.appendChild(input);
        
        names[i] = [
            {
                names:input
            }
        ]
    }
})
            
const btn = document.querySelector('.btn-success')
btn.addEventListener('click' , e =>{
    e.preventDefault();

    if(input.value !== ''){
        window.open('win.html' , '_self')
        localStorage.setItem('names', JSON.stringify(firstName))
    }else if(input.value === ''){
        alert('Поля не должны быть пустыми')
    }
})    
// function input(){
    
//     if(newPeople > 2){
//         return `
//             <input class="form-control mb-3" type="text" placeholder="Имя участника">
//         `
//     }else{
//         return;
//     }
// }


// window.addEventListener('load' , ()=>{
//     const result = '';

//     for(let i = 0; i < newPeople;i++){
//         if(newPeople[i]){
//             return `
                // <input class="form-control mb-3" type="text" placeholder="Имя участника">
//             `
//         }
//     }
// })






// window.addEventListener('load' , () => {
//     const okno = localStorage.getItem('okno');
//     if(okno === 'true'){
//         return;
//     }else{
//         window.open('index.html' , '_self');
//     }
// });

// window.addEventListener('load' , () =>{
//     const okno = localStorage.getItem('okno');
//     if(!okno){
//         return;
//     }else if(okno === 'true'){
//         window.open('second.html','_self')
//     }
// })