const switchBtn = document.querySelector('.switch-btn')

switchBtn.addEventListener('click', (e) => {
    const toggler = document.querySelector('.dark-mode-toggler')
    const body = document.querySelector('body')
    const header = document.querySelector('header')
    const card = document.querySelectorAll('.card')
    const cardOver = document.querySelectorAll('.overview-card')
    

    if (toggler.className === 'dark-mode-toggler') {
        toggler.className += ' active'
        body.className += ' dark-theme'
        header.className += ' dark-theme'
        card.forEach(card => {
            card.className += ' dark-theme'
        })
        cardOver.forEach(card => {
            card.className += ' dark-theme'
        })
       
    } else {
        toggler.className = 'dark-mode-toggler'
        body.className = ''
        header.className = 'header'
        card.forEach(card => {
            card.className += 'card'
        })
        cardOver.forEach(card => {
            card.className = 'overview-card' 
        })
    }
})