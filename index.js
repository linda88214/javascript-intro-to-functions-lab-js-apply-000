// JavaScript method of .toUpperCase() and .toLowerCase() changes the string to all uppercase or all lowercase

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  }else if (string.toUpperCase() === string){
    return "YES INDEED!";
  }else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
};
=======
  return string.toUpperCase()
}
>>>>>>> afa889a06ff7f7f19dd4e5a1a56e247e93a34841

// if statement returns the string if the condition is true
// else if statement returns the string if the first condition is false 
