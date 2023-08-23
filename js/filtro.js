function filterByCategory(category) {
    const containers = document.querySelectorAll('.containerti');

    containers.forEach(container => {
        const containerCategory = container.getAttribute('data-category');
        if (category === 'todo' || containerCategory === category) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}