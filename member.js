function skillsMember(){
    const skills = document.querySelectorAll('.skills__member');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            skills.forEach(skill => {
                skill.classList.remove('skills__member--active');
            });
            skill.classList.add('skills__member--active');
        });
    });
}