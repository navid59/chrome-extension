chrome.runtime.onMessage.addListener(function(request) {
    var shouldSubmit = false;
    switch(request) {
        case 'acceptat-garanti-submit':
          shouldSubmit = true;
        case 'acceptat-garanti':
            document.getElementById("paymentCardNumber").value = "9900004810225098";
          break;
        case 'acceptat-avantaj-submit':
          shouldSubmit = true;
        case 'acceptat-avantaj':
            document.getElementById("paymentCardNumber").value = "99110059532258";
          break;
        case 'expirat-submit':
          shouldSubmit = true;
        case 'expirat':
            document.getElementById("paymentCardNumber").value = "9900541631437790";
          break;
        case 'fonduri-insuficiente-submit':
            shouldSubmit = true;
        case 'fonduri-insuficiente':
            document.getElementById("paymentCardNumber").value = "9900518572831942";
          break; 
        case 'cvv-incorect-submit':
            shouldSubmit = true;
        case 'cvv-incorect':
            document.getElementById("paymentCardNumber").value = "9900827979991500";
          break;
        case 'antifrauda-submit':
            shouldSubmit = true;
        case 'antifrauda':
            document.getElementById("paymentCardNumber").value = "9900005786662552";
          break;
        case 'nepermisa-submit':
            shouldSubmit = true;
        case 'nepermisa':
            document.getElementById("paymentCardNumber").value = "9900576270414197";
          break;
        case 'eroare-banca-submit':
            shouldSubmit = true;
        case 'eroare-banca':
            document.getElementById("paymentCardNumber").value = "9900130597497640";
          break;     
        default:
          // Nothing
      }
      document.getElementById("paymentCardName").value = "TEST TEST";
      document.getElementById("paymentCVV2Number").value = "111";
      var d = new Date();
      var randNumber = Math.floor(Math.random() * Math.floor(3))+1;
      var nextYears = d.getFullYear()+ randNumber;
      document.getElementById("paymentExpYear").value = nextYears;
      var expireDateItems = document.getElementsByClassName("customSelectInner");
      expireDateItems[1].innerText = nextYears;
      if(shouldSubmit) {
        document.getElementsByClassName('btn')[0].click(); // to Submit the Form
      }
})