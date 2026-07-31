/*=========================================================
  HAPPY ANNIVERSARY WEBSITE
  PART 1
=========================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 800);

    }, 2500);

});


/*=========================================================
    SECRET PIN
=========================================================*/

const SECRET_PIN = "15072025";

function checkPin() {

    const pin = document.getElementById("pin").value.trim();

    const card = document.querySelector(".pin-card");

    if (pin === SECRET_PIN) {

        document.getElementById("pinScreen").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("pinScreen").style.display = "none";

            document.getElementById("website").style.display = "block";

            window.scrollTo(0, 0);

        }, 700);

    }

    else {

        card.animate(
            [
                { transform: "translateX(-10px)" },
                { transform: "translateX(10px)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(0px)" }
            ],
            {
                duration: 500
            }
        );

        alert("❌ Wrong PIN ❤️");

        document.getElementById("pin").value = "";

    }

}


/*=========================================================
    ENTER KEY SUPPORT
=========================================================*/

document.getElementById("pin").addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        checkPin();

    }

});


/*=========================================================
    HERO TYPING EFFECT
=========================================================*/

const typingText =
`One year...
365 beautiful days...
Countless memories...

Every heartbeat of mine
belongs to you.

Happy First Anniversary,
My Nonuu ❤️`;

let typeIndex = 0;

const typing = document.getElementById("typing");

function typeHero() {

    if (typeIndex < typingText.length) {

        typing.innerHTML += typingText.charAt(typeIndex);

        typeIndex++;

        setTimeout(typeHero, 55);

    }

}

setTimeout(typeHero, 3000);


/*=========================================================
    START JOURNEY BUTTON
=========================================================*/

document.getElementById("startBtn").addEventListener("click", () => {

    document.querySelector(".timeline").scrollIntoView({

        behavior: "smooth"

    });

});


/*=========================================================
    BACKGROUND MUSIC
=========================================================*/

const song = document.getElementById("song");

const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        song.play();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

        musicPlaying = true;

    }

    else {

        song.pause();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';

        musicPlaying = false;

    }

});


/*=========================================================
    AUTO PLAY MUSIC AFTER UNLOCK
=========================================================*/

setTimeout(() => {

    document.addEventListener("click", () => {

        if (!musicPlaying) {

            song.play().catch(() => {});

            musicBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

            musicPlaying = true;

        }

    }, { once: true });

}, 1000);


/*=========================================================
    VOICE MESSAGE
=========================================================*/

const voice = document.getElementById("voiceMessage");

const voiceBtn = document.getElementById("voiceBtn");

let voicePlaying = false;

voiceBtn.addEventListener("click", () => {

    if (!voicePlaying) {

        voice.play();

        voiceBtn.innerHTML =
        "⏸ Pause My Voice ❤️";

        voicePlaying = true;

    }

    else {

        voice.pause();

        voice.currentTime = 0;

        voiceBtn.innerHTML =
        "▶ Play My Voice ❤️";

        voicePlaying = false;

    }

});


voice.addEventListener("ended", () => {

    voicePlaying = false;

    voiceBtn.innerHTML =
    "▶ Play My Voice ❤️";

});


/*=========================================================
    SMOOTH SCROLL FOR ALL BUTTONS
=========================================================*/

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================================
    FLOATING HEARTS RANDOM EFFECT
=========================================================*/

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.zIndex = "999";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.bottom = "110vh";

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}, 900);


/*=========================================================
    PART 2A
    LOVE COUNTER + ENVELOPE + LETTER
=========================================================*/


/*=========================================================
    LOVE COUNTER
=========================================================*/

// Anniversary start date
const loveDate = new Date("August 1, 2025 00:00:00");

function updateLoveCounter() {

    const now = new Date();

    let diff = now - loveDate;

    if (diff < 0) diff = 0;

    const totalSeconds = Math.floor(diff / 1000);

    const seconds = totalSeconds % 60;

    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;

    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;

    const totalDays = Math.floor(totalHours / 24);

    const years = Math.floor(totalDays / 365);

    const months = Math.floor((totalDays % 365) / 30);

    const days = Math.floor((totalDays % 365) % 30);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateLoveCounter();

setInterval(updateLoveCounter,1000);



/*=========================================================
    ENVELOPE OPEN
=========================================================*/

const envelope =
document.getElementById("openLetter");

const letterSection =
document.getElementById("letterSection");

let opened = false;

envelope.addEventListener("click",()=>{

    if(opened) return;

    opened = true;

    envelope.style.transform =
    "scale(1.15) rotate(-3deg)";

    setTimeout(()=>{

        letterSection.style.display="block";

        letterSection.scrollIntoView({

            behavior:"smooth"

        });

        startLetterTyping();

    },700);

});



/*=========================================================
    LOVE LETTER
=========================================================*/

const fullLetter =

`My Dearest Nonuu ❤️,

Happy First Anniversary!

One year ago,
our beautiful journey began.

Since then,
every single day has become
more meaningful because of you.

Your smile is my favorite sunrise.

Your voice is my comfort.

Your happiness is my biggest dream.

Thank you for loving me,
understanding me,
supporting me,
and standing beside me.

I know we have had
small fights,
small misunderstandings,
and difficult moments.

But every challenge
only made my love for you stronger.

I promise that
I will always respect you.

I will always protect you.

I will always stand beside you.

No matter what happens,
I will choose you
again and again.

You are my best friend,
my peace,
my happiness,
my home,
and my forever.

Happy First Anniversary,
My Beautiful Nonuu ❤️

I Love You Forever.

❤️ Your Manna ❤️`;



const letterElement =
document.getElementById("letterText");

const letterEnd =
document.getElementById("letterEnd");

let letterIndex = 0;

function startLetterTyping(){

    typeLetter();

}

function typeLetter(){

    if(letterIndex < fullLetter.length){

        letterElement.innerHTML +=
        fullLetter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,40);

    }

    else{

        letterEnd.style.display="block";

        letterEnd.style.animation=
        "fadeIn 2s";

    }

}



/*=========================================================
    AUTO SCROLL WHILE TYPING
=========================================================*/

setInterval(()=>{

    if(letterSection.style.display==="block"){

        window.scrollTo({

            top:document.body.scrollHeight,

            behavior:"smooth"

        });

    }

},4000);


const loveQuotes = [
  "You are my today and all of my tomorrows.",
  "Every heartbeat of mine whispers your name.",
  "Home is wherever you are.",
  // Add more quotes here...
];

const reasons = [
  "Because your smile makes my whole world brighter.",
  "Because you always believe in me.",
  "Because your voice brings me peace.",
  // Continue until you have as many reasons as you want...
];

/*=========================================================
    PART 3
    PROPOSAL + SURPRISE + SCROLL ANIMATION
=========================================================*/


/*=========================================================
    PROPOSAL BUTTONS
=========================================================*/

const yesBtn = document.getElementById("yesBtn");
const foreverBtn = document.getElementById("foreverBtn");

yesBtn.addEventListener("click", () => {

    alert("❤️ Yayy!! I Love You Forever Nonuu ❤️");

    createHearts(40);

});

foreverBtn.addEventListener("click", () => {

    alert("♾️ Forever & Always ❤️");

    createHearts(60);

});


/*=========================================================
    SURPRISE BUTTON
=========================================================*/

const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {

    createHearts(100);

    document.querySelector(".last-screen").scrollIntoView({
        behavior: "smooth"
    });

});


/*=========================================================
    HEART EXPLOSION
=========================================================*/

function createHearts(count){

    for(let i=0;i<count;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(20+Math.random()*30)+"px";
        heart.style.pointerEvents="none";
        heart.style.zIndex="99999";
        heart.style.transition="all 4s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="-10vh";
            heart.style.opacity="0";
            heart.style.transform=`translateX(${Math.random()*300-150}px) rotate(${Math.random()*720}deg)`;

        },50);

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}


/*=========================================================
    SCROLL REVEAL
=========================================================*/

const revealItems=document.querySelectorAll(
".timeline-card,.reason-card,.page,.counter-card,.open-card,.proposal-box,.quote-box,.promise-box,.letterBox"
);

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

},{
    threshold:.15
});

revealItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".8s";

    observer.observe(item);

});


/*=========================================================
    GALLERY CLICK EFFECT
=========================================================*/

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.animate([
            {transform:"scale(1)"},
            {transform:"scale(1.15)"},
            {transform:"scale(1)"}
        ],{
            duration:500
        });

    });

});


/*=========================================================
    END MESSAGE
=========================================================*/

console.log("❤️ Happy 1st Anniversary Manna & Nonuu ❤️");