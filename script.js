console.log("-------------------------------------QUESTION 1--------------------------------------");
// QUESTION 1 
// How to compare two JSON have the same properties without order?

let obj1 = {
    "name" : "Person1",
    "age"  : "5"
}

let obj2 = {
   
    "name" : "Person1",
    "age"  : "5"
}

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //Used to convert a JS object into a string  ( It will return false as the order matters in stringify)

// console.log(_.isEqual(obj1,obj2));                       // isEqual method also can be used to compare whether two objects are same or not irrespective of the order


console.log("-------------------------------------QUESTION 2--------------------------------------");

//QUESTION 2
// Use rest countries API and display all the country flags in the console

var countryAPI = new XMLHttpRequest();

countryAPI.open("GET","https://restcountries.com/v3.1/all",true);

countryAPI.send();

countryAPI.onload = function(){
    var data = countryAPI.response; 

    var result = JSON.parse(data);
    
    for(var i=0; i<result.length; i++)
    {
        console.log(result[i].name.common,result[i].flags.png);
    }
}

// console.log("-------------------------------------QUESTION 3--------------------------------------");

//QUESTION 3
//Use rest countries API to print all countries names,regions, sub-regions and populations


var country_req = new XMLHttpRequest();

country_req.open("GET","https://restcountries.com/v3.1/all",true);

country_req.send();

country_req.onload = function(){
    var data2 = country_req.response;
    var result2 = JSON.parse(data2);
// console.log(result2);
    for(var i=0; i<result2.length; i++)
    {
        console.log("Name:",result2[i].name.common," Region:", result2[i].region," Sub-region:", result2[i].subregion," Population:", result2[i].population);
    }
}


