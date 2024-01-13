const xhttp = new XMLHttpRequest()

// xhttp.onreadystatechange = () => {
//   if (this.readyState === 4 && this.status === 200) {
//     document.getElementById('demo').innerHTML = this.responseText
//   }
// }

xhttp.open('GET', 'https://json.extendsclass.com/bin/046f024ee1d1', true)
xhttp.send()

console.log(xhttp.getResponseHeader('sellerId'))
