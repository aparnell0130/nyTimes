var apiKey = "JAoPApWNBaQdmRUeFlleD8HVhPkZlGNA";
var searchTerm = $("#searchTerm").val();
var numRecords = $("#numRecords").val();
var startYear = $("#startYear").val();
var endYear = $("#endYear").val();

console.log(searchTerm);
console.log(numRecords);
console.log(startYear);
console.log(endYear);

// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "begin_date" + startYear + "0101" + endYear + "1231" + "&api-key=" apiKey;