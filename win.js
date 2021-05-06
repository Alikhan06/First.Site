const btn = document.querySelector('.btn-danger')
const col = document.querySelectorAll('.col').value
console.log(col);

btn.addEventListener('click', e =>{
    e.preventDefault();

    const random = Math.floor(Math.random() * col)
    console.log(random);


})