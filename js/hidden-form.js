/**
 * Hidden form elements => Eligibility
 */ 

 const functionItems = $('.function');

 functionItems.hide();


$('#offerType').change( function () {

    const typeValue = document.getElementById('offerType').value;
    const listItems = $('.list');
    const functionItems = $('.function');

    if(typeValue === 'List'){
        listItems.show();
        functionItems.hide();
    }else{
        listItems.hide();
        functionItems.show();
    }

});

/**
 * Hidden form element => Accordion
 */

const refillAccord = $('.refillAccord');
const ajustmentAccord = $('.ajustmentAccord');
var count1 = 0;
var count2 = 0;

$('#refillBtn').on('click', function() {

    count1 += 1;

    if(count1 % 2 != 0){
        refillAccord.show();
        ajustmentAccord.hide();

        refillAccord.removeClass('col-md-6');
        refillAccord.addClass('col-md-12');
        
    }else{
        refillAccord.show();
        ajustmentAccord.show();

        refillAccord.removeClass('col-md-12');
        refillAccord.addClass('col-md-6');
        ajustmentAccord.removeClass('col-md-12');
        ajustmentAccord.addClass('col-md-6');
    }

} );

$('#ajustmentBtn').on('click', function(){

    count2 += 1;

    if(count2 % 2 != 0){

        ajustmentAccord.show();
        refillAccord.hide();

        ajustmentAccord.removeClass('col-md-6');
        ajustmentAccord.addClass('col-md-12');
        
    }else{
        refillAccord.show();
        ajustmentAccord.show();

        refillAccord.removeClass('col-md-12');
        refillAccord.addClass('col-md-6');
        ajustmentAccord.removeClass('col-md-12');
        ajustmentAccord.addClass('col-md-6');
    }

} );

/**
 * Hidden form element => Roles
 */

const apiElement = $('.api');
apiElement.hide();

$('#offerRoles').change( function(){
    const roleValue = this.value;
    const apiElement = $('.api');
    const NoApiElement = $('.noApi');
    const roleSelect = $('.roleSelect');

    if(roleValue === 'API'){
        apiElement.show();
        NoApiElement.hide();

        roleSelect.removeClass('col-md-12');
        roleSelect.addClass('col-md-6');
    }else{
        apiElement.hide();
        NoApiElement.show();

        roleSelect.removeClass('col-md-6');
        roleSelect.addClass('col-md-12');
    }

});
