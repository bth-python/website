// This component adds JS that opens any <details> element 
// containing a target element from the URL hash

function openDetailsFromHash() {
    const rawHash = window.location.hash;
    if (!rawHash) return;

    const decodedHash = decodeURIComponent(rawHash);
    const target = document.querySelector(decodedHash);
    if (!target) return;

    let parent = target.parentElement;
    while (parent) {
        if (parent.tagName.toLowerCase() === 'details') {
            parent.open = true;
        }
        parent = parent.parentElement;
    }

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

window.addEventListener('DOMContentLoaded', openDetailsFromHash);
window.addEventListener('hashchange', openDetailsFromHash);