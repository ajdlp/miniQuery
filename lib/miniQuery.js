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
  this.addClass = function(initial, addition){
    return document.querySelector(initial).className = initial + " " + addition
  }

  return {
    hide: hide,
    show: show,
    addClass: addClass
  }
}()
