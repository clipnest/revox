let data={};

document.addEventListener("DOMContentLoaded",()=>{

 // fill selects
 for(let key in options){
  const el=document.getElementById(key);
  options[key].forEach(v=>{
   const opt=document.createElement("option");
   opt.text=v;
   el.add(opt);
  });
 }

 // generate
 document.getElementById("generateBtn").onclick=()=>{
  const sw=software.value;
  const c=combos[sw];

  data={
visual:
`WHAT TO SHOW:
• Scene: ${scene.value}
• Visual type: ${clip.value}
• On screen:
  - Minimal shapes reacting to beats
  - Key words highlighted
  - Smooth transitions

PINTEREST SEARCH:
"${scene.value} ${clip.value} motion graphic edit"`,

motion:
`MOTION STYLE:
• Energy: ${energy.value}
• Direction:
  - ${c.motion}
  - Beat-driven movement
  - No random motion`,

strategy:
`EDIT STRATEGY:
• Audience: ${audience.value}
• Focus:
  - Strong hook (first 3 sec)
  - Visual clarity
  - Clean composition

FLOW:
Hook → Build → Payoff`,

color:
`COLOR SYSTEM:
• Palette: ${color.value}
• Rule:
  - High contrast
  - Avoid over-saturation
  - Keep it premium`,

combo:
`${sw.toUpperCase()} COMBO:
• Why it works:
  - ${c.best}
• Best for:
  - ${c.use}

TIP:
Save this as preset`
  };

  showTab("visual");
 };

 // tabs
 document.querySelectorAll(".tabs span").forEach(tab=>{
  tab.onclick=()=>showTab(tab.dataset.tab);
 });

 // copy
 document.getElementById("copyBtn").onclick=()=>{
  navigator.clipboard.writeText(result.innerText);
 };

});

function showTab(type){
 document.querySelectorAll(".tabs span").forEach(t=>t.classList.remove("active"));
 document.querySelector(`[data-tab="${type}"]`).classList.add("active");
 result.innerText=data[type]||"Generate output first";
}
