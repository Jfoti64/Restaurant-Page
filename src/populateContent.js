function populateContent() {
    const body = document.querySelector('body');
    
    const content = document.createElement('div');
    content.id = 'content';

    body.appendChild(content);

    const description = document.createElement('div');
    description.id = 'description';

    const descriptionP = document.createElement('p');
    descriptionP.innerHTML = 'Welcome to our wonderful restaurant. We know you will enjoy our selection.';
    description.appendChild(descriptionP);

    content.appendChild(description);


    const info = document.createElement('div');
    info.id = 'info';

    const infoRight = document.createElement('div');
    infoRight.id = 'infoRight';

    const infoRightP = document.createElement('p');
    infoRightP.innerHTML = 'Hours:';

    infoRight.appendChild(infoRightP);
    info.appendChild(infoRight);


    const infoLeft = document.createElement('div');
    infoLeft.id = 'infoLeft';

    const infoLeftP = document.createElement('p');
    infoLeftP.innerHTML = 'Location:';

    infoLeft.appendChild(infoLeftP);

    info.appendChild(infoLeft);

    content.appendChild(info);
}

export { populateContent };