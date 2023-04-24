chrome.runtime.onMessage.addListener(function(request) {
  var needContact = ["contact-info", "contact-info-submit"];
  if(needContact.includes(request))
    {
      var shouldSubmit = false;
      switch(request) {
          case 'contact-info-submit':
            shouldSubmit = true;
          break;
          case 'contact-info':
            // Nothing
          break;            
          }
          var randomInt = Math.floor(Math.random() * Math.floor(999));
          var randomStr = Math.floor(Math.random() * Math.floor(30));
          var randomNr = Math.floor(Math.random() * Math.floor(300));
          document.getElementById("billing-ppiPhone").value = "0732123"+ randomInt;
          document.getElementById("billing-ppiEmail").value = "test"+ randomInt +"@test.com";
          document.getElementById("billing-ppiAddress").value = "Sos "+ randomStr +" Decembrie, Bl. 01, Nr. "+ randomNr +", et. 24, Sector 2, 12345, Bucuresti ";
          if(shouldSubmit) {
            document.getElementsByClassName('btn')[0].click(); // to Submit the Contact Form
          }
    }else {
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
          case 'three-ds-card-submit':
              shouldSubmit = true;
          case 'three-ds-card':
              document.getElementById("paymentCardNumber").value = "9900009184214768";
            break;

          case 'errorCode16-submit':
              shouldSubmit = true;
          case 'errorCode16':
              document.getElementById("paymentCardNumber").value = "9900163421519917";
            break;
          case 'errorCode17-submit':
              shouldSubmit = true;
          case 'errorCode17':
              document.getElementById("paymentCardNumber").value = "9900175243557578";
            break;
          case 'errorCode18-submit':
              shouldSubmit = true;
          case 'errorCode18':
              document.getElementById("paymentCardNumber").value = "9900188825730679";
            break;
          case 'errorCode32-submit':
              shouldSubmit = true;
          case 'errorCode32':
              document.getElementById("paymentCardNumber").value = "9900321701614663";
            break;
          case 'errorCode33-submit':
              shouldSubmit = true;
          case 'errorCode33':
              document.getElementById("paymentCardNumber").value = "9900334438842671";
            break;
          case 'errorCode35-submit':
              shouldSubmit = true;
          case 'errorCode35':
              document.getElementById("paymentCardNumber").value = "9900357124079225";
            break;
          case 'errorCode36-submit':
              shouldSubmit = true;
          case 'errorCode36':
              document.getElementById("paymentCardNumber").value = "9900364277624492";
            break;
          case 'errorCode37-submit':
              shouldSubmit = true;
          case 'errorCode37':
              document.getElementById("paymentCardNumber").value = "9900372427602631";
            break;
          case 'errorCode99-submit':
              shouldSubmit = true;
          case 'errorCode99':
              document.getElementById("paymentCardNumber").value = "9900996831251880";
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
    }
})