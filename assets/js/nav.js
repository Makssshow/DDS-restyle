var navigation = {
    // Variables
    $nav: document.querySelector('.nav'),
    $navTrigger: document.querySelector('.nav__trigger'),

    init: function init() {
        var self = this;

        // Handle the transitions
        self.$navTrigger.addEventListener('click', function () {
            if (!self.$navTrigger.classList.contains('is-active')) {
                // .nav--trigger active
                self.$navTrigger.classList.add('is-active');

                // .nav active
                self.$nav.classList.add('is-active');

            } else {
                // .nav--trigger inactive
                self.$navTrigger.classList.remove('is-active');

                // .nav__content inactive
                    self.$nav.classList.remove('is-active');
            }
        });
    }

};

navigation.init();