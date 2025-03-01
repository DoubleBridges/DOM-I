// ({
//   plugins: ['jsdom-quokka-plugin'],
//   jsdom: {html: `<div id="test">Hello</div>`}
// })

const siteContent = {
  "nav": {
    "nav-item-0": "New Link",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "New Link",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br> Somewhere, USA<br>",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

function setAttributes(element, attrs) {
  for(let key in attrs) {
    element.setAttribute(key, attrs[key]);
  }
}

//Nav 
const newAtag = () => document.createElement('a')

let navigation = document.querySelector('nav');

navigation.appendChild(newAtag());

navigation.prepend(newAtag());

let navBar = document.querySelectorAll('nav a');

let navArr = Object.values(siteContent.nav);

for(let i=0; i<navBar.length; i++) {
  navBar[i].textContent = navArr[i];
  navBar[i].style.color = 'green';
}
            //nav color ^

//cta
let ctaText = document.querySelector(".cta-text h1");

ctaText.innerHTML = siteContent.cta.h1;

let ctaImg = document.querySelector("#cta-img");

ctaImg.setAttribute('src', siteContent.cta['img-src']);

let ctaBtn = document.querySelector('.cta-text button');

ctaBtn.textContent = siteContent.cta.button;

//main content
let textHeaders = document.querySelectorAll('h4');

let h4Headers = Array.from(Object.keys(siteContent['main-content']).filter(item => item.includes('h4')));

let contentText = document.querySelectorAll('p');

let mainContents = Array.from(Object.keys(siteContent['main-content']).filter(item => item.includes('content')));

textHeaders.forEach((item, i) => {
  item.textContent = siteContent['main-content'][h4Headers[i]];
});

contentText.forEach((item, i) => {
  item.textContent = siteContent['main-content'][mainContents[i]];
})

let middleImg = document.querySelector('.middle-img');

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//contact
let contactHeader = document.querySelector('.contact h4')

contactHeader.textContent = siteContent.contact['contact-h4'];

let contactPtags = document.querySelectorAll('.contact p');

let contactInfo = Object.values(siteContent.contact);

for(let i=1; i < contactPtags.length; i++) {
  contactPtags[i].innerHTML = contactInfo[i];
}

//footer
let foot = document.querySelector('footer p')

foot.textContent = siteContent.footer.copyright;