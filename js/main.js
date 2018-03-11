// FULL PAGE
//// Фул-пейдж
jQuery(document).ready(function($) {
    $("#fullpage").fullpage({
        navigation: true,
        scrollOverflow: true,
        anchors: ['page_1', 'page_2', 'page_3', 'page_4', 'page_5', 'page_6', 'page_7', 'page_8'],
        loopTop: true,
        loopBottom: true
    });
})
//// SLICK
/// Карусель
$('.slick').slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear'
});
// ACCARDEON
//// Аккардеон
$(function() {
    'use strict';
    $('.Page5_accardion_item').first().addClass('activeP5');
    $('.Page5_accardion-info').first().show().animate({ width: '40%' });
    $('.Page5_accardion_item').click(function() {
        $(this).addClass("activeP5").siblings('.Page5_accardion_item').removeClass('activeP5');
        $(this).next().show().animate({ width: '40%' }).siblings('.Page5_accardion-info').animate({ width: 0 }, function() {
            $(this).hide();
        });
    });
});
//// MODAL POP UP
/// Отобразить поп-ап
$('.js-button-campaign').click(function() {
    $('.main').css('filter', 'blur(5px)');
    $('.js-overlay-camping').fadeIn();
    $('.js-overlay-camping').addClass('disabled');
});
/// Скрыть по нажатию на крестик
$('.js-close-campaign').click(function() {
    $('.js-overlay-camping').fadeOut();
    $('main').css('filter', 'none');
});
//// Скрыть по нажатию Вне Поп-ап
$(document).mouseup(function(e) {
    var popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-camping').fadeOut();
        $('main').css('filter', 'none');
    }
});
//// FORM
/// ОЧистка формы
$(function() {
    $('#clean').click(function() {
        var form = $(this).closest('form');
        form.find("input, textarea").val("");
        return false;
    })
})
/// ОТправка Формы AJAX
function call() {
    var msg = $('#formx').serialize();
    $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: msg,
        success: function(data) {
            alert('СПАСИБО ЗА ЗАКАЗ!') /// Протестировано НА ЛОКАЛЬНОМ СЕРВЕРЕ ВСЕ РАБОТАЕТ 
        },
        error: function(xhr, str) {
            alert('Возникла ошибка: ' + xhr.responseCode); /// Если отправлять без сервера выдает ошибку 
        }
    });
}
/// Google Maps API 
/// Карта
function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 10,
        center: { lat: 59.860853, lng: 30.319865 }
    };
    var myMap = new google.maps.Map(element, options);
    /// Функция которая создает макркеры на карте
    addMarker({ lat: 59.859175, lng: 30.471515 });
    addMarker({ lat: 59.860853, lng: 30.319865 });
    addMarker({ lat: 59.962557, lng: 30.303595 });
    addMarker({ lat: 59.938550, lng: 30.363024 });

    function addMarker(coordinates) {
        var marker = new google.maps.Marker({
            position: coordinates,
            map: myMap,
            icon: 'C:/Users/User/Desktop/Urich/img/bigImg/page8/MapPointer.png'
        });
    }
}