import Notiflix from 'notiflix';

const elements = {
  form: document.querySelector('.form'),
}

elements.form.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault();
  const delay = Number(elements.form.elements.delay.value);
  const step = Number(elements.form.elements.step.value);
  const amount = Number(elements.form.elements.amount.value);
  const promises = [];
  if (amount <= 0) {
    Notiflix.Notify.failure("Amount must be more than 0");
    promises = [];
  } else {
    promises.push(createPromise(1, delay))
  }
  for (let i = 1; i < amount; i += 1){
    promises.push(createPromise(i + 1, i * step + delay))
  }
  Promise.allSettled(promises).then((items) => {
    items.forEach((item, i) => {
      setTimeout(() => {
        if(item.status === "fulfilled"){
          Notiflix.Notify.success(item.value)
        } else{
          Notiflix.Notify.failure(item.reason);
        }
      }, i * step + delay); 
    });
  });
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
     res(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    rej(`❌ Rejected promise ${position} in ${delay}ms`);
  }})
}