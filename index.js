let count = 0
let number = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count +=1
    number.innerText = count
}

function save() {
    let savedCount = count + " -  "
    saveEl.innerHTML += savedCount
    count = 0
    number.textContent = 0
}

