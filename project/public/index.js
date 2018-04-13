// Selectors
const googleMap = document.getElementById('map');
const languageValue = document.querySelector('.header__language-value');
const languageSelectItems = document.querySelectorAll('.header__language .select__dropdown .select__item');
const currencyValue = document.querySelector('.header__currency-value');
const currencySelectItems = document.querySelectorAll('.header__currency .select__dropdown .select__item');
const headerMenuMen = document.querySelector('.header__hidden-menu-men');
const headerNavMenItem = document.querySelector('.header__nav-item--men');
const headerMenuWomen = document.querySelector('.header__hidden-menu-women');
const headerNavWomenItem = document.querySelector('.header__nav-item--women');
const headerMenuAcces = document.querySelector('.header__hidden-menu-acces');
const headerNavAccesItem= document.querySelector('.header__nav-item--acces');
const headerMenuLookbook = document.querySelector('.header__hidden-menu-lookbook');
const headerNavLookbookItem= document.querySelector('.header__nav-item--lookbook');
const iconFav = document.querySelector('.header__fav');
const iconSearch = document.querySelector('.header__search');
const searchLine = document.querySelector('.header__search-line');
const searchInput = document.querySelector('.header__search-input');
const mailSubInput = document.querySelector('.mail-subscription__input');
const currency = document.querySelector('.header__currency');
const basketValue = document.querySelector('.header__basket-value');
const sliderRoot = document.querySelector('.main-slider');
const sliderTitle = document.querySelector('.main-slider__title');
const sliderSubtitle = document.querySelector('.main-slider__subtitle');
const sliderDesc = document.querySelector('.main-slider__description');
const sliderLink = document.querySelector('.main-slider__link');
const feautureProductRating = document.querySelectorAll('.feauture-product__rating');
const bestProductRating = document.querySelectorAll('.best-product__rating');

// BLOCKS
// Header Top
// language
Array.from(languageSelectItems).forEach( (el) => {
    el.addEventListener('click', (e) => {
        for (let i = 0; i < languageSelectItems.length; i++) {
            if (languageSelectItems[i].classList.contains('active-el')) {
                languageSelectItems[i].classList.remove('active-el');
            }
        }
        el.classList.add('active-el');
        languageValue.innerHTML = el.textContent;
    })
});
// currency
[].forEach.call(currencySelectItems, (el) => {
    el.addEventListener('click', (e) => {
        // e.preventDefault();
        for (let i = 0; i < currencySelectItems.length; i++) {
            currencySelectItems[i].classList.remove('active-el');
        }
        el.classList.add('active-el');
        currencyValue.innerHTML = el.textContent;
    })
});

// Header Bottom Menu
function removeMenMenu(e) {
    if (!e.target.matches('.header__hidden-menu-men, .header__hidden-menu-men *')) {
        headerMenuMen.classList.remove('header__visible-menu');
        headerNavMenItem.classList.remove('header__nav-men-item-active');
        this.removeEventListener('click', removeMenMenu);
    }
}

function removeWomenMenu(e) {
    if (!e.target.matches('.header__hidden-menu-women, .header__hidden-menu-women *')) {
        headerMenuWomen.classList.remove('header__visible-menu');
        headerNavWomenItem.classList.remove('header__nav-women-item-active');
        this.removeEventListener('click', removeWomenMenu);
    }
}

function removeAccesMenu(e) {
    if (!e.target.matches('.header__hidden-menu-acces, .header__hidden-menu-acces *')) {
        headerMenuAcces.classList.remove('header__visible-menu');
        headerNavAccesItem.classList.remove('header__nav-acces-item-active');
        this.removeEventListener('click', removeAccesMenu);
    }
}

function removeLookbookMenu(e) {
    if (!e.target.matches('.header__hidden-menu-lookbook, .header__hidden-menu-lookbook *')) {
        headerMenuLookbook.classList.remove('header__visible-menu');
        headerNavLookbookItem.classList.remove('header__nav-lookbook-item-active');
        this.removeEventListener('click', removeLookbookMenu);
    }
}
// men
headerNavMenItem.addEventListener('click', (e) => {
    // let target = e.target || e.srcElement;
    document.removeEventListener('click', removeMenMenu);
    headerMenuMen.classList.toggle('header__visible-menu');
    headerNavMenItem.classList.toggle('header__nav-men-item-active');

    setTimeout(() => { document.addEventListener('click', removeMenMenu) }, 500);
});
// women
headerNavWomenItem.addEventListener('click', (e) => {
    document.removeEventListener('click', removeWomenMenu);
    headerMenuWomen.classList.toggle('header__visible-menu');
    headerNavWomenItem.classList.toggle('header__nav-women-item-active');

    setTimeout(() => { document.addEventListener('click', removeWomenMenu) }, 500);
});
// accessories
headerNavAccesItem.addEventListener('click', (e) => {
    document.removeEventListener('click', removeAccesMenu);
    headerMenuAcces.classList.toggle('header__visible-menu');
    headerNavAccesItem.classList.toggle('header__nav-acces-item-active');

    setTimeout(() => { document.addEventListener('click', removeAccesMenu) }, 500);
});
// lookbook
headerNavLookbookItem.addEventListener('click', (e) => {
    document.removeEventListener('click', removeLookbookMenu);
    headerMenuLookbook.classList.toggle('header__visible-menu');
    headerNavLookbookItem.classList.toggle('header__nav-lookbook-item-active');

    setTimeout(() => { document.addEventListener('click', removeLookbookMenu) }, 500);
});

// Header Bottom Icons
iconFav.addEventListener('mouseover', () => {
    iconFav.classList.add("fa-spin");

    setTimeout(() => { iconFav.classList.remove("fa-spin") }, 2000);
});

currency.addEventListener('mouseover', () => {
    basketValue.style.visibility = "hidden";
});

currency.addEventListener('mouseout', () => {
    basketValue.style.visibility = "";
});

// Search Line
// &
// Mail Subscription Line
function blurInput(e) {
    this.value = (this.value == '') ? this.title : this.value;
};

function focusInput(e) {
    this.value = (this.value == this.title) ? '' : this.value;
};

iconSearch.addEventListener('click', (e) => {
    searchLine.classList.toggle("search-line-animate");
});

searchInput.addEventListener('blur', blurInput);
searchInput.addEventListener('focus', focusInput);

mailSubInput.addEventListener('blur', blurInput);
mailSubInput.addEventListener('focus', focusInput);

// Main Slider
// &
// About Store Slider
// main slider counter
let counter_1 = 0;
let mainSliderImages = [];
const mainSliderDelay = 7000;
// main slider loop
for (let x = 0; x <= 11; x++) {
    let num = String(x);
    mainSliderImages[x] = `img/Bg_Slide${num}.jpg`;
}
// about store slider counter
let counter_2 = 0;
let AboutStoreSliderImages = [];
const AboutStoreSliderDelay = 6000;
// about store loop
for (let x = 0; x <= 5; x++) {
    let num = String(x);
    AboutStoreSliderImages[x] = `img/About-store_Slide${num}.jpg`;
}
// main slider func
function changeImgMainSlider(){
	document.mainSlider.src = mainSliderImages[counter_1];

    let rootStyle = sliderRoot.style,
        titleStle = sliderTitle.style,
        subtitleStyle = sliderSubtitle.style,
        descStyle = sliderDesc.style,
        linkStyle = sliderLink.style,
        sliderStyle = mainSlider.style;

    let defaultValue = "";

    let rotateDefault = "translate(0, 0) rotate(0deg) scale(1)",
        rotateRight = "translate(0, 35px) rotate(3deg) scale(1.1)",
        rotateLeft = "translate(0, 35px) rotate(-3deg) scale(1.1)";

    let white = "#ffffff",
        whiteSmoke = "#e2e2e2",
        lightBeige = "#fbeec1",
        brown = "#b49103",
        orange = "#fd8f4c",
        lightOrange = "#f7b17e",
        supLightOrange = "#f5d1b7",
        prettyRed = "#ff2346",
        lilac = "#a480aa",
        lightLilac = "#fdd2f4",
        lightBlue = "#abd7fa",
        lightGreen = "#aaf37e";

    switch ( mainSliderImages[counter_1] ) {
        case "img/Bg_Slide0.jpg":
            sliderRoot.classList.add('main-slider__slide-animate');
            setTimeout(() => { sliderRoot.classList.remove('main-slider__slide-animate') }, 1500);
            rootStyle.backgroundColor = defaultValue;
            titleStle.color = white;
            subtitleStyle.color = lightBlue;
            descStyle.cssText = "color: transparent; transition: 0s all;";
            linkStyle.color = lightBlue;
            sliderStyle.transform = rotateDefault;
            sliderStyle.transition = "1.5s all";
        break;
        case "img/Bg_Slide1.jpg":
            rootStyle.backgroundColor = lilac;
            titleStle.color = defaultValue;
            subtitleStyle.color = lightBeige;
            descStyle.color = lightBeige;
            linkStyle.color = lilac;
            sliderStyle.transform = rotateRight;
            sliderStyle.transition = "2s all";
        break;
        case "img/Bg_Slide2.jpg":
            sliderRoot.classList.add('main-slider__slide-animate');
            setTimeout(() => { sliderRoot.classList.remove('main-slider__slide-animate') }, 1500);
            rootStyle.backgroundColor = defaultValue;
            titleStle.color = lightOrange;
            subtitleStyle.color = supLightOrange;
            descStyle.color = supLightOrange;
            linkStyle.color = white;
            sliderStyle.transform = rotateDefault;
            sliderStyle.transition = "1.5s all";
        break;
        case "img/Bg_Slide3.jpg":
            rootStyle.backgroundColor = brown;
            titleStle.color = defaultValue;
            subtitleStyle.color = white;
            descStyle.color = white;
            linkStyle.color = whiteSmoke;
            sliderStyle.transform = rotateLeft;
            sliderStyle.transition = "2s all";
        break;
        case "img/Bg_Slide4.jpg":
            sliderRoot.classList.add('main-slider__slide-animate');
            setTimeout(() => { sliderRoot.classList.remove('main-slider__slide-animate') }, 1500);
            rootStyle.backgroundColor = defaultValue;
            titleStle.color = prettyRed;
            subtitleStyle.color = whiteSmoke;
            descStyle.color = whiteSmoke;
            linkStyle.color = prettyRed;
            sliderStyle.transform = rotateDefault;
            sliderStyle.transition = "1.5s all";
        break;
        case "img/Bg_Slide5.jpg":
            rootStyle.backgroundColor = whiteSmoke;
            titleStle.color = defaultValue;
            subtitleStyle.color = defaultValue;
            descStyle.color = defaultValue;
            linkStyle.color = lightGreen;
            sliderStyle.transform = rotateRight;
            sliderStyle.transition = "2s all";
        break;
        case "img/Bg_Slide6.jpg":
            sliderRoot.classList.add('main-slider__slide-animate');
            setTimeout(() => { sliderRoot.classList.remove('main-slider__slide-animate') }, 1500);
            rootStyle.backgroundColor = defaultValue;
            titleStle.color = lightLilac;
            subtitleStyle.color = lightBlue;
            descStyle.color = lightBlue;
            linkStyle.color = lightLilac;
            sliderStyle.transform = rotateDefault;
            sliderStyle.transition = "1.5s all";
        break;
        case "img/Bg_Slide7.jpg":
            rootStyle.backgroundColor = orange;
            titleStle.color = orange;
            subtitleStyle.color = lightBlue;
            descStyle.color = lightBlue;
            linkStyle.color = white;
            sliderStyle.transform = rotateLeft;
            sliderStyle.transition = "2s all";
        break;
        case "img/Bg_Slide8.jpg":
            sliderRoot.classList.add('main-slider__slide-animate');
            setTimeout(() => { sliderRoot.classList.remove('main-slider__slide-animate') }, 1500);
            rootStyle.backgroundColor = defaultValue;
            titleStle.color = lightGreen;
            subtitleStyle.color = white;
            descStyle.color = white;
            linkStyle.color = white;
            sliderStyle.transform = rotateDefault;
            sliderStyle.transition = "1.5s all";
        break;
        case "img/Bg_Slide9.jpg":
            rootStyle.backgroundColor = lightBeige;
            titleStle.color = defaultValue;
            subtitleStyle.color = lightBeige;
            descStyle.color = lightBeige;
            linkStyle.color = whiteSmoke;
            sliderStyle.transform = rotateRight;
            sliderStyle.transition = "2s all";
        break;
        case "img/Bg_Slide10.jpg":
            sliderRoot.classList.add('main-slider__slide-animate');
            setTimeout(() => { sliderRoot.classList.remove('main-slider__slide-animate') }, 1500);
            rootStyle.backgroundColor = defaultValue;
            titleStle.color = lightBeige;
            subtitleStyle.color = whiteSmoke;
            descStyle.color = whiteSmoke;
            linkStyle.color = lightBeige;
            sliderStyle.transform = rotateDefault;
            sliderStyle.transition = "1.5s all";
        break;
        case "img/Bg_Slide11.jpg":
            rootStyle.backgroundColor = orange;
            titleStle.color = orange;
            subtitleStyle.color = defaultValue;
            descStyle.color = white;
            linkStyle.color = orange;
            sliderStyle.transform = rotateLeft;
            sliderStyle.transition = "2s all";
        break;
        default:
            rootStyle.backgroundColor = defaultValue;
            titleStle.color = defaultValue;
            subtitleStyle.color = defaultValue;
            descStyle.color = defaultValue;
            linkStyle.color = defaultValue;
            sliderStyle.transform = rotateDefault;
            sliderStyle.transition = "1.5s all";
    }

    if ( !(mainSliderImages[counter_1] == "img/Bg_Slide0.jpg") ) {
        descStyle.backgroundColor = "rgba(17, 17, 17, 0.2)";
        descStyle.borderRadius = "8px";
    } else {
        descStyle.backgroundColor = defaultValue;
    }

	counter_1 < mainSliderImages.length - 1 ? counter_1++ : counter_1 = 0;

	setTimeout("changeImgMainSlider()", mainSliderDelay);
}
// about store slider func
function changeImgAboutStoreSlider() {
    document.aboutStoreSlider.src = AboutStoreSliderImages[counter_2];
    counter_2 < AboutStoreSliderImages.length - 1 ? counter_2++ : counter_2 = 0;

	setTimeout("changeImgAboutStoreSlider()", AboutStoreSliderDelay);
}

// Feauture Product
// &
// Best Product
function ratingMechanic(pseudoArr) {
    Array.from(pseudoArr).forEach( (el) => {
        for (let y = 0; y < el.children.length; y++) {
            el.children[y].addEventListener('mouseover', (e) => {
                for (let a = 0; a <= y; a++) {
                    el.children[a].classList.add('stars-pointer');
                }
            });
            el.children[y].addEventListener('mouseout', (e) => {
                for (let b = 0; b <= y; b++) {
                    el.children[b].classList.remove('stars-pointer');
                }
            });
            el.children[y].addEventListener('click', (e) => {
                el.children[0].classList.remove('filled-stars');
                el.children[1].classList.remove('filled-stars');
                el.children[2].classList.remove('filled-stars');
                el.children[3].classList.remove('filled-stars');
                el.children[4].classList.remove('filled-stars');
                for (let u = 0; u <= y; u++) {
                    el.children[u].classList.add('filled-stars');
                }
            });
        }
    })
}

ratingMechanic(feautureProductRating);
ratingMechanic(bestProductRating);

// Google Map
function initMap() {
    let options = {
        zoom: 13,
        center: new google.maps.LatLng(21.0277644, 105.83415979999995),
        mapTypeId: 'terrain'
    };
    let map = new google.maps.Map(googleMap, options);
    let marker = new google.maps.Marker({
        map: map,
        position: options.center
    });
    let infowindow = new google.maps.InfoWindow({
        content:'<strong>Mstore</strong><br>Hanoi, Vietnamese<br>'
    });
    google.maps.event.addListener(marker, 'click', () => {
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
};

// Onload - GO!
function startOfSliders() {
    changeImgMainSlider();
    changeImgAboutStoreSlider();
}

window.onload = startOfSliders;
