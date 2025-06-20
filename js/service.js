const menservices = [
    {
        id: 1,
        image: './ServiceImages/Men/beard.png',
        title: 'Beard',
       
    },{
        id: 2,
        image: './ServiceImages/Men/kidscut.png',
        title: 'Kids Cut',
       
    },{
        id: 3,
        image: './ServiceImages/Men/beardtrim.jpg',
        title: 'Bread Trim',
       
    },{
        id: 4,
        image: './ServiceImages/Men/hairwash.jpg',
        title: 'Hair Wash',
      
    },{
        id: 5,
        image: './ServiceImages/Men/headmassage.jpg',
        title: 'Head Massage',
        
    },{
        id: 6,
        image: './ServiceImages/Men/haircolour.jpg',
        title: 'Hair Colour',
        
    },{
        id: 7,
        image: './ServiceImages/Men/imagesetting.jpeg',
        title: 'Hair Setting & Spary',
        
    },{
        id: 8,
        image: './ServiceImages/Men/detan.jpeg',
        title: 'Detan',
        
    },{
        id: 9,
        image: './ServiceImages/Men/tattoo.jpg',
        title: 'Tattoo',
        
    },
];

const womenservices = [
          {
            id: 1,
            image: './ServiceImages/NailPolish/NailPolish.jpg',
            title: 'Nail Polish',
            relatedImages: [
                { image: './ServiceImages/NailPolish/CutFileNail.jpg', title: 'CutFileNail' },
                { image: './ServiceImages/NailPolish/changeOfNailColor.jpg', title: 'Change Of NailColor' },
                { image: './ServiceImages/NailPolish/FrenchPolishNail.jpg', title: 'FrenchPolishNail' },
            ],
        },
        {
            id: 2,
            image: './ServiceImages/DetanBleach/detan.jpeg',
            title: 'Detan & Bleach',
            relatedImages: [
                { image: './ServiceImages/DetanBleach/Feet.jpg', title: 'Feet' },
                { image: './ServiceImages/DetanBleach/detan.jpeg', title: 'Face' },
                { image: './ServiceImages/DetanBleach/fullbody.jfif', title: 'fullbody' },
                { image: './ServiceImages/DetanBleach/handdetan.png', title: 'Hand' },
                { image: './ServiceImages/DetanBleach/legdetan.png', title: 'Leg' },
                { image: './ServiceImages/DetanBleach/underarms.jpg', title: 'underarms' },
            ],
        },
        {
            id: 3,
            image: './ServiceImages/ManicureAndPedicure/manicureandPedicure.jpg',
            title: 'Maincure & Pedicure',
            relatedImages: [
                { image: './ServiceImages/ManicureAndPedicure/cocoButter.jpg', title: 'CocoButter' },
                { image: './ServiceImages/ManicureAndPedicure/coffeeCream.jpg', title: 'CoffeeCream' },
                { image: './ServiceImages/ManicureAndPedicure/Organicspa.jfif', title: 'Organicspa' },
            ],
        },
        {
            id: 4,
            image: './ServiceImages/PeelOff/PeelOff.webp',
            title: 'PeelOff',
            relatedImages: [
                { image: './ServiceImages/PeelOff/fullbikini.png', title: 'fullbikini' },
                { image: './ServiceImages/PeelOff/undetArms.jfif', title: 'undetArms' },
                { image: './ServiceImages/PeelOff/upperlip.jfif', title: 'upperlip' },
            ],
        },
        {
            id: 5,
            image: './ServiceImages/Reflexnology/hand.jpeg',
            title: 'Reflexnology',
            relatedImages: [
                { image: './ServiceImages/Reflexnology/feet.jpg', title: 'Feet' },
                { image: './ServiceImages/Reflexnology/hand.jpeg', title: 'Hand' },
                { image: './ServiceImages/Reflexnology/neckAndShoulder.jpg', title: 'Neck & Shoulder' },
            ],
        },
        {
            id: 6,
            image: './ServiceImages/SkinCare/Face.jpg',
            title: 'SkinCare',
            relatedImages: [
                { image: './ServiceImages/SkinCare/Hand.jpg', title: 'Hand' },
                { image: './ServiceImages/SkinCare/Face.jpg', title: 'Face' },
                { image: './ServiceImages/SkinCare/Neck.jpg', title: 'Neck' },
            ],
        },
        {
            id: 7,
            image: './ServiceImages/Threading/eyeBrow.avif',
            title: 'Threading',
            relatedImages: [
                { image: './ServiceImages/Threading/eyeBrow.avif', title: 'EyeBrow' },
                { image: './ServiceImages/Threading/threading.jfif', title: 'Threading' },
                { image: './ServiceImages/Threading/upperLip.jfif', title: 'UpperLip' },
            ],
        },
        {
            id: 8,
            image: './ServiceImages/Waxing/Leg.webp',
            title: 'Waxing',
            relatedImages: [
                { image: './ServiceImages/Waxing/Body.webp', title: 'Body' },
                { image: './ServiceImages/Waxing/Leg.webp', title: 'Leg' },
                { image: './ServiceImages/Waxing/HandWaxing.jpg', title: 'Hand' },
                { image: './ServiceImages/Waxing/FaceWaxing.jpg', title: 'Face' },
                { image: './ServiceImages/Waxing/UnderarmWaxing.jpg', title: 'Under Arm' },
              
               
            ],
        },
        {
            id: 9,
            image: './ServiceImages/TextureMatter/hairGrowth.jpg',
            title: 'TextureMatter',
            relatedImages: [
                { image: './ServiceImages/TextureMatter/hairGrowth.jpg', title: 'hairGrowth' },
                { image: './ServiceImages/TextureMatter/hairStright.jpg', title: 'hairStright' },
                { image: './ServiceImages/TextureMatter/Perming.jpg', title: 'Perming' },
            ],
        },
        {
            id: 10,
            image: './ServiceImages/HairStyling/CurlyHair.jpg',
            title: 'Hair Styling',
            relatedImages: [
                { image: './ServiceImages/HairStyling/CurlyHair.jpg', title: 'CurlyHair' },
                { image: './ServiceImages/HairStyling/FringeCut.jpg', title: 'FringeCut' },
                { image: './ServiceImages/HairStyling/Stepcut.jfif', title: 'StepCut' },
            ],
        },
        {
            id: 11,
            image: './ServiceImages/HairTreatement/HairTreatment.avif',
            title: 'Hair Treatment',
            relatedImages: [
                { image: './ServiceImages/HairTreatement/HairTreatment.avif', title: 'HairTreatment' },
                { image: './ServiceImages/HairTreatement/head.avif', title: 'Head Massage' },
                { image: './ServiceImages/HairTreatement/color.avif', title: 'Color Save' },
                { image: './ServiceImages/HairTreatement/frizz.avif', title: 'Frizz Ease' },
                { image: './ServiceImages/HairTreatement/dandraff.png', title: 'Dandruff Control' },
            ],
        },
    ];
function renderServices(services) {
    const gallery = document.getElementById('services-gallery');
    gallery.innerHTML = ''; // Clear previous services

    services.forEach(service => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = service.image;
        img.className = 'card-img-top service-image';
        img.alt = service.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = service.title;

        cardBody.appendChild(title);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        gallery.appendChild(col);

        // Only show related images for women services
        if (service.relatedImages) {
            img.addEventListener('click', () => showRelatedImages(service.relatedImages));
        }
    });
}

function showRelatedImages(relatedImages) {
    const container = document.getElementById('related-images-container');
    container.innerHTML = ''; // Clear previous images

    relatedImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'related-images-item';

        const img = document.createElement('img');
        img.src = image.image;
        img.alt = image.title;

        const title = document.createElement('h6');
        title.textContent = image.title;

        item.appendChild(img);
        item.appendChild(title);
        container.appendChild(item);
    });

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('relatedImagesModal'));
    modal.show();
}


document.getElementById('menServicesBtn').addEventListener('click', () => {
    renderServices(menservices);
});

document.getElementById('womenServicesBtn').addEventListener('click', () => {
    renderServices(womenservices);
});

// Initial load with women services as default
document.addEventListener('DOMContentLoaded', () => {
    renderServices(womenservices);
});