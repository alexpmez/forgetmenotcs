$(document).ready(function(){
  var formContent = [];

  /*$("#careerBtn-js").onclick = function() {*/
$('.main-sections-js').load(currentPage(pagesArr), function () {
  
  console.log("we are outside");


  if(currentPage(pagesArr) === 'careers'){

    console.log("we are inside");

    document.getElementById("careerBtn-js").onclick = function() {

      console.log("we are deeper inside");

      var userName = $("#user").value;
      var userEmail = $("#email").value;
      var userPhoneNumb = $("#phone").value;
      var bestTime = $("#time").value;
      var userDescription = $("#description").value;

      if(userName !== "" && userEmail !== "" && userPhoneNumb !== "" && bestTime !== "" && userDescription !== ""){
    
        formContent.push( personalInfo(userName, userEmail, userPhoneNumb, bestTime, userDescription) );
  
        userName = "";    
        userEmail = ""; 
        userPhoneNumb = "";
        bestTime = "";
        userDescription = "";

      }
    }
  }; 

  console.log(formContent);

  function personalInfo(userName, userEmail, userPhoneNumb, bestTime, userDescription){

    var jobApplicant = {
      user: userName,
      email: userEmail,
      phone: userPhoneNumb,
      time: bestTime,
      description: userDescription
    };
    return jobApplicant;
  }

});