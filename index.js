const result = document.querySelector("#result");

  function get_model(){
    var model = document.getElementById("model");
    var selected = model.options[model.selectedIndex].text;
    return selected;
  }


  function reload_image()
    {
      window.location.reload()
    }

  function predict(){
    
    if(get_model() === "Select a model"){
      alert("Please select a model");
    }else{
      const classifier = ml5.imageClassifier('MobileNet',modelLoaded);
      
      function modelLoaded() {
        console.log('Model Loaded!');
        }
      classifier.classify(document.getElementById('image'), (err, results) => {
      console.log('Classify: '+results[0].label);
      console.log('Confidence: '+results[0].confidence);
      //alert('Classify '+results[0].label+'\n'+'Confidence '+results[0].confidence*100+' %')
      document.getElementById("label").innerHTML=results[0].label;
      document.getElementById("confidence").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
      });
      
    }
   
   

  }

  