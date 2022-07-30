var fs = require("fs"); 
var data = fs.readFileSync('ken_all_utf8.csv');
const data2 = fs.readFileSync('zenkoku.sql');
let a1=data.toString().split("\r\n").map(row=>{
  return row.split(",")[2].replace(/"/g,"") 
}
  )

let a2=data2.toString().split("\r\n").map(row=>{
  return row.split(",")[4]?.replace(/-| |"/g,"")
}
  )
  function difference(a1, a2) {
    var a2Set = new Set(a2);
    return a1.filter(function(x) { return !a2Set.has(x); });
  }
   
  function symmetricDifference(a1, a2) {
    return difference(a1, a2).concat(difference(a2, a1));
  }
  console.log(symmetricDifference(a1,a2))