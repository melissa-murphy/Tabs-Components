class TabLink {
  constructor(linkTemplate) {
    // Assign this.element to the passed in DOM element
    this.element = linkTemplate;

    // Get the custom data attribute on the Link
    this.data = document.querySelector(`.tabs-link[data-tab="${this.element.dataset.tab}"]`);
    console.log(this.data);

    // Using the custom data attribute get the associated Item element
    this.itemElement = this.element.dataset.tab;
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

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected')); 

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.toggle("tabs-link-selected");
    console.log(link);
    // Call the select method on the item associated with this link
    //select(this.link);
    this.tabItem.selectTabItem();
  }
}
// console.log(select());

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element

    // Add a class named "tabs-item-selected" to this element
    //this.element;
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