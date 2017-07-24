class NavMenu {
  
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.navMenuList = this.element.closest('.nav-menu_mobile')
                       .getElementsByClassName('nav-menu__list')[0];
    this.isOpened = this.element.classList.contains('open');
    
    this.element.addEventListener('click', this.toggle.bind(this), false);
  }
  
  _open() {
    let element = this.element,
        navMenuList = this.navMenuList;
    
    if (this.isOpened) {
      throw Error('nav-menu already opened');
      return false;
    }
    
    element.classList.add('open');
    navMenuList.classList.add('nav-menu__list_open');
  }
  
  _close() {
    let element = this.element,
        navMenuList = this.navMenuList;
    
    if (!this.isOpened) {
      throw Error('nav-menu already closed');
      return false;
    }
    
    element.classList.remove('open');
    navMenuList.classList.remove('nav-menu__list_open');
  }
  
  toggle() {
    let isOpened = this.isOpened,
        element  = this.element;
    
    if(isOpened) {
      this._close();
    } else {
      this._open();
    }
    this.isOpened = !isOpened;
  }
  
}

const menuElem = new NavMenu('nav-toggle-button');


/* Use modal plugin to show instagram-section images */


var instagramSection = document.getElementById('instagram');
instagramSection.addEventListener('click', showImageInModal, false);


function showImageInModal(e) {
  
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  
  e.target.ondragstart = function() {
    return false;
  }
  
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
  
  var myModal = new Modal({content: wrapper, maxWidth: 500});
  
  myModal.open();
}


