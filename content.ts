export type Section = { h: string; p: string[] };

/** Her paket için özgün SEO açıklama bölümleri (fotoğrafların altına gelir) */
export const SEO_CONTENT: Record<string, { intro: string; sections: Section[] }> = {
  "quad-safari": {
    intro: "Macera, doğa ve adrenalini bir arada yaşamak isteyenler için Side Quad Safari, tatilinize heyecan katacak en popüler aktivitelerden biridir. Toros Dağları'nın eteklerinde bulunan özel parkurumuz; toprak yollar, çamurlu bölümler, su geçişleri ve engebeli arazileriyle gerçek bir off-road deneyimi sunar. Yemyeşil çam ormanlarının arasında ilerlerken temiz havanın ve eşsiz manzaraların keyfini çıkarabilir, doğayla iç içe unutulmaz anlar yaşayabilirsiniz.",
    sections: [
      { h: "İlk Kez Katılacak Misafirler İçin de Uygun", p: [
        "Daha önce ATV kullanmadıysanız endişelenmeyin. Side Quad Tour, deneyimli rehberler eşliğinde hem ilk kez arazi aracı kullanacak misafirler hem de tecrübeli sürücüler için güvenli ve keyifli bir deneyim sunar. Tur başlamadan önce verilen kısa eğitim sayesinde kendinizi hazır hissederek Quad Safari macerasına güvenle katılabilirsiniz.",
        "Eğitimin ardından kısa bir deneme sürüşü yapılır ve herkes hazır olduğunda konvoy halinde parkura çıkılır. Rehberlerimiz tur boyunca gruba eşlik ederek güvenli ve düzenli bir sürüş deneyimi yaşamanızı sağlar." ] },
      { h: "Doğanın İçinde Gölette Serinleme Molası", p: [
        "Safari sırasında doğal bir gölet kenarında mola veriyoruz. Bu molada dileyen misafirler serin sularda yüzebilir, dinlenebilir veya çevrede kısa bir yürüyüş yaparak doğanın tadını çıkarabilir.",
        "Toros Dağları'nın huzurlu atmosferinde verilen bu mola, hem enerji toplamak hem de çevrenin doğal güzelliklerini keşfetmek için keyifli bir fırsat sunar. Tur programımızda yemek servisi bulunmamaktadır." ] },
      { h: "Profesyonel Fotoğraf ve Video Hizmeti", p: [
        "Sürüş boyunca sadece maceranın keyfini çıkarmanız yeterli. Profesyonel ekibimiz, turun en heyecanlı anlarını yüksek kaliteli fotoğraf ve videolarla kayıt altına alır.",
        "Tur sonunda isterseniz bu görüntüleri satın alabilir ve yaşadığınız unutulmaz anları sevdiklerinizle paylaşabileceğiniz kalıcı hatıralara dönüştürebilirsiniz." ] },
      { h: "Gerçek Off-Road Parkurlarında Heyecan Dolu Sürüş", p: [
        "Quad Tour boyunca asfalt yollar yerine tamamen doğal arazi koşullarında ilerlersiniz. Çamurlu zeminler, toprak yollar, küçük su geçişleri ve eğimli parkurlar sürüşü daha eğlenceli ve heyecan verici hale getirir.",
        "Doğayla iç içe vakit geçirmek, yeni yerler keşfetmek ve tatiline farklı bir deneyim eklemek isteyen misafirler için bu aktivite Side bölgesinin en çok tercih edilen açık hava etkinliklerinden biridir." ] },
      { h: "Neden Side Quad Safari'yi Tercih Etmelisiniz?", p: [
        "Profesyonel rehberler, özenle hazırlanan doğal parkur, güvenlik odaklı organizasyon ve ücretsiz otel transferi sayesinde bu tur, tatilinize hem eğlence hem de macera katar. Adrenalin dolu sürüşler, Toros Dağları'nın eşsiz doğası ve gölette verilen yüzme molasıyla unutulmaz bir gün yaşayabilirsiniz.",
        "İster arkadaş grubunuzla ister ailenizle katılın, bu deneyim Side tatiliniz boyunca en çok hatırlayacağınız aktivitelerden biri olacaktır." ] },
    ],
  },
  "buggy-safari": {
    intro: "Tatilinizi sıradan aktivitelerin ötesine taşımak istiyorsanız Side Buggy Safari, adrenalin ve keşfi bir araya getiren en popüler macera turlarından biridir. Toros Dağları'nın doğal parkurlarında gerçekleştirilen bu özel tur boyunca toprak yollar, çamurlu geçişler, su birikintileri ve engebeli arazilerde sürüş yaparak gerçek bir off-road deneyimi yaşayabilirsiniz. Çam ormanlarının arasından uzanan rota, bölgenin doğal güzelliklerini farklı bir bakış açısıyla keşfetmek isteyen misafirlere eşsiz anlar sunar.",
    sections: [
      { h: "Daha Önce Buggy Kullanmadıysanız Endişelenmeyin", p: [
        "Side Buggy Tour, ilk kez arazi aracı deneyimi yaşayacak misafirler de düşünülerek planlanmıştır. Tur başlamadan önce deneyimli ekibimiz tarafından araç kullanımı, güvenlik kuralları ve parkur hakkında detaylı bilgi verilir. Ardından kısa bir deneme sürüşü yapılır ve kendinizi hazır hissettiğinizde rehberlerimiz eşliğinde safariye başlanır.",
        "Kullanımı oldukça pratik olan buggy araçları sayesinde kısa sürede araca alışabilir, sürüş boyunca yalnızca eğlenceye ve doğanın tadını çıkarmaya odaklanabilirsiniz." ] },
      { h: "Doğal Parkurlarda Macera Dolu Sürüş", p: [
        "Özel olarak hazırlanan rota boyunca çam ormanlarının içinden geçecek, toprak yolları takip edecek ve zaman zaman çamurlu bölümlerde sürüş yapacaksınız. Doğal arazi şartları turun her bölümünü farklı ve heyecan verici hale getirirken, arkadaşlarınız veya ailenizle birlikte keyif dolu anılar biriktireceksiniz.",
        "Buggy Safari boyunca tüm grup rehberlerimiz eşliğinde konvoy düzeninde ilerler. Böylece hem güvenli hem de düzenli bir sürüş deneyimi yaşayabilirsiniz." ] },
      { h: "Gölette Serinleme ve Dinlenme Molası", p: [
        "Safari sırasında doğal bir gölet kenarında kısa bir mola veriyoruz. Bu molada serin sularda yüzebilir, çevrede yürüyüş yapabilir ya da doğanın sakin atmosferinde dinlenerek yeni etap için enerji toplayabilirsiniz.",
        "Toros Dağları'nın temiz havası ve huzurlu ortamı, bu molayı turun en keyifli anlarından biri hâline getirir. Tur programımızda yemek servisi bulunmamaktadır." ] },
      { h: "Profesyonel Fotoğraf ve Video Hizmeti", p: [
        "En güzel anlarınızı kaydetmek için sürüş sırasında telefon veya kamera kullanmanıza gerek yoktur. Profesyonel ekibimiz, tur boyunca yaşadığınız en heyecanlı anları kaliteli fotoğraf ve videolarla ölümsüzleştirir.",
        "Tur sonunda isterseniz bu görüntüleri satın alabilir ve Side'de yaşadığınız bu özel deneyimi yıllar sonra bile aynı heyecanla hatırlayabilirsiniz." ] },
      { h: "Neden Side Buggy Safari'yi Tercih Etmelisiniz?", p: [
        "Gerçek off-road parkurları, deneyimli rehberler, ücretsiz otel transferi ve güvenli organizasyon anlayışı sayesinde Buggy Tour, Side'de en çok tercih edilen macera aktiviteleri arasında yer almaktadır.",
        "İster arkadaş grubunuzla ister ailenizle katılın, doğayla iç içe geçireceğiniz bu deneyim tatilinize farklı bir heyecan katacak ve unutulmaz anılarla evinize dönmenizi sağlayacaktır." ] },
    ],
  },
  "family-buggy-safari": {
    intro: "Kalabalık aileler ve arkadaş grupları için özel olarak tasarlanan Side Family Buggy Safari, doğayla iç içe güvenli ve eğlenceli bir off-road deneyimi sunuyor. Dört kişiye kadar yolcu kapasitesine sahip aile tipi buggy araçları sayesinde sevdiklerinizle aynı araçta yolculuk yapabilir, Toros Dağları'nın doğal parkurlarını birlikte keşfedebilirsiniz. Ailece yapılan bu keyifli yolculuk, tatilinize unutulmaz anılar ekleyecek özel aktivitelerden biridir.",
    sections: [
      { h: "Aile Tipi Buggy Araçları Kimler İçin Uygundur?", p: [
        "Side Family Buggy Tour, iki kişiden fazla katılımcının aynı araçta birlikte vakit geçirebilmesi için ideal bir seçenektir. Dört kişiye kadar kapasiteye sahip buggy araçları sayesinde çocuklarınız veya arkadaşlarınızla aynı araçta yolculuk yapabilir, macerayı birlikte paylaşabilirsiniz.",
        "Daha önce Buggy kullanmadıysanız endişelenmenize gerek yok. Tur başlamadan önce deneyimli ekibimiz tarafından araç kullanımı ve güvenlik kuralları hakkında detaylı bilgi verilir. Kısa bir deneme sürüşünün ardından kendinizi hazır hissettiğinizde rehberlerimiz eşliğinde safariye başlanır." ] },
      { h: "Toros Dağları'nın Doğal Parkurlarını Birlikte Keşfedin", p: [
        "Özenle hazırlanan rota boyunca çam ormanlarının arasından geçecek, doğal arazi koşullarında ilerleyecek ve farklı zorluk seviyelerindeki parkurlarda eğlenceli anlar yaşayacaksınız.",
        "Family Buggy Safari sırasında tüm araçlar rehberlerimizin kontrolünde konvoy düzeninde ilerler. Böylece hem güvenli hem de düzenli bir sürüş deneyimi yaşayabilir, yol boyunca çevrenin doğal güzelliklerinin tadını çıkarabilirsiniz." ] },
      { h: "Gölette Serinleme Molası", p: [
        "Safari programı sırasında doğal bir gölet kenarında mola veriyoruz. Dileyen misafirler serin sularda yüzebilir, kısa bir yürüyüş yapabilir veya doğanın huzurlu atmosferinde dinlenebilir.",
        "Bu keyifli mola sayesinde hem enerji toplayabilir hem de Toros Dağları'nın eşsiz manzarasında güzel anılar biriktirebilirsiniz. Tur programımızda yemek servisi bulunmamaktadır." ] },
      { h: "Profesyonel Fotoğraf ve Video Hizmeti", p: [
        "Ailece geçirdiğiniz en güzel anları ölümsüzleştirmek için profesyonel ekibimiz tur boyunca fotoğraf ve video çekimleri gerçekleştirir.",
        "Etkinlik sonunda isterseniz bu görüntüleri satın alabilir ve birlikte yaşadığınız bu özel günü uzun yıllar hatırlayacağınız değerli anılara dönüştürebilirsiniz." ] },
      { h: "Neden Side Family Buggy Safari'yi Tercih Etmelisiniz?", p: [
        "Gerçek off-road parkurları, dört kişilik aile tipi araçlar, deneyimli rehberler, ücretsiz otel transferi ve güvenli organizasyon sayesinde Family Buggy Tour, Side'de ailece katılabileceğiniz en keyifli açık hava aktivitelerinden biridir.",
        "Çocuklarınız veya arkadaşlarınızla aynı araçta yolculuk yaparak hem eğlenceli hem de unutulmaz bir macera yaşayabilir, tatilinize birlikte hatırlayacağınız güzel anılar ekleyebilirsiniz." ] },
    ],
  },
};

/** Tam SSS listeleri */
export const FAQ_FULL: Record<string, { q: string; a: string }[]> = {
  "quad-safari": [
    { q: "Daha önce hiç quad kullanmadım. Tura katılabilir miyim?", a: "Elbette! Hatta misafirlerimizin büyük bir kısmı ilk kez quad kullanıyor. Tur başlamadan önce deneyimli rehberlerimiz tarafından kısa bir eğitim veriliyor ve deneme sürüşü yapıyorsunuz. İlk birkaç dakikanın ardından çoğu misafirimizin yüzünde aynı gülümsemeyi görüyoruz. 😊" },
    { q: "Quad kullanmak için ehliyet gerekiyor mu?", a: "Hayır. Quad Safari turuna katılmak için ehliyet zorunlu değildir. Rehberlerimizin verdiği eğitimi dikkatle dinlemeniz ve güvenlik kurallarına uymanız yeterlidir." },
    { q: "Quad Safari turu ne kadar sürüyor?", a: "Turumuz yaklaşık 2 saat sürmektedir ve bu süreye gölette verdiğimiz mola da dahildir. İki saat kulağa kısa gelebilir ama parkur bittiğinde en sık duyduğumuz cümle şudur: 'Keşke biraz daha uzun sürseydi!' 😄" },
    { q: "Parkur zor mu?", a: "Hayır. Parkur hem ilk kez quad kullanacak misafirler hem de daha önce deneyimi olanlar düşünülerek hazırlanmıştır. Ama merak etmeyin, birkaç küçük çamur sürprizi de sizi bekliyor. 😊" },
    { q: "Üzerimiz kirlenir mi?", a: "Kısa cevap: Biraz evet. Toprak yollar, çamurlu bölümler ve su geçişleri bu maceranın doğal bir parçasıdır. Sonuçta temiz kıyafetler yıkanır ama güzel anılar uzun süre sizinle kalır." },
    { q: "Gölette yüzme molası var mı?", a: "Evet. Tur sırasında doğal bir gölet kenarında mola veriyoruz. İsterseniz serin sularda yüzebilir, isterseniz manzaranın keyfini çıkararak dinlenebilirsiniz." },
    { q: "Tur sırasında yemek veriliyor mu?", a: "Hayır. Tur programımıza yemek dahil değildir. Böylece zamanımızın tamamını sürüş keyfine ve eğlenceye ayırıyoruz." },
    { q: "Fotoğraf ve video çekiliyor mu?", a: "Evet. Profesyonel ekibimiz turun en heyecanlı anlarını fotoğraf ve video olarak kaydediyor. Böylece siz direksiyona odaklanırken güzel anılarınız bizimle güvende oluyor." },
    { q: "Telefonumu yanıma alabilir miyim?", a: "Alabilirsiniz ancak sürüş sırasında kullanmanızı önermiyoruz. Telefonlar yeni alınabilir ama kaçırılan bir macera tekrar yaşanmaz. 😊" },
    { q: "Quad devrilir mi?", a: "Kurallara uyulduğu ve rehberlerimizin talimatları takip edildiği sürece tur güvenli şekilde tamamlanmaktadır. Bu yüzden hızdan çok güvenli sürüşe önem veriyoruz." },
    { q: "Çocuklar tura katılabilir mi?", a: "Evet. Belirlenen güvenlik kurallarına uygun olarak çocuklar yolcu olarak katılabilir. Rezervasyon sırasında yaş bilgisini paylaşmanız yeterlidir." },
    { q: "Otelden alıyor musunuz?", a: "Evet. Side ve çevresindeki birçok otelden ücretsiz gidiş-dönüş transfer hizmeti sunuyoruz. Siz tatilinizin keyfini çıkarın, ulaşımı bize bırakın." },
    { q: "Ön ödeme yapmam gerekiyor mu?", a: "Hayır. Rezervasyon sırasında ön ödeme talep etmiyoruz. Ödemenizi tur günü güvenle gerçekleştirebilirsiniz." },
    { q: "Yağmur yağarsa tur iptal olur mu?", a: "Hafif yağmur genellikle turun yapılmasına engel değildir. Ancak misafirlerimizin güvenliğini riske atabilecek hava koşullarında tur programı ertelenebilir veya farklı bir güne alınabilir." },
    { q: "Quad Safari bana uygun mu?", a: "Eğer doğayı seviyor, biraz macera arıyor ve tatilinizde unutulmaz anılar biriktirmek istiyorsanız cevap kesinlikle evet. Üstelik birçok misafirimiz tur sonunda 'İyi ki katılmışız.' diyerek ayrılıyor. Bizce en güzel yorum da bu. 😊" },
    { q: "Neden sizi tercih etmeliyim?", a: "Çünkü biz sadece bir tur satmıyoruz, tatiliniz boyunca anlatacağınız güzel anılar biriktirmenize yardımcı oluyoruz. Ücretsiz otel transferi, ön ödeme yok, profesyonel rehberler, güvenli organizasyon ve gerçek off-road parkuru — siz eğlenmeye odaklanın, gerisini bize bırakın." },
  ],
  "buggy-safari": [
    { q: "Daha önce hiç buggy kullanmadım. Katılabilir miyim?", a: "Kesinlikle! Buggy araçları kullanımı oldukça kolay araçlardır. Tur öncesinde kısa bir eğitim ve deneme sürüşü yapılıyor. Birkaç dakika sonra çoğu misafirimiz aracı rahatlıkla kullanmaya başlıyor." },
    { q: "Buggy kullanmak için ehliyet gerekiyor mu?", a: "Hayır. Bu aktivite için ehliyet zorunlu değildir. Güvenlik kurallarına uymanız ve rehberlerimizin talimatlarını takip etmeniz yeterlidir." },
    { q: "Buggy Safari ne kadar sürüyor?", a: "Turumuz yaklaşık 2 saat sürmektedir ve bu süreye gölette verdiğimiz mola da dahildir. Eğlence başladığında zamanın nasıl geçtiğini fark etmeyebilirsiniz. 😊" },
    { q: "Araçlar tek kişilik mi?", a: "Buggy araçlarımız iki kişiliktir. İsterseniz dönüşümlü olarak sürüş yapabilir, isterseniz yolculuğun keyfini çıkarabilirsiniz." },
    { q: "Üzerimiz kirlenir mi?", a: "Evet, biraz kirlenebilirsiniz. Çamur, toprak ve su geçişleri bu turun en eğlenceli kısmıdır. Eve temiz kıyafetlerle dönebilirsiniz ama bu kadar güzel anıları başka yerde bulmak zor olur. 😄" },
    { q: "Gölette yüzme molası var mı?", a: "Evet. Tur sırasında doğal gölette mola veriyoruz. İsteyen misafirler yüzebilir, isteyenler ise manzaranın tadını çıkarabilir." },
    { q: "Yemek veriliyor mu?", a: "Hayır. Tur programımıza yemek dahil değildir." },
    { q: "Fotoğraf ve video çekiliyor mu?", a: "Evet. Profesyonel ekibimiz turun en güzel anlarını kayıt altına alır. Tur sonunda dileyen misafirler görüntüleri satın alabilir." },
    { q: "Telefon kullanabilir miyim?", a: "Telefonunuzu yanınızda bulundurabilirsiniz ancak sürüş sırasında kullanmamanızı tavsiye ediyoruz. Önce güvenlik, sonra selfie! 😊" },
    { q: "Transfer hizmeti var mı?", a: "Evet. Side ve çevresindeki otellerden ücretsiz gidiş-dönüş transfer hizmeti sunuyoruz." },
    { q: "Ön ödeme gerekiyor mu?", a: "Hayır. Rezervasyon için ön ödeme istemiyoruz. Ödemenizi tur günü güvenle yapabilirsiniz." },
    { q: "Buggy Safari bana uygun mu?", a: "Doğayı, eğlenceyi ve biraz çamuru seviyorsanız cevabımız kesinlikle evet!" },
  ],
  "family-buggy-safari": [
    { q: "Family Buggy nedir?", a: "Family Buggy, aynı araçta dört kişiye kadar birlikte yolculuk yapabileceğiniz aile tipi buggy deneyimidir. Sevdiklerinizle aynı macerayı paylaşmanın en eğlenceli yollarından biridir." },
    { q: "Araçlara kaç kişi binebilir?", a: "Family Buggy araçlarımız en fazla 4 kişiliktir. Aileler ve küçük arkadaş grupları için idealdir." },
    { q: "Çocuklarla birlikte katılabilir miyiz?", a: "Evet. Güvenlik kurallarına uygun olduğu sürece çocuklarınızla birlikte aynı araçta keyifli bir safari deneyimi yaşayabilirsiniz." },
    { q: "Daha önce buggy kullanmadım. Sorun olur mu?", a: "Hiç sorun olmaz. Tur öncesinde verilen eğitim ve deneme sürüşü sayesinde ilk kez kullanan misafirler de rahatlıkla tura katılabilir." },
    { q: "Family Buggy Safari ne kadar sürüyor?", a: "Turumuz yaklaşık 2 saat sürmektedir ve gölette verilen mola bu süreye dahildir. Çocuklara sorarsanız, genellikle 'Biraz daha sürsün!' diyorlar. 😊" },
    { q: "Gölette mola veriliyor mu?", a: "Evet. Program kapsamında doğal gölette yüzme ve dinlenme molası veriyoruz." },
    { q: "Yemek dahil mi?", a: "Hayır. Tur programımıza yemek dahil değildir." },
    { q: "Fotoğraf ve video çekiliyor mu?", a: "Evet. Ailece yaşadığınız en güzel anlar profesyonel ekibimiz tarafından kayıt altına alınır." },
    { q: "Transfer ücretsiz mi?", a: "Evet. Side ve çevresindeki otellerden ücretsiz gidiş-dönüş transfer hizmeti sunuyoruz." },
    { q: "Ön ödeme yapıyor muyuz?", a: "Hayır. Ön ödeme talep etmiyoruz. Ödemenizi tur günü güvenle yapabilirsiniz." },
    { q: "Güvenlik önlemleri alınıyor mu?", a: "Evet. Araçlarımız düzenli olarak kontrol edilir ve rehberlerimiz tur boyunca gruba eşlik eder." },
    { q: "Family Buggy Safari neden tercih edilmeli?", a: "Çünkü aynı araçta birlikte gülmek, birlikte eğlenmek ve birlikte unutulmaz anılar biriktirmek tek başına yaşanan maceralardan çok daha güzeldir." },
  ],
};
