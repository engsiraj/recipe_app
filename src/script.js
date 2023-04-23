let nam = `Menu Card App`
let des = `build with Vanila Javascript and design source`
document.getElementById("head").innerHTML = nam;
document.getElementById("text").innerHTML = des;

//https://free-food-menus-api-production.up.railway.app/burgers

//https://newsapi.org/v2/everything?q=tesla&from=2023-03-17&sortBy=publishedAt&apiKey=API_KEY

//https://superheroapi.com/api.php/10223569763528853/659


// 1st method fetchApi  method to escape from the pyramid of dome

// const getSuperHero = () => {
//     const url = 'https://superheroapi.com/api.php/10223569763528853/659';
//     fetch(url)
//         .then(response => response.json())
//         .then(json => console.log(json))
// }
// getSuperHero();

// 2nd method async , await method to escape from the pyramid of dome

// const fetchData = async () => {
//     const randomHero = () => {
//         const x = 731;
//         return Math.floor(Math.random() * x);
//     }
//     const url = `https://superheroapi.com/api.php/10223569763528853/${randomHero()}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }
// fetchData();

// let arr = [];
// arr.push(data);
// console.log(arr);

const getRecipe = async () => {
    // apin data fetiching data through async await.
    const baseUrl = `https://gist.githubusercontent.com/engsiraj/d64028e2e1ca8cd2a83ef3710945ee08/raw/768bcd412adfdfced056314e7a6fc14d2acd5d6e/`;
    const res = await fetch(baseUrl);
    const data = await res.json();
    //data maping
    const card = document.getElementById('card')
    data.map(({name,id,dsc,img,price}) => {
        const Div = document.createElement('div');
        Div.classList.add("p1","bg_light","col4","round2","poppins","mb3");
        Div.id = id;
        card.append(Div);
        
        const Image = document.createElement('img');
        Image.classList.add("round1");
        Image.src = img;
        Image.alt = `${id} 's Image`;
        Div.append(Image);

        const Para = document.createElement('p');
        Para.classList.add("regular","strong","mt1");
        Para.innerText = name;
        Div.append(Para);

        const Des = document.createElement('p');
        Des.classList.add("text","gray");
        Des.innerText = dsc;
        Div.append(Des);
    
        const Price = document.createElement('p');
        Price.classList.add("text");
        Price.innerText = `Unit Price : $${price}`;
        Div.append(Price);
    })
}
getRecipe();
