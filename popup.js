document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculateBtn');
  const offsiteAdsCheckbox = document.getElementById('offsiteAds');
  const offsiteAdsHighCheckbox = document.getElementById('offsiteAdsHigh');

  // Sadece bir tane offsite ads seçilebilir
  offsiteAdsCheckbox.addEventListener('change', function() {
    if (this.checked) {
      offsiteAdsHighCheckbox.checked = false;
    }
  });

  offsiteAdsHighCheckbox.addEventListener('change', function() {
    if (this.checked) {
      offsiteAdsCheckbox.checked = false;
    }
  });

  calculateBtn.addEventListener('click', calculateFees);

  // Enter tuşu ile de hesaplama yapılabilsin
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculateFees();
      }
    });
  });
});

function calculateFees() {
  // Input değerlerini al
  const itemPrice = parseFloat(document.getElementById('itemPrice').value) || 0;
  const shippingCost = parseFloat(document.getElementById('shippingCost').value) || 0;
  const productCost = parseFloat(document.getElementById('productCost').value) || 0;
  const quantity = parseInt(document.getElementById('quantity').value) || 1;
  const offsiteAds = document.getElementById('offsiteAds').checked;
  const offsiteAdsHigh = document.getElementById('offsiteAdsHigh').checked;

  // Toplam satış fiyatı
  const totalSalePrice = (itemPrice + shippingCost) * quantity;

  // Etsy ücretlerini hesapla
  const listingFee = 0.20 * quantity; // Her listeleme için $0.20
  const transactionFee = totalSalePrice * 0.065; // %6.5 işlem ücreti
  const paymentFee = (totalSalePrice * 0.03) + (0.25 * quantity); // %3 + $0.25 per order

  // Offsite Ads ücreti
  let offsiteAdsFee = 0;
  if (offsiteAds) {
    offsiteAdsFee = totalSalePrice * 0.15; // %15
  } else if (offsiteAdsHigh) {
    offsiteAdsFee = totalSalePrice * 0.12; // %12
  }

  // Toplam Etsy ücretleri
  const totalFees = listingFee + transactionFee + paymentFee + offsiteAdsFee;

  // Toplam ürün maliyeti
  const totalProductCost = productCost * quantity;

  // Net kâr
  const netProfit = totalSalePrice - totalFees - totalProductCost;

  // Kâr marjı
  const profitMargin = totalSalePrice > 0 ? (netProfit / totalSalePrice) * 100 : 0;

  // Sonuçları göster
  displayResults({
    totalSalePrice,
    listingFee,
    transactionFee,
    paymentFee,
    offsiteAdsFee,
    totalFees,
    totalProductCost,
    netProfit,
    profitMargin,
    hasOffsiteAds: offsiteAds || offsiteAdsHigh
  });
}

function displayResults(results) {
  // Sonuçlar bölümünü göster
  const resultsDiv = document.getElementById('results');
  resultsDiv.style.display = 'block';

  // Değerleri güncelle
  document.getElementById('totalSalePrice').textContent = formatCurrency(results.totalSalePrice);
  document.getElementById('listingFee').textContent = formatCurrency(results.listingFee);
  document.getElementById('transactionFee').textContent = formatCurrency(results.transactionFee);
  document.getElementById('paymentFee').textContent = formatCurrency(results.paymentFee);
  document.getElementById('totalFees').textContent = formatCurrency(results.totalFees);
  document.getElementById('displayProductCost').textContent = formatCurrency(results.totalProductCost);
  document.getElementById('netProfit').textContent = formatCurrency(results.netProfit);
  document.getElementById('profitMargin').textContent = results.profitMargin.toFixed(2) + '%';

  // Offsite Ads satırını göster/gizle
  const offsiteAdsFeeRow = document.getElementById('offsiteAdsFeeRow');
  if (results.hasOffsiteAds) {
    offsiteAdsFeeRow.style.display = 'flex';
    document.getElementById('offsiteAdsFee').textContent = formatCurrency(results.offsiteAdsFee);
  } else {
    offsiteAdsFeeRow.style.display = 'none';
  }

  // Net kâr rengini ayarla
  const profitElement = document.querySelector('.result-item.profit');
  if (results.netProfit < 0) {
    profitElement.classList.add('negative');
  } else {
    profitElement.classList.remove('negative');
  }

  // Sonuçlara yumuşak kaydırma
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}
