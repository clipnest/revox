const KEYS=[
 "REVOX-7A92-X1",
 "REVOX-4K88-Z9",
 "REVOX-9P31-Q7",
 "REVOX-2M55-R4",
 "REVOX-8T63-L2"
];

function checkKey(){
 if(KEYS.includes(keyInput.value.trim())){
  localStorage.setItem("licensed","yes");
  lock.classList.add("hidden");
  app.classList.remove("hidden");
 }else{
  msg.innerText="Invalid license key";
 }
}

if(localStorage.getItem("licensed")==="yes"){
 lock.classList.add("hidden");
 app.classList.remove("hidden");
}
