
      /*checks if button js-button has the correct class
      const buttonElement1 = document.querySelector('.js-button');
      console.log(buttonElement1.classList.contains('js-button'))
      */

      //checks button classes, adds "is-toggled" if missing, removes if exists.
      function toggleButton(selector) {
        const button = document.querySelector(selector);
        if (button.classList.contains('is-toggled') !== true) {
          turnOffButton();
          button.classList.add('is-toggled');
        } else {
          button.classList.remove('is-toggled');
        }
      }
      // function to turn off the currently selected button via clicking it again
      function turnOffButton(){
        const previousButton = document.querySelector('.is-toggled');
        if (previousButton) {
          previousButton.classList.remove('is-toggled');
        }
      }