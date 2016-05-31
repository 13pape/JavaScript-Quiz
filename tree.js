// 1. Create a tree function that should build a pine tree out of a character in the browser console. 
// 2. It accepts a single object as an argument. The object should have two key/value pairs.
// A key that specifies the height of the pine tree.
// 3. The value for the height of the tree should be from user input in a <input type="text"> field 
// in the DOM.
// 4. A key that specifies which character to use to build the pine tree.
// 5. The character to use should be from user input in a <input type="text"> field in the DOM.
// 6. Once the user enters in a number, and a character, the user can either then just press the 
//    enter key (as long as the cursor is in one of the input fields), 
//    or click a button that is labeled  "Grow your tree" and the tree should be shown in the console.
// If either of the input fields does not have a value in it when the user presses the enter key, or 
// presses the button, then display an alert stating that both fields must have a value.


function growTree() {
	//take data from HTML page
	var heightTree = document.getElementById("height").value;
	var characterTree = document.getElementById("character").value;
	// alert in case one of the data is missed
	if (heightTree == ""){
		alert("Need a number for height");
		return;
	}
	else if (characterTree == ""){
		alert("Need a character to build the tree");
		return;
	}
		
	// object	
	var zzz = {
		Height: heightTree,
		Character: characterTree
	};
	
	//to call the function with the data of the object
	buildTree(zzz);

}

function buildTree(treeArg) {
	var spaces = treeArg.Height-1; //spaces before the character
	var output = "";  //my tree display (inside of this variable is going to be all my tree)

	for (var i =0; i<treeArg.Height; i++) {
		output = output + "\n"; //new line

	 		//creating the spaces
	 		for (var j=0; j<spaces; j++) {
	 		output = output + " ";
	 		}
			spaces=spaces-1; //decrement spaces each for loop
	 		
	 		//adding the characters
	 		var numbChars = (2*i)+1;
	 	 	for (var z=0; z<numbChars; z++){
	 	 	output = output + treeArg.Character;
		 	}
	 	 	
			
	} //end of the for loop

 	console.log("JavaScript tree", output);
} //end function

document.getElementById("height").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"   //13 means "return key"
        growTree();
    }
});

document.getElementById("character").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        growTree();
    }
});

document.getElementById("button").addEventListener("click", growTree);



