let data={};

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
 let c=combos[sw];

 data={
visual:
`WHAT TO SHOW ON SCREEN:
• Scene type: ${scene.value}
• Visual base: ${clip.value}
• On-screen idea:
  - Abstract shapes reacting to beats
  - Minimal highlighted text
  - Smooth visual flow

PINTEREST SEARCH:
"${scene.value} ${clip.value} motion graphic edit"`,

motion:
`MOTION DIRECTION:
• Energy: ${energy.value}
• Motion style:
  - ${c.motion}
  - Beat-synced movement
  - No random animation

TIMING:
• Hold key visuals 0.3–0.5s`,

strategy:
`EDITING STRATEGY:
• Audience: ${audience.value}
• Goal:
  - Strong first 3 seconds
  - Visual clarity
  - Keep screen clean

STRUCTURE:
Hook → Build → Payoff`,

color:
`COLOR & MOOD:
• Palette: ${color.value}
• Contrast:
  - Bright elements on dark base
  - Avoid over-saturation

FEEL:
Premium & clean`,

combo:
`${sw.toUpperCase()} BEST COMBO:
• Why:
  - ${c.best}
• Best for:
  - ${c.use}

PRO TIP:
Save this as a preset`
 };

 show("visual");
}

function show(type){
 document.querySelectorAll(".tabs span").forEach(t=>t.classList.remove("active"));
 event.target.classList.add("active");
 result.innerText=data[type];
}

function copy(){
 navigator.clipboard.writeText(result.innerText);
}

fill();
