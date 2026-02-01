const KEYS=[
 "CLIP-7A92-X1",
 "CLIP-4K88-Z9",
 "CLIP-9P31-Q7",
 "CLIP-2M55-R4",
 "CLIP-8T63-L2"
];

function checkKey(){
 if(KEYS.includes(keyInput.value)){
  localStorage.setItem("licensed","true");
  lock.classList.add("hidden");
  app.classList.remove("hidden");
 }else msg.innerText="Invalid license key";
}

if(localStorage.getItem("licensed")){
 lock.classList.add("hidden");
 app.classList.remove("hidden");
}
