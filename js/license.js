const KEYS=[
 "REVOX-7A92-X1",
 "REVOX-4K88-Z9",
 "REVOX-9P31-Q7",
 "REVOX-2M55-R4",
 "REVOX-8T63-L2"
];

function unlock(){
 const input=document.getElementById("keyInput").value.trim();
 if(KEYS.includes(input)){
  localStorage.setItem("revox_access","yes");
  document.getElementById("lock").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
 }else{
  document.getElementById("msg").innerText="Invalid license key";
 }
}

document.addEventListener("DOMContentLoaded",()=>{
 if(localStorage.getItem("revox_access")==="yes"){
  lock.classList.add("hidden");
  app.classList.remove("hidden");
 }
 document.getElementById("unlockBtn").onclick=unlock;
});
