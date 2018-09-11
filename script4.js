var checkboxes = document.getElementsByTagName('input');
var boxesChecked = [];
var tempArray = [];
var firstNum;
var lastNum;
var indexNum;

for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', calculateRange);
}

function calculateRange () {

	if (this.checked) {

  // Empty arrays
    tempArray = [];
    boxesChecked = [];

  // Add all checked numbers to array
   	for (var i = 0; i < checkboxes.length; i++) {
    	if (checkboxes[i].checked) {
      	tempArray.push(i);
      }
    }

  // Copy temporary array
		boxesChecked = tempArray.slice();

  // Add the first and last numbers to their respected variables
    firstNum = tempArray.shift();
    lastNum = tempArray.pop();

		if (boxesChecked.length > 1) {
      // Set checkboxes within the range to true and disable them
        for (var i = firstNum + 1; i < lastNum; i++) {
          checkboxes[i].checked = true;
          checkboxes[i].disabled = true;
          if (boxesChecked.includes(checkboxes[i].value-1) == false) {
          	boxesChecked.push(checkboxes[i].value-1);
          }
        }
    	 boxesChecked.sort(function(a, b){return a-b});
		}

   // Display all elements in boxesChecked
    for (var i = 0; i < boxesChecked.length; i++) {
      console.log('boxesChecked ' + boxesChecked[i]);
    }

  }
  else {
  		// Empty temporary array
  	    tempArray = [];

   	  // Create string array from number array
  	    var arr = boxesChecked.slice();
  	    var str = arr.toString();
  	    var strArray = str.split(',');

  	  // Get checkbox index number of unchecked box & convert it to string
   	    var numValue = this.value - 1;
  	    var strValue = numValue.toString();

  	  // Get index number of box that was unchecked from string array
  	    indexNum = strArray.indexOf(strValue);

   	  // Remove number that was unchecked from boxesChecked array
  	    boxesChecked.splice(indexNum, 1);

   	  // Copy new contents of boxesChecked array to the temporary array
  	    tempArray = boxesChecked.slice();

   	  // Add the first and last numbers to their respected variables
  	    firstNum = tempArray.shift();
  	    lastNum = tempArray.pop();

   	  // Enable the checkboxes on the edges of the range
  	    if (firstNum != undefined) {
  	      checkboxes[firstNum].disabled = false;
  	    }
  	    if (lastNum != undefined) {
  	      checkboxes[lastNum].disabled = false;
  	    }

  	   // Display all elements in boxesChecked
  	    for (var i = 0; i < boxesChecked.length; i++) {
  	      console.log('boxesChecked ' + boxesChecked[i]);
  	    }

  	  }


}
