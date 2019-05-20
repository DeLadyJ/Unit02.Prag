/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
/*** 
 * Create 2 global variables 
 * - 1 stores the list elements
 * - 2 stores the number of units viewed on each page
 * 
*/
const namesList = document.querySelectorAll('.student-item');
const pageView = 10;

//displays the list in the console
//console.log = (namesList);

//calcale number of pages
//
//additional variables
//let currentPage = 1;
//let numberOfPages = 1;

//function getNumberOfPages() {
 //  return Math.ceil(list.length / pageView);
//}

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
//let list =();

/***
 * Create showPage function
 * - hides the list
 * - displays only target names on any given page
 *   calcalate number of pages
 */
const showPage = (namesList, pageView) => {
const begin = (pageView * 10) - 10;  
const end = (pageView * 10);
namesList.style.display = 'none';
for (let i = 0; i < namesList.length; i++) { 
   if (i <= begin && i <= end)
      namesList.style.display = "";
   else 
   namesList.style.display = 'none';
   return(namesList);
}

pageList = list.slice(begin, end); // creates list by page
    getList();    // get the list
    scan();         // determines the status of the pagination buttons

   function getList() {
    document.getElementById("list").innerHTML = "";
    
    for (r = 0; r < pageView.length; r++) {
        document.getElementById("list").innerHTML += pageView[r] + "";


    }
} 

   }


/**
 * function showPage(){
   totalPages = getTotalPages();
   function getTotalPages(){
      return Math.ceil(namesList.length / pageView)
   }
   let begin = ((currentPage - 1)*pageView);
   let end = begin + numberPerPage;
   pageList = namesList.slice(begin, end); //creates list by page
   getList(); // gets list
   scan (); // determines the status of the pagination buttons
   function getList(){document.getElementById("namesList").innerHTML = "";
   for (r = 0;
      r< pageView.length; r++) {
         document.getElementById("namesList").innerHTML += pageView[r] + "";
   }}
   }

 */

//console.log(namesList);
/***
 * function showpage() {
 * totalPages = getTotalPages();
 * 
 * function getTotalPages() {
 * return Math.ceil(list.length / pageView);
 * }
 * //
    let begin = ((currentPage - 1) * pageView);
    let end = begin + numberPerPage;

    pageList = list.slice(begin, end); // creates list by page
    getList();    // get the list
    scan();         // determines the status of the pagination buttons

   function getList() {
    document.getElementById("list").innerHTML = "";
    
    for (r = 0; r < pageView.length; r++) {
        document.getElementById("list").innerHTML += pageView[r] + "";


    }
} 

   }
 */

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (namesList) => {
  let pages = math.ceil(namesList.length / 10); 
  let div = document.createElement ('div');
  div.className = 'pagination';
  div.appendChild(pages); {
  let ul = document.getElementById ('namesList');
  let li = document.createElement ('li'); 
   
   for (i = 0; i <= pages; i++)  {
        li.appendChildId(document.createTextNode(namesList));
        ul.appendChild(li); 
   }
   }
}

/**
 * unction showPage(){
   totalPages = getTotalPages();
function getTotalPages(){
   return Math.ceil(namesList.length / pageView)
}
let begin = ((currentPage - 1)*pageView);
let end = begin + numberPerPage;

pageList = namesList.slice(begin, end); //creates list by page
getList();
scan ();
function getList(){document.getElementById("namesList").innerHTML = "";
for (r = 0;r< pageView.length; r++) {document.getElementById("namesList").innerHTML += pageView[r] + "";
}}
}
 * 
 */

//mainDiv.appendChild('div');
//div.appendChild('ul');


//showPage(namesList);


 // var theDiv = document.getElementById ('div');
 // theDiv.innerHTML += "namesList";
 // $(showPage) ;
 // $(ul.links > 'li').click (showPage());

  //$("ul.links > li").hide();
  //$(this).hide();
 

 
/***
 * var object = document.createElement('div');
  object.id = "myDiv";
  object.style.width = "100px"; "100px"
  object.style.height = "100px"; "100px"
  object.style.background = "blue"; "blue"
  object.style.text= "Search";
  document.getElementById('div').appendChild();
 * 
 */

 
console.log(showPage);
