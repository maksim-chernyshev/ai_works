export function initModals() {
    const singupButtons = document.querySelectorAll('[data-js="openSignup"]');
    const loginButtons = document.querySelectorAll('[data-js="openLogin"]');

    const signupModal = document.querySelector('[data-js="signupModal"]');
    const loginModal = document.querySelector('[data-js="loginModal"]');

    singupButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            document.body.style = 'overflow: hidden';
            signupModal.setAttribute('data-is-open', 'true');
            closeModal(signupModal)
        })
    })

    loginButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            document.body.style = 'overflow: hidden';
            loginModal.setAttribute('data-is-open', 'true');
            closeModal(loginModal)
        })
    })

    function closeModal(modal) {
        modal.addEventListener('click', (event) => {
            if (event.target.closest('[data-js="closeModal"]')) {
                modal.removeAttribute('data-is-open');
                document.body.style = 'overflow: auto';
            }
        })
    }


}