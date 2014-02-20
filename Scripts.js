/**
 * @author Winni Zhou
 */

console.log("Here are all books in my shopping cart!");

//we have to introduce loadedJSON before executing it
//description of what to do is outside 
//recall in class the envolope A is the loadedJSON
//the inside poem does not have a name, we have to name it, here I call the dataset as BookData and use the assignment
//from last week
function loadedJSON(BookData){
	//console.log the count 
	
	//I expect this console.log statement will output the name of the book in the first array of 
	//the object "myBooks" from my BookData dataset
	//I expect to see "Microeconomics"
	//because in my json file, the name of the book is Microeconomics
	console.log(BookData.myBooks[0].bookname);
	
}

//this is my custom data loaded function!
function dataLoaded(){
	
	console.log("Then is my want list");
	
	//use jQuery to create a new div element
	var myDiv = $("<div>");
	//use jQuery to add some text to it
	//he jQuery, take that div i just created called 
	//"myDiv", and add some html (in that case, just a string).
	$(myDiv).html("This is my Amazon shopping cart.");
	
	//I want it to show up on my page.
	//I want jQuery grab the div with the id "bookcart" 
	//and put my new div inside it
	//in css and jQuery, #sign means looking for the element with this "id" attribute
	//look for the element(s) with the class attribute
	
	//I expect to see a new div containg the text "This is my Amazon shopping cart."
	//appear inside the div with the id "contentContainer"
	$("#bookcart").append(myDiv);
	
	//use the jQeury get function to load my json file
	//takes 3 parameter 
	//first is the name of the file
	//second is the function to call once the file is loaded, I keep the "loadJSON"
	//third is a string of the file type to expect
	$.get("BookData.json",loadedJSON,"json");
}

//document ready happens when the enrire webpage 
//has loaded 
//when that has happened, i want to initiate the "dataloaded"
//function/activity that i defined above
$( document ).ready(dataLoaded);
//dollar sign means this function is from jquery


console.log("I have to buy need list first!")

//For what we have learned in class, the top recipe should exectute and show after the following function.
//So in my assignment, I want to purchase books from need list prior to want list.
//Therefore, I have to put want list in the top recipe.

//Since the json file can't comment, I followed the video.
//I downloaded dataset I created from my last week's assignment,
//convert it into json
//and test it in the jsonlint, it's valid.
