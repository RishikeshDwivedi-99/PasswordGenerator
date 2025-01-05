function passwordGenerator() {
  let pass = "";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?";
  let randomNumber = Math.floor(Math.random()*9)+8;
  for (let i = 0; i < randomNumber; i++) {
    let randomChar = Math.floor(Math.random() * characters.length);
    pass += characters[randomChar];
  }
  return pass;
}


let input = document.querySelector("input");

let btn = document.querySelector("button");

let copy = document.querySelector(".input-box img");

btn.addEventListener("click",()=>{
  input.value = passwordGenerator();
})

copy.addEventListener("click",()=>{
  navigator.clipboard.writeText(input.value)
  .then(()=>{
    console.log("Copied");
    input.value = "";
  })
  .catch((err)=>{
    console.error(err);
  })
})




