  writeCaution('userId', 'emptyId');
  writeCaution('userPassword', 'emptyPw');
  writeCaution('confirmPw', 'diffPw');
  writeCaution('firstName', 'emptyName');
  writeCaution('lastName', 'emptyName');
  writeCaution('userEmail', 'emptyEmail');
  

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
    

    
  