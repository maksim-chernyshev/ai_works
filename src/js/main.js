

// listings section

const listingsRoot = document.querySelector('[data-js="listings"]');
const listingsTabButtonsRoot = document.querySelector('[data-js="listingsTabButtons"]');
const listingTabs = document.querySelectorAll('[data-js="linksContainer"]');

listingsTabButtonsRoot.addEventListener('click', (event) => {
    let currenTabButton = listingsRoot.querySelector('[aria-selected="true"]')
    let currentTab = listingsRoot.querySelector('[data-is-active]');

    const clickedTab = event.target.closest('button')
    const tabCategory = clickedTab.getAttribute('aria-controls');

    listingTabs.forEach(tab => {
        if (tab.id === tabCategory) {
            currenTabButton.setAttribute('aria-selected', 'false');
            currentTab.removeAttribute('data-is-active');

            clickedTab.setAttribute('aria-selected', 'true');
            tab.setAttribute('data-is-active', '');


        }
    })
})