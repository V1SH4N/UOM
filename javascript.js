const newListingButton = document.querySelector('#newListing');
const listingsContainer = document.querySelector('#listingsContainer');

let listingID = 0;

newListingButton.addEventListener('click', (e) => {
    const newListing = document.createElement('div');
    newListing.classList.add('listing');
    newListing.id = listingID;
    

    const image = document.createElement('div');
    image.classList.add('image');
    image.style.cssText = ['height: 50px; border: 1px solid black'];
    image.textContent = 'image placeholder' + listingID;



    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = 'description placeholder'

    const purchaseButton = document.createElement('button');
    purchaseButton.id = 'purchaseButton';
    purchaseButton.type = 'button'
    purchaseButton.textContent = 'Buy now';

    newListing.appendChild(image);
    newListing.appendChild(description);
    newListing.appendChild(purchaseButton);


    listingsContainer.appendChild(newListing);
    listingID++;
})

listingsContainer.addEventListener('click', (e) => {
    if (e.target.id === 'purchaseButton'){
        e.target.parentNode.remove();
    }
    
})
