// <--------->NAVBAR--------->

const greenDiv = document.querySelector("#green");
const navSecond = document.querySelector(".two");
const toystore = document.querySelector("#toystoreLink");
const a = document.querySelectorAll(".a");

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const isScrolled = scrollPosition > 75;
    greenDiv.style.height = isScrolled ? "0" : "30px";
    greenDiv.querySelector(".onecon").style.display = isScrolled ? "none" : "flex";
    navSecond.style.backgroundColor = isScrolled ? "black" : "white";
    toystore.style.color = isScrolled ? "white" : "black";
    a.forEach(link => {
        link.style.color = isScrolled ? "white" : "black";
    });
});

document.querySelector("#menuBtn").addEventListener('click', () => {
    const menu = document.querySelector(".menu");
    const displayValue = menu.style.display;
    menu.style.display = displayValue === "none" ? "block" : "none";
    menu.style.transition = "height 0.3s";
    setTimeout(() => { menu.style.height = displayValue === "none" ? "130px" : "0px"; }, 0);
});

//    <-----cart---->


document.addEventListener("DOMContentLoaded", function () {
    const cartLink = document.querySelector('.cart');
    const modal = document.getElementById('cartModal');
    const closeBtn = document.getElementById('closeModalBtn');

    cartLink.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
//  <--------MOUSE---------->

const clickAndScroll = document.querySelector("#clickAndScroll")
clickAndScroll.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".sect").scrollIntoView({
        behavior: 'smooth',
    });
});

    //   <--- Animals----->

const createToyElement = (container, toys) => {
    const boxes = document.querySelector(container);
    toys.forEach(toy => {
        const box = document.createElement('div');
        box.innerHTML = `
            <img src="${toy.imageSrc}" alt=""/>
            <p>${toy.name}</p>
            <h5>${toy.price}</h5>
        `;
        boxes.appendChild(box);
    });
};
const stuffedAnimals = [
    { name: 'Teddy Bear', price: '$30.00 USD', imageSrc: 'https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png' },
    { name: 'Mege Plush Toy', price: '$38.00 USD', imageSrc: 'https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png' },
    { name: 'Cute Dog', price: '$24.00 USD', imageSrc: 'https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min-p-500.png' },
    { name: 'Little Friend', price: '$27.00 USD', imageSrc: 'https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min-p-500.png' }
];
const woodenToys = [
    { name: 'Happ Flower', price: '$38.00 uSD', imageSrc: 'https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min-p-500.png' },
    { name: 'Lift Machine', price: '$24.00 USD', imageSrc: 'https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min-p-500.png' },
    { name: 'Wooden Camera', price: '$32.00 USD', imageSrc: 'https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min-p-500.png' },
    { name: 'Little Rabbit', price: '$16.00 USD', imageSrc: 'https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png' }
];
createToyElement('.sect23', stuffedAnimals);
createToyElement('.fifth', woodenToys);


    //    <------Cart----->


const cartDiv = document.querySelector(".cart2");
document.querySelector(".cart").addEventListener('click', (event) => {
    event.preventDefault();
    cartDiv.style.display = "block";
    document.querySelector(".side").style.display = "block";
});
document.querySelector(".close").addEventListener('click', () => {
    cartDiv.style.display = "none";
    document.querySelector(".side").style.display = "none";
});
document.addEventListener('click', (event) => {
    if (!cartDiv.contains(event.target) && event.target !== document.querySelector(".cart")) {
        cartDiv.style.display = "none";
        document.querySelector(".side").style.display = "none";
    }
});