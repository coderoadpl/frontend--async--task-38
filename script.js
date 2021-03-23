const promise1 = new Promise((resolve) => setTimeout(() => resolve('promise 1'), 10 * 1000))
const promise2 = new Promise((resolve, reject) => {
    const button = document.createElement('button')
    button.innerHTML = 'ABORT'
    button.addEventListener(
        'click',
        () => reject('Aborted by button click')
    )
    document.body.appendChild(button)
})

promise1
    .then((data) => console.log('promise 1', data))
    .catch((error) => console.log('promise 1 rejection', error))

promise2
    .then((data) => console.log('promise 2', data))
    .catch((error) => console.log('promise 2 rejection', error))

const promise = Promise.race([
    promise1,
    promise2
])
    .then((data) => console.log('promise race', data))
    .catch((error) => console.log('promise race rejection', error))