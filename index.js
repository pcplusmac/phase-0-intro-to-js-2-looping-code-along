// Code your solutions in this file
// Add the code provided in 'example' 
// for (let age = 30; age < 40; age++){
//     console.log(`I am ${age}, happy birthday to me `);
//     // Add break point for debugging
//     debugger;
// }

// // Add gift array
// const gifts = ["teddy bear","drone","doll","lego"];

// // Create a function to wrap the gifts one by one
// function wrapGifts(gifts) {
//     // Loop each element by for loop and apply action on each item
//     for (let i = 0; i < gifts.length; i++){
//         //let gift = gitfs[i];
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         // Add breaking point
//         debugger;
//     }
//     /*Below is the 'return' keyword. comment it out when complete debugging. 
//     but 'return' line don't have to be commented out while debuggin. 
//     */ 
//     return gifts;
    
// } 

// wrapGifts(gifts);

// Create function to generate thanks cards
function writeCards(arr,event) {
   
   // Create an empty array
   const friends = []; 
   let count = 0; 
   let msg = "";
   
    // Loop the passed-in array of receivers, add thanks meesage for them
    for (let i = 0; i < arr.length; i++){
        count += 1;
        msg = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        debugger; 
        friends.push(msg);
        
    }
    
    console.log(friends);  
    //let newFriends = [...friends,`msg`];
    return friends;
    

}

writeCards(["ali","tony","alex"],"birthday");

// Create countdonw function 
function countDown(num) {
    let index = num;
    while (index >= 0) {
        console.log(index)
        index--;
    }
}

countDown(9);