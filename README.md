# Sudoku

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Angular Sudoku Game

Bu depo, Angular ile yazılmış basit ve responsive bir Sudoku uygulamasıdır. Oyunu tarayıcıda oynayabilir, hücrelere tek hane (1-9) girişi yapabilir ve Kolay/Orta/Zor seviyelerinde yeni oyun başlatabilirsiniz.

## Hızlı Kurulum

1. Proje dizinine gidin:

```bash
cd "c:\Users\Ali Can\Desktop\Sudoku\sudoku"
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm start
# veya
npx ng serve
```

4. Tarayıcıda açın: `http://localhost:4200`

## Özellikler

- 9x9 Sudoku tahtası, responsive ve kare hücreler.
- "Kolay / Orta / Zor" ile yeni oyun başlatma.
- Hücrelere tek hane girilebilir (1-9). Boş bırakmak hücreyi temizler.
- Hatalı girişler işaretlenir (kırmızı arka plan).
- Grid viewport'a göre ölçeklenir; 1024×768 gibi yaygın çözünürlüklerde kaydırma gerektirmeyecek şekilde ayarlandı.

## Kullanım

- Yeni oyun: Üstteki butonlardan birine tıklayın.
- Hücre seçin: sadece 1-9 girebilirsiniz. Mobilde numeric klavye açılır.
- "Kontrol Et" ile çözümü kontrol edin.

## Geliştirici Notları

- Önemli dosyalar:
	- `src/app/components/sudoku/` — Sudoku bileşeni (HTML, TS, CSS)
	- `src/app/app-routing.module.ts` — uygulama rotaları
	- `src/styles.css` — genel stiller
- `sudoku.component.ts` içinde `onCellInput` fonksiyonu kullanıcı girişi alır ve grid modelini günceller.

## Yaygın Sorunlar / Çözümler

- Derleme hatası alıyorsanız:
	1. `npm install` çalıştırın.
	2. Hala hata varsa `ng serve` çıktısını inceleyin; çoğu hata template binding veya eksik import yüzündendir.
- UI'da kaydırma görünüyorsa `src/app/components/sudoku/sudoku.component.css` dosyasındaki `--reserved-v` değerini küçülterek grid için ayrılan dikey boşluğu azaltabilirsiniz.

## Katkıda Bulunma

İyileştirme ve düzeltmeler için pull request açabilirsiniz. Küçük değişiklikler, örn. mobil davranış veya görsel iyileştirmeler memnuniyetle kabul edilir.

---

İstediğiniz başka bir açıklama veya örnek var mı? (ör. ekran görüntüleri, test talimatları veya lisans ekleyeyim mi?)
