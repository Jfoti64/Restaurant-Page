function populateHomeTab() {
    const body = document.querySelector('body');
    
    const content = document.createElement('div');
    content.id = 'content';

    const homeTab = document.createElement('div');
    homeTab.id = 'homeTab';

    content.appendChild(homeTab);

    body.appendChild(content);

    const description = document.createElement('div');
    description.id = 'description';

    const descriptionP = document.createElement('p');
    descriptionP.innerHTML = 'Welcome to our wonderful restaurant. We know you will enjoy our selection.';
    description.appendChild(descriptionP);

    homeTab.appendChild(description);


    const info = document.createElement('div');
    info.id = 'info';

    const infoRight = document.createElement('div');
    infoRight.id = 'infoRight';

    const infoRightP = document.createElement('p');
    infoRightP.innerHTML = 'Hours: 10AM-10PM';

    infoRight.appendChild(infoRightP);
    info.appendChild(infoRight);


    const infoLeft = document.createElement('div');
    infoLeft.id = 'infoLeft';

    const infoLeftP = document.createElement('p');
    infoLeftP.innerHTML = 'Location: 1438 West Highland';

    infoLeft.appendChild(infoLeftP);

    info.appendChild(infoLeft);

    homeTab.appendChild(info);
}

export { populateHomeTab };