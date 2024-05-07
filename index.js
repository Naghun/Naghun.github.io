// ######################################################################## //
// #####################      Declarations        ######################### //
// ######################################################################## //

// skills

const backend_button = document.getElementById('backend-button')
const frontend_button = document.getElementById('frontend-button')
const additional_button = document.getElementById('additional-button')
const close_backend_skill_button = document.getElementById('backend-div-close')
const close_frontend_skill_button = document.getElementById('frontend-div-close')
const close_additional_skill_button = document.getElementById('additional-div-close')

const backend_div = document.getElementById('backend-div')
const backend_div_inside = document.getElementById('backend-div-inside')
const frontend_div = document.getElementById('frontend-div')
const frontend_div_inside = document.getElementById('frontend-div-inside')
const additional_div = document.getElementById('additional-div')
const additional_div_inside = document.getElementById('additional-div-inside')

const skills_details = document.getElementById('skills-details')

const skills_box = document.getElementById('backend-box')
const skills_list = document.getElementById('skills-list')

// projects

const open_project_duvar_button = document.getElementById('open-project-duvar')
const open_project_tournament_button = document.getElementById('open-project-tournament')
const open_project_gmail_button = document.getElementById('open-project-gmail')
const open_project_travian_button = document.getElementById('open-project-travian')
const open_project_ecommerce_button = document.getElementById('open-project-ecommerce')
const open_project_todo_button = document.getElementById('open-project-todo')

const close_duvar_div = document.getElementById('close-duvar-div')
const close_tournament_div = document.getElementById('close-tournament-div')
const close_gmail_div = document.getElementById('close-gmail-div')
const close_travian_div = document.getElementById('close-travian-div')
const close_ecommerce_div = document.getElementById('close-ecommerce-div')
const close_todo_div = document.getElementById('close-todo-div')

const duvar_div = document.getElementById('duvar-div')
const duvar_div_inside = document.getElementById('duvar-div-inside')

const tournament_div = document.getElementById('tournament-div')
const tournament_div_inside = document.getElementById('tournament-div-inside')

const gmail_div = document.getElementById('gmail-div')
const gmail_div_inside = document.getElementById('gmail-div-inside')

const travian_div = document.getElementById('travian-div')
const travian_div_inside = document.getElementById('travian-div-inside')

const ecommerce_div = document.getElementById('ecommerce-div')
const ecommerce_div_inside = document.getElementById('ecommerce-div-inside')

const todo_div = document.getElementById('todo-div')
const todo_div_inside = document.getElementById('todo-div-inside')

const project_details = document.getElementById('project-details')

// ######################################################################## //
// ########################      Logic       ############################## //
// ######################################################################## //

// ###############      skills      ############### //

// backend

backend_button.addEventListener('click', () => {
    open_divs(backend_div, backend_div_inside, skills_details)
    setTimeout(() => {
        skills_box.classList.add('box-grow')
    }, 700);
    setTimeout(() => {
        skills_list.classList.add('show-skills')
    }, 700);
})

close_backend_skill_button.addEventListener('click', () => {
    close_divs(backend_div, backend_div_inside, skills_details)
    setTimeout(() => {
        skills_box.classList.remove('box-grow')
    }, 1000);
    setTimeout(() => {
        skills_list.classList.remove('show-skills')
    }, 1100);
})

// Frontend logic

frontend_button.addEventListener('click', () => {
    open_divs(frontend_div, frontend_div_inside, skills_details)
})

close_frontend_skill_button.addEventListener('click', () => {
    close_divs(frontend_div, frontend_div_inside, skills_details)
})

// Additional logic

additional_button.addEventListener('click', () => {
    open_divs(additional_div, additional_div_inside, skills_details)
})

close_additional_skill_button.addEventListener('click', () => {
    close_divs(additional_div, additional_div_inside, skills_details)
})


// ###############      projects      ############# //

// duvar

open_project_duvar_button.addEventListener('click', () => {
    open_divs(duvar_div, duvar_div_inside, project_details)
})

close_duvar_div.addEventListener('click', () => {
    close_divs(duvar_div, duvar_div_inside, project_details)
})

// tournament

open_project_tournament_button.addEventListener('click', () => {
    open_divs(tournament_div, tournament_div_inside, project_details)
})

close_tournament_div.addEventListener('click', () => {
    close_divs(tournament_div, tournament_div_inside, project_details)
})

// gmail

open_project_gmail_button.addEventListener('click', () => {
    open_divs(gmail_div, gmail_div_inside, project_details)
})

close_gmail_div.addEventListener('click', () => {
    close_divs(gmail_div, gmail_div_inside, project_details)
})

// travian

open_project_travian_button.addEventListener('click', () => {
    open_divs(travian_div, travian_div_inside, project_details)
})

close_travian_div.addEventListener('click', () => {
    close_divs(travian_div, travian_div_inside, project_details)
})

// ecommerce

open_project_ecommerce_button.addEventListener('click', () => {
    open_divs(ecommerce_div, ecommerce_div_inside, project_details)
})

close_ecommerce_div.addEventListener('click', () => {
    close_divs(ecommerce_div, ecommerce_div_inside, project_details)
})

// todo

open_project_todo_button.addEventListener('click', () => {
    open_divs(todo_div, todo_div_inside, project_details)
})

close_todo_div.addEventListener('click', () => {
    close_divs(todo_div, todo_div_inside, project_details)
})

// functions

function add_blur(e) {
    e.classList.add('blur')
}
function remove_blur(e) {
    e.classList.remove('blur')
}
function show_div(e) {
    e.classList.remove('d-none')
    e.classList.add('d-flex')
}
function hide_div(e) {
    e.classList.remove('d-flex')
    e.classList.add('d-none')
}

function open_divs(main_div, inside_div, background_div) {
    show_div(main_div)
    setTimeout(() => {
        inside_div.classList.add('show')
        inside_div.classList.remove('hide')}, 100)
    add_blur(background_div)
}

function close_divs(main_div,inside_div,background_div) {
    setTimeout(() => {
        inside_div.classList.remove('show')
        inside_div.classList.add('hide')
    }, 100);
    setTimeout(() => {
        hide_div(main_div)
    }, 500);
    remove_blur(background_div)
}