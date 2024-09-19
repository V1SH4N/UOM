const createListingButton = document.querySelector('#createListingButton');
const cancelListingButton = document.querySelector('#cancelListing');
const listingsContainer = document.querySelector('#listingsContainer');
const listingForm = document.querySelector('#listingForm')

let listingID = 0;


listingForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const imageInput = document.getElementById('image');
    const productName = document.getElementById('productName').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {

            const newListing = document.createElement('div');
            newListing.classList.add('listing');
            newListing.id = listingID++;

            const image = document.createElement('img');
            image.classList.add('image');
            
            image.src = e.target.result;
            image.alt = 'Listing image';
            image.style.cssText = ['height: 50px; border: 1px solid black'];

            const productNameContainer = document.createElement('div');
            productNameContainer.classList.add('productName');
            productNameContainer.textContent = productName;

            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('productName');
            descriptionContainer.textContent = description;

            const priceContainer = document.createElement('div');
            priceContainer.classList.add('productName');
            priceContainer.textContent = price;
        
            const purchaseButton = document.createElement('button');
            purchaseButton.id = 'purchaseButton';
            purchaseButton.type = 'button'
            purchaseButton.textContent = 'Buy now';

            newListing.appendChild(image);
            newListing.appendChild(productNameContainer);
            newListing.appendChild(descriptionContainer);
            newListing.appendChild(priceContainer);
            newListing.appendChild(purchaseButton);

            listingsContainer.appendChild(newListing);
            listingForm.reset();
            listingForm.style.display = 'none';
            createListingButton.style.display = 'block';
        };
        reader.readAsDataURL(imageInput.files[0]); 
    } else {
        alert('Please upload an image.')
    }
});

createListingButton.addEventListener('click', (e) => {
    if (listingForm.style.display === 'none' || listingForm.style.display === ''){
        listingForm.style.display = 'block';
        createListingButton.style.display = 'none';
    }
})

cancelListingButton.addEventListener('click', (e) => {
    listingForm.style.display = 'none';
    listingForm.reset();
    createListingButton.style.display = 'block';
})

listingsContainer.addEventListener('click', (e) => {
    if (e.target.id === 'purchaseButton'){
        e.target.parentNode.remove();
    }
    
})
