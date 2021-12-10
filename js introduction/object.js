//objects
let obj={}

let Ironman ={
        firstName:'Tony',
        lastName:'Stark',
        friends :['Hulk','Spiderman','Thor'],
        isAvenger :true,
        age : 40,
        address:{
            state : 'New York',
            city : 'georgo'
        },
        sayHi: function(){
            console.log('Hi there')
        }

}

console.log(Ironman)

//Dot notation

// console.log(captain.friends)

// // Bracket Notation
// console.log(captain['age'])

// captain.sayHi() // cap says hi

// //update object
// captain.isAvenger = 'False'
// console.log(captain)

// //create something inside an object
// captain.movies = ['first Avenger' , "Age of Ultron" , 'Endgame']
// console.log(captain)

//delete a property
// delete captain.age 
// console.log(captain)

//special loop (For in loop)

for(let key in Ironman){
    console.log("Key->" , key , 'Value->' , Ironman[key])
} 
