// alert("Hello!")

//change greeting to user
// pick h1 tag
// const headerTag = document.querySelector("h1")
//querySelecotor picks just 1

//change the html content
// headerTag.innerHTML = "Hello someone"

//change html tag to red bg
// headerTag.style.backgroundColor = "var(--primary-orange)"
// give each tag bg color
//bigger font size
// headerTag.style.fontSize = "64px"

//pick all h1 tags on page
const headerTags = document.querySelectorAll("h1")

//we cant do headerTags.innerHTML = "whatevs"
//instead we use forEach loop fat arrow make it do something
// headerTags.forEach(h1 => {
//   const hue = 360 * Math.random()
//   h1.style.backgroundColor = "hsl("+ hue +", 100%, 50%)"
// })

//pick tag label with tag number --the index
headerTags.forEach((h1, index) => {
  h1.innerHTML = "this is tag number " + 	index 
})

//select rect tags
//then change rect widths
// const rectTags = document.querySelectorAll("rect")
//date[0]....550
//data [1]...420

// rectTags.forEach((tag, i) => {
// //   tag.style.fill = "blue"
// //   const width = 100 + 200 * i
//   const width = data[i]
//   tag.setAttribute("width", width + "px")
// })

const data = [
2, 3, 5, 6, 4,2,
5, 30, 24, 32, 40, 59,
68, 89, 100, 112, 100, 101,
78, 56, 32, 31, 12, 1  
]

const todaySvg = document.querySelector("svg")

//width bar = 24
// gap betw bars = 12
//max height = 112

//d = datapoint, i = index
data.forEach((d, i) => {
  //add a rect tag to todaySvg size, width, pos, NS = name space create element outta svg
  const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect")
  rectTag.setAttribute("y", 112-d)
  rectTag.setAttribute("x", i * 36)
  rectTag.setAttribute("height", d)
  rectTag.setAttribute("width", "24")
  
  
  todaySvg.append(rectTag)
}) 