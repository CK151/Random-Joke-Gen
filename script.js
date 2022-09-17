//
const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random";


btn.addEventListener("click", getJoke);


/*function getJoke() {
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) =>{
    console.log(data);
    joke.innerHTML = data.value.joke;
  })
}*/

//async await


async function getJoke() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    joke.innerHTML = data.value.joke;

    //console.log(data);
  }
  catch (error){
    joke.innerHTML = error.message;
  }

  
}

