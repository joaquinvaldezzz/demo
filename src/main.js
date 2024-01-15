import './styles/main.scss'

const response = await fetch('https://json.extendsclass.com/bin/046f024ee1d1')
  .then((reply) => reply.json())
  .then((data) => data)
  .catch((error) => console.log(error))

console.log(response.data)
