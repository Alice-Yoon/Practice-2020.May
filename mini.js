// DOM Elements
const tShirtsBtn = document.getElementById('t-shirts');
const pantsBtn = document.getElementById('pants');
const skirtsBtn = document.getElementById('skirts');

const blueBtn = document.getElementById('blue');
const yellowBtn = document.getElementById('yellow');
const pinkBtn = document.getElementById('pink');

const logo = document.getElementById('logo');

let listEl = document.getElementById('list');

// Clothes data
const clothesData = [
    {
        img: './imgs/blue_p.png',
        color: "blue",
        sort: "pants",
        gender: "male",
        size: "large size"
    },
    {
        img: './imgs/blue_t.png',
        color: "blue",
        sort: "t-shirts",
        gender: "female",
        size: "medium size"
    },
    {
        img: './imgs/pink_p.png',
        color: "pink",
        sort: "pants",
        gender: "female",
        size: "small size"
    },
    {
        img: './imgs/blue_s.png',
        color: "blue",
        sort: "skirts",
        gender: "female",
        size: "small size"
    },
    {
        img: './imgs/pink_s.png',
        color: "pink",
        sort: "skirts",
        gender: "female",
        size: "medium size"
    },
    {
        img: './imgs/pink_t.png',
        color: "pink",
        sort: "t-shirts",
        gender: "male",
        size: "large size"
    },
    {
        img: './imgs/yellow_p.png',
        color: "yellow",
        sort: "pants",
        gender: "female",
        size: "small size"
    },
    {
        img: './imgs/yellow_s.png',
        color: "yellow",
        sort: "skirts",
        gender: "female",
        size: "large size"
    },
    {
        img: './imgs/yellow_t.png',
        color: "yellow",
        sort: "t-shirts",
        gender: "male",
        size: "medium size"
    },
    {
        img: './imgs/blue_t.png',
        color: "blue",
        sort: "t-shirts",
        gender: "female",
        size: "medium size"
    },
    {
        img: './imgs/pink_p.png',
        color: "pink",
        sort: "pants",
        gender: "female",
        size: "small size"
    },
    {
        img: './imgs/pink_t.png',
        color: "pink",
        sort: "t-shirts",
        gender: "male",
        size: "large size"
    },
    {
        img: './imgs/yellow_p.png',
        color: "yellow",
        sort: "pants",
        gender: "female",
        size: "small size"
    },
    {
        img: './imgs/pink_t.png',
        color: "pink",
        sort: "t-shirts",
        gender: "male",
        size: "large size"
    },
    {
        img: './imgs/yellow_p.png',
        color: "yellow",
        sort: "pants",
        gender: "female",
        size: "small size"
    }

];

// Paint the list to DOM
function paintList(item){
    const li = document.createElement('li');

        li.setAttribute("data-color", `${item.color}`);
        li.setAttribute("data-sort", `${item.sort}`);

        li.innerHTML = `
        <img src="${item.img}" alt="${item.color}${item.sort}">
        <p>${item.gender}, ${item.size}</p>
        `

        listEl.appendChild(li);
}


// Display the whole list to DOM
function wholeList() {
    listEl.innerHTML = "";

    clothesData.forEach(item => {
        paintList(item);
    });
}

wholeList();


// Sort By Type
function sortByType(e) {
    const type = e.target.id;

    listEl.innerHTML = "";

    clothesData
    .filter(item => { return item.sort == type})
    .forEach(item => {

        paintList(item);

    })
}

// Sort By Color
function sortByColor(e) {
    const color = e.target.id;

    listEl.innerHTML = "";

    clothesData
    .filter(item => { return item.color == color})
    .forEach(item => {

        paintList(item);
    })
}


// Event Listeners
pantsBtn.addEventListener('click', sortByType);
skirtsBtn.addEventListener('click', sortByType);
tShirtsBtn.addEventListener('click', sortByType);

blueBtn.addEventListener('click', sortByColor);
yellowBtn.addEventListener('click', sortByColor);
pinkBtn.addEventListener('click', sortByColor);

logo.addEventListener('click', wholeList);