const url = 'https://66681676f53957909ff67af8.mockapi.io/users/Animals';

let animals = document.getElementById('animals');
// let img = document.getElementById('img');

animals.onchange = gitData();



    async function gitData(){

        // let animals = document.getElementById('animals');
        let img = document.getElementById('img');
        
        const responce = await fetch(url);
        const jsonData = await responce.json();
        console.log(jsonData);
        for(let i = 0; i <= jsonData.length; i++){
            let opt = document.createElement('option');
            animals.appendChild(opt);
            opt.value =  jsonData[i].name;
            console.log(animals);

            
                // opt.value = jsonData[i].name;
                opt.innerHTML = jsonData[i].name;
                img.src = jsonData[i].image;
            
        }

    }



// gitData();



