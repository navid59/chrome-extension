document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('acceptat-garanti').onclick=function(){
       chrome.tabs.query({
           currentWindow: true, active: true
       }, function(tabs){
           chrome.tabs.sendMessage(tabs[0].id, "acceptat-garanti")
       })
    }
    document.getElementById('acceptat-garanti-submit').onclick=function(){
       chrome.tabs.query({
           currentWindow: true, active: true
       }, function(tabs){
           chrome.tabs.sendMessage(tabs[0].id, "acceptat-garanti-submit")
       })
    }

    document.getElementById('acceptat-avantaj').onclick=function(){
        chrome.tabs.query({
            currentWindow: true, active: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "acceptat-avantaj")
        })
     }
    document.getElementById('acceptat-avantaj-submit').onclick=function(){
        chrome.tabs.query({
            currentWindow: true, active: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "acceptat-avantaj-submit")
        })
     }

    document.getElementById('expirat').onclick=function(){
        chrome.tabs.query({
            currentWindow: true, active: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "expirat")
        })
     }
    document.getElementById('expirat-submit').onclick=function(){
        chrome.tabs.query({
            currentWindow: true, active: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "expirat-submit")
        })
     }
 
    document.getElementById('fonduri-insuficiente').onclick=function(){
         chrome.tabs.query({
             currentWindow: true, active: true
         }, function(tabs){
             chrome.tabs.sendMessage(tabs[0].id, "fonduri-insuficiente")
         })
      }
    document.getElementById('fonduri-insuficiente-submit').onclick=function(){
         chrome.tabs.query({
             currentWindow: true, active: true
         }, function(tabs){
             chrome.tabs.sendMessage(tabs[0].id, "fonduri-insuficiente-submit")
         })
      }

    document.getElementById('cvv-incorect').onclick=function(){
        chrome.tabs.query({
            currentWindow: true, active: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "cvv-incorect")
        })
     }
    document.getElementById('cvv-incorect-submit').onclick=function(){
        chrome.tabs.query({
            currentWindow: true, active: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "cvv-incorect-submit")
        })
     }
 
    document.getElementById('antifrauda').onclick=function(){
         chrome.tabs.query({
             currentWindow: true, active: true
         }, function(tabs){
             chrome.tabs.sendMessage(tabs[0].id, "antifrauda")
         })
      } 
    document.getElementById('antifrauda-submit').onclick=function(){
         chrome.tabs.query({
             currentWindow: true, active: true
         }, function(tabs){
             chrome.tabs.sendMessage(tabs[0].id, "antifrauda-submit")
         })
      }
 
    document.getElementById('nepermisa').onclick=function(){
         chrome.tabs.query({
             currentWindow: true, active: true
         }, function(tabs){
             chrome.tabs.sendMessage(tabs[0].id, "nepermisa")
         })
      }  
    document.getElementById('nepermisa-submit').onclick=function(){
         chrome.tabs.query({
             currentWindow: true, active: true
         }, function(tabs){
             chrome.tabs.sendMessage(tabs[0].id, "nepermisa-submit")
         })
      }
  
    document.getElementById('eroare-banca').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "eroare-banca")
          })
       }
    document.getElementById('eroare-banca-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "eroare-banca-submit")
          })
       }
 
    document.getElementById('three-ds-card').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "three-ds-card")
          })
       }
    document.getElementById('three-ds-card-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "three-ds-card-submit")
          })
       }

    ///////////////////////////////   
    document.getElementById('errorCode16').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode16")
          })
       }
    document.getElementById('errorCode16-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode16-submit")
          })
       }

    document.getElementById('errorCode17').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode17")
          })
       }
    document.getElementById('errorCode17-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode17-submit")
          })
       }

    document.getElementById('errorCode18').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode18")
          })
       }
    document.getElementById('errorCode18-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode18-submit")
          })
       }

    document.getElementById('errorCode32').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode32")
          })
       }
    document.getElementById('errorCode32-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode32-submit")
          })
       }

    document.getElementById('errorCode33').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode33")
          })
       }
    document.getElementById('errorCode33-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode33-submit")
          })
       }

    document.getElementById('errorCode35').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode35")
          })
       }
    document.getElementById('errorCode35-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode35-submit")
          })
       }

    document.getElementById('errorCode36').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode36")
          })
       }
    document.getElementById('errorCode36-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode36-submit")
          })
       }

    document.getElementById('errorCode37').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode37")
          })
       }
    document.getElementById('errorCode37-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode37-submit")
          })
       }

    document.getElementById('errorCode99').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode99")
          })
       }
    document.getElementById('errorCode99-submit').onclick=function(){
          chrome.tabs.query({
              currentWindow: true, active: true
          }, function(tabs){
              chrome.tabs.sendMessage(tabs[0].id, "errorCode99-submit")
          })
       }
    //////////////////////////////////

    /**
     *  To fill Billing form
     */
    document.getElementById('contact-info').onclick=function(){
        chrome.tabs.query({
            currentWindow: true, active: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "contact-info")
        })
     }
     document.getElementById('contact-info-submit').onclick=function(){
        chrome.tabs.query({
            currentWindow: true, active: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, "contact-info-submit")
        })
     }

  });