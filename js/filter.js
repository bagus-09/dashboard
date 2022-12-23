/**
* Initiate Filter
*/

function filter(filterValue, filterItems) {
    filterItems.forEach( (item) => item.addEventListener('click', function(){
        filterValue.innerHTML = this.innerHTML;
    }) );
}

// Card 1 Filter
filter(document.getElementById('c1_value'), document.querySelectorAll('.c1 li a') );

// Index Card 2 Filter
filter(document.getElementById('c2_value'), document.querySelectorAll('.c2 li a') );

// Index Card 3 Filter
filter(document.getElementById('c3_value'), document.querySelectorAll('.c3 li a') );

// Index reports Filter
filter(document.getElementById('c4_value'), document.querySelectorAll('.c4 li a') );

// Index recents activity Filter
filter(document.getElementById('c5_value'), document.querySelectorAll('.c5 li a') );

// Index website traffic Filter
filter(document.getElementById('c6_value'), document.querySelectorAll('.c6 li a') );

// Index recents sales Filter
filter(document.getElementById('c7_value'), document.querySelectorAll('.c7 li a') );

// Index top selling Filter
filter(document.getElementById('c8_value'), document.querySelectorAll('.c8 li a') );