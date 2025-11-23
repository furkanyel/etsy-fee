# Etsy Fee & Profit Calculator - Chrome Extension

Etsy satıcıları için geliştirilmiş, ücretleri ve kârı otomatik hesaplayan Chrome eklentisi.

## Özellikler

- ✅ Etsy listeleme ücreti hesaplama ($0.20 per listing)
- ✅ İşlem ücreti hesaplama (6.5%)
- ✅ Ödeme işlem ücreti hesaplama (3% + $0.25)
- ✅ Offsite Ads ücreti desteği (15% veya 12%)
- ✅ Net kâr hesaplama
- ✅ Kâr marjı hesaplama
- ✅ Çoklu ürün desteği
- ✅ Kullanıcı dostu arayüz
- ✅ Türkçe dil desteği

## Etsy Ücret Yapısı (2025)

### Temel Ücretler
- **Listeleme Ücreti**: Her ürün için $0.20 (4 ay geçerli)
- **İşlem Ücreti**: Toplam satış tutarının %6.5'i
- **Ödeme İşlem Ücreti**: Toplam tutarın %3'ü + sipariş başına $0.25

### Opsiyonel Ücretler
- **Offsite Ads**:
  - Yıllık satışı $10,000'ın altında: %15
  - Yıllık satışı $10,000 ve üzeri: %12

## Kurulum

### Adım 1: İkonları Oluşturma

1. `generate-icons.html` dosyasını tarayıcınızda açın
2. Açılan sayfada butonlara tıklayarak üç ikonu indirin:
   - icon16.png
   - icon48.png
   - icon128.png
3. İndirdiğiniz ikonları eklenti klasörüne kopyalayın

### Adım 2: Chrome'a Yükleme

1. Chrome tarayıcınızı açın
2. Adres çubuğuna `chrome://extensions/` yazın ve Enter'a basın
3. Sağ üst köşeden "Geliştirici modu"nu aktif edin
4. "Paketlenmemiş öğe yükle" butonuna tıklayın
5. Bu eklentinin bulunduğu klasörü seçin
6. Eklenti yüklendi!

## Kullanım

1. Chrome araç çubuğundaki eklenti ikonuna tıklayın
2. Formu doldurun:
   - **Ürün Fiyatı**: Ürününüzün satış fiyatı
   - **Kargo Ücreti**: Müşteriden aldığınız kargo ücreti (isteğe bağlı)
   - **Ürün Maliyeti**: Ürünü üretme/satın alma maliyetiniz
   - **Adet**: Kaç adet satacağınız
   - **Offsite Ads**: Eğer offsite ads kullanıyorsanız işaretleyin
3. "Hesapla" butonuna tıklayın
4. Sonuçlar otomatik olarak gösterilecektir:
   - Toplam satış fiyatı
   - Tüm Etsy ücretleri (detaylı)
   - Net kâr
   - Kâr marjı yüzdesi

## Dosya Yapısı

```
etsy-fee-calculator/
├── manifest.json           # Chrome eklenti yapılandırması
├── popup.html             # Kullanıcı arayüzü
├── popup.css              # Stil dosyası
├── popup.js               # Hesaplama mantığı
├── generate-icons.html    # İkon oluşturucu
├── icon.svg              # SVG ikon (referans)
├── icon16.png            # 16x16 ikon (oluşturulmalı)
├── icon48.png            # 48x48 ikon (oluşturulmalı)
├── icon128.png           # 128x128 ikon (oluşturulmalı)
└── README.md             # Bu dosya
```

## Hesaplama Örnekleri

### Örnek 1: Basit Ürün
- Ürün Fiyatı: $20.00
- Kargo: $5.00
- Ürün Maliyeti: $8.00
- Adet: 1

**Sonuç:**
- Toplam Satış: $25.00
- Listeleme Ücreti: $0.20
- İşlem Ücreti: $1.63 (6.5%)
- Ödeme İşlem Ücreti: $1.00 (3% + $0.25)
- Toplam Ücret: $2.83
- Net Kâr: $14.17

### Örnek 2: Offsite Ads ile
- Ürün Fiyatı: $50.00
- Kargo: $0.00
- Ürün Maliyeti: $15.00
- Offsite Ads: ✓ (15%)

**Sonuç:**
- Toplam Satış: $50.00
- Listeleme Ücreti: $0.20
- İşlem Ücreti: $3.25
- Ödeme İşlem Ücreti: $1.75
- Offsite Ads: $7.50 (15%)
- Toplam Ücret: $12.70
- Net Kâr: $22.30

## Teknik Detaylar

### Ücret Hesaplama Formülleri

```javascript
// Toplam Satış Fiyatı
totalSalePrice = (itemPrice + shippingCost) * quantity

// Listeleme Ücreti
listingFee = 0.20 * quantity

// İşlem Ücreti
transactionFee = totalSalePrice * 0.065

// Ödeme İşlem Ücreti
paymentFee = (totalSalePrice * 0.03) + (0.25 * quantity)

// Offsite Ads
offsiteAdsFee = totalSalePrice * 0.15  // veya 0.12

// Toplam Ücretler
totalFees = listingFee + transactionFee + paymentFee + offsiteAdsFee

// Net Kâr
netProfit = totalSalePrice - totalFees - (productCost * quantity)

// Kâr Marjı
profitMargin = (netProfit / totalSalePrice) * 100
```

## Kaynaklar

Etsy ücretleri hakkında daha fazla bilgi için:
- [Etsy Seller Fees (Official)](https://www.etsy.com/legal/fees/)
- [CraftyBase Etsy Fee Calculator](https://craftybase.com/etsy/fee-calculator)
- [Printful: How Much Does Etsy Take Per Sale?](https://www.printful.com/blog/how-much-does-etsy-take-per-sale)
- [eDesk: Etsy Seller Fees Explained](https://www.edesk.com/blog/etsy-seller-fees/)

## Lisans

Bu proje kişisel ve ticari kullanım için serbesttir.

## Destek

Sorularınız veya önerileriniz için issue açabilirsiniz.

## Güncellemeler

**v1.0.0** (2025)
- İlk sürüm
- Temel ücret hesaplama özellikleri
- Offsite Ads desteği
- Türkçe arayüz
