
//the study guide topics are HTML, CSS, Git, and JavaScript
let topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

//this function is for our for loop statement
function listTopics() {
    for (let x=0; x<topics.length; x++) {
        console.log(topics[x]);
    }
}
//this function selects a random topic of the 4 topics above ;  HTML, CSS, Git, JavaScript
let randomTopic=topics[Math.floor(Math.random() * topics.length)];

//this if statement function tells us what topic based on the random topic selection
function selectTopic() {
if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
   } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
   } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
   } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
   } else {
    console.log('Please try again!');
   }
}
console.log('Here are the topics we learned through Prework:') //tells us the list is coming.. printed below by listTopics
listTopics();
console.log('Which topic should we study first?') //asks what we should study.. answer is printed below by selectTopic
selectTopic();


