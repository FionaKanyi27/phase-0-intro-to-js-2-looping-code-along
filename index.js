// writeCards function
function writeCards(names, event) {
    let messages = [];
    
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    
    return messages;
  }
  
  // Example usage of writeCards
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  
  
  // countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrement the number
    }
  }
  
  // Example usage of countDown
  countDown(10);
  