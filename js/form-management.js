/**
 * Management for Offers and Promotions
 */

const secondItems = $('input[name="secondPrice"], input[name="secondDataVolume"], input[name="secondSMSVolume"], input[name="secondVoiceVolume"], label[name="secondPrice"], label[name="secondDataVolume"], label[name="secondSMSVolume"], label[name="secondVoiceVolume"]');
secondItems.hide();

$('#type').change(function(){

    const offerType = document.getElementById('type').value;
    const firstItems = $('input[name="firstPrice"], input[name="firstVolume"], label[name="firstPrice"], label[name="firstVolume"]');
    const secondItems = $('input[name="secondPrice"], input[name="secondDataVolume"], input[name="secondSMSVolume"], input[name="secondVoiceVolume"], label[name="secondPrice"], label[name="secondDataVolume"], label[name="secondSMSVolume"], label[name="secondVoiceVolume"]');

    if(offerType === "Mixed"){
        firstItems.hide();
        secondItems.show();
    }else{
        firstItems.show();
        secondItems.hide();
    }

});


/**
 * Management for ELigibility
 */

const bItems = $('.item');

bItems.hide();

$('#type').change(function(){

    const eliType = document.getElementById('type').value;
    const aItems = $('textarea[name="langText"], label[name="langText"]');
    const bItems = $('.item');
    
    if(eliType === "List"){
        aItems.show();
        bItems.hide();
    }else{
        aItems.hide();
        bItems.show();
    }

});
