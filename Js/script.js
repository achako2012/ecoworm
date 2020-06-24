window.addEventListener('DOMContentLoaded', () => {
      
      //Modal 

      const modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');
      console.log(modalTrigger);

      function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
      }

      modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
      });

      function closeModal() {
            modal.classList.remove('show');
            modal.classList.add('hide');
            document.body.style.overflow = '';
      }

      modalCloseBtn.addEventListener('click', closeModal);

      modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                  closeModal();
            }
      });

      document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                  closeModal();
            }
      });

      // const modalTimerId = setTimeout(openModal, 3000);

//      function showModalByScroll() {
//            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//                  openModal();
//                  window.removeEventListener('scroll', showModalByScroll);
//            }
//      }
//      window.addEventListener('scroll', showModalByScroll);

});