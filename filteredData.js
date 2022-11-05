const Avengers = [
  {
    fname: "tony",
    lname: "stark",
    age: 30,
    gender: "M",
    powers: ["inteligence", "money"],
  },
  {
    fname: "natasha",
    lname: "romonov",
    age: 23,
    gender: "M",
    powers: ["inteligence", "slow ageing"],
  },
];

function Select(stringToSelect, from = []) {
  //finish the code
    const subStr = stringToSelect.split(",");
    const filteredFrom = [];
    
    from.map((obj) => {
        const filteredObj = {};
        
        for(let key in obj){
            if(subStr.includes(key)){
                filteredObj[key] = obj[key];
            }
        }
        filteredFrom.push(filteredObj);
        // console.log(filteredFrom)
    })
  return filteredFrom;
}

const list = Select("fname,lname,age", Avengers);
console.log(list);

//alternatively
const list2 = Select("fname,lname,gender,powers", Avengers);
console.log(list2);
//Expected output ....
/*
[{
    fname : "tony",
    lname : "stark",
    age : 30
},
{
    fname : "natasha",
    lname : "romonov",
    age : 23
}]

*/
