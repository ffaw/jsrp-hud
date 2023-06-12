window.addEventListener('message', function(event){
    var item = event.data;
    document.querySelector('#life-bar').setAttribute('style',`width:${item.hp}%`)
    document.querySelector('#armor-bar').setAttribute('style',`width:${item.ar}%`)
    // document.querySelector('#staminabar').setAttribute('style',`width:${item.sta}%`)
    if (item.hp < 0) {
        document.querySelector('#info').setAttribute('style', `opacity:0`)
    }
    else {
        document.querySelector('#info').setAttribute('style', `opacity:1`)
    }

})

on('ammo', data=> {
    document.querySelector('#weapon-ammo').innerHTML= data.currentClip
    document.querySelector('#ammo-spent').innerHTML = data.currentAmmo
  })


