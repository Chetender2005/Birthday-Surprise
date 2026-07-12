/* ==========================
   ELEMENTS
========================== */

const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");

const gift = document.getElementById("gift");

const cake = document.getElementById("cake");

const flame = document.getElementById("flame");

const wish = document.getElementById("wish");

const from = document.getElementById("from");

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

const particles = document.getElementById("particles");

/* ==========================
   MESSAGE
========================== */

const message = `💖 Dear Pooja,

Today is all about you.

May your smile always stay beautiful,
your dreams come true,
your heart stay happy,
and every new day bring success,
peace and countless memories.

You deserve the best life has to offer.

✨ Happy Birthday ✨`;

/* ==========================
   OPEN GIFT
========================== */

gift.addEventListener("click", () => {

    intro.classList.remove("active");

    setTimeout(() => {

        birthday.classList.add("active");

        typeWriter();

        createParticles();

    }, 700);

});

/* ==========================
   TYPEWRITER
========================== */

function typeWriter(){

    let i = 0;

    wish.innerHTML = "";

    const typing = setInterval(() => {

        if(i >= message.length){

            clearInterval(typing);

            return;

        }

        if(message[i] == "\n"){

            wish.innerHTML += "<br>";

        }

        else{

            wish.innerHTML += message[i];

        }

        i++;

    },35);

}

/* ==========================
   MUSIC
========================== */

musicBtn.onclick = () => {

    if(music.paused){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵 Music";

    }

};
/* ==========================
   APPLE STYLE PARTICLES
========================== */

const particleIcons = [

"✨",
"💖",
"🎈",
"🌸",
"🎉"

];

function createParticles(){

setInterval(()=>{

const item=document.createElement("div");

item.innerHTML=
particleIcons[
Math.floor(
Math.random()*particleIcons.length
)
];

item.style.position="absolute";

item.style.left=Math.random()*100+"vw";

item.style.top="-50px";

item.style.fontSize=
(18+Math.random()*18)+"px";

item.style.opacity=.9;

item.style.pointerEvents="none";

item.style.transition="transform 6s linear, opacity 6s linear";

particles.appendChild(item);

requestAnimationFrame(()=>{

item.style.transform=
`translateY(${window.innerHeight+120}px)
rotate(${Math.random()*720}deg)`;

item.style.opacity=0;

});

setTimeout(()=>{

item.remove();

},6000);

},250);

}

/* ==========================
   TWINKLING STARS
========================== */

for(let i=0;i<70;i++){

const star=document.createElement("div");

star.style.position="absolute";

star.style.width="3px";

star.style.height="3px";

star.style.borderRadius="50%";

star.style.background="white";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.opacity=Math.random();

star.style.animation=
`blink ${2+Math.random()*3}s infinite`;

particles.appendChild(star);

}

/* ==========================
   STAR ANIMATION
========================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes blink{

0%,100%{

opacity:.2;

transform:scale(.8);

}

50%{

opacity:1;

transform:scale(1.4);

}

}

`;

document.head.appendChild(style);
/* ==========================
   CANDLE BLOW
========================== */

cake.addEventListener("click", blowCandle);

function blowCandle(){

    if(flame.style.opacity==="0") return;

    // Flame Off
    flame.style.opacity="0";

    // Smoke
    const smoke=document.createElement("div");

    smoke.innerHTML="💨";

    smoke.style.position="absolute";
    smoke.style.left="50%";
    smoke.style.top="-25px";
    smoke.style.transform="translateX(-50%)";
    smoke.style.fontSize="28px";
    smoke.style.opacity="1";
    smoke.style.transition="all 2s ease";

    cake.appendChild(smoke);

    requestAnimationFrame(()=>{

        smoke.style.top="-70px";
        smoke.style.opacity="0";

    });

    setTimeout(()=>{

        smoke.remove();

    },2000);

    launchConfetti();

    setTimeout(()=>{

        from.classList.add("show");

    },2500);

}

/* ==========================
   CONFETTI
========================== */

function launchConfetti(){

const icons=[

"🎉",
"✨",
"💖",
"🎊",
"🎈",
"🌸"

];

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.innerHTML=
icons[
Math.floor(
Math.random()*icons.length
)
];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-40px";

c.style.fontSize=
(16+Math.random()*18)+"px";

c.style.pointerEvents="none";

document.body.appendChild(c);

requestAnimationFrame(()=>{

c.style.transition=
`transform ${3+Math.random()*2}s linear,
opacity ${3+Math.random()*2}s linear`;

c.style.transform=
`translateY(${window.innerHeight+100}px)
rotate(${Math.random()*1080}deg)`;

c.style.opacity="0";

});

setTimeout(()=>{

c.remove();

},6000);

}

}

/* ==========================
   AUTO MUSIC
========================== */

document.addEventListener("click",()=>{

if(music.paused){

music.play().catch(()=>{});

}

},{once:true});

/* ==========================
   END
========================== */

console.log("❤️ Happy Birthday Pooja ❤️");