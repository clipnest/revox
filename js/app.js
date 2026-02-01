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

 data={
  visual:
`SCENE VISUAL IDEA:
• Primary focus: ${scene.value}
• Visual style: ${clip.value}
• What to show on screen:
  - Abstract shapes reacting to beats
  - Minimal text highlights
  - Smooth transitions between elements

PINTEREST SEARCH:
"${scene.value} ${clip.value} motion graphic edit"`,

  motion:
`MOTION DIRECTION:
• Energy level: ${energy.value}
• Motion type:
  - ${c.motion}
  - Emphasis on rhythm sync
  - Avoid random movement

TIMING TIP:
• Keep cuts tight
• Let motion breathe for 0.3–0.5s`,

  strategy:
`CONTENT STRATEGY:
• Audience: ${audience.value}
• Goal:
  - Hold attention in first 3 seconds
  - Build visual curiosity
  - Reduce visual noise

STRUCTURE:
Hook → Visual build → Payoff`,

  color:
`COLOR & MOOD:
• Palette: ${color.value}
• Contrast:
  - Bright elements on dark base
  - Avoid over-saturation

LOOK FEEL:
Clean, premium, modern`,

  combo:
`${sw.toUpperCase()} BEST COMBO:
• Why this works:
  - ${c.best}
• Best used for:
  - ${c.use}

EDITOR TIP:
Save this combo as a preset`
 };

 show("visual");
}

