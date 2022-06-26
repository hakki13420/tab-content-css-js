
const navLinks=document.querySelectorAll('.nav-link')
navLinks.forEach(link=>{
   
    link.addEventListener("click",(e)=>{
    
    navLinks.forEach(link=>{        
        link.parentNode.classList.remove('active')
    })
    e.target.parentNode.classList.toggle("active")
    const cible=document.querySelector('.tab-item#'+e.target.id)
    const allCibles=document.querySelectorAll('.tab-item')
    allCibles.forEach(item=>{
        console.log(item)
        item.classList.remove('active')
    })
    cible.classList.add('active')
})
}
)