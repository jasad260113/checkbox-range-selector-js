
var firstAndLast = [];
var checkboxes = document.getElementsByTagName('input');
//var checked = false;
//console.log(checkboxes);
//console.log(checkboxes[0]);

 for (var i = 0; i < checkboxes.length; i++) {
   checkboxes[i].addEventListener('click', calculateRange);
 }


function calculateRange () {
var trueBoxes = [];

	if (this.checked) {
    //console.log('Checkbox ' + this.value + ' is True');

    // Add all checked numbers to array
    for (var i = 0; i < checkboxes.length; i++) {
    	if (checkboxes[i].checked) {
      	trueBoxes.push(i);
      }
    }

    //console.log('trueBoxes ' + trueBoxes[0]);
    //console.log('trueBoxes ' + trueBoxes[1]);

    // Add the first and last numbers to a new array
    firstAndLast[0] = trueBoxes[0];
    firstAndLast[1] = trueBoxes.pop();

		// Set checkboxes in range to true
		for (var i = firstAndLast[0] + 1 ; i < firstAndLast[1]; i++) {
    	//console.log(i);
    	checkboxes[i].checked = true;
      checkboxes[i].disabled = true;
    }

    //checked = true;
    //console.log('checked is: ' + checked);
  }
  else {
  	console.log('Checkbox ' + this.value + ' is False');

    // Set checkboxes in range to false
		for (var i = firstAndLast[0] + 1; i < firstAndLast[1]; i++) {
    	checkboxes[i].checked = false;
      checkboxes[i].disabled = false;
    }

    //console.log('firstAndLast 0: ' + firstAndLast[0]);
    //console.log('firstAndLast 1: ' + firstAndLast[1]);

		//checked = false;
    //console.log('checked is: ' + checked);
  }
}
