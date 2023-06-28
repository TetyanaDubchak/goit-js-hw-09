
import Notiflix from 'notiflix';

const submitElem = document.querySelector('button[type=submit]');

const delayElem = document.querySelector('input[name="delay"]');
const stepElem = document.querySelector('input[name="step"]');
const amountElem = document.querySelector('input[name="amount"]');


const onSubmitHandler = (evt) => {
  evt.preventDefault();
  let numberOfPromise = 0;

  let amountDate = Number(amountElem.value);
  let delayDate = Number(delayElem.value);
  let stepDate = Number(stepElemElem.value);

    if (delayDate<0||stepDate<0||amountDate<0) {
    return
    }
  
  for (let i = 0; i < amountDate; i++) {
    numberOfPromise += 1;
    delayDate += stepDate;

       createPromise(position, delay)
      .then(({ position, delay }) => {
         Notiflix.Notify.success(`:white_check_mark: Fulfilled promise ${ponumberOfPromisesition} in ${delayDate}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`:x: Rejected promise ${numberOfPromise} in ${delayDate}ms`);
      });
    
  };

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
         resolve({position, delay})
      } else {
        reject({position, delay})
      }
      }, delayDate)
    })
  }   
}
submitElem.addEventListener('submit', onSubmitHandler);