function populateAboutTab() {
    const body = document.querySelector('body');

    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);

    const aboutTab = document.createElement('div');
    aboutTab.id = 'aboutTab';
    content.appendChild(aboutTab);
    
    const aboutPhilosophy = document.createElement('div');
    aboutPhilosophy.id = 'aboutPhilosophy';
    aboutTab.appendChild(aboutPhilosophy);

    const aboutPhilosophyH3 = document.createElement('h3');
    aboutPhilosophyH3.innerHTML = 'Our Philosophy'
    aboutPhilosophy.appendChild(aboutPhilosophyH3);

    const aboutPhilosophyP = document.createElement('p');
    aboutPhilosophyP.innerHTML = "At Filano's, we believe that great food is not just about taste, but also about the artistry and passion that goes into every dish. Our talented chefs meticulously craft each meal using only the finest ingredients, ensuring every bite is a symphony of flavors.";
    aboutPhilosophy.appendChild(aboutPhilosophyP);

    const aboutOurCuisine = document.createElement('div');
    aboutOurCuisine.id = 'aboutOurCuisine';
    aboutTab.appendChild(aboutOurCuisine);

    const aboutOurCuisineH3 = document.createElement('h3');
    aboutOurCuisineH3.innerHTML = 'Our Cuisine';
    aboutOurCuisine.appendChild(aboutOurCuisineH3);

    const aboutOurCuisineP = document.createElement('p');
    aboutOurCuisineP.innerHTML = "Indulge in a culinary journey with our diverse menu inspired by global flavors. From sizzling steaks and gourmet burgers to authentic Italian pizzas and savory soft pretzels, we offer something to tantalize every palate. Our commitment to quality and creativity sets us apart, making dining at Filano's an unforgettable experience.";
    aboutOurCuisine.appendChild(aboutOurCuisineP);

}

export { populateAboutTab };