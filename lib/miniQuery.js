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
    SweetSelector.select(element).style.display = "none"
  }
  this.show = function(element){
    SweetSelector.select(element).style.display = "block"
  }
  this.addClass = function(initial_class, addition){
    initial_class.slice(1)
    return SweetSelector.select(initial_class).className = initial_class + " " + addition
  }
  this.removeClass = function(class_base, class_to_remove){
    SweetSelector.select(class_to_remove).classList.remove(class_to_remove);
  }
  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }
}()
