(function ($) {
    "use strict";

    // Spinner
    // Sayfa yüklendikten hemen sonra yükleme animasyonunu gizler
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) { // Eğer 'spinner' ID'sine sahip bir element varsa
                $('#spinner').removeClass('show'); // 'show' sınıfını kaldırarak görünürlüğü kapatır
            }
        }, 1); // 1 milisaniye sonra işlemi gerçekleştirir
    };
    spinner(); // Spinner fonksiyonunu çağırır
    
    
    // wow.js Başlatma
    // Kaydırma efektlerini tetikleyen wow.js kütüphanesini başlatır
    new WOW().init();


    // Yapışkan (Sticky) Navigasyon Çubuğu
    // Kullanıcı sayfayı kaydırdığında navigasyon çubuğunu sabitler
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) { // Sayfa 300px aşağı kaydırılmışsa
            $('.sticky-top').addClass('shadow-sm').css('top', '0px'); // Gölge efekti eklenir ve çubuğun konumu ayarlanır
        } else { // Sayfa 300px yukarıdaysa
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px'); // Gölge efekti kaldırılır ve çubuk yukarı kaydırılır
        }
    });
    
    
    // Yukarı Dön Butonu
    // Sayfa kaydırıldığında "Yukarı Dön" butonunu gösterir veya gizler
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) { // Sayfa 300px aşağı kaydırılmışsa
            $('.back-to-top').fadeIn('slow'); // "Yukarı Dön" butonu yavaşça görünür
        } else { // Sayfa 300px yukarıdaysa
            $('.back-to-top').fadeOut('slow'); // "Yukarı Dön" butonu yavaşça kaybolur
        }
    });
    $('.back-to-top').click(function () {
        // Kullanıcı "Yukarı Dön" butonuna tıkladığında sayfa başına yumuşak bir kaydırma animasyonu yapar
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false; // Varsayılan tıklama davranışını engeller
    });


    // Sayılar için Sayaç
    // 'counter-up' kütüphanesi ile animasyonlu sayaç oluşturur
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10, // Her bir artışın gecikme süresi (milisaniye cinsinden)
        time: 2000 // Sayaç animasyonunun toplam süresi (milisaniye cinsinden)
    });


    // Referanslar Karuseli
    // owlCarousel ile referans karuseli oluşturur
    $(".testimonial-carousel").owlCarousel({
        autoplay: true, // Karusel otomatik oynatma
        smartSpeed: 1000, // Geçiş hızı (milisaniye cinsinden)
        items: 1, // Karuselde aynı anda kaç öğe gösterileceği
        dots: false, // Nokta navigasyonu devre dışı
        loop: true, // Karusel sonsuz döngü
        nav: true, // Navigasyon oklarını gösterir
        navText : [
            '<i class="bi bi-chevron-left"></i>', // Sol ok simgesi
            '<i class="bi bi-chevron-right"></i>' // Sağ ok simgesi
        ]
    });

    
})(jQuery); // jQuery'yi bir argüman olarak alır

