import { initListings } from "./modules/listings.js";
import { initWorks } from "./modules/works.js";
import { initModals } from "./modules/modals.js";
import { initTask } from "./modules/task.js";

document.addEventListener('DOMContentLoaded', () => {
    initWorks();
    initListings();
    initModals();
    initTask();
})