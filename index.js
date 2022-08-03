
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")
let usersWord=""

function updateWord(element) {
  usersWord = element.value
  console.log(usersWord)
}

function handleSubmit() {
  
    let newListItem = document.createElement('LI')
        newListItem.innerText = usersWord
          if (usersWord.length % 2 === 0) 
          {evenList.appendChild(newListItem)} 
          else {oddList.appendChild(newListItem)}

    document.getElementById("even-odd-form").reset()
  }