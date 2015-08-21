var SweetSelector = function(){
  this.select = function(element){
    return document.getElementById(element)
  }
  return {
    select: select
  }
}()


SweetSelector.select('#eyed');
SweetSelector.select('.klass');
SweetSelector.select('a');
