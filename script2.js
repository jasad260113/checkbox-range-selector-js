
var checkboxes = document.getElementsByTagName('input');
var firstAndLast = [];
var trueBoxes = [];
var boxesChecked = [];


console.log(checkboxes);

 for (var i = 0; i < checkboxes.length; i++) {
   checkboxes[i].addEventListener('click', calculateRange);
 }


function calculateRange () {

	if (this.checked) {

    console.log('Checkbox ' + this.value + ' is True');

 // Add all checked numbers to array
    for (var i = 0; i < checkboxes.length; i++) {
    	if (checkboxes[i].checked) {
      	boxesChecked.push(i);
      }
    }

		trueBoxes = boxesChecked.slice();

// Add the first and last numbers to a new array
    firstAndLast[0] = boxesChecked.shift();
    firstAndLast[1] = boxesChecked.pop();

// Empty temporary array
    boxesChecked = [];


    console.log('firstNumber is ' + firstAndLast[0]);
    console.log('lastNumber is ' + firstAndLast[1]);

  // Set checkboxes in range to true
    for (var i = firstAndLast[0] + 1 ; i < firstAndLast[1]; i++) {
      checkboxes[i].checked = true;
      checkboxes[i].disabled = true;
      trueBoxes.push(checkboxes[i].value-1);
    }

    trueBoxes.sort(function(a, b){return a-b});


    // Display all elements in trueBoxes
    for (var i = 0; i < trueBoxes.length; i++) {
      console.log('trueBoxes ' + trueBoxes[i]);
    }


  }
  else {

  	console.log('Checkbox ' + this.value + ' is False');

		var ind = trueBoxes.indexOf(this.value-1);
    console.log('ind is ' + ind);

		trueBoxes.splice(ind, 1);

		boxesChecked = trueBoxes.slice();

    firstAndLast[0] = boxesChecked.shift();
    firstAndLast[1] = boxesChecked.pop();
    console.log('firstNumber is ' + firstAndLast[0]);
    console.log('lastNumber is ' + firstAndLast[1]);

    boxesChecked = [];


		if (firstAndLast[0] != undefined) {
	    checkboxes[firstAndLast[0]].disabled = false;
    }
    if (firstAndLast[1] != undefined) {
	    checkboxes[firstAndLast[1]].disabled = false;
    }

    // Display all elements in trueBoxes
    for (var i = 0; i < trueBoxes.length; i++) {
      console.log('trueBoxes ' + trueBoxes[i]);
    }


  }


}
