import localstorageApi from './localstorage';
import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const userData = {};

const fillFormFields = () => {
  const userFormLS = localstorageApi.load(FORM_KEY);

  if (userFormLS === undefined) {
    return;
  }

  const formElemetns = form.elements;

  for (const key in userFormLS) {
    if (userFormLS.hasOwnProperty(key)) {
      formElemetns[key].value = userFormLS[key];
    }
  }
};

const onFormInput = evt => {
  const target = evt.target;

  console.log(target);

  const formValue = target.value;
  const formName = target.name;

  userData[formName] = formValue;
  localstorageApi.save(FORM_KEY, userData);
};

const onFormSubmit = event => {
  event.preventDefault();

  localstorageApi.remove(FORM_KEY);
  event.currentTarget.reset();
};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

fillFormFields();
