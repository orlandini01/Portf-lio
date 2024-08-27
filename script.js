// Animação ao rolar para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// carrossel

let currentProject = 0;
const projects = document.querySelectorAll('.project');
const totalProjects = projects.length;

document.querySelector('.next').addEventListener('click', () => {
    projects[currentProject].classList.remove('active');
    currentProject = (currentProject + 1) % totalProjects;
    projects[currentProject].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    projects[currentProject].classList.remove('active');
    currentProject = (currentProject - 1 + totalProjects) % totalProjects;
    projects[currentProject].classList.add('active');
});

/****************************************************************** */



