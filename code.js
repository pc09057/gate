var password = "shorts2k5user2k12";
function passcheck() {
if(document.getElementById('shorts2k5user2k12').value != password) {
alert('Wrong password, Try Again.');
return false;
}
if(document.getElementById('shorts2k5user2k12').value == password) {
alert('Correct password, Press OK to continue.');
}
}
