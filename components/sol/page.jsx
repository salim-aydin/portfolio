// React kütüphanesi içe aktarılıyor.
import React from 'react';

// Sol adında bir bileşen fonksiyonu tanımlanıyor.
function Sol({ onHeadingClick, selectedHeading }) {
  // headings adında bir sabit dizi tanımlanıyor. Bu dizi, bileşenin görüntüsünde gösterilecek başlıkları içeriyor.
  const headings = [
    { id: 1, title: '1 Vücut Kitle İndeksi' },
    { id: 2, title: '2 Manav Kasa Programı' },
    { id: 3, title: '3 Uçak Bileti Fiyatı' },
  ];

  // Bileşenin görüntüsü oluşturuluyor.
  return (
    <div>
      {/* headings dizisi üzerinde döngü ile başlıklar oluşturuluyor. */}
      {headings.map((heading) => (
        <h3
          key={heading.id} // Her başlık için bir benzersiz anahtar (key) tanımlanıyor.
          className={`cursor-pointer text-gray-700 hover:text-blue-500`} // Başlık etrafına Tailwind CSS sınıfları ekleniyor.
          onClick={() => onHeadingClick(heading.id)} // Başlık tıklandığında, onHeadingClick özelliği çağrılıyor.
        >
          {heading.title}
        </h3>
      ))}
    </div>
  );
}

// Sol bileşeni dışa aktarılıyor.
export default Sol;
