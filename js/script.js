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
const namesList = document.querySelectorAll('student-item');
const pageView = 10;

//displays the list in the console
console.log = (namesLst);


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
 */
let showPage = (namesList, pageView);
let begin = (pageView * 10) - 10;  
let last = (pageView * 10);
For (let i = 0; i < namesList.length; i++);
namesList[i].style.display = 'none';
   if (begin <=  i && i < last);{
      namesList{i}.style.display = '';
   }
   {
      namesListli.style.display = ('node');
      }
      return ;

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

let appendPageLinks = namesList; => {
let li = document.createElement ('li');
let a = document.createElement ('a');
let pages = math.ceil(stendents.length / 10);
pageView.className = ('pagination');
mainDiv.appendChild(div);
div.appendChild(ul);

for (i = 0; i<= pages; i++)  {
   ul.appendChild(li);
   li.appendChild(a);
}

/***
 * var theDiv = document.getElementById ();
 * theDiv.innerHTML += "namesList";
 * $( showPage) {
 * 'ul.links > li').click (showPage()}
 * $('ul.links > li").hide();
 * $(this).hide();
 * });
 * });
 */



// Remember to delete the comments that came with this file, and replace them with your own code comments.