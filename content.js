$(function() {
    function doAddToCart() {
        var button = $('.module01').find('a');
        button.get(0).click();
    }

    function triggerEvent() {
        $('#shipstate').append('<option value="<SHIP_STATE>"><SHIP_STATE></option>');
        $('#shipstate').val('<SHIP_STATE>');
    }

    function modifyValue1() {
        $.when($('#shipcity').val('<SHIP_CITY>')).then(function() {
            triggerEvent();
        });
    }

    function doAction() {
        var page = 'http://www.kingstone.com.tw/acg/book_page.asp?kmcode=<KING_STONE_CODE>&actid=<KING_STONE_ID>';
        var order = 'https://cash.kingstone.com.tw/cart1.asp?CarType=WEB';
        var order1 = 'https://cash.kingstone.com.tw/cart1.asp';
        var pay = 'https://cash.kingstone.com.tw/cart2.asp';
        var current = $(location).attr('href');

        switch (current) {
            case order1:
            case order:
                var button = $('#ship_HOME');
                if (button.size() > 0) {
                    button.get(0).click();
                } else {
                    $(location).attr('href', '');
                }
                break;
            case pay:
                $('#shipmobile').val('<SHIP_MOBILE>');
                $('#invType0').prop('checked', true);
                $('#Pay_COD').prop('checked', true);
                $('#shipaddr').val('<SHIP_ADDR>');
                $('#shipzip').val('<SHIP_ZIP>');

                modifyValue1();
                $('#orderClose').get(0).click();
                break;
            case page:
                var button = $('.module01').find('a');
                if (button.size() > 0) {
                    var addAction = doAddToCart();
                    $.when(addAction).then(function() {
                        $(location).attr('href', order);
                    });
                } else {
                    $(location).attr('href', '');
                }
                break;
        }

        setTimeout(doAction, 500);
    }

    doAction();
});
