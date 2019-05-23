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

//console.log(namesList);

/***
 * Create showPage function
 * - hides the list
 * - displays only target names on any given page
 *   calculates number of pages
 */

 
const showPage = (list, page) => {
   const begin = (page * 10) - 10;  
   const end = (page * 10);

   for (let i = 0; i < list.length; i++) { 
      if (i <= begin && i >= end)
         list.style.display = "";
       else 
      list.style.display = 'none';
      return(list);
   }
   console.log(showPage);
}
;
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
const appendPageLinks = (appendPage) => {
   let pages = math.ceil(namesList.length / 10); 
   let div = document.createElement ('div');
   div.className = 'pagination';
   div.appendChild(pages); {
   let ul = document.getElementById ('ul');
   let li = document.createElement ('li'); 
    
    for (i = 0; i <= pages; i++)  {
         li.appendChildId(document.createTextNode('a'));
         ul.appendChild(li); 
    }
    }
 }

{
 var ulist = document.getElementById ('ul');
 var list = document.createElement ('li');
 var anchor = document.createElement ('a');
 anchor.setAttribute ('href', '#');
 anchor.innerHTML = i;
 list.appendChild('anchor');
 ulist.appendChild (list);
}

//<div class="pagination">
  //      <ul>
  //      <li>
  //          <a class="active" href="#">1</a>
  //        </li>
  //         <li>
  //          <a href="#">2</a>
  //        </li>
  //         <li>
  //          <a href="#">3</a>
  //        </li>
  //         <li>
  //          <a href="#">4</a>
  //        </li>
  //         <li>
  //          <a href="#">5</a>
  //        </li>
  //      </ul>
  //    </div>







/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


 

