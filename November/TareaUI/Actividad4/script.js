// | Whe get the dom loaded first | //
document.addEventListener('DOMContentLoaded', () => {
    // | The variables for make the drag move | //
    let currentDraggable = null;
    let offsetX = 0;
    let offsetY = 0;

    // | Logic of the movement when you want to click and move the img | //
    document.addEventListener('mousedown', (event) => {
        const target = event.target.closest('.draggable');
        if (!target) return;

        currentDraggable = target;
        const rect = target.getBoundingClientRect();

        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        event.preventDefault();
    });

    // | Logic for move the current img | //
    function onMouseMove(event) {
        if (!currentDraggable) return;

        let newLeft = event.clientX - offsetX;
        let newTop = event.clientY - offsetY;


        newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - currentDraggable.offsetWidth));
        newTop = Math.max(0, Math.min(newTop, window.innerHeight - currentDraggable.offsetHeight));


        if (newTop > window.innerHeight - 50) {
            window.scrollBy(0, 10);
        } else if (newTop < 50) {
            window.scrollBy(0, -10);
        }

        currentDraggable.style.position = 'absolute';
        currentDraggable.style.left = newLeft + 'px';
        currentDraggable.style.top = newTop + 'px';
    }

    // | Logic for let the mouse out | //
    function onMouseUp() {
        if (!currentDraggable) return;

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        currentDraggable = null;
    }

    document.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });
});
