/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
 * Create 2 global variables 
 * - 1 stores the list elements
 * - 2 stores the number of units viewed on each page
 * 
*/
const namesList = document.querySelectorAll('.student-item');
const pageView = 10;
let pagediv = document.querySelector('.page');

console.log(namesList);



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
         list[i].style.display = "";
       } else {
      list[i].style.display = "none";
   
    }
  }
}

//showPage(namesList, 1);

/** 
 * Create appendPageLinks functios
 * - this makes the buttons work with pagination
*/
function appendPageLinks (list) {
    numOfPages = Math.ceil(list.length/ pageView);
    let paginateDiv = document.createElement("div");
    pagediv.appendChild(paginateDiv);
     paginateDiv.className = "pagination";
    let paginateUl = document.createElement("ul");
     paginateDiv.appendChild(paginateUl);
}
   /**
    * Creates the elements li and a
    * adds the href to the page
    */
    
    for (i = 0; i <= numOfPages; i++) {
        let li = document.createElement ("li"); 
        let a = document.createElement("a");
        a.href = "#";
        a.textContent = i + 1;
        li.appendChild(a);
        paginateUl.appendChild(li);

         if (i===0) {
            a.classList = 'active';
/**}
     *Adds the event listener 
     */
         a.addEventListener('click', event => {
          numOfPages = event.target.innerText;
         if ((event.target.className = 'a'));{
           let pageNumber = document.querySelectorAll('a'); 
         }
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
         

}
         );
        }
    
  }
  appendPageLinks(namesList);
  showPage(namesList, 1);
   