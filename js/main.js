const API_URL = "https://jsonplaceholder.typicode.com/users"

const postWrapper = document.querySelector(".post-wrapper")
const prodactById = document.querySelector(".prodact-more-btn")

const loading = document.getElementById("loading");

const loadingDuration = 3000; // 2s

setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);


async function fetchData(api) {
    let data = await fetch(api)
    data
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
fetchData(API_URL)



function createCard(data) {
    data.forEach(post => {
        let card = document.createElement("div")
        card.className = "col-3"
        card.innerHTML = `
        <div class="card">
            <img class="post__img" src="./images/mountain.png" alt="dksa">
            <h4 class="post__h4">${post.name}</h4>
            
            <div class="post__city">
                <img class="city__svg" src="./images/city.svg" alt="fw">
                <h4>${post.address.city}</h4>
            </div>

            <div class="coll">
                <img src="./images/pone.svg" alt="hdfshx">
                <h4>${post.phone}</h4>
            </div>

            <div class="email">
                <img src="./images/email.svg" alt="afds">
                <p>${post.email}</p>
            </div>

            <h4 class="card__site"> website   :  ${post.website}</h4>

            <a id=${post.id} href="#" class="button prodact-more-btn">

                more info

                <div class="star-1">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 784.11 815.53" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path class="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                    </path>
                </g>
                </svg>
                </div>
            <div class="star-2">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 784.11 815.53" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path class="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                    </path>
                </g>
            </svg>
        </div>
        <div class="star-3">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 784.11 815.53" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path class="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                    </path>
                </g>
            </svg>
        </div>
        <div class="star-4">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 784.11 815.53" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path class="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                    </path>
                </g>
            </svg>
        </div>
        <div class="star-5">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 784.11 815.53" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path class="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                    </path>
                </g>
            </svg>
        </div>
        <div class="star-6">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 784.11 815.53" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path class="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z">
                    </path>
                </g>
            </svg>
        </div>
    </a>
        </div>
                 
        `
        postWrapper.appendChild(card)
    });
}


// <h6>${post.address.street}</h6>
// <h6>${post.address.suite}</h6>
// <h6>${post.address.zipcode}</h6>