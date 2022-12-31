const container = document.querySelector('.container');

const req = new XMLHttpRequest();
req.open('GET',"https://restcountries.com/v3.1/name/india");
req.send();

//to get response
req.addEventListener('load',function(){
    // console.log(this.responseText);
   const [data] = JSON.parse(this.responseText);
//    console.log(data.name.nativeName.hin.common);
   const htmlData = `
   <div class="card">
            <div class="card-body">
                <img src="${data.flags.png}" alt="" class="card-img">
                <h1 class="card-body-title">
                    ${data.name.common}
                </h1> </br>
                <p class="card-body-text">
                    capital : <span>${data.capital}
                    </p></span>
            </div></br>
            <div class="card-footer">
                <p>Native Name : <span>${data.name.nativeName.hin.common}</span></p>
                </br>
                <p>Population : <span>${data.population}</span></p>
                </br>
                <p>Demonym : <span>${data.demonyms.eng.f}</span></p>
            </div>
        </div>
   `;

   container.insertAdjacentHTML("afterbegin",htmlData)
})
