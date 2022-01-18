const sentence = "hello there from lighthouse labs";
function timeOut(i) {
  if (i < sentence.length){
  process.stdout.write(sentence[i]);
    setTimeout(function(){
      i++;
      timeOut(i);
    },50);
  }
}
timeOut(0);
