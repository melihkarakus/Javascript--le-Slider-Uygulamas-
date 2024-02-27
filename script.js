// Araba modellerinin isim, resim ve bağlantı bilgilerini içeren dizi
var modeller = [
    {
        isim : 'Bmw 418d',
        resim : 'img/bmw.jpg',
        baglanti : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        isim : 'Mazda CX-3',
        resim : 'img/mazda.jpg',
        baglanti : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        isim : 'Volvo S60',
        resim : 'img/volvo.jpg',
        baglanti : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        isim : 'Skoda Superb',
        resim : 'img/skoda.jpg',
        baglanti : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        isim : 'Honda Civic',
        resim : 'img/honda.jpg',
        baglanti : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

// Şu anki gösterilen slaytın indeksi
var indeks = 0;

// Toplam slayt sayısı
var slaytSayisi = modeller.length;

// Otomatik geçiş aralığı için kullanılan değişken
var interval;

// Slayt geçiş ayarları
var ayarlar = {
    sure : '2000', // Her slaytın ne kadar süreyle gösterileceği (milisaniye cinsinden)
    rasgele : false // Slaytların rasgele mi, sıralı mı gösterileceği
};

// Sayfa yüklendiğinde başlatma fonksiyonunu çağır
init(ayarlar);

// Sol ok tıklandığında gerçekleşen olay
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    indeks--;
    showSlide(indeks);
    console.log(indeks);
});

// Sağ ok tıklandığında gerçekleşen olay
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    indeks++;
    showSlide(indeks);
    console.log(indeks);
});

// Ok işaretlerine mouse geldiğinde geçiş aralığını durdur
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});

// Ok işaretlerinden mouse çekildiğinde geçiş aralığını başlat
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(ayarlar);
    })
});

// Slayt geçişini başlatan fonksiyon
function init(ayarlar){
    var onceki;
    interval=setInterval(function(){
        if(ayarlar.rasgele){
            do {
                indeks = Math.floor(Math.random() * slaytSayisi)
            } while (indeks == onceki);
            onceki = indeks;
        }
        else{
            if(slaytSayisi == indeks+1){
                indeks = -1;
            }
            showSlide(indeks);
            console.log(indeks);
            indeks++;
        }
        showSlide(indeks);
    }, ayarlar.sure)
}

// Belirli bir slaytı gösteren fonksiyon
function showSlide(i){

    indeks = i;
    if(i<0){
        indeks = slaytSayisi - 1;
    }
    if(i>=slaytSayisi){
        indeks = 0;
    }

    document.querySelector('.card-title').textContent = modeller[indeks].isim;

    document.querySelector('.card-img-top').setAttribute('src', modeller[indeks].resim);
    
    document.querySelector('.card-link').setAttribute('href', modeller[indeks].baglanti);
}