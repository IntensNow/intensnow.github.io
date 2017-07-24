'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//сюда будет импортиться все остальное
console.log('main-script');

var NavMenu = function () {
  function NavMenu(elementId) {
    _classCallCheck(this, NavMenu);

    this.element = document.getElementById(elementId);
    this.navMenuList = this.element.closest('.nav-menu_mobile').getElementsByClassName('nav-menu__list')[0];
    this.isOpened = this.element.classList.contains('open');

    this.element.addEventListener('click', this.toggle.bind(this), false);
  }

  _createClass(NavMenu, [{
    key: '_open',
    value: function _open() {
      var element = this.element,
          navMenuList = this.navMenuList;

      if (this.isOpened) {
        throw Error('nav-menu already opened');
        return false;
      }

      element.classList.add('open');
      navMenuList.classList.add('nav-menu__list_open');
    }
  }, {
    key: '_close',
    value: function _close() {
      var element = this.element,
          navMenuList = this.navMenuList;

      if (!this.isOpened) {
        throw Error('nav-menu already closed');
        return false;
      }

      element.classList.remove('open');
      navMenuList.classList.remove('nav-menu__list_open');
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var isOpened = this.isOpened,
          element = this.element;

      if (isOpened) {
        this._close();
      } else {
        this._open();
      }
      this.isOpened = !isOpened;
    }
  }]);

  return NavMenu;
}();

var menuElem = new NavMenu('nav-toggle-button');

/* Use modal plugin to show instagram-section images */

var instagramSection = document.getElementById('instagram');
instagramSection.addEventListener('click', showImageInModal, false);

function showImageInModal(e) {

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  e.target.ondragstart = function () {
    return false;
  };

  if (Modal === undefined) {
    console.Error("Modal plugin not found");
    return;
  }

  var clonedImage = e.target.cloneNode(true);
  var wrapper = document.createElement('div');

  clonedImage.style.width = '100%';
  wrapper.style.width = '100%';

  wrapper.appendChild(clonedImage);

  //open modal;

  var myModal = new Modal({ content: wrapper, maxWidth: 500 });

  myModal.open();
}

