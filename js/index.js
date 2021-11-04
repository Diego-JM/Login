function showPassword() {
  const eyeOpen = document.getElementById('eye-open')
  const eyeClose = document.getElementById('eye-close')
  const fildPassword = document.getElementById('fildpassword')

  if (eyeOpen.style.display === 'none') {
    eyeOpen.style.display = 'block'
    eyeClose.style.display = 'none'
    fildPassword.type = 'password'
  } else {
    eyeOpen.style.display = 'none'
    eyeClose.style.display = 'block'
    fildPassword.type = 'text'
  }
}

document.getElementById('btn-login').addEventListener('click', function (e) {
  e.preventDefault()
  alert('Você está logado')
})
