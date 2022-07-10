// Display using Plotly
function showChart(){
  var freq = document.getElementById("number1").value;
  var amount = document.getElementById("number2").value;
  var expReturn = document.getElementById("number3").value;
  var periods = 52 / freq;
  var ratePerPeriod = (1+(expReturn/100))**(1/periods);

  var ideal = "amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1) - amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)";
  var pearler = "(amount-6.5)*ratePerPeriod*(ratePerPeriod**(periods*x) - 1)/(ratePerPeriod - 1) - 6.5 - amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)";

  var commsec;
  if (amount <= 1000) {
    commsec = "(amount-10)*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)*0.9988 - amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)";
  } else if (1000 < amount <= 10000) {
    commsec = "(amount-19.95)*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)*0.9988 - amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)";
  } else if (10000 < amount <= 25000) {
    commsec = "(amount-29.95)*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)*0.9988 - amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)";
  } else {
    commsec = "amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)*0.9988*0.9988 - amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)";
  }

  var cmc;
  if (amount <= 1000) {
    cmc = "(amount)*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)*0.999 - amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)";
  } else if (1000 < amount <= 11000) {
    cmc = "(amount-11)*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)*0.999 - amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)";
  } else {
    cmc = "(amount)*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)*0.999*0.999 - amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1)";
  }
  
  var x1Values = [];
  var x2Values = [];
  var x3Values = [];
  var x4Values = [];

  var y1Values = [];
  var y2Values = [];
  var y3Values = [];
  var y4Values = [];
  
  for (var x = 0; x <= 10; x += 1) {
    x1Values.push(x);
    x2Values.push(x);
    x3Values.push(x);
    x4Values.push(x);

    y1Values.push(eval(pearler));
    y2Values.push(eval(commsec));
    y3Values.push(eval(cmc));
    y4Values.push(eval(ideal));
  }

  var x1ValuesFinal = [];
  var x2ValuesFinal = [];
  var x3ValuesFinal = [];
  var x4ValuesFinal = [];

  var y1ValuesFinal = [];
  var y2ValuesFinal = [];
  var y3ValuesFinal = [];
  var y4ValuesFinal = [];

  for (var x = 0; x <= 10; x++) {
    x1ValuesFinal.push(x);
    x2ValuesFinal.push(x);
    x3ValuesFinal.push(x);
    x4ValuesFinal.push(x);

    y1ValuesFinal.push(y1Values[x] + amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1));
    y2ValuesFinal.push(y2Values[x] + amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1));
    y3ValuesFinal.push(y3Values[x] + amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1));
    y4ValuesFinal.push(y4Values[x] + amount*ratePerPeriod*(ratePerPeriod**(periods*x)-1)/(ratePerPeriod-1));
  }
  
  // Define Data
  var data = [
    {x: x1Values, y: y1Values, mode:"lines", name:"Pearler (OpenMarkets)"},
    {x: x2Values, y: y2Values, mode:"lines", name:"CommSec"},
    {x: x3Values, y: y3Values, mode:"lines", name:"CMC"},
    {x: x4Values, y: y4Values, mode:"lines", name:"No fees"}
  ];

  var data1 = [
    {x: x1ValuesFinal, y: y1ValuesFinal, mode:"lines", name:"Pearler (OpenMarkets)"},
    {x: x2ValuesFinal, y: y2ValuesFinal, mode:"lines", name:"CommSec"},
    {x: x3ValuesFinal, y: y3ValuesFinal, mode:"lines", name:"CMC"},
    {x: x4ValuesFinal, y: y4ValuesFinal, mode:"lines", name:"No fees"}
  ];
  
  //Define Layout
  var layout = {title: "Returns as compared to ideal (no fees)", xaxis: {
    title: 'Years'
  },
  yaxis: {
    title: 'Dollars short'
  }};

  var layout1 = {title: "Net returns", xaxis: {
    title: 'Years'
  },
  yaxis: {
    title: 'Dollars'
  }};
  
  if (freq != 0 && amount != 0 && expReturn != 0) {
    //document.write("My message");
    Plotly.newPlot("myPlot", data, layout);
    Plotly.newPlot("fyPlot", data1, layout1);

  } else {
    alert("Incomplete Input");
  }  
}
