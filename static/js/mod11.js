//import the data from data.js
const tableData=data;
//need to tell javascript what type of element data will be displayed in
//reference the html table using d3
//d3.select tells JS to look for tbody tags in HTML, which is a standard table tag in HTML
var tbody=d3.select("tbody");

//build the table and store the data, needs for loops and functions
function buildTable(data) {
    //clearing out data
    tbody.html("");
    //loop through each object in data and append a row and cells for each value in the row
	data.forEach((dataRow) => {
        //append a row to table body
        let row = tbody.append("tr");
        //loop through fields in dataRow and add values to table cells (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
      );
    });
}

function handleClick() {
      // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
       // Check to see if a date was entered and filter the
  // data using that date.
    if (date) {
            // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
      // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
    buildTable(filteredData);
}
//linking code to filter button and execute handleClick when button is clicked
d3.selectAll("#filter-btn").on("click", handleClick);
// making sure the table loads as soon as the page does
buildTable(tableData);

