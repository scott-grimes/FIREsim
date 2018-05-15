// [year, annual stock return (including dividends and price appreciation), annual T-Bill return (3month bills)]
var data = [[1928,0.4381,0.0308],
	[1929,-0.083,0.0316],
	[1930,-0.2512,0.0455],
	[1931,-0.4384,0.0231],
	[1932,-0.0864,0.0107],
	[1933,0.4998,0.0096],
	[1934,-0.0119,0.0032],
	[1935,0.4674,0.0018],
	[1936,0.3194,0.0017],
	[1937,-0.3534,0.003],
	[1938,0.2928,0.0008],
	[1939,-0.011,0.0004],
	[1940,-0.1067,0.0003],
	[1941,-0.1277,0.0008],
	[1942,0.1917,0.0034],
	[1943,0.2506,0.0038],
	[1944,0.1903,0.0038],
	[1945,0.3582,0.0038],
	[1946,-0.0843,0.0038],
	[1947,0.052,0.0057],
	[1948,0.057,0.0102],
	[1949,0.183,0.011],
	[1950,0.3081,0.0117],
	[1951,0.2368,0.0148],
	[1952,0.1815,0.0167],
	[1953,-0.0121,0.0189],
	[1954,0.5256,0.0096],
	[1955,0.326,0.0166],
	[1956,0.0744,0.0256],
	[1957,-0.1046,0.0323],
	[1958,0.4372,0.0178],
	[1959,0.1206,0.0326],
	[1960,0.0034,0.0305],
	[1961,0.2664,0.0227],
	[1962,-0.0881,0.0278],
	[1963,0.2261,0.0311],
	[1964,0.1642,0.0351],
	[1965,0.124,0.039],
	[1966,-0.0997,0.0484],
	[1967,0.238,0.0433],
	[1968,0.1081,0.0526],
	[1969,-0.0824,0.0656],
	[1970,0.0356,0.0669],
	[1971,0.1422,0.0454],
	[1972,0.1876,0.0395],
	[1973,-0.1431,0.0673],
	[1974,-0.259,0.0778],
	[1975,0.37,0.0599],
	[1976,0.2383,0.0497],
	[1977,-0.0698,0.0513],
	[1978,0.0651,0.0693],
	[1979,0.1852,0.0994],
	[1980,0.3174,0.1122],
	[1981,-0.047,0.143],
	[1982,0.2042,0.1101],
	[1983,0.2234,0.0845],
	[1984,0.0615,0.0961],
	[1985,0.3124,0.0749],
	[1986,0.1849,0.0604],
	[1987,0.0581,0.0572],
	[1988,0.1654,0.0645],
	[1989,0.3148,0.0811],
	[1990,-0.0306,0.0755],
	[1991,0.3023,0.0561],
	[1992,0.0749,0.0341],
	[1993,0.0997,0.0298],
	[1994,0.0133,0.0399],
	[1995,0.372,0.0552],
	[1996,0.2268,0.0502],
	[1997,0.331,0.0505],
	[1998,0.2834,0.0473],
	[1999,0.2089,0.0451],
	[2000,-0.0903,0.0576],
	[2001,-0.1185,0.0367],
	[2002,-0.2197,0.0166],
	[2003,0.2836,0.0103],
	[2004,0.1074,0.0123],
	[2005,0.0483,0.0301],
	[2006,0.1561,0.0468],
	[2007,0.0548,0.0464],
	[2008,-0.3655,0.0159],
	[2009,0.2594,0.0014],
	[2010,0.1482,0.0013],
	[2011,0.021,0.0003],
	[2012,0.1589,0.0005],
	[2013,0.3215,0.0007],
	[2014,0.1352,0.0005],
	[2015,0.0138,0.0021],
	[2016,0.1177,0.0051],
	[2017,0.2164,0.0139]];
// [year, CPI]
var cpi = [[1928,17.1],
	[1929,17.1],
	[1930,16.7],
	[1931,15.2],
	[1932,13.7],
	[1933,13],
	[1934,13.4],
	[1935,13.7],
	[1936,13.9],
	[1937,14.4],
	[1938,14.1],
	[1939,13.9],
	[1940,14],
	[1941,14.7],
	[1942,16.3],
	[1943,17.3],
	[1944,17.6],
	[1945,18],
	[1946,19.5],
	[1947,22.3],
	[1948,24.1],
	[1949,23.8],
	[1950,24.1],
	[1951,26],
	[1952,26.5],
	[1953,26.7],
	[1954,26.9],
	[1955,26.8],
	[1956,27.2],
	[1957,28.1],
	[1958,28.9],
	[1959,29.1],
	[1960,29.6],
	[1961,29.9],
	[1962,30.2],
	[1963,30.6],
	[1964,31],
	[1965,31.5],
	[1966,32.4],
	[1967,33.4],
	[1968,34.8],
	[1969,36.7],
	[1970,38.8],
	[1971,40.5],
	[1972,41.8],
	[1973,44.4],
	[1974,49.3],
	[1975,53.8],
	[1976,56.9],
	[1977,60.6],
	[1978,65.2],
	[1979,72.6],
	[1980,82.4],
	[1981,90.9],
	[1982,96.5],
	[1983,99.6],
	[1984,103.9],
	[1985,107.6],
	[1986,109.6],
	[1987,113.6],
	[1988,118.3],
	[1989,124],
	[1990,130.7],
	[1991,136.2],
	[1992,140.3],
	[1993,144.5],
	[1994,148.2],
	[1995,152.4],
	[1996,156.9],
	[1997,160.5],
	[1998,163],
	[1999,166.6],
	[2000,172.2],
	[2001,177.1],
	[2002,179.88],
	[2003,183.96],
	[2004,188.9],
	[2005,195.3],
	[2006,201.6],
	[2007,207.342],
	[2008,215.303],
	[2009,214.537],
	[2010,218.056],
	[2011,224.939],
	[2012,229.594],
	[2013,232.957],
	[2014,236.736],
	[2015,237.017],
	[2016,240.008],
	[2017,245.12]];

var firstYearOfData = 1928;
var lastYearOfData = 2017;
var startingPortfolio = 500000;
var years = 30;
var spending = 20000;
var stockRatio = .99	;

var averageReturns = function(startingYear){
	var rets = [];
	var begin = startingYear-firstYearOfData;
	var end = begin+years;
	if(end>=data.length)
		throw('out of bounds')

	for(var i = begin; i<end;i++){

		var stck = data[i][1];
		var bnd = data[i][2];
		var yearlyRet = stck*stockRatio + (1-stockRatio)*bnd;

		//minus inflation
		if(i!==0){
			var inflation = cpi[i-1][1]/cpi[i][1];
			yearlyRet*= inflation;
		}

		rets.push(yearlyRet);
	}
	return rets.reduce ( (memo,x) => { return memo+x; } , 0 )/rets.length;
}

var buildRun = function(startingYear){

	var value = startingPortfolio;
	var portfolio = [];
	var max = value;
	var min = value;
	var maxDD = 0;
	//index of our data to start with
	var begin = startingYear-firstYearOfData;
	var end = begin+years;
	if(end>=data.length)
		throw('out of bounds')

	for(var i = begin; i<end;i++){

		if(value<=0){
			portfolio.push(value);
			continue;
		}

		//spend the money during our year
		value -= spending;

		//add returns
		var stockValue = value*stockRatio;
		var bondValue = value*(1-stockRatio);
		
		stockValue*= 1+data[i][1];
		bondValue*= 1+data[i][1];

		value = stockValue+bondValue;
		//minus inflation
		if(i!==0){
			var inflation = cpi[i-1][1]/cpi[i][1];
			value*= inflation;
		}
		value = value<0 ? 0 : value;
		value = Math.round(value,0);
		max = value > max? value : max;
		min = value < min ? value : min;
		var currentDD = (max-value)/max;
		maxDD = currentDD>0 && currentDD>maxDD ? currentDD : maxDD;
		portfolio.push(value);

	}




	var end = portfolio[ portfolio.length-1 ];
	return {'history':portfolio, 'maxDD': maxDD , 'end': end, success: (end>0) , avgRet: averageReturns(startingYear)};
};

var simulate = function(){
	var runs = {};
	for(var i = firstYearOfData;i<lastYearOfData-years;i++){
		runs[i] = buildRun(i)
	}
	return runs;
};



var a = buildRun(1928);
console.log(a);
var b = simulate();
console.log(b)