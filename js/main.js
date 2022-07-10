const Header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    const scrollOffset = window.pageYOffset;
    const HeaderHeight = Header.getBoundingClientRect().height


    if (scrollOffset > HeaderHeight) {
        Header.classList.add('fixed')
    } else {
        Header.classList.remove('fixed')
    }
})

const navBtn = document.querySelector('.nav-btn-button');

const menu = [{
        id: 1,
        img: "../img/Icon (2).svg",
        title: "Research Suburbs",
        text: "Get started swiftly & easily by importing a  demo of your choice in a single click."
    },

    {
        id: 2,
        img: "../img/Icon (3).svg",
        title: "Instant Valuation",
        text: "Over 30 high quality profession designed re-built website concepts to choose from."
    },
    {
        id: 3,
        img: "../img/Icon (4).svg",
        title: "Track Property",
        text: "Build your website using fully visual interface, using our revolutionary page builder."
    }
];


const worksItems = document.querySelector('.works-items');

window.addEventListener('DOMContentLoaded', function () {
    let displayMenu = menu.map(function (item) {
        return `<div class="works-item">
      <div class="works-item-img">
          <img src="${item.img}">
      </div>
      <h3 class="works-item-title">${item.title}</h3>
      <p class="works-item-text">${item.text}
          single click.</p>
  </div>`

    })


    displayMenu = displayMenu.join('')
    worksItems.innerHTML = displayMenu

})



const array = [{
        id: 1,
        img: "../img/cuntry1.png",
        title: "United States",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sit inventore architecto earum, natus obcaecati soluta perferendis laboriosam accusantium, cupiditate porro ullam ex, consequatur rerum minima sunt dolorum quisquam",
    },
    {
        id: 2,
        img: "../img/cuntr2.png",
        title: "United Kingdom",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sit inventore architecto earum, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,cupiditate porro ullam ex, consequatur rerum minima sunt dolorum quisquam.",
    },
    {
        id: 3,
        img: "../img/cuntry3.png",
        title: "Canada",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sit inventore architecto earum, natus obcaecati soluta perferendis laboriosam accusantium, cupiditate porro ullam ex, consequatur rerum minima sunt dolorum quisquam.",
    },

];

const img = document.getElementById('img');
const title = document.getElementById('title');
const text = document.getElementById('text');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentNumber = 0;


window.addEventListener("DOMContentLoaded", function () {
    items()

});

function items() {
    const item = array[currentNumber];
    img.src = item.img;
    title.textContent = item.title;
    text.textContent = item.desc;
}

nextBtn.addEventListener('click', function () {
    currentNumber++;
    if (currentNumber > array.length - 1) {
        currentNumber = 0;
    }
    items();
})

prevBtn.addEventListener('click', function () {
    currentNumber--;
    if (currentNumber < 0) {
        currentNumber = 2;
    }
    items();
})


randomBtn.addEventListener('click', function () {
    currentNumber = Math.floor(Math.random() * array.length);

    items();
});


const Year = document.getElementById('year');

const date = new Date();
const fullYear = date.getFullYear();

Year.textContent = fullYear;


const dealsMenu = [{
        id: 1,
        img: "../img/deals1.png",
        category: 'all'
    },

    {
        id: 2,
        img: "../img/deals2.png",
        category: 'commercial'
    },

    {
        id: 3,
        img: "../img/deals3.png",
        category: 'agriculture'
    }
];

const dealsBbtn = document.querySelectorAll('.deals-btn');
const images = document.querySelector('.deals-content');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItem(dealsMenu)
});


dealsBbtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const btnEvent = e.currentTarget.dataset.id;
        const menuCategoty = dealsMenu.filter(function (menuIt) {
            if (menuIt.category === btnEvent) {
                return menuIt
            }
        });
        if (btnEvent === "all") {
            displayMenuItem(dealsMenu)
        } else {
            displayMenuItem(menuCategoty)
        }
    })
});


function displayMenuItem(menuItem) {
    let displayMenu = menuItem.map(function (item) {
        return `<div class="deals-content-img">
    <img src=${item.img}>
</div>`;
    })
    displayMenu = displayMenu.join('');
    images.innerHTML = displayMenu;
}

const Burger = document.querySelector('.header-burger');
const navCont = document.querySelector('.nav-container');
const nav = document.querySelector('.nav');

Burger.addEventListener('click', function () {
    navCont.classList.toggle("active");
    nav.classList.toggle("active");
    Header.classList.toggle('active')
});


$('.nav-container-list-link').click(function(event){
    event.preventDefault();

   
    let $this = $(this),
        blockId = $this.data('scroll');
        blockOffset = $(blockId).offset().top;
    $('html, body').animate({
        scrollTop: blockOffset
    },800)
})