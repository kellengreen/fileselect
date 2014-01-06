document.addEventListener('DOMContentLoaded', function() {

    var fsPopup = (function() {
        var callback,
            form = document.createElement('form'),
            input = document.createElement('input');

        form.appendChild(input);
        form.style.display = 'none';
        input.type = 'file';

        input.addEventListener('change', function() {
            callback(input.files);
            form.reset();
        });

        return {
            add: function(elem, func, multiple) {
                if (window.FileList) {
                    elem.addEventListener('click', function(evt) {
                        callback = func;
                        evt.preventDefault();
                        input.multiple = !!multiple;
                        input.click();
                    });
                }
            }
        }
    })();
});
