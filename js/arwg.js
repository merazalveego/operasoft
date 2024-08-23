const element = document.querySelector('.onSb .arWG');

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.removedNodes.length) {
            mutation.removedNodes.forEach((node) => {
                if (node === element) {
                    document.body.appendChild(node);  // Re-append the removed element to the DOM
                }
            });
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
