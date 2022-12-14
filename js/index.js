let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })

}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider
document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)
// enable slide when mouse leave out
document.querySelector('.slider').addEventListener('mouseover', () => slide_play = true)

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})
document.querySelector('.slide-prevs').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

setInterval(() => {
    if (!slide_play) return
    nextSlide()
    showSlide()
}, 3000)

let products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: './image/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './image/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: './image/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2:'./image/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400', 
        curr_price: '300'

    },
    {
        name: 'UA Project Rock',
        image1: './image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png', 
        image2: './image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '400',
        curr_price: '300'

    },
    {
        name: 'JBL Endurance SPRINT',
        image1: './image/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
        image2: './image/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
        old_price:'400',
        curr_price: '300'


    },
    
    {
        name: 'JBL_TUNE220TWS',
        image1: './image/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './image/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        old_price:'400',
        curr_price: '300'
    }
    ,{
        name: 'E1_FW19_EarbudsWCase',
        image1: './image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price:'400',
        curr_price: '300'
    },
    {
        name: 'JBLHorizon_001',
        image1: './image/JBLHorizon_001_dvHAMaster.png',
        image2: './image/JBLHorizon_BLK_002_dvHAMaster.webp',
        old_price:'400',
        curr_price: '300'
    }


]
let product_list = document.querySelector('#latest-products')
let best_prodcut_list = document.querySelector('#best-products')
products.forEach(e => {
    let prod = `
    <div class="col-3 col-md-6 col-sm-12">
    <div class="product-card">
        <div class="product-card-img">
            <img src="${e.image1}" alt="">
            <img src="${e.image2}" alt="">
        </div>
        <div class="product-card-info">
            <div class="product-btn">
                <button class="btn-flat btn-hover btn-shop-now">Shop now</button>
                <button class="btn-flat btn-hover btn-cart-add">
                    <i class='bx bxs-cart-add'></i>
                </button>
                <button class="btn-flat btn-hover btn-cart-add">
                    <i class='bx bxs-heart'></i>
                </button>
            </div> 
            <div class="product-cart-name">
                ${e.name}
            </div>
            <div class="product-card-price">
                <span>
                    <del>${e.old_price}</del>
                </span>
                <span class="curr-price">${e.curr_price}</span>
            </div>
        </div>
    </div>
</div>
    `
    product_list.insertAdjacentHTML("beforeend", prod)
    best_prodcut_list.insertAdjacentHTML("afterbegin", prod)
})