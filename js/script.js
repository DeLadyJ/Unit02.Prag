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
const page = document.querySelector('.page')

console.log(namesList);


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
/***
 * Create showPage function
 * - hides the list
 * - displays only target pages
 *   calculates number of pages
 */

 
const showPage = (list, page) =>  {
   let begin = (page * pageView) - pageView;  
   const end = page * pageView;
   for (let i = 0; i < list.length; i++) { 
      if (i => begin && i <= end) {
         list[i].style.display = '';
       } else {
      list[i].style.display = 'none';
   
    }
  }
}

showPage(namesList, 1);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

/** 
 * Create appendPageLinks functios
 * - this makes the buttons work with pagination
*/
const appendPageLinks = (list) =>{
   let numOfPages = list.length/ pageView;
    numOfPages = math.ceil( pageView); 
  let containorLinks = document.createElement ('div');
    containorLinks.className = 'paginate';
    containorLinks.appendChild(containorLinks);
   containorLinks.appendChild(ul); 
   let ul = document.getElementById ('ul');

   /**
    * Creates the elements li and a
    * adds the href to the page
    */
    
    for (i = 0; i <= numOfPages; i++) {
        let li = document.createElement ('li'); 
        let a = ocument.createElement('a');
        a.href = '#';
        a.textContent = i = 1;
         ul.appendChild(li); 
         a.appendChild(li);

         if (i===0) {
            a.classList = 'active';
         }

    /**
     *Adds the event listener 
     */
         a.addEventListener('click'), event => {
             numOfPages = event.target.innerText;
            if (event.target.className = 'a')
let pageNumber = document.querySelectorAll('a'); 

/**
 * Removes the active page from the pagination link
 */
for (let i = 0; i< pageNumber.length; i += 1) {
   pageNumber[i].classList.remove('active');
} 

/**
 * Adds the active page to the pagination link once the event listener is actived
 */
a.className = event.target.textContext;
event.target.classList.add('active');      
    };

   }
   
appendPageLinks(namesList) ;  

// For (let index = buttons.length - 1; index > 1; ==index) {
 //Let button = buttons{index};
 //Button.addElementListener(‘click’, pagination.click);


 
// var ulist = document.getElementById ('ul');
 //var list = document.createElement ('li');
 //var anchor = document.createElement ('a');
 //anchor.setAttribute ('href', '#');
 //anchor.innerHTML = i;
 //list.appendChild('anchor');
 //ulist.appendChild (list);
//}
 

