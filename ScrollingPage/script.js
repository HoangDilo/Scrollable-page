const DOM = document.getElementsByTagName('html')[0];
let st = 0;
let empty_count = 0;

const name_project_DOM = document.getElementById('name_project');
const email_DOM = document.getElementById('email');
const project_description_DOM = document.getElementById('project_description');
const telegram_name_DOm = document.getElementById('telegram_name');
const toasts_DOM = document.querySelector('.list-toasts');

function handleScroll() {
    st = DOM.scrollTop
    if (st > 200) document.getElementById('go-to-top').className = '';
    else document.getElementById('go-to-top').className = 'hidden';
}

function goTop() {
    window.scrollTo({
        top: 0, 
        behavior: "smooth",
    });
}

function handleSubmit() {
    // console.log(name_project_DOM.value);
    // console.log(email_DOM.value);
    // console.log(project_description_DOM.value);
    // console.log(telegram_name_DOm.value);
    isEmpty(name_project_DOM);
    isEmpty(email_DOM);
    isEmpty(project_description_DOM);
    isEmpty(telegram_name_DOm);
    if (empty_count > 0) {
        const error_DOM = document.createElement("div");
        error_DOM.className = 'toast-message-invalid';

        const X = document.createElement("img");
        X.src = './Assets/LongPage/x.svg';
        const text = document.createElement("p");
        text.innerText = 'Please make sure that no field is empty!';

        error_DOM.appendChild(X);
        error_DOM.appendChild(text);
        error_DOM.className += ' display';
        //console.log(error_DOM);
        toasts_DOM.appendChild(error_DOM);
        //console.log(toasts_DOM);
        setTimeout(() => {
            error_DOM.className = 'toast-message-invalid';
            toasts_DOM.removeChild(toasts_DOM.children[0]);
        }, 4000);
    }
    else if (empty_count === 0) {
        if (!validateEmail()) {
            const error_DOM = document.createElement("div");
            error_DOM.className = 'toast-message-invalid';

            const X = document.createElement("img");
            X.src = './Assets/LongPage/x.svg';
            const text = document.createElement("p");
            text.innerText = 'Email must be in this format: \'abc@xyc.ijk\'';

            email_DOM.className = 'invalid';

            error_DOM.appendChild(X);
            error_DOM.appendChild(text);
            error_DOM.className += ' display';
            //console.log(error_DOM);
            toasts_DOM.appendChild(error_DOM);
            //console.log(toasts_DOM);
            setTimeout(() => {
                toasts_DOM.removeChild(toasts_DOM.children[0]);
            }, 4000);
        } else {
            const error_DOM = document.createElement("div");
            error_DOM.className = 'toast-message-invalid valid';

            const X = document.createElement("img");
            X.src = './Assets/LongPage/v.svg';
            const text = document.createElement("p");
            text.innerText = 'Thank you for joining Vision Capital!';

            error_DOM.appendChild(X);
            error_DOM.appendChild(text);
            error_DOM.className += ' display';
            //console.log(error_DOM);
            toasts_DOM.appendChild(error_DOM);
            //console.log(toasts_DOM);
            setTimeout(() => {
                toasts_DOM.removeChild(toasts_DOM.children[0]);
            }, 4000);

            name_project_DOM.value = '';
            email_DOM.value = '';
            project_description_DOM.value = '';
            telegram_name_DOm.value = '';

        }
    }
    //console.log(empty_count);
    empty_count = 0;
}

function isEmpty(element) {
    if (!element.value) {
        element.className = 'invalid';
        empty_count++;
    } else {
        element.className = '';
    }
}

function handleFocus(element) {
    element.className = '';
}

function validateEmail() {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let check = email_DOM.value.toLowerCase().match(regex);
    return check;
}
