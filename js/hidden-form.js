/**
 * Hidden form elements => Eligibility
 */ 

 const functionItems = $('.function');

 functionItems.hide();


$('#offerType').change( function () {

    const typeValue = this.value;
    const listItems = $('.list');
    const functionItems = $('.function');
    const regularItems = $('.regular');

    if(typeValue === 'List'){
        listItems.show();
        functionItems.hide();
        regularItems.hide();
    }else if(typeValue === 'Function'){
        functionItems.show();
        listItems.hide();
        regularItems.hide();
    }else{
        regularItems.show();
        listItems.hide();
        functionItems.hide();
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

/**
 * Hidden form element => Voucher Refill
*/

const full = $('.full');
full.hide();

$('#voucherType').change(function(){
    const voucherValue = this.value;
    const less = $('.less');
    const full = $('.full');

    if(voucherValue === 'Less'){
        less.show();
        full.hide();
    }else{
        less.hide();
        full.show();
    }

});

/**
 * Hidden form element => Supervison date: XOR
*/

const supervision = $('.supervision');
const supervisionRelative = $('.supervision-relative');

$('#supervisionExpiryDate').on('input', function(){
    const value = this.value;

    if(value ===''){
        supervisionRelative.show();
    }else{
        supervisionRelative.hide();
    }
});

$('#supervisionExpiryDateRelative').on('input', function(){
    const value = this.value;

    if(value ===''){
        supervision.show();
    }else{
        supervision.hide();
    }
});

/**
 * Hidden form element => Service Fee date: XOR
*/

const service = $('.service');
const serviceRelative = $('.service-relative');

$('#serviceFeeExpiryDate').on('input', function(){
    const value = this.value;

    if(value ===''){
        serviceRelative.show();
    }else{
        serviceRelative.hide();
    }
});

$('#serviceFeeExpiryDateRelative').on('input', function(){
    const value = this.value;

    if(value ===''){
        service.show();
    }else{
        service.hide();
    }
});

/**
 * Hidden form element => DedicatedAccountInformation
*/

const updateInformationHide = $('.updateInformationHide');
const updateInformationAccordion = $('.updateInformation');
var count3 = 0;

$('#updateInformationBtn').on('click', function(){
    count3 += 1;

    if(count3 % 2 != 0){
        updateInformationHide.hide();

        updateInformationAccordion.removeClass('col-md-6');
        updateInformationAccordion.addClass('col-md-12');
        
    }else{
        updateInformationHide.show();

        updateInformationAccordion.removeClass('col-md-12');
        updateInformationAccordion.addClass('col-md-6');
        
    }

});

/**
 * Hidden form element => DedicatedAccountUpdateInformation : XOR
*/

const adjustmentAmount = $('.adjustment-amount');
const dedicatedAccount = $('.dedicated-account');
const adjustmentDate = $('.adjustment-date');
const expiryDate = $('.expiry-date');

$('#adjustmentAmountRelative').on('input', function(){
    const value = this.value;

    if(value ===''){
        dedicatedAccount.show();
    }else{
        dedicatedAccount.hide();
    }
});


$('#dedicatedAccount').on('input', function(){
    const value = this.value;

    if(value ===''){
        adjustmentAmount.show();
    }else{
        adjustmentAmount.hide();
    }
});

$('#adjustmentDate').on('input', function(){
    const value = this.value;

    if(value ===''){
        expiryDate.show();
    }else{
        expiryDate.hide();
    }
});

$('#offerExpiryDate').on('input', function(){
    const value = this.value;

    if(value ===''){
        adjustmentDate.show();
    }else{
        adjustmentDate.hide();
    }
});

/**
 * Hidden form element => getAccountDetails, getAccumulator, getBalanceAndDate
*/

const accountDetails = $('.account-details');
const balanceAccount = $('.balance-account');
const accumulators = $('.accumulators');
var count4 = 0, count5 = 0, count6 = 0;

$('#detailsBtn').on('click', function(){
    count4 += 1;

    if(count4 % 2 != 0){
        accountDetails.show();
        balanceAccount.hide();
        accumulators.hide();

        accountDetails.removeClass('col-md-4');
        accountDetails.addClass('col-md-12');
        
    }else{
        accountDetails.show();
        balanceAccount.show();
        accumulators.show();

        accountDetails.removeClass('col-md-12');
        accountDetails.addClass('col-md-4');

        balanceAccount.removeClass('col-md-12');
        balanceAccount.addClass('col-md-4');

        accumulators.removeClass('col-md-12');
        accumulators.addClass('col-md-4');
        
    }
});

$('#balanceBtn').on('click', function(){
    count5 += 1;

    if(count5 % 2 != 0){
        balanceAccount.show();
        accountDetails.hide();
        accumulators.hide();

        balanceAccount.removeClass('col-md-4');
        balanceAccount.addClass('col-md-12');
        
    }else{
        accountDetails.show();
        balanceAccount.show();
        accumulators.show();

        accountDetails.removeClass('col-md-12');
        accountDetails.addClass('col-md-4');

        balanceAccount.removeClass('col-md-12');
        balanceAccount.addClass('col-md-4');

        accumulators.removeClass('col-md-12');
        accumulators.addClass('col-md-4');
        
    }
});

$('#accumulatorsBtn').on('click', function(){
    count6 += 1;
    
    if(count6 % 2 != 0){
        accumulators.show();
        balanceAccount.hide();
        accountDetails.hide();

        accumulators.removeClass('col-md-4');
        accumulators.addClass('col-md-12');
        
    }else{
        accountDetails.show();
        balanceAccount.show();
        accumulators.show();

        accountDetails.removeClass('col-md-12');
        accountDetails.addClass('col-md-4');

        balanceAccount.removeClass('col-md-12');
        balanceAccount.addClass('col-md-4');

        accumulators.removeClass('col-md-12');
        accumulators.addClass('col-md-4');
        
    }
});

/**
 * Hidden form element => getOffers
 */ 

const offer_selection = $('.offer-selection');
const request_inactive = $('.request-inactive');
const product_selection = $('.product-selection');

$('#offerSelection').on('input', function(){
    const value = this.value;

    if(value ===''){
        request_inactive.show();
        product_selection.show();
    }else{
        request_inactive.hide();
        product_selection.hide();
    }
});

$('#requestInactiveOffers').on('input', function(){
    const value = this.value;

    if(value ===''){
        offer_selection.show();
        product_selection.show();
    }else{
        offer_selection.hide();
        product_selection.hide();
    }
});

$('#productSelection').on('input', function(){
    const value = this.value;

    if(value ===''){
        offer_selection.show();
        request_inactive.show();
    }else{
        offer_selection.hide();
        request_inactive.hide();
    }
});