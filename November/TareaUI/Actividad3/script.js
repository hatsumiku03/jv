// | Whe get the dom loaded first | //
document.addEventListener('DOMContentLoaded', () => {
    
    // | Define the classes | //
    const slider = document.querySelector('.slider');
    const thumb = slider.querySelector('.thumb');

    // | We get the thumb | //
    thumb.onmousedown = function(event) {
        event.preventDefault();

        // | We use this for calculate all the movement of the thumb| //
        let shiftX = event.clientX - thumb.getBoundingClientRect().left;

        // | Get the event of the movement of the mouse and stop to move the thumb with the mouse | //
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        // | Here we define a function to the movement of the mouse| //
        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

            // | Here we put a limiter so that the x doesn't get out of the slider xD | //
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = slider.offsetWidth - thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            thumb.style.left = newLeft + 'px';
        }

        // | This is so that we can release the mouse | //
        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    };
});
