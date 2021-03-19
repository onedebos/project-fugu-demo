const supported = ('contacts' in navigator && 'ContactsManager' in window);
const selectContactBtn = document.getElementById('select-contact')
// details about a contact we wish to get
const props = ['name', 'email', 'tel'];
// allows a user select multiple contacts by holding down
const opts = {multiple: true};

if(!supported){
    selectContactBtn.classList.add('hidden')
    const messages = document.querySelectorAll('.not-supported-message')
    messages.forEach((message)=> message.classList.remove('hidden'))
}

selectContactBtn.addEventListener('click', async ()=>{
    try {
        const contacts = await navigator.contacts.select(props, opts);

        renderResults(contacts);
      } catch (ex) {
        // Handle any errors here.
      }    
})
  
const ul = document.getElementById('results')

function renderResults(contacts){

    contacts.forEach(contact =>{
        const li = document.createElement('li')
        if(contact.name) li.innerHTML += `<b>Name</b>: ${contact.name} <br />`
        if(contact.email) li.innerHTML += `<b>E-mail</b>: ${contact.email.join(', ')} <br />`
        if(contact.tel) li.innerHTML += `<b>Tel</b>: ${contact.tel.join(', ')} <br />`
        
        li.classList.add('mt-3')

        ul.appendChild(li)
    })
}

