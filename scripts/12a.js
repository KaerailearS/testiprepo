
// 12p - edited functions to be mainly arrow syntax
// 12q - edited to remove onclick attributes and to use addEventListeners('click') instead
// 12a create a varialbe called 'add' and save a function inside, this function will console.log(2+3); run the function twice
add = ()=>{console.log(2+3);}

add();
add();

// 12b create a function runTwice(fun) that takes a function and runs it twice
runTwice = (fun)=>{
  fun();
  fun();
}

runTwice(()=>{console.log('12b')});
runTwice(add);

// 12c create a button, that will change its text to 'Finished!' after one second has passed from the click
changeButton = ()=>{
  setTimeout(() => {
  document.querySelector('.js-button1').innerHTML = 'Finished!'
  }, 1000);
}

// 12d modify the button so that when we click it, text changes to 'Loading...' and after 1 second it changes to 'Finished!'
changeButton2 =()=>{
  document.querySelector('.js-button2').innerHTML = 'Loading...'
  setTimeout(() => {
  document.querySelector('.js-button2').innerHTML = 'Finished!'
    
  }, 1000);
}

// 12e create "add to cart" button. when clicking this button, display the message "added" below the button, then after 2seconds, remove the message.

changeButton3 =()=>{
  document.querySelector('.js-paragraph1').innerHTML = 'Added'
  setTimeout(() => {
  document.querySelector('.js-paragraph1').innerHTML = ''
    
  }, 2000);
}

// modify the code so clicking it will "refresh"the 2 second wait time
// above with an "if", below without

let timeoutId;
changeButton4 =()=>{
  let isLoading = false;
  const messageElement = document.querySelector('.js-paragraph1');
  if(!isLoading){
    messageElement.innerHTML = 'Added'
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
    messageElement.innerHTML = ''
    }, 2000);
    isLoading = true;
  } else {
    isLoading = false;
  }
}
let timeoutId2;

changeButton5 =()=>{
  const messageElement = document.querySelector('.js-paragraph1');
  messageElement.innerHTML = 'Added';
  clearTimeout(timeoutId2);
  timeoutId2 = setTimeout(() => {
    messageElement.innerHTML = ''
    }, 2000);
  }
 // 12g use setInterval and document.title to change title every 1 second
/*
 setInterval(() => {
  if(document.title === '12 exercises') {
    document.title = `New messages`;
  } else {
    document.title = '12 exercises';
  }
 }, 1000);
 */
 // 12h instead of fixed message, save the number of messages in a variable and display it - add 2 buttons to add/remove messages
 // 12i edit - dont let messages go below 0, if 0 messages, display normal title
let messages = 0;
setInterval(() => {
    if(document.title === '12 exercises' && messages > 0) {
      document.title = `${messages} New messages`;
    } else {
      document.title = '12 exercises';
    }
  }, 1000);

editMessageCount=(value)=>{
  messages = messages + value;
}
console.log(messages);

document.querySelector('.js-button1')
  .addEventListener('click', ()=>{
    changeButton();
})
document.querySelector('.js-button2')
  .addEventListener('click', ()=>{
    changeButton2();
})
document.querySelector('.js-button3')
  .addEventListener('click', ()=>{
    changeButton3();
})
document.querySelector('.js-button4')
  .addEventListener('click', ()=>{
    changeButton4();
})
document.querySelector('.js-button5')
  .addEventListener('click', ()=>{
    changeButton5();
})
document.querySelector('.js-add')
  .addEventListener('click', ()=>{
    messages++;
})
document.querySelector('.js-remove')
  .addEventListener('click', ()=>{
    if(messages>=1){messages--};
})