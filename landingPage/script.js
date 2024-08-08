const toggleBtn = document.getElementById("toggle")
const modalEl = document.getElementById('modal')
const closeBtn = document.getElementById('close')
const signUpBtn = document.getElementById('open')

toggleBtn.addEventListener('click', toggleSideBar)
closeBtn.addEventListener('click', closeModal)
// modalEl.addEventListener('click', closeModal)
signUpBtn.addEventListener('click', openModal)

// toggle nav
function toggleSideBar() {
    document.body.classList.toggle('show-nav')
}

function closeModal() {
    modalEl.style.display = "none"
}

function openModal() {
    modalEl.style.display = "block"
}

window.addEventListener('click', e => e.target == modal ? closeModal() : false)