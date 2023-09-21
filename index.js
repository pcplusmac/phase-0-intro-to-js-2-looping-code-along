// Code your solutions in this file
// Add the code provided in 'example' 
// for (let age = 30; age < 40; age++){
//     console.log(`I am ${age}, happy birthday to me `);
//     // Add break point for debugging
//     debugger;
// }

// Add gift array
const gifts = ["teddy bear","drone","doll","lego"];

// Create a function to wrap the gifts one by one
function wrapGifts(gifts) {
    // Loop each element by for loop and apply action on each item
    for (let i = 0; i < gifts.length; i++){
        //let gift = gitfs[i];
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        // Add breaking point
        debugger;
    }
    /*Below is the 'return' keyword. comment it out when complete debugging. 
    but 'return' line don't have to be commented out while debuggin. 
    */ 
    return gifts;
    
} 

wrapGifts(gifts);