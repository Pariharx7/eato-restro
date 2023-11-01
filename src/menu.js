function addMenu() {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    content.appendChild(pageContent);
    
    const heading = document.createElement('h1');
    heading.textContent = "Today's Menu";
    pageContent.appendChild(heading);
    heading.classList.add('heading');


    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    pageContent.appendChild(menuItems);

    const menuItemsOne = document.createElement('div');
    const menuItemsTwo = document.createElement('div');
    menuItemsOne.classList.add('menuChilds');
    menuItemsTwo.classList.add('menuChilds');

    menuItems.appendChild(menuItemsOne);
    menuItems.appendChild(menuItemsTwo);

    const itemHeading = document.createElement('h4');
    const itemPrice = document.createElement('h4');
    itemHeading.textContent = 'Item';
    itemPrice.textContent = 'Price';
    menuItemsOne.appendChild(itemHeading);
    menuItemsTwo.appendChild(itemPrice);

    const menuItemUl = document.createElement('ul');
    const menuItemI = document.createElement('li');
    const menuItemII = document.createElement('li');
    const menuItemIII = document.createElement('li');
    const menuItemIV = document.createElement('li');
    const menuItemV = document.createElement('li');
    const menuItemVI = document.createElement('li');
    const menuItemVII = document.createElement('li');

    const menuItemPriceUl = document.createElement('ul');
    const menuItemPriceI = document.createElement('li');
    const menuItemPriceII = document.createElement('li');
    const menuItemPriceIII = document.createElement('li');
    const menuItemPriceIV = document.createElement('li');
    const menuItemPriceV = document.createElement('li');
    const menuItemPriceVI = document.createElement('li');
    const menuItemPriceVII = document.createElement('li');

    menuItemI.textContent = 'Tea';
    menuItemII.textContent = 'Samosa';
    menuItemIII.textContent = 'Luun Chai';
    menuItemIV.textContent = 'Kandir Tschot';
    menuItemV.textContent = 'Girda';
    menuItemVI.textContent = 'Mathii';
    menuItemVII.textContent = 'Kahwa';

    menuItemPriceI.textContent = '$10';
    menuItemPriceII.textContent = '$30';
    menuItemPriceIII.textContent = '$50';
    menuItemPriceIV.textContent = '$25';
    menuItemPriceV.textContent = '$9';
    menuItemPriceVI.textContent = '$10';
    menuItemPriceVII.textContent = '$99';

    menuItemsOne.appendChild(menuItemUl);
    menuItemsTwo.appendChild(menuItemPriceUl);

    menuItemUl.appendChild(menuItemI);
    menuItemUl.appendChild(menuItemII);
    menuItemUl.appendChild(menuItemIII);
    menuItemUl.appendChild(menuItemIV);
    menuItemUl.appendChild(menuItemV);
    menuItemUl.appendChild(menuItemVI);
    menuItemUl.appendChild(menuItemVII);

    menuItemPriceUl.appendChild(menuItemPriceI);
    menuItemPriceUl.appendChild(menuItemPriceII);
    menuItemPriceUl.appendChild(menuItemPriceIII);
    menuItemPriceUl.appendChild(menuItemPriceIV);
    menuItemPriceUl.appendChild(menuItemPriceV);
    menuItemPriceUl.appendChild(menuItemPriceVI);
    menuItemPriceUl.appendChild(menuItemPriceVII);

    
}

export default addMenu;