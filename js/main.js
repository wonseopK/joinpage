  writeCaution('userId', 'emptyId');


    function writeCaution(userinfo, cautioninfo) {
      document.getElementById(userinfo).onblur = function () {
        let emptycaution = document.getElementById(cautioninfo)
        if(document.getElementById(userinfo).value === ''){
          emptycaution.innerHTML = 'Required Fild'
          emptycaution.style.color = 'red'
          return;
        }else{
          emptycaution.innerHTML = ''
        }
      }
    }
    

    
  