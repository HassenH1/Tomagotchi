var name = prompt("What is your name?")

class Tom {
  constructor(name) {
    this.name = name
    this.hunger = 0;
    this.sleep = 0;
    this.boredom = 0
  }
  getSomeFood() {
    this.hunger += Math.floor(Math.random() * 3)
    $("#hungerProgress").attr("value", `${this.hunger++}`)
    $("#hunger").text(`Hunger: ${this.hunger}`)
    //console.log(`${this.name}  <---sleep`)
  }
  play() {
    $("#sleepProgress").attr("value", `${this.sleep--}`)

  }
  bored() {
    $("#boredProgress").attr("value", `${this.boredom--}`)

  }
  feed() {
    // const feed = setInterval(() => {
    //   console.log(this.hunger+= 1)

    // }, 5000)
    // if(this.hunger >= 10){
    //   console.log("full")
    // }
    $("#hungerProgress").attr("value", `${this.hunger--}`)
  }
  getSomeSleep() {
    this.sleep += Math.floor(Math.random() * 3)
    $("#sleepProgress").attr("value", `${this.sleep++}`)
    $("#sleep").text(`Sleep: ${this.sleep}`)
    //console.log(`${this.name}  <---sleep`)
  }
  // check(){
  //   if(this.hunger === 10 || this.sleep === 10){
  //     console.log("stop")
  //   }
  // }
  gettingBored() {
    this.boredom += Math.floor(Math.random() * 3)
    $("#boredProgress").attr("value", `${this.boredom++}`)
    $("#bored").text(`Bored: ${this.boredom}`)
    //console.log(`${this.name}  <---sleep`)
  }
}

const game = {
  start() {
    const hassen = new Tom(name)
    console.log(hassen.name)
    $("#name").text(hassen.name)
    //hassen.getSomeFood()
    //hassen.feed()
    const gameStarter = setInterval(() => {
      //hassen.getSomeSleep()
      //hassen.getSomeFood()
      //hassen.gettingBored()

      if (hassen.hunger >= 20) {
        console.log("died from Hungre")
        $("#little").css("transform", "rotate(0deg)")

        clearInterval(gameStarter)
      } else if (hassen.sleep >= 20) {
          console.log("died from lack of sleep")
          $("#little").css("transform", "rotate(0deg)")

          clearInterval(gameStarter)
      } else if (hassen.boredom >= 20) {
          console.log("Died from Boredom")
          $("#little").css("transform", "rotate(0deg)")

          clearInterval(gameStarter)
      }
    }, 1000)

    $("#feed").on('click', () => {
      hassen.feed()
    })
    $("#play").on('click', () => {
      hassen.bored()
    })


    let li = false
    $("#lights").on("click", (e) => {
      if (li !== true) {
        
          $(".container").css("background-image", "linear-gradient(to top, rgb(0, 0, 0), rgb(0,0,0))");
          $(".levels").css("color", "white")
          // $('.container').css('background-color', 'black');
          console.log(e.target)
          li = true;
      } else {
        li = false
        $(".container").css("background-image", "linear-gradient(to top, rgb(248, 247, 184), rgb(240,240,240))");
        $(".levels").css("color", "black")

      }
    })
  }
}

game.start()

// var name = prompt("What is your name?")

// class Tomagotchi {
//   constructor(name) {
//     this.name = name;
//     this.hunger = 0;
//     this.sleep = 0;
//     this.boredom = 0;
//     this.age = 0;
//   }
//   getSomeFood() {
//     this.hunger--
//   }
//   // feed() {
//   //   const feed = setInterval(() => {
//   //     console.log(this.hunger += 10)

//   //   }, 5000)
//   //   if (this.hunger >= 20) {
//   //     console.log("full")
//   //   }
//   // }
//   // getSomeSleep() {
//   //   this.sleep--
//   //   console.log(`${this.name} ${this.sleep}`)
//   // }
//   check() {
//     if (this.hunger === 0 || this.sleep === 0) {
//       console.log("stop")
//     }
//   }
// }

// const hassen = new Tomagotchi("Hassen")
// console.log(hassen.name)

$('.container').prepend('<img id="little" src="img/chao.png">')
$('.container').prepend('<img id="grass" src="img/grass.jpg">')
$('.container').prepend('<img id="grass2" src="img/grass.jpg">')

// const game = {
//   start(){
//     const hassen = new Tomagotchi(name)
//     $('#name').text(`${name}`)
//     console.log(hassen.name)
//     hassen.getSomeFood()
//     //hassen.feed()
//     const gameStarter = setInterval(() => {
//       //hassen.getSomeSleep()
//       hassen.getSomeFood()

//       if(hassen.hunger === 0){
//         console.log("died from Hungre")
//         clearInterval(gameStarter)
//       } else if(hassen.sleep === 0){
//         console.log("died from lack of sleep")
//         clearInterval(gameStarter)
//       }
//     }, 1000)
//   }
// }

// game.start()