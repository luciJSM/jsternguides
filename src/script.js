// Available Guides : ZZZ → caesar, jane, qingyi, ellen, zhuyuan || Genshin → kinich, mualani, emilie, sigewinne, alhaitham, clorinde, wanderer, lyney, arlecchino, neuvillette, chiori, navia, furina, hutao || make sure to give credit when sharing !

var guides = [
    {
        "name": "kinich",
        "url": "https://docs.google.com/document/d/1BSkRlx3idMvmjCVsShXKKhvkNkX3nWkT4VQdQTzfrcw/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "caesar",
        "url": "https://docs.google.com/document/d/1dvG8eIYc1aDcy0RSkvxqW0gMAYxYX6TJJtVusRNR2ZU/edit?usp=sharing",
        "game": "zzz"
    },
    {
        "name": "jane",
        "url": "https://docs.google.com/document/d/1XAozDcIGGUfsAZIK6U7UcGUeZme0gSw8cvMn6smOCOo/edit?usp=sharing",
        "game": "zzz"
    },
    {
        "name": "mualani",
        "url": "https://docs.google.com/document/d/1qR_QT1I1nNeNNn8CVp0XXeTGVYU22M1vEWM57fiErFc/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "qingyi",
        "url": "https://docs.google.com/document/d/1-ntiLc9uRI8yzLeebX0MwFeZGd7OqQkx1wP_H-sY60I/edit?usp=sharing",
        "game": "zzz"
    },
    {
        "name": "ellen",
        "url": "https://docs.google.com/document/d/13lEWRX6bHhpmMEoFcwYuKiwKnEZfV5Vc2Xj_CNuTkig/edit?usp=sharing",
        "game": "zzz"
    },
    {
        "name": "zhuyuan",
        "url": "https://docs.google.com/document/d/14-hM33HwVrurxt1gEpIxEK8uj7WmmtzDseL3KsiRmYw/edit?usp=sharing",
        "game": "zzz"
    },
    {
        "name": "emilie",
        "url": "https://docs.google.com/document/d/1XTyfpO6_oLbRgqLf7ig2hmKoWOBxoa_i1oMXD88OsAE/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "sigewinne",
        "url": "https://docs.google.com/document/d/1w-2Vk4fdp1iuMeAmVm1rW9MKelE5TGTnyuWartel_8k/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "alhaitham",
        "url": "https://docs.google.com/document/d/1AKXixzK_hLtLcDbRVkBVBrHtx2y1enleEmx7aUkh3Q8/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "clorinde",
        "url": "https://docs.google.com/document/d/1Hy-ViUz2DeVQ4O_NV3nXcUX7z-GEy7wNuNGNxtwL3So/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "wanderer",
        "url": "https://docs.google.com/document/d/13sWPqeP1qiRnJVLnciAoXEBqFZjRIwAYp-xGDgTOuWw/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "lyney",
        "url": "https://docs.google.com/document/d/1-4Pg8_R9sYl2yxUG_D0ctV3ll70N3ygmid4sBDholaU/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "arlecchino",
        "url": "https://docs.google.com/document/d/1ofgpMr25AssQra9xZdlmiASMm2TOSH_Uxxw145XO868/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "neuvillette",
        "url": "https://docs.google.com/document/d/17FabyWM5Sq0j_KHw2V8i-qjtrIWdr9399V5LW1whBrg/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "chiori",
        "url": "https://docs.google.com/document/d/1S_32O-zkmuJN0y2XwWnsdJ6T8Z0zn7mV2XUBa-hxlGE/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "navia",
        "url": "https://docs.google.com/document/d/1sLM-YjFlupPZHfQkPxhEd-aH6NifDdXSwNLVoT65fVA/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "furina",
        "url": "https://docs.google.com/document/d/1viRbcRgar0_Z0IMj__MmbwqGq1C3HzzRC8ZDIIqlncc/edit?usp=sharing",
        "game": "genshin"
    },
    {
        "name": "hutao",
        "url": "https://docs.google.com/document/d/1RFTkcVbbMk7BwitkB3-Ig_7MMKQpiyC9YMupTZxfHhc/edit?usp=sharing",
        "game": "genshin"
    }
]

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

var param = urlParams.get('param');
console.log(param);

var content = document.getElementById("content");

function getGuides(array, query)
{
    var outputString =  "";
    array.forEach(element => {
        console.log(element);
        if (query == element.game) {
            console.log(element.name)
            outputString += `${element.name}, `;
        }
    })
    return outputString.slice(0, -2);
}

if (param == "help") {
    content.innerText = `Available Guides : ZZZ → ${getGuides(guides,"zzz")} || Genshin → ${getGuides(guides,"genshin")} || make sure to give credit when sharing !`;
} else {
    guides.forEach(element => {
        console.log(element);
        if (param == element.name) {
            content.innerText = element.url;
        }
    });
}

document.body.parentElement.innerHTML = `${document.getElementById("content").innerText}`;
document.querySelector("html").innerHTML = `${document.getElementById("content").innerText}`;
