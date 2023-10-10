const firebaseConfig = {
  apiKey: "AIzaSyAsbV0Gx3FLLXpye3uvupMQeTG-NY66nNM",
  authDomain: "homedesign-ad91a.firebaseapp.com",
  databaseURL: "https://homedesign-ad91a-default-rtdb.firebaseio.com",
  projectId: "homedesign-ad91a",
  storageBucket: "homedesign-ad91a.appspot.com",
  messagingSenderId: "131734431269",
  appId: "1:131734431269:web:cfbb954978aaf61f22c1cc"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm"); 

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm() {
  var food = getElementVal("fname");

  saveMessages(food);
  //   enable alert
  document.getElementById("contactForm").reset();
  
};

const saveMessages = (Food) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    MyFood: Food,
    dio4jed:"WORKED!!!"
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

