$(document).ready(function(){

  //*-- Add new pages to array for menu active stage css color and header main content --*//
  var pagesArr = ['home', 'services', 'careers', 'about', 'contact'];

  loadMenuSec(currentPage(pagesArr), pagesArr);


  //Load external main section and wait until is loaded
  $('.main-sections-js').load(currentPage(pagesArr) + '.html', function() {

    //drop down menu
    $('.ui.dropdown').dropdown();

    //rollover for top two copy with icons
    $('.first-menu-items-js').mouseenter(function(event){
      iconsAndCopyRollOver('.' + this.className.split(' ')[1] + '.first-menu-items-js', 'first-menu-roll-over');
    });

    //rollover for copy with icons
    $('.icons-and-copy-js').mouseenter(function(event){
      iconsAndCopyRollOver('.' + this.className.split(' ')[2] + '.icons-and-copy-js', 'icons-and-copy-roll-over');
    });

    if(currentPage(pagesArr) === 'careers'){
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyBn77f9Z4Wv_7jOtehuTfEO_ghiZsgnRww&callback=initMap");
      document.body.appendChild(script);

      function initMap(){
        var options = {
          zoom: 15,
          center: {lat:51.5074, lng:-0.1278}
        }
        
        var map = new google.maps.Map(document.getElementById('map'), options);
      }
    }

      

    $('#careerBtn-js').on('click', function() {
        
      console.log("we are deeper inside");
        
    });



    homeIconsRollOver();
    //window.open("http://www.cnn.com");

    //show main section
    $(this).addClass('displaySect');

    //hide loader section
    $('.loader-js').addClass('hideSect');

    clickFunc();

  });

/*$('.main-sections-js .section-5')
  console.log('We are in ' + currentPage(pagesArr));

  $('#careerBtn-js').on('click', function(){
    console.log('We are in ' + currentPage(pagesArr));
  });*/

  for(var i = 0; i < pagesArr.length; i++){
    if(currentPage(pagesArr) === pagesArr[i]) {
      console.log(pagesArr[i]);
    }
  }

  console.log($('.main-sections-js').children.length);

  console.log('We are in ' + currentPage(pagesArr));

  document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementsByClassName('main-sections-js').length) {
      console.log('My class is found!');
    }
  });

/*  $('.section-5').one('load', function(){
    console.log("Sure load event is called!")
  }).each(function(){
    if(this.children.length) {
      //$(this).trigger('load');
      console.log('We are in ' + currentPage(pagesArr));
    }
  });
*/


/*  console.log($('.main-sections-js').children.length);

  if($('.main-sections-js').children.length){
    console.log('We are in ' + currentPage(pagesArr));
  }*/

/*  if($('.main-sections-js').children.length){
    $('.main-sections-js').trigger('load');
    console.log('We are in ' + currentPage(pagesArr));
  }*/

  // Set the ammount of images in home main slider
  var homeBackgNumb = 3;

  var homeBackg = [];

  // Adding images to homeBackg arr
  for(var i = 0; i < homeBackgNumb; i++){
    homeBackg.push("images/" + "slide-" + (i + 1) + ".jpg");
  }

  // Set images transition (fade) speed
  var trans = 2000;

  $('.home .background').css('background-image','url('+homeBackg[homeBackg.length - 1]+')');
  window.setInterval(
    function() {
      var img = homeBackg.shift();
      homeBackg.push(img);
      //$('.background').eq(1).hide(0).css({'background-image': 'url('+img+')'}).delay(100).fadeToggle(trans);

      $('.home .background').delay(1000).fadeToggle(trans, function(){

        $(this).fadeToggle(trans).css({'background-image': 'url('+img+')'});

        //$('.background').eq(1).hide(0);
      });
    }, 7000);



  //FUNCTIONS!
  function currentPage(pagesArr){
    for(var i = 0; i < pagesArr.length; i++) {
      //check what page you are in
      if($('body').hasClass(pagesArr[i])){
        return pagesArr[i];
      }
    }
  }

  function removeAllPagesMainClass(pagesArr) {
    for(var i = 0; i < pagesArr.length; i++){
      if($('body').hasClass(pagesArr[i])){
        $('body').removeClass(pagesArr[i]);
      }
    }
  }

  function activeMenuColor(currentPage, pagesArr){
    //remove active menu color from all menus
    for(var i = 0; i < pagesArr.length; i++) {
      if($('.' + pagesArr[i] + '-js').hasClass('active-menu')){
        $('.' + pagesArr[i] + '-js').removeClass('active-menu');
      }
    }

    //add active color to current menu
    $('.' + currentPage + '-js').addClass('active-menu');
  }

  function loadMenuSec(currentPage, pagesArr){
    //change header's main copy
    $('head').append('<link rel="stylesheet" type="text/css" href="css/pages/' + currentPage + '/main.css">');
    $('.' + currentPage + ' .section-header-js').load('units/header-' + currentPage + '-main-content.html', function(){
      clickFunc();
    });
  }

  function returnBtnClassPageName(btnClassPageName){
    var currentButtonName = btnClassPageName;
    var currentNameStart = currentButtonName.indexOf('-') + 1;
    var currentNameEnd = currentButtonName.indexOf('-', currentNameStart);
    var currentPageName = currentButtonName.substring(currentNameStart, currentNameEnd);

    return(currentPageName);
  }

  //This will apply to most buttons
  function btns(currentPageName){
    removeAllPagesMainClass(pagesArr);
    $('body').addClass(currentPageName);
    $('.main-sections-js').load(currentPageName + '.html', function() {
      loadMenuSec(currentPage(pagesArr), pagesArr);
      activeMenuColor(currentPage(pagesArr), pagesArr);
      homeIconsRollOver();
      navigationFn.goToSection(id);
    });
  }

  //Home icons Section roll over
  function homeIconsRollOver(){
    $('.icons-home-sec-js').mouseenter(function(event){
      $(this).addClass('icons-section-backgs-roll-over');
      $(this).find('.icon-js').addClass('icons-section-icon-roll-over');
      $(this).find('.icon-button-js').addClass('icons-section-buttons-roll-over');
    }).mouseleave(function(){
      $('.icons-home-sec-js').removeClass('icons-section-backgs-roll-over');
      $('.icon-js').removeClass('icons-section-icon-roll-over');
      $('.icon-button-js').removeClass('icons-section-buttons-roll-over');
    });
  }

  //rollover for icons and copy together
  function iconsAndCopyRollOver(rolloverClass, colorClass) {
    $(rolloverClass).mouseenter(function(event) {
      $(rolloverClass).children().addClass(colorClass);
    }).mouseleave(function() {
      $(rolloverClass).children().removeClass(colorClass);
    }); 
  }

  //go to page section
  var navigationFn = {
  goToSection: function(id) {
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 0);
    }
  }

  function clickFunc(){

    $('a').add($('.btns-js')).on('click', function(){

      var newClass = this.className.split(' ')[1];

      console.log(newClass);

      btns(returnBtnClassPageName(newClass));
    });
  }

  function initMap(){
    var options = {
      zoom: 8,
      center: {lat:51.5074, lng:-0.1278}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
  }

});