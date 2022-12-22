let spc = document.querySelectorAll('button')
let span = document.querySelector('.blue')
let img = document.querySelector('.img')
let items = document.querySelectorAll('.item[data-p]')

// let plusNum1 = document.querySelector('#CS2')
// let plusNum2 = 3199
// let plusNum3 = document.querySelector('#price3')
// // let btn = document.querySelector('.white')

spc.forEach(item => {
    item.onclick = () => {
        spc.forEach(el => el.classList.remove('active'))
        
        item.classList.add('active')
        item.style.transition = '1s ease'
        if(item.innerHTML === "Space Grey"){
            span.innerHTML = 'Space Gray'
            
            img.src = './assets/img/spacegray.png'
        } else{
            span.innerHTML = 'White'
            img.src = './assets/img/silver.png'
        }
    }
})




let prc = document.querySelector('.price')
let org_price = 1999

function setPrice(params){
    params = params.toString()
    prc.innerHTML = `$${params.slice(0,1)},${params.slice(1)} `
}

setPrice(org_price)

for(let item of items){
     item.onclick = () => {    
        items.forEach(el => el.classList.remove('activeTwo'))

        item.classList.add('activeTwo')
        let num = +item.getAttribute('data-p')
        setPrice(num + org_price)
    }    
}    














// btn.onclick = () => {
//     span.innerHTML= 'White' 
//     img.src = './assets/img/silver.png'
//     btn.classList.add('active')
    
// }