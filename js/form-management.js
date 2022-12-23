/**
* Initiate Form Management
*/

function formType3(target, item1, item2, item3) {

    item2.hide();
    item3.hide();

    target.change( function(){
        if(this.value === 'List'){
            item1.show();
            item2.hide();
            item3.hide();
        }else if(this.value === 'Function'){
            item2.show();
            item1.hide();
            item3.hide();
        }else{
            item3.show();
            item1.hide();
            item2.hide();
        }
    });
}

function formType(target, item1, item2) {

    item2.hide();

    target.change( function(){
        if(this.value === 'Less'){
            item1.show();
            item2.hide();
            
        }else{
            item2.show();
            item1.hide();
            
        }
    });
}

function formType2(target, item1, item2, option){
    item1.hide();

    target.change( function(){
        if(this.value ==='API'){
            item1.show();
            item2.hide();

            option.removeClass('col-md-12');
            option.addClass('col-md-6');
        }else{
            item1.hide();
            item2.show();

            option.removeClass('col-md-6');
            option.addClass('col-md-12');
        }
    });   
}

function formAccordion(target1, target2, item1, item2) {
    let x = 0, y = 0;

    target1.on('click', function(){
        x += 1;

        if(x % 2 != 0){
            item1.show();
            item2.hide();

            item1.removeClass('col-md-6');
            item1.addClass('col-md-12');
        }else{
            item1.show();
            item2.show();

            item1.removeClass('col-md-12');
            item2.removeClass('col-md-12');
            
            item1.addClass('col-md-6');
            item2.addClass('col-md-6');
        }
    });

    target2.on('click', function(){
        y += 1;

        if(y % 2 != 0){
            item2.show();
            item1.hide();

            item2.removeClass('col-md-6');
            item2.addClass('col-md-12');
        }else{
            item1.show();
            item2.show();

            item1.removeClass('col-md-12');
            item2.removeClass('col-md-12');
            
            item1.addClass('col-md-6');
            item2.addClass('col-md-6');
        }
    });
}

function formAccordion2(target1, item1, item2) {
    let x = 0;

    target1.on('click', function(){
        x += 1;

        if(x % 2 != 0){
            item1.hide();

            item2.removeClass('col-md-3');
            item2.addClass('col-md-12');
        }else{
            item1.show();

            item2.removeClass('col-md-12');
            item2.addClass('col-md-3');
        }
    });

}

function formAccordion3(target1, target2, target3, item1, item2, item3) {
    let x = 0, y = 0, z = 0;

    target1.on('click', function(){
        x += 1;

        if(x % 2 != 0){
            item1.show();
            item2.hide();
            item3.hide();

            item1.removeClass('col-md-4');
            item1.addClass('col-md-12');
        }else{
            item1.show();
            item2.show();
            item3.show();

            item1.removeClass('col-md-12');
            item2.removeClass('col-md-12');
            item3.removeClass('col-md-12');
            
            item1.addClass('col-md-4');
            item2.addClass('col-md-4');
            item3.addClass('col-md-4');
        }
    });

    target2.on('click', function(){
        y += 1;

        if(y % 2 != 0){
            item2.show();
            item1.hide();
            item3.hide();

            item2.removeClass('col-md-4');
            item2.addClass('col-md-12');
        }else{
            item1.show();
            item2.show();
            item3.show();

            item1.removeClass('col-md-12');
            item2.removeClass('col-md-12');
            item3.removeClass('col-md-12');
            
            item1.addClass('col-md-4');
            item2.addClass('col-md-4');
            item3.addClass('col-md-4');
        }
    });

    target3.on('click', function(){
        z += 1;

        if(z % 2 != 0){
            item3.show();
            item1.hide();
            item2.hide();

            item3.removeClass('col-md-4');
            item3.addClass('col-md-12');
        }else{
            item1.show();
            item2.show();
            item3.show();

            item1.removeClass('col-md-12');
            item2.removeClass('col-md-12');
            item3.removeClass('col-md-12');
            
            item1.addClass('col-md-4');
            item2.addClass('col-md-4');
            item3.addClass('col-md-4');
        }
    });
}

function formXOR(target1, target2, item1, item2){
    target1.on('input', function(){
        if(this.value ===''){
            item2.show();
        }else{
            item2.hide();
        }
    });

    target2.on('input', function(){
        if(this.value ===''){
            item1.show();
        }else{
            item1.hide();
        }
    });
}

function formXOR2(target1, target2, target3, item1, item2, item3){
    target1.on('input', function(){
        if(this.value == ''){
            item2.show();
            item3.show();
        }else{
            item2.hide();
            item3.hide();
        }
    });

    target2.on('input', function(){
        if(this.value == ''){
            item1.show();
            item3.show();
        }else{
            item1.hide();
            item3.hide();
        }
    });

    target3.on('input', function(){
        if(this.value == ''){
            item1.show();
            item2.show();
        }else{
            item1.hide();
            item2.hide();
        }
    });
}

formType3( $('#offerType'), $('.list'), $('.function'), $('.regular') );
formType($('#voucherType'), $('.less'), $('.full') );
formType2( $('#offerRoles'), $('.api'), $('.noApi'), $('.roleSelect') );

formAccordion( $('#refillBtn'), $('#ajustmentBtn'), $('.refillAccord'), $('.ajustmentAccord') );
formAccordion2( $('#updateInformationBtn'), $('.updateInformationHide'), $('.updateInformation') );
formAccordion3( $('#detailsBtn'), $('#balanceBtn'), $('#accumulatorsBtn'), $('.account-details'), $('.balance-account'), $('.accumulators') );

formXOR( $('#supervisionExpiryDate'), $('#supervisionExpiryDateRelative'), $('.supervision'), $('.supervision-relative') );
formXOR( $('#serviceFeeExpiryDate'), $('#serviceFeeExpiryDateRelative'), $('.service'), $('.service-relative') );
formXOR( $('#adjustmentAmountRelative'), $('#dedicatedAccount'), $('.adjustment-amount'), $('.dedicated-account') );
formXOR( $('#adjustmentDate'), $('#offerExpiryDate'), $('.adjustment-date'), $('.expiry-date') );
formXOR2( $('#offerSelection'), $('#requestInactiveOffers'), $('#productSelection'), $('.offer-selection'), $('.request-inactive'), $('.product-selection') );
