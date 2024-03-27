function populateAboutTab() {
    const body = document.querySelector('body');

    const content = document.createElement('div');
    content.id = 'content';
    
    const contentP = document.createElement('p');
    contentP.innerHTML = 'Welcome to our restaurant page. This is some information content the restaurant blah blah blah.';
    content.appendChild(contentP);

    body.appendChild(content);

}

export { populateAboutTab };