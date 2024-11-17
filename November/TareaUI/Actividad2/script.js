// | Whe get the dom loaded first :x | //
document.addEventListener('DOMContentLoaded', () => {
    // | Defined variable tooltip | //
    const tooltip = document.getElementById('tooltip');

    // | Get the mouseover event | //
    document.addEventListener('mouseover', (event) => {
        // || Here you get the value of data-tooltip | //
        const target = event.target.closest('[data-tooltip]');

        // | If the mouse isn't over the element, ends here the code | //
        if (!target) return;

        // | If the class is data-tooltip the display shows... | //
        tooltip.textContent = target.getAttribute('data-tooltip');
        tooltip.style.display = 'block';

        // | Here you will define where define the position to make apparear the box, if you delete this, when you rechage the page you must see under the house :x | //
        const rect = target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width - tooltipRect.width) / 2 + 'px';
        tooltip.style.top = rect.top - tooltipRect.height - 5 + 'px';
    });

    // | Get the mouseout event | //
    document.addEventListener('mouseout', (event) => {
        // || Here you get the value of data-tooltip | //
        const target = event.target.closest('[data-tooltip]');

        // | If the mouse is over the element, ends here the code | //
        if (!target) return;
        
        // | And you make it invisible | //
        tooltip.style.display = 'none';
    });

    // | This is a part of the code for attatch the box with the mouse xD | //
    document.addEventListener('mousemove', (event) => {
        if (tooltip.style.display === 'block') {
            // | Get the directions for move  the box with the mouse| //
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY + 10 + 'px';
        }
    });
});
