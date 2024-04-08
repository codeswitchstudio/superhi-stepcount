const todaySvg = d3.select("svg.today")
// const rectTags = d3.selectAll("rect")
// rectTags

//contiuous scale https://github.com/d3/d3-scale/blob/v4.0.2/README.md#_con tinuous
const barScale = d3.scaleLinear()
//domain is input, range is output
	.domain([0, 2000])
	.range([1, 112])

const todayGroups = todaySvg
	.selectAll ("g")
	.data(todayData)
	.enter()
	.append("g")

//rectangles
todayGroups
// 	.selectAll("rect")
//   .data(todayData)
//24 data points in array, add rectangles
// 	.enter()	
// 	.append("rect")
  //forEach loop, return down the page
	.append("rect")
  .attr("x", (d, i)=> { return i * 36 } )
  .attr("y", (d, i) => { return 112 } )
	.attr("width", 24) 
	.attr("height", 0)
	.transition()
	.delay((d, i) => { return i * 20 })
  .attr("y", (d, i) => { return 112 -barScale(d) } )
  .attr ("height", (d, i) => { return barScale(d) } )

//text tags
todayGroups
// 	.selectAll("text")
// 	.data(todayData)
// 	.enter()
	.append("text")
	.attr("x",(d, i)=>12 ) 
  .attr("y", 130)
	.text((d, i) => { return i } )
