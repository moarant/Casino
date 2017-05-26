

function catSpeak() {
    return "Cat says meow";
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    console.log(module.export)
    let exports = module.exports= {}
    exports.catSpeak = catSpeak;
  }
  else {
    console.log("Else triggers")
    window.catSpeak = catSpeak;
  }
