let currentTab="visual";

function fill(){
 for(let k in options){
  let el=document.getElementById(k);
  options[k].forEach(v=>{
   let o=document.createElement("option");
   o.text=v; el.add(o);
  });
 }
}

function generate(){
 let sw=software.value;
 let c=combos[sw]||combos["CapCut"];

 window.data={
  visual:`Use ${clip.value} visuals designed for ${scene.value}.`,
  motion:`Energy level: ${energy.value}. ${c.motion}.`,
  strategy:`Best for ${audience.value} audience.`,
  color:`Apply ${color.value} palette.`,
  combo:`${sw} best combo: ${c.best}. Use for ${c.use}.`
 };

 show("visual");
}

function show(t){
 currentTab=t;
 result.innerText=data[t];
}

function copy(){
 navigator.clipboard.writeText(result.innerText);
}

fill();
