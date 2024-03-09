//level
let titleSize = 32;
let rows = 16;
let columns = 16;
let map;
let mapWidth = titleSize * columns;
let mapHeight = titleSize * rows;
let context;
let fighter = document.getElementById("fighter");
let cry = document.getElementById("cry");
let Mk = document.getElementById("Mk");
let Mk2 = document.getElementById("Mk2");
let win = document.getElementById("win");
const theme = document.getElementById("smooth")
//red army
let redWidth = titleSize*2;
let redHeight = titleSize;
let red = titleSize * columns/2 - titleSize;
let red2 = titleSize * rows - titleSize * 2;

let  Army = {
    x:red,
    y:red2,
    width: redWidth,
    height: redHeight
}

let ArmyImg;
let ArmySpeed = titleSize;

//Zombies
let zombiesArray = [];
let zombieWidth = titleSize*2;
let zombieHeight = titleSize;
let zombiex  = titleSize;
let zombiey = titleSize;
let zombieImg;

let zombieRows = 2;
let zombieColumn = 3;
let zombieCount = 0;
let zombieSpeed = 1;

//bullets
let bulletArray = [];
let bulletSpeed = -10;
let bullet = 0;

let score = 0;
let gameOver = "";
let loseMessage = "You Have Failed Mother Russia";
let bye = document.getElementById("bye")
let anthem= document.getElementById("anthem")
let winMessage = "Stalin has Save the MotherLand again"





//Running Game
window.onload = function () {
    map = document.getElementById("map")
    map.width = mapWidth
    map.height = mapHeight;
    context = map.getContext("2d");



//mending fighter image
    ArmyImg = new Image();
    ArmyImg.src = "newfighter.webp";
//Making Zombie Pic
    zombieImg = new Image()
    zombieImg.src = "gullie.png";



    ArmyImg.onload = (function () {
        let fighter = document.getElementById("fighter");
        context.drawImage(fighter,Army.x, Army.y, Army.height, Army.width);




    })
    createZombies()
    requestAnimationFrame(update);
    document.addEventListener("keydown", moveStalin);
    document.addEventListener("keydown",shoot);

}
//constantly looping red army and enemy drawings
function update()
{
    const theme = document.getElementById("smooth")
    theme.play()


    requestAnimationFrame(update);

    if(gameOver)
    {
        return;
    }


    context.clearRect(0,0, mapWidth, mapHeight);
//stalin creation or Red Army conscript
    context.drawImage(fighter,Army.x, Army.y, Army.height, Army.width);
    const ZombiePic = document.getElementById("zombie")
   // context.drawImage(ZombiePic,Zombiex,Zombiey, ZombieWidth,ZombieHeight)
    //zombie creation
    for (let i = 0; i < zombiesArray.length; i++)
    {
        //console.log(zombieImg)
        let zombie = zombiesArray[i];
        if (zombie.alive === true)
        {
            zombie.x += zombieSpeed






            if (zombie.x + zombie.width >= map.width || zombie.x <= 0)
           {
               zombieSpeed *= -1;
               zombie.x += zombieSpeed*2;

               for (let j = 0; j < zombiesArray.length; j++)
               {
                   zombiesArray[j].y += zombieHeight;

               }
           }
            context.drawImage(zombieImg, zombie.x,zombie.y,zombie.width,zombie.height)

if (zombie.y === Army.y)
{
theme.pause();
theme.currentTime = 50;
gameOver = true;
loseCase();
console.log(context)
    dinner.src = "https://y.yarn.co/7f8807f4-419e-4278-af07-6c655cbc731d.mp4?_gl=1*17kh9iz*_ga*ODY0MzAxOTA2LjE3MDk5NTA5MDk.*_ga_VB8JQS4PTK*MTcwOTk1MDkwOS4xLjEuMTcwOTk1MTA3MC4zMS4wLjA.";
    context.append(dinner)
return;

}

        }
    }

    for (let i =0 ; i < bulletArray.length; i++) {
        let bullet = bulletArray[i];
        bullet.y += bulletSpeed;
        context.fillStyle = "red";
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        // context.fillRect(1,1,1,1 );
        for (let j = 0; j < zombiesArray.length; j++)
                 {
                     let zombie = zombiesArray[j];
                     if(!bullet.bodyUsed && zombie.alive && detectCollision(bullet, zombie)) {
                         bullet.bodyUsed = true;
                         zombie.alive = false;
                         zombieCount--;
                         score += 100
                         if (score === 1000) {
                             //cry.play()
                         }
                         if (score === 2500) {
                             Mk.play()
                         }
                         if (score === 5000) {
                             Mk2.play()
                         }
                         if (score === 7500) {
                             const left = document.getElementById("leftside")
                             const bottomRight = document.getElementById("bottomRight")
                             const top = document.getElementById("top")
                             const pop = document.getElementById("new");

                             const pic1 = document.getElementById("pic1" )
                             const pic2 = document.getElementById("pic2")
                             const pic3 = document.getElementById("pic3")
                             const pic4 = document.getElementById("pic4")
                             const pic5 =document.getElementById("pic5")
                             pic1.src = ("https://media2.giphy.com/media/cIUMpqjUUmh8Y/giphy.webp?cid=ecf05e47pvg5kbwkc4ymco7hehrzwfxsaagvvzushijspxrz&ep=v1_gifs_related&rid=giphy.webp&ct=g")
                             pic2.src = ("https://media1.giphy.com/media/5xtDarsrFTIbEsRXOw0/giphy.webp?cid=ecf05e47pvg5kbwkc4ymco7hehrzwfxsaagvvzushijspxrz&ep=v1_gifs_related&rid=giphy.webp&ct=g")
                             pic3.src = ("https://i.pinimg.com/originals/83/43/dd/8343dd831ad9dc4658d91c023e5d2b2a.gif")
                             pic4.src = ("https://steamuserimages-a.akamaihd.net/ugc/861732761029312156/FAA9B033BE2173061178843B639F53470B22A26C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")
                             pic5.src = ("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/220px-Hammer_and_sickle.svg.png")
                             left.append(pic1)
                             bottomRight.append(pic2);
                             top.append(pic3)
                             pop.append(pic4)

                             alert("Stalin Has single handed Saved Russia , Again...... ")
                             redBackground()
                             cry.play()
                             anthem.play()
                             theme.pause();
                             theme.currentTime = 0;
                             winCase()

                         }



                         }
                     }

                 }



    while (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0))
    {
        bulletArray.shift();
        console.log(zombieCount)
    }

if (zombieCount === 0)
{
    zombieColumn = Math.min(zombieColumn + 1, columns/2 - 2)
    zombieRows = Math.min(zombieRows + 1, rows - 4);
    zombieSpeed += 0.2;
    zombiesArray = [];
    bulletArray = [];
    createZombies();

}
context.fillStyle ="black"
    context.font="16px courier";
context.fillText(score,5,20 )



}

function moveStalin(e)
{
    if (gameOver)
    {
        return;
    }
    if (e.code === "ArrowLeft" && Army.x - ArmySpeed >= 0)
    {
        Army.x -= ArmySpeed; //left movement
    }
    else if (e.code === "ArrowRight" && Army.x + ArmySpeed + Army.width <= map.width)
    {
        Army.x += ArmySpeed; //right movement
    }

}




function createZombies()
{
    for (let c = 0; c < zombieColumn; c++){
        for (let r = 0; r <zombieRows; r++){
            let zombie = {
                img:zombieImg,
                x : zombiex + c*zombieWidth,
                y : zombiey + r*zombieHeight,
                width: zombieWidth,
                height:zombieHeight,
                alive:true
            }
            zombiesArray.push(zombie)
        }
    }
    zombieCount = zombiesArray.length;
}

function shoot(e){


    if(e.code === "Space")
    {

        let bullet = {
            x: Army.x + Army.width * 15/32,
            y:Army.y,
            width:titleSize/8,
            height: titleSize/2,
            bodyUsed:false,

        }
        bulletArray.push(bullet);
        console.log("boom")

        console.log(theme)
}
}
//make bullet effective
function detectCollision(a, b)
{
    const boom = document.getElementById("boom")
    boom.play()
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y <b.y + b.height &&
        a.y + a.height > b.y;


}
const video =document.getElementById("vid");
function loseCase()
{
    context.fillStyle ="black"
    context.font="28px courier";
    context.fillText(loseMessage,5,40 )
    bye.play()
}

function redBackground()
{
    document.body.style.backgroundColor = "red";
}
function load()
{
    location.reload()
}


function  winCase()
{
    context.fillStyle ="black"
    context.font="28px courier";
    context.fillText(winMessage,5,40 )
    console.log(context);
}
