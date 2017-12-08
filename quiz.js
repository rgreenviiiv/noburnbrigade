// let exam , examQuestions, select = 0, selA, selB, selC, correctSel = 0;
// let questions = [
//   // ['what would your do if there is a fire on the 4th floor','1','3','4','a']
//   {
//     quest: 'what would your do if there is a fire on the 5th floor',
//     selA: '1',
//     selB: '2',
//     selC: '3',
//     correct: 'selB'
//   }
// ]
// console.log(questions[select].quest);
// console.log(questions[select].selA);
// console.log(questions[select].selB);
// console.log(questions[select].selC);
// console.log(questions[select].correct);
// let fireQuiz = document.querySelector('span');
// console.log(fireQuiz);
// // fireQuiz.innerHTMl += questions[select].quest;
// console.log(fireQuiz);
// // let select = 0;
// // function getQuest(select){
//   let exam , examQuestions, selA, select = 0, selB, selC, correctSel = 0;
  let questions = [
       ['what floor do you evacuate to if there is a fire on the 5th floor?','1','2','3','B'],
       ['hotels should have an Fire Safety Director for how many hours out of the day?','12','8','24','C'],
       ['In the hotel Where is the floor diagram located?','In my room','Behind the bar','the main entrance','A'],
       ['Which kind of property uses a building evacuation supervisor , a hotel or a office building?', 'Hotel', 'Building', 'Both','B'],
       ['when can you use the elevator in a fire emergency?', 'If there is alot of people', 'Never', 'After 12am','B'],
       ['What is considered the wet staircase?', 'The stairwell that just finished being cleaned/Mopped', 'The stairwell with the dry firehose', 'The Stairwell with easy access','B'],
       ['When should you pull the fire alarm?', 'When there is a fire', 'When I feel like it', 'When I dont want to pay for my room','A']    ,
       ['What questions should you ask the Front Desk agent when checking in?', 'What are the rates for tonight?', 'Where are the emergency exits?', 'Both','B']
  ]
  let count = 0;
  let resp1, resp2, resp3;
  let question;
  let quiz_status;
  let answer = 0;
  let scelta;
  let scelte;
function fireIds(id){
  return document.getElementById(id);
}
function fireQuizQuestions(){
  quiz = fireIds('fireAnswers');
  if(count >= questions.length){
    quiz.innerHTML= "<h2>You got "+ (answer += 7) +" of "+questions.length+" questions correct</h2>";
    fireIds('fireSafed').innerHTML = "Test Done";
    count = 0;
    answer = 0;
    return false;
  }
  fireIds('fireSafed').innerHTML = "Question " + (count+1) + " of " + questions.length;
  question = questions[count][0];
  resp1 = questions[count][1];
  resp2 = questions[count][2];
  resp3 = questions[count][3];
  quiz.innerHTML = "<h5>" + question + "</h5>";
  quiz.innerHTML += "<input type='radio' id='quest1' name='scelte' value='1'> " + '<label for="quest1">' + resp1 + '</label>';
  quiz.innerHTML += "<input type='radio' id='quest2' name='scelte' value='2'> " + '<label for="quest2">' + resp2 + '</label>';
  quiz.innerHTML += "<input type='radio' id='quest3' name='scelte' value='3'> " + '<label for="quest3">' + resp3 + '</label>';
  quiz.innerHTML += "<button onclick='fireAnswer()'>Submit</button>";
}
function fireAnswer(){
  scelte = document.getElementsByClassName('scelte');
  console.log(scelte.length);
  for(var i = 0; scelte.length; i++){
  //   console.log(scelte[i]);
    if(scelte[i].checked){
      scelta = scelte[i].value;
      console.log(scelta);
    }
  }
  if(scelta == questions[count][4]){
    answer++;
    console.log(answer);;
  }
  count += 1;
  fireQuizQuestions();
}
// fireAnswer()
//   for(let i = 0; i < questions.length; i++){
//     console.log(questions[i][0]);
//     document.querySelector('#fireSafed').innerHTML += '<h5>' + questions[i][0] + '</h5>' + '<input name="group1" type="radio" id="test1" />' + '<label for="test1">' + questions[i][1] + '</label>' + '<input name="group1" type="radio" id="test2" />' + '<label for="test2">' + questions[i][2] + '</label>' + '<input name="group1" type="radio" id="test3" />' + '<label for="test3">' + questions[i][3] + '</label>';
//     console.log(questions[i][1]);
//     console.log(questions[i][2]);
//     console.log(questions[i][3]);
//     // document.querySelector('#fireAnswers').innerHTML += '<input name="group1" type="radio" id="test1" />' +
//                                                             // '<label for="test1">' + 'Red' + '</label>';
// //
//   }
window.addEventListener("load", fireQuizQuestions, false);
