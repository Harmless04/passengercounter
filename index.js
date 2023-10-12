let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")

console.log(countEL)
let count=0

function increment()
{
  count = count+1
  countEL.innerText = count
}
function save()
  {
    let countStr = count + " - "
    saveEL.textContent += countStr
      console.log(count)
    count=0
    countEL.innerText = count
  }

  

  

  
