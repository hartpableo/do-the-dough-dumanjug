// close loader when page has loaded
const loadingScreen = document.querySelector('.loading-screen');
const body = document.querySelector('body');

window.addEventListener('load',function() {
    loadingScreen.style.transform = `translateY(-5000px)`;
    loadingScreen.style.opacity = 0;
    body.style.minHeight = `100vh`;
});

// hamburger menu button 
const toggleBtn = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click',function() {
    navbar.classList.toggle('clicked');
    overlay.classList.toggle('clicked');
});

// close navbar when a navlink or the logo is clicked
const navlinks = document.querySelectorAll('.navlink');
const mainHeaderHeight = document.querySelector('.main-header').getBoundingClientRect().bottom;
const topLogo = document.querySelector('.top-left-logo');

navlinks.forEach(function(link) {
    link.addEventListener('click',function(e) {
        navbar.classList.remove('clicked');
        overlay.classList.remove('clicked');
        // accurate scrolling/navigating
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop;
        window.scrollTo({
            left: 0,
            top: position - mainHeaderHeight
        });
    });
});

topLogo.addEventListener('click',function() {
    navbar.classList.remove('clicked');
    overlay.classList.remove('clicked');
});

// navigate through feedbacks by customers
const feedbacks = document.querySelectorAll('.feedback');
const nextFeedback = document.querySelector('.fa-chevron-circle-right');
const prevFeedback = document.querySelector('.fa-chevron-circle-left');

let counter = 0;

nextFeedback.addEventListener('click',function() {
    counter++;
    carousel();
});

prevFeedback.addEventListener('click',function() {
    counter--;
    carousel();
});

function carousel() {
    if (counter < 0) {
        counter = feedbacks.length - 1;
    } else if (counter > feedbacks.length - 1) {
        counter = 0;
    };

    feedbacks.forEach(function(feedback) {
        feedback.style.transform = `translateX(-${counter * 100}%)`;
    });
}

// navigate through menu
const menu = [
    {
        id: 1,
        itemName: 'Dynamite with Sauce',
        category: 'dish-treat',
        price: `BUCKET &#40;20pcs&#41;:<br> 
        <span class="brown">P220.00</span>
        <br>
        CELEB TREAT &#40;starts at 50pcs&#41;:<br>
        <span class="brown">P560.00</span>`,
        img: 'imgs/dynamite.jpg',
        class: 'menu-img-container',
    },
    {
        id: 2,
        itemName: 'Pork Empanada Espesyal',
        category: 'pastries',
        price: `BUCKET &#40;20pcs&#41;:<br> 
        <span class="brown">P250.00</span>
        <br>
        CELEB TREAT &#40;starts at 50pcs&#41;:<br>
        <span class="brown">P630.00</span>`,
        img: 'imgs/pork-empanada.jpg',
        class: `"menu-img-container bestseller"`,
    },
    {
        id: 3,
        itemName: 'ChocoPanada',
        category: 'pastries',
        price: `BUCKET &#40;20pcs&#41;:<br> 
        <span class="brown">P220.00</span>
        <br>
        CELEB TREAT &#40;starts at 50pcs&#41;:<br>
        <span class="brown">P560.00</span>`,
        img: 'imgs/chocopanada.jpg',
        class: 'menu-img-container',
    },
    {
        id: 4,
        itemName: 'MilkyPanada',
        category: 'pastries',
        price: `BUCKET &#40;20pcs&#41;:<br> 
        <span class="brown">P200.00</span>
        <br>
        CELEB TREAT &#40;starts at 50pcs&#41;:<br>
        <span class="brown">P520.00</span>`,
        img: 'imgs/milkypanada.jpg',
        class: 'menu-img-container',
    },
    {
        id: 5,
        itemName: 'Banana Cake ni RCN',
        category: 'sweets',
        price: `BARKADA TREAT &#40;3&#8211;4 pax serving suggestion&#41;:<br> 
        <span class="brown">P65.00</span>
        <br>
        FAMILY TREAT &#40;6 pax serving suggestion&#41;:<br>
        <span class="brown">P120.00</span>`,
        img: 'imgs/banana-cake.jpg',
        class: 'menu-img-container',
    },
    {
        id: 6,
        itemName: 'Nachos Salad',
        category: 'salads',
        price: `BARKADA TREAT &#40;3&#8211;4 pax serving suggestion&#41;:<br> 
        <span class="brown">P250.00</span>
        <br>
        FAMILY TREAT &#40;5&#8211;8 pax serving suggestion&#41;:<br>
        <span class="brown">P350.00</span>`,
        img: 'imgs/nacho-background.jpg',
        class: `"menu-img-container bestseller"`,
    },
];
const mainMenu = document.querySelector('.menu-items-grid');
const menuTabs = document.querySelectorAll('.menu-tab');

// menu tab buttons
menuTabs.forEach(function(tab) {
    tab.addEventListener('click',function(event) {
        const category = event.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            };
        });

        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        };
    });
});

// load initial items
window.addEventListener('DOMContentLoaded',function() {
    displayMenuItems(menu);
});

// function: display designated menu items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<div class="menu-item">
        <div class=${item.class}>
            <img src=${item.img} alt=${item.itemName} class="menu-img">
        </div>
        <p class="menu-name">${item.itemName}</p>
        <p class="menu-details">
            ${item.price}
        </p>
    </div>`;
    });
    displayMenu = displayMenu.join('');
    mainMenu.innerHTML = displayMenu;
};

// bestselling tab
const bestsellingTab = document.querySelector('.bestselling-tab');
const bestsellers = [
    {
        id: 1,
        itemName: 'Pork Empanada Espesyal',
        price: `BUCKET &#40;20pcs&#41;:<br> 
        <span class="brown">P250.00</span>
        <br>
        CELEB TREAT &#40;starts at 50pcs&#41;:<br>
        <span class="brown">P630.00</span>`,
        img: 'imgs/pork-empanada.jpg', 
        class: `"menu-img-container bestseller"`,
    },
    {
        id: 2,
        itemName: 'Nachos Salad',
        price: `BARKADA TREAT &#40;3&#8211;4 pax serving suggestion&#41;:<br> 
        <span class="brown">P250.00</span>
        <br>
        FAMILY TREAT &#40;5&#8211;8 pax serving suggestion&#41;:<br>
        <span class="brown">P350.00</span>`,
        img: 'imgs/nacho-background.jpg',
        class: `"menu-img-container bestseller"`,
    },
];

bestsellingTab.addEventListener('click',function() {
    displayMenuItems(bestsellers);
});

// filled inputs in form checker
function fillCheck() {
    const name = document.querySelector('#name');
    const number = document.querySelector('#number');
    const email = document.querySelector('#email');

    if (name.value == "" || number.value == "" || email.value == "") {
        alert("Please complete the form.");
        return false;
    } else {
        alert("Thank you for your cooperation!");
        return true;
    };
};

// auto update year in footer
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();