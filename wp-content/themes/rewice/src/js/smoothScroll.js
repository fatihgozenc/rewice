export default () => {
  window.addEventListener('scroll', (e) => {
    console.log(e)
    console.log(window.pageYOffset)
  })
}