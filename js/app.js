const countries=['india','australia','america','japan','england','poland'];


                    // 1st type
//example of callbacks ---- function inside a function
// countries.forEach(function(country){
//     const list=document.createElement('li');
//     document.getElementById('result1').innerHTML=country;
// });

                    //2nd type
// function callback(cities)
// {
//     console.log(cities);
// }

// countries.forEach(callback);


function newCountry(country,callback)
{
    setTimeout(function(){

            countries.push(country);
            //execiute thr callback()
            callback();
    },2000);
}

function displayCountries(){
    setTimeout(function(){
        let html = ' ';
        
        countries.forEach(function(country){
                html += `<li> ${country}</li>`;
        });
        document.body.innerHTML= html;
    },1000);
}

newCountry('Russia',displayCountries);

displayCountries();
newCountry();