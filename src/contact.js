function contactForm() {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    content.appendChild(pageContent);

    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
    pageContent.appendChild(heading);
    heading.classList.add('heading');

    const formParent = document.createElement('div');
    pageContent.appendChild(formParent);
    formParent.classList.add('form-parent-div');

    const form = document.createElement('form');
    formParent.appendChild(form);
    form.classList.add('form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter Your Name';
    nameInput.classList.add('name-mail-input');
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter Your E-Mail';
    emailInput.classList.add('name-mail-input');
    form.appendChild(emailInput);

    const message = document.createElement('textarea');
    message.placeholder = "Enter Your Message";
    message.classList.add('textarea');
    form.appendChild(message);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.classList.add('submit-btn');
    form.appendChild(submit);
}

export default contactForm;