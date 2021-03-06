class TabLink {
  constructor(linkTemplate) {
    // Assign this.element to the passed in DOM element
    this.element = linkTemplate;

    this.data = this.element.dataset.tab;
    // Get the custom data attribute on the Link
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.element.dataset.tab}"]`);
    // console.log(this.data);

    // Using the custom data attribute get the associated Item element
    
    //console.log(this.itemElement);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    //console.log(this.tabItem);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () =>
      this.select())
  };


  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    // console.log("----------within select Tab link -------------" + links);
    // console.log("-----------------------------------" +Array.from(links).toString);
    // var myJSON = JSON.stringify(obj); obj array
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(item => {
      // console.log("----------within for each of tab link -------" + link.classList);
      item.classList.remove('tabs-link-selected')
    });
    // console.log("------ item.classlist-" + item.classList);

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.toggle('tabs-link-selected');
    // console.log("---------this.element after toggle-"+ this.element.classList);
    // console.log(link);

    // Call the select method on the item associated with this link
  //  console.log("--------------- before calling select in tab item ----");
    this.tabItem.select();

  }
}


class TabItem {
  constructor(linkTemplate) {
    // Assign this.element to the passed in element
    this.element = linkTemplate;
    console.log("------------------in TabItem---------" + this.element);
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    console.log("------------within select of TabItem -----------"+items);
    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(item => {
      console.log("------------within for each of TabItem --------"+item.classList);
      item.classList.remove('tabs-item-selected');
    })


    // Add a class named "tabs-item-selected" to this element
    console.log(this.element.classList);
    this.element.classList.toggle('tabs-item-selected');

  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let tabsLink = document.querySelectorAll('.tabs-link');

// console.log(links);

tabsLink.forEach(linkTemplate => {
  new TabLink(linkTemplate);
});

console.log(tabsLink);