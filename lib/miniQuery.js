var SweetSelector = function(){
  this.select = function(element){
    return document.querySelector(element)
  }
  return {
    select: select
  }
}()

var DOM = function(){
  this.hide = function(element){
    document.querySelector(element).style.display = "none"
  }
  this.show = function(element){
    document.querySelector(element).style.display = "block"
  }
  this.addClass = function(initial_class, addition){
    return document.querySelector(initial_class).className = initial_class + " " + addition
  }
  // this.removeClass = function(class_base, class_to_remove){
  //   document.querySelector(class_base + " " + class_to_remove).classList.remove(class_to_remove);
  // }
  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }
}()
