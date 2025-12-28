let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numeric = "0123456789"
  const symbol = "@#$_&-+()/*':;!?~`|•√π÷×¶∆^°={}©®™℅[]<>£€$¢"
  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = ''
  for (let i = 0; i < len; i++) {
    generator += data[Math.floor(Math.random() * data.length)]
  }
  return generator
}

function getPassword() {
  const newPassword = generatePassword(passwordLength.value)
  password.value = newPassword
  setTimeout(() => {
    alert('password has been generated!')
  }, 1000);
}

function save() {
  document.title = password.value
  saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
  saveButton.setAttribute('download', 'MyPasswordGenerator.txt')
  setTimeout(() => {
    alert('password berhasil disimpan')
  }, 1000);
}
