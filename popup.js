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

    // var buttons = document.getElementsByClassName('btn');
    // for (var i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', function() {
    //         alert(this.id);
    //     })
    // }

  });