const toFa = (strNum) => {
    const pn = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    const en = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let cache = strNum;
    for (let i = 0; i < 10; i++) {
        const regex_en = new RegExp(en[i], 'g')
        cache = cache.replace(regex_en, pn[i])
    }
    return cache
}

// Set the date we're counting down to
const revolution = moment([1979, 1, 11])

// Update the count down every 1 second
const x = setInterval(() => {

  // Get today's date and time
  let now = moment()

  // Find the distance between now and the count down date
//   let distance = countDownDate + now

  // Time calculations for days, hours, minutes and seconds
  let days = toFa(now.diff(revolution, 'days').toString())
  let hours = toFa(new Date().getHours().toString())
  let minutes = toFa(new Date().getMinutes().toString())
  let seconds = toFa(new Date().getSeconds().toString())

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + " روز " + hours + " ساعت "
  + minutes + " دقیقه " + seconds + " ثانیه " + "از نکبت شورش ۵۷ گذشت"

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1000)

const setWallpaper = () => {
    const index = Math.floor(Math.random() * (backgrounds.length - 1))
    document.querySelector('.slide').style.backgroundImage = `url(${backgrounds[index]})`
}

setWallpaper()

const background_changer = setInterval(() => setWallpaper(), 30000)