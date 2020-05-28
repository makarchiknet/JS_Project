const images = () => {
   const workSection = document.querySelector('.works'),
      imgPopup = document.createElement('div'),
      bigImg = document.createElement('img');

   imgPopup.classList.add('popup');
   workSection.appendChild(imgPopup);

   imgPopup.style.justifyContent = 'center';
   imgPopup.style.alignItems = 'center';
   imgPopup.style.display = 'none';

   imgPopup.appendChild(bigImg);

   workSection.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target;

      if (target && target.classList.contains('preview')) {
         imgPopup.style.display = 'flex';
         bigImg.style.maxHeight = '70%';
         document.body.style.overflow = 'hidden';
         const path = target.parentNode.getAttribute('href');
         bigImg.setAttribute('src', path);
      }

      if (target && target.matches('div.popup')) {
         imgPopup.style.display = 'none';
         document.body.style.overflow = '';
      }
   });
};

export default images;