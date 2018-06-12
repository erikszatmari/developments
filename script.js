var muveletek = 'ajax.php';
var operation = 'operating.php';
var modal = document.getElementById('login-window');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function loading(type){
    if(type != 0) {
        $('.loading-overlay').fadeIn();
        $('.loading').fadeIn();
    } else {
        $('.loading-overlay').fadeOut();
        $('.loading').fadeOut();
    }
}
function login() {
    user = $('#user').val();
    pw = $('#pw').val();
    $.post(muveletek,{'muvelet':'login','user':user,'pw':pw}, function(data_returned){
        $('.login_err').html(data_returned);
    });
}
function save_settings(){
    email = $('#email').val();
    megerosites = $('#megerosites').val();
    url = $('#url').val();
    oldal_nev = $('#oldal_nev').val();
    nyitott = $('#nyitott').val();
    max_users = $('#max_users').val();
    $.post(muveletek,{'muvelet':'save_settings','email':email,'url':url, 'megerosites':megerosites, 'oldal_nev':oldal_nev, 'nyitott':nyitott, 'max_users':max_users}, function(data_returned){
        $('.save_err').html(data_returned);
    });
}
function login_form(){
    $('form.reg').slideUp();
    $('form.login').slideDown();
    $('h1.login').html('Bejelentkezés');
}
function openNav() {
    document.getElementById("left-nav-menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("left-nav-menu").style.width = "0";
}
function closeUserControll(){
    document.getElementById("customerCtrl").innerHTML = "";
    document.getElementById("customerCtrl").style.display = "none";
}
function openUsersControll() {
    document.getElementById("customerCtrl").style.display = "inline";
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("customerCtrl").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "operating.php?q=getData", true);
  xhttp.send();
}