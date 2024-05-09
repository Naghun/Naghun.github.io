const rows = document.querySelectorAll('.row')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show-div", entry.isIntersecting)
        })
    },
    {
        threshold: 0.1,
    }
)
rows.forEach(row => {
    observer.observe(row)
})

