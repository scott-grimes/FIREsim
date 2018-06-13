
var data = {};
var simulated = {};
window.data = data;
var startingPortfolio = 500000;
var years = 30;
var spending = 20000;
var stockRatio = .8;

var parsePortfolioValue = ()=>{
	
}
var parseYearsValue = ()=>{
	
}
var parseSpendingValue = ()=>{
	
}
var parseStockRatio = ()=>{
	
}

var buildRun = function(){

	var firstYearOfData = 1928;
	var lastYearOfData = 2017;

	var buildRun = function(startingYear){

		var value = startingPortfolio;
		var portfolio = [];
		var max = value;
		var min = value;
		var maxDD = 0;
		var rets = [];
		var maxVal = 0;
		//index of our data to start with
		var end = startingYear+years;
		if(end>lastYearOfData)
			throw('out of bounds')

		for(var i = startingYear; i<end;i++){

			if(value<=0){
				portfolio.push( {'year':i, 'value': 0 } );
				continue;
			}

			//spend the money during our year
			value -= spending;

			// average return calc
			var stck = data[i].stock;
			var bnd = data[i].bond;
			var yearlyRet = stck*stockRatio + (1-stockRatio)*bnd;

			//add returns
			var stockValue = value*stockRatio;
			var bondValue = value*(1-stockRatio);
			
			stockValue*= 1+stck;
			bondValue*= 1+bnd;

			value = stockValue+bondValue;
			//minus inflation
			if(i!==firstYearOfData){
				var inflation = data[i-1].cpi/data[i].cpi;
				value*= inflation;
				yearlyRet*=inflation;
			}

			value = value<0 ? 0 : value;
			value = Math.round(value,0);
			max = value > max? value : max;
			min = value < min ? value : min;
			var currentDD = (max-value)/max;
			maxDD = currentDD>0 && currentDD>maxDD ? currentDD : maxDD;
			maxVal = value>maxVal ? value : maxVal;
			portfolio.push( {'year':new Date(i,0), 'value': value });
			rets.push(yearlyRet);

		}

		var end = portfolio[ portfolio.length-1 ].value;
		var avgRet = rets.reduce ( (memo,x) => { return memo+x; } , 0 )/rets.length;
		return {'history':portfolio, 'maxVal': maxVal, 'maxDD': maxDD , 'end': end, success: (end>0) , 'avgRet': avgRet};
	};

	var simulate = function(){
		var runs = [];
		var j = 0;
		for(var i = firstYearOfData;i<lastYearOfData-years;i++){
			runs[j] = buildRun(i)
			j++;
		}
		var successRate = runs.reduce((memo,x)=>{ return x.success ? memo+1 : memo;},0)/runs.length;
		var averageEndVal = runs.reduce((memo,x)=>{ return memo+x.end;},0)/runs.length;
		var maxDD = runs.reduce((memo,x)=>{ return x.maxDD>memo? x.maxDD : memo;},0);
		var averageDD = runs.reduce((memo,x)=>{ return memo+x.maxDD;},0)/runs.length;
		var domain = [new Date(firstYearOfData,0) , new Date( lastYearOfData,0) ]
		var range = [0, runs.reduce( (memo,x) => {if(x.maxVal>memo) return x.maxVal; return memo;},0)]
		return {'successRate': successRate, 'domain':domain, 'range':range, 'averageEnd':averageEndVal, 'maxDD':maxDD, 'averageDD': averageDD, 'runs': runs };
	};

	simulated = simulate();
	window.simulated = simulated;
}

var loadData = ()=>{
	return  new Promise(function(resolve, reject) {
	d3.csv("data.csv", function(d) {
  		  data[d.date] = {};
	      data[d.date].cpi = +d.cpi;
	      data[d.date].bond= +d.bond;
	      data[d.date].stock = +d.stock;
	      resolve();
	  });
	})
}

var buildGraph = ()=>{

	// set the dimensions and margins of the graph
	var margin = {top: 20, right: 20, bottom: 30, left: 70},
	    width = 960 - margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom;

	function mouseOverHandler(d){
		d3.select(this)
	      .attr("class", "highlighted");

	};
	function mouseOutHandler(d){

		d3.select(this)
	      .attr("class", "faded");
	};

	// set the ranges
	var x = d3.scaleTime().range([0, width]);
	var y = d3.scaleLinear().range([height, 0]);

	// define the lines
	var valueline = d3.line()
	    .x(function(d) { return x(d.year); })
	    .y(function(d) { return y(d.value); });

	// append the svg obgect to the body of the page
	// appends a 'group' element to 'svg'
	// moves the 'group' element to the top left margin
	var svg = d3.select("body").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");

	// Get the data

	  // Scale the range of the data
	  x.domain( simulated.domain );
	  y.domain( simulated.range );

	  // Add the X Axis
	  svg.append("g")
	      .attr("transform", "translate(0," + height + ")")
	      .call(d3.axisBottom(x));

	  // Add the Y Axis
	  svg.append("g")
	      .call(d3.axisLeft(y));

	for(var i = 0;i<simulated.runs.length;i++){
		// Add the valueline path.
	  svg.append("path")
	      .data([simulated.runs[i].history])
	      .attr("class", "faded")
	      .attr("d", valueline)
	      .on('mouseover', mouseOverHandler)
	      .on('mouseout',mouseOutHandler);
	} 
};