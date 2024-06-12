// const url = 'https://66681676f53957909ff67af8.mockapi.io/users/Animals';

// let animals = document.getElementById('animals');
// let img = document.getElementById('img');

// animals.onchange = catsndogs(value);



//     async function gitData(){

//         // let animals = document.getElementById('animals');
//         // let img = document.getElementById('img');
        
//         const responce = await fetch(url);
//         const jsonData = await responce.json();
//         console.log(jsonData);
//         document.querySelector('#img').src = jsonData[0].image;

//         for (i = 0; i < jsonData.length; i++) {
//             const opt = document.createElement("option");
//             opt.innerText = jsonData[i].name;
//             opt.value = jsonData[i].image;
//             document.getElementById("naimals").appendChild(opt);
//         }
//         }
//         getData();
//         // const x = document.querySelector("#img");
//         function catsndogs(value) {
//         img.src = value;
//         }

// gitData();

const url = "https://66681676f53957909ff67af8.mockapi.io/users/Animals";

    async function getData() {
        const response = await fetch(url);
        const jsonData = await response.json();
        // console.log("getData" ,jsonData);

        document.getElementById("img").src = jsonData[0].image;

        for (i = 0; i < jsonData.length; i++) {
        const opt = document.createElement("option");
        opt.innerText = jsonData[i].name;
        opt.value = jsonData[i].image;
        document.getElementById("animals").appendChild(opt);
        }
    }
    getData();

    const x = document.querySelector("#img");
    function catsndogs(value) {
        x.src = value;
    }

