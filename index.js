//console.log(document.location.search);

document.addEventListener("DOMContentLoaded", postData);

const data = document.location.search;
const params = new URLSearchParams(data);


const name = params.get("fname");

const activity = params.get("activity");
const indep_fam = params.get("indep/fam");
const intro_extro = params.get("intro/extro");
const environment = params.get("change");
const lifestyles = params.getAll("lifestyles");

//console.log(activity);

let characters; 

if (activity == "swimming" && indep_fam=="familyoriented" && (intro_extro=="introverted" || intro_extro=="extroverted") && (lifestyles.includes("adventurous") || lifestyles.includes("calm")) && environment=="yes"){
    characters="you are most likely to live in a beach house!";
    image="images/beach.jpg";
    character2="By living in a beach house, you will be able to get your daily dose of the beautiful ocean, whether it be a quick sunbath or a long swim in the freezing, hypothermia-inducing water. As someone who nurtures a more family-oriented lifestyle, living near the beach will provide you with that warmness of meeting many different people. All these things combined, you will be able to live an adventurous, yet calm life that provides you with the joy and health that you need.";
} else if (activity == "hiking" && (indep_fam=="independent" || indep_fam=="familyoriented") && intro_extro=="introverted" && environment=="yes" && lifestyles.includes("adventurous") && (lifestyles.includes("calm") || lifestyles.includes("private"))){
    characters="you are most likely to live in a nature house!";
    image='images/nature.jpg';
    character2="By living in a nature house, you will be able to maximize your physical outdoor activities, whether it be going on a morning walk alongside the palm trees, or doing that rewarding 15 mile hike. At the same time, you will be able to sustain a calm lifestyle as nature is the best healer. As you are someone who prefers having amore private life, living in the nature will really uplift you and give you the healthy comfort that you need.";
} else if (activity == "reading" && (indep_fam=="independent" || indep_fam=="familyoriented") && intro_extro=="introverted" && environment=="no" && (lifestyles.includes("calm") || lifestyles.includes("private"))){
    characters="you are most likely to live in a desert house!";
    image='images/desert.jpg';
    character2="I get it. Sometimes, people are tiring and you just want to be alone. Well, living in a desert house is the move for you. You will get endless time to read countless novels, while also living a comfortable and private lifestyle. If you are scared about the environment changing, do not . It will be consistent, helping you establish a calm, stress-free life. Whether it be living by yourself or with your family, this lifestyle will not let you down.";
} else if (activity == "cityexploring" && indep_fam=="independent" && (intro_extro=="introverted" || intro_extro=="extroverted") && environment=="yes" && lifestyles.includes("structured")){
    characters="you are most likely to live in a city apartment!";
    image='images/city.jpg';
    character2="Living in vast city of New York. Does that not sound like a dream? By living in the city, you will get countless opportunities to explore building to building, almost like Spiderman. It will also support you in establishing an independent lifestyle that is structured from day to day so that you never feel lost or surprised. PS. You will get the best views for the rest of your life.";
} else {
    characters="you are most likely to live in a suburban house!";
    image='images/suburban.jpg';
    character2="What greater comfort is there than living in a warm, cozy house alongside other people? By living in the suburbs, almost everything is accessible to you, whether you want to hike, read, explore a nearby city, or go for a swim at the beach (if not, a pool). Living a calm, consistent lifestyle, nothing will feel more like home in the long run.";
}


//console.log(characters)

//writing html code 

function postData() {
    const container = document.getElementById("results");
    container.innerHTML = `<h1 id="result_title">${name[0].toUpperCase()+name.substring(1)}, ${characters}</h1>
                        <img id="housepic" src="${image}"></img>
                        <p id="result_description"> <strong>${character2}</strong></p>`;
}

//I don't know how to impleement the user's data into my results.html website 
/*
document.getElementById("resultButton").addEventListener("click", myFunction);
function myFunction(){
    const geez = document.getElementById("fname").value;
    document.getElementById("result_title").innerHTML=geez;
}
*/