"use client"
// React kütüphanesi ve bazı React hook'ları ekleniyor.
import React, { useState, useEffect } from 'react';

// Sol, Yazilar1, Yazilar2 ve Yazilar3 bileşenleri çağırılıyor.
import Sol from '@/components/sol/page';
import Yazilar1 from '@/components/sag/Yazilar1';
import Yazilar2 from '@/components/sag/Yazilar2';
import Yazilar3 from '@/components/sag/Yazilar3';

// Anasayfa adında bir fonksiyon tanımlanıyor.
function CodePage() {
  // selectedHeading adında bir durum değişkeni tanımlanıyor. Başlangıçta 1 olarak ayarlanıyor.
  const [selectedHeading, setSelectedHeading] = useState(1);

  // isMounted adında bir diğer durum değişkeni tanımlanıyor. Başlangıçta false olarak ayarlanıyor.
  const [isMounted, setIsMounted] = useState(false);  

  // useEffect hook'u kullanılarak bileşenin monte edilip edilmediği takip ediliyor.
  useEffect(() => {
    // Bileşen monte edildiğinde, isMounted değişkeni true olarak ayarlanıyor.
    setIsMounted(true);
  }, []);

  // handleShowYazilar adında bir fonksiyon tanımlanıyor. Bu fonksiyon, Sol bileşenindeki başlıklardan biri seçildiğinde çalışacak.
  const handleShowYazilar = (heading) => {
    // Fonksiyona seçilen başlığın numarası gönderiliyor ve selectedHeading değişkeni bu numaraya göre güncelleniyor.
    setSelectedHeading(heading);
  };

  // getContent adında bir fonksiyon daha tanımlanıyor. Bu fonksiyon, selectedHeading değişkenindeki numaraya göre ilgili bileşeni döndürüyor.
  const getContent = () => {
    // selectedHeading değişkenindeki numaraya göre ilgili bileşen seçiliyor.
    switch (selectedHeading) {
      case 1:
        // Eğer selectedHeading 1 ise, Yazilar1 bileşeni döndürülüyor.
        return <Yazilar1 />;
      case 2:
        // Eğer selectedHeading 2 ise, Yazilar2 bileşeni döndürülüyor.
        return <Yazilar2 />;
      case 3:
        // Eğer selectedHeading 3 ise, Yazilar3 bileşeni döndürülüyor.
        return <Yazilar3 />;
      default:
        // Eğer seçili başlık yoksa, null döndürülüyor.
        return null;
    }
  };

  // Bileşenin görüntüsü oluşturuluyor.
  return (
    <div className="container mx-auto max-w-screen-md px-4 py-10">
      <div className='flex'>
      <div className='whitespace-nowrap'>
        {/* Sol bileşeni çağırılıyor ve onHeadingClick ve selectedHeading özellikleri gönderiliyor. */}
        <Sol onHeadingClick={handleShowYazilar} selectedHeading={selectedHeading} />
      </div>
      <div className="ml-28">
        {/* Eğer bileşen mount edilmiş ise, getContent fonksiyonu çağırılıyor ve ilgili bileşen görüntüleniyor. */}
        {isMounted && getContent()}
      </div>
      </div>
    </div>
  );
}

// Anasayfa bileşeni dışa aktarılıyor.
export default CodePage;