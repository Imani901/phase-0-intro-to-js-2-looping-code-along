function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Export the function if you're using modules
module.exports = { writeCards };


function countDown(number) {
  while (number >= 0) {
      console.log(number);
      number--;
  }
}

// Export the function if you're using modules
module.exports = { countDown };