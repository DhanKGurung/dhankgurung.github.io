function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const Modal = document.querySelector('#modal')
  const openModal = document.querySelector('.open-button')
  const closeModal = document.querySelector('.close-button')
  
  openModal.addEventListener('click', () => {
    Modal.showModal();
  })
  closeModal.addEventListener('click', () => {
    Modal.close();
  })

const Modal2 = document.querySelector('#modal2')
const openModal2 = document.querySelector('.open-button2')
const closeModal2 = document.querySelector('.close-button2')

openModal2.addEventListener('click', () => {
  Modal2.showModal();
})
closeModal2.addEventListener('click', () => {
  Modal2.close();
})

const Modal3 = document.querySelector('#modal3')
const openModal3 = document.querySelector('.open-button3')
const closeModal3 = document.querySelector('.close-button3')

openModal3.addEventListener('click', () => {
  Modal3.showModal();
})
closeModal3.addEventListener('click', () => {
  Modal3.close();
})
