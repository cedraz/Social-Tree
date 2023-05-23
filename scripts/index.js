const discordLink = document.querySelector('.discord__icon');

discordLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Adicionei a classe');
    discordLink.classList.add("discord__icon__clicked");
    setTimeout(() => {
        discordLink.classList.remove("discord__icon__clicked");
    }, 1500)
})