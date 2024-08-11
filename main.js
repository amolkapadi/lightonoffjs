// JavaScript to toggle the light mode
document.getElementById('flexSwitchCheckChecked').addEventListener('change', function () {
    document.body.classList.toggle('light-off');
    document.body.classList.toggle('light-on');
    
    // Toggle navbar class
    document.querySelector('.navbar').classList.toggle('navbar-light-on');
    document.querySelector('.navbar').classList.toggle('navbar-light-off');
});