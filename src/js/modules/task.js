export function initTask() {
    const dropbox = document.querySelector('[data-js="dropbox"]');
    const queryForm = document.querySelector('[data-js="queryForm"]');
    const formSubmitButton = document.querySelector('[data-js="submit"]');
    const textarea = document.querySelector('#query-input');
    const fileInput = document.querySelector('input[type="file"]')


    const dragAndDropEvents = ['dragenter', 'dragover', 'dragleave', 'drop'];
    let formData = new FormData();

    dragAndDropEvents.forEach(eventName => {
        dropbox.addEventListener(eventName, preventDefaults, false)
    })

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }


    function handleDropFile(event) {
        const file = getDroppedFiles(event);

        if (formData.has('file')) {
            formData.delete('file');
        }

        formData.append('file', file);
        renderSuccess(getDroppedFiles(event));
    }

    function handleFileInput(event) {
        if (formData.has('file')) {
            formData.delete('file');
        }

        formData.append('file', fileInput.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (textarea.value.trim() !== '') {
            formData.append('query', textarea.value);
        }

        // тут будет фетч

        for (let key of formData.keys()) {
            formData.delete(key)
        }

        // for (let value of formData.entries()) {
        //     console.log(value);
        // }

        event.target.closest('form').reset();
    }

    const handleTyping = (event) => {

    }

    function renderSuccess(file) {
        let div = document.createElement('div');
        div.textContent = `Файл: ${file.name.trim().slice(0, 20)}...`;
        div.classList.add('hero-task__file-info', `hero-task__file-info`)
        dropbox.removeAttribute('data-ready-to-drop');

        dropbox.append(div);
    }

    function getDroppedFiles(event) {
        const files = [];

        if (event.dataTransfer.items) {
            [...event.dataTransfer.items].forEach((item, i) => {
                if (item.kind === 'file') {
                    files.push(item.getAsFile());
                }
            })
        } else {
            [...event.dataTransfer.files].forEach((file) => {
                files.push(file)
            });
        }

        return files[0];
    }

    dropbox.addEventListener('dragenter', () => {
        dropbox.setAttribute('data-ready-to-drop', '');
    }, false);

    // dropbox.addEventListener('dragleave', () => {
    //     dropbox.removeAttribute('data-ready-to-drop');
    // }, false);

    dropbox.addEventListener('drop', handleDropFile);
    formSubmitButton.addEventListener('click', handleSubmit);
    fileInput.addEventListener('change', handleFileInput)
}



// Логика:
// При попадании файла во вьюпорт браузера - у инпута появляется атрибут, который увеличивает его before на весь контейнер
// У dropBox появляется outline для индикации области приемки файла
// При событии drop у инпута убирается атрибут и в поле снова можно печатать
// Когда файл сбрасывается нужно вывести какое-то уведомление, что файл получен (может голубую плашечку где-нибудь в углу с названием файла)
// У дропбокса убирается обводка