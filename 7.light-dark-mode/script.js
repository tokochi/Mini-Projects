const toggleSwitch = document.querySelector("input[type='checkbox']") // returns Element object
const nav = document.querySelector("#nav") // returns Element object
const toggleIcon = document.querySelector("#toggle-icon") // returns Element object
const image1 = document.querySelector("#image1") // returns Element object
const image2 = document.querySelector("#image2") // returns Element object
const image3 = document.querySelector("#image3") // returns Element object
const textBox = document.querySelector("#text-box") // returns Element object

function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

function toggleThemeMode(isDark){
    nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)':'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark?'rgb(255 255 255 / 50%)':'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark?'Dark Mode':'Light Mode';
    toggleIcon.children[1].className = isDark?'fas fa-moon':'fas fa-sun';
    isDark?imageMode('dark'):imageMode('light');   
}
function switchTheme (event){
if (event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark')
    toggleThemeMode(true)
}else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light')
    toggleThemeMode(false)
}
}
toggleSwitch.addEventListener('change',switchTheme );
const currentTheme = localStorage.getItem('theme')
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme ==='dark'){
        toggleSwitch.checked = true;
        toggleThemeMode(true)
    } 
}