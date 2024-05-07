
const home_div = document.getElementById('home')
const about_div = document.getElementById('about')
const education_div = document.getElementById('education')
const skills_div = document.getElementById('skills')
const projects_div = document.getElementById('projects')

const navigation = document.getElementById('navbar')

const more_about_me = document.getElementById('more-about-me')

navigation.querySelectorAll('li').forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        let current_name = element.getAttribute('data-text');
        if (current_name === 'home') {
            home_div.scrollIntoView()
        } else if (current_name === 'about') {
            about_div.scrollIntoView()
        } else if (current_name === 'education') {
            education_div.scrollIntoView()
        } else if (current_name === 'skills') {
            skills_div.scrollIntoView()
        } else if (current_name === 'projects') {
            projects_div.scrollIntoView({behavior: "smooth"})
        }
    });
});

more_about_me.addEventListener('click', () => {
    about_div.scrollIntoView()
})

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var distanceFromTop = navbar.getBoundingClientRect().top;
  
    if (distanceFromTop <= 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });