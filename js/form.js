const form = document.querySelector('.add-order__form')
console.log(form)
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const formData = new FormData(form);
    let response = await fetch('sendmail.php', {
        method: 'POST', 
        body: formData
    })
    if(response.ok){
        let result = await response.json();
        alert(result.message);
        form.reset();
    }else{
        alert('Ошибка')
    }
})