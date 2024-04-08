const monthSvg = d3.select("svg.month")

const radiusScale = d3.scaleSqrt()
	.domain([0, 30000])
	.range([0, 50])

// const colorScale = d3.scaleSqrt()
//     .domain([10000, 30000])
//     .range(["blue", "red"]);

monthSvg
	.selectAll("circle")
	.data(monthData)
	.enter()
	.append("circle")
	.attr("cx", (d, i) => { return (i % 7) * 120 + 60} )
	.attr("cy", (d, i) => { return Math.floor (i/7)  * 100 + 60 } )
	.attr("r", 10)
	.transition()
	.duration(250)
	.delay((d, i) => { return i * 20 + 500  })
	 .ease(d3.easeCubicIn)
// 	.attr("r", 50)
	.attr("r", (d, i) => { return radiusScale(d) } )
// 	.attr("fill", (d, i) => { return colorScale(d) } )

//text tags
// monthSvg
// 	.selectAll("text")
// 	.data(todayData)
// 	.enter()
// 	.append("text")
// 	.attr("x",(d, i)=> { return i * 20 + 10 } ) 
//   .attr("y", 40)
// 	.text((d, i) => { return i } )


