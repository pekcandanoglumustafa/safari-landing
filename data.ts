export const CONTACT = {
  phoneDisplay: "0542 744 01 01",
  phoneIntl: "+905427440101",
  whatsapp: "https://wa.me/905427440101",
};
export const EUR_TRY = 54;
export const toTL = (e: number) => (Math.round((e*EUR_TRY)/10)*10).toLocaleString("tr-TR");

export type Pkg = {
  slug: string; name: string; tagline: string; price: number; oldPrice?: number;
  duration: string; hero: string; gallery: string[];
  intro: string; highlights: string[]; includes: string[];
  program: { t: string; x: string }[]; faq: { q: string; a: string }[];
};

// SPOT görseller: çamurlu/aksiyon kareler öne
export const PKGS: Pkg[] = [
  {
    slug: "buggy-safari",
    name: "Buggy Safari",
    tagline: "Kafesli buggy ile çamur, toz ve tam gaz adrenalin",
    price: 22, oldPrice: 40, duration: "2 saat · Her gün",
    hero: "/img/08.jpg",
    gallery: ["/img/08.jpg","/img/07.jpg","/img/13.jpg","/img/09.jpg","/img/14.jpg","/img/00.jpg"],
    intro: "Toros eteklerinde çift kişilik kafesli buggy ile 2 saatlik toz-çamur macerası. Dere yataklarından geçiyor, çamur havuzlarına dalıyor, tepelere tırmanıyorsun. Ehliyet gerekmez, kask ve tüm ekipman bizden. Kirlenme garantili!",
    highlights: ["Çift kişilik kafesli buggy","Çamur havuzları ve dere geçişleri","2 saat dolu dolu parkur","Ehliyet gerekmez","Otelden ücretsiz alma-bırakma"],
    includes: ["Otelden alma-bırakma","Buggy ve kask","Rehber eşliğinde parkur","Sigorta"],
    program: [{t:"Alınış",x:"Otelinizden servis ile alınıyorsunuz"},{t:"Brifing",x:"Kısa güvenlik eğitimi ve ekipman"},{t:"Parkur",x:"2 saat çamur, toz, dere geçişleri"},{t:"Dönüş",x:"Yıkanma molası sonrası otele bırakış"}],
    faq: [{q:"Ehliyet gerekiyor mu?",a:"Hayır, özel parkurda kullanıldığı için ehliyet gerekmez. 16 yaş üzeri tek başına sürebilir."},{q:"Kaç kişi biner?",a:"Standart buggy 2 kişiliktir; aileler için 4 kişilik Family Buggy seçeneğimiz var."},{q:"Islanır/kirlenir miyiz?",a:"Kesinlikle! Yedek kıyafet ve havlu getirin, kirlenmek bu turun en eğlenceli kısmı."}],
  },
  {
    slug: "quad-safari",
    name: "Quad Safari",
    tagline: "Toz duman ATV ile 2 saatlik off-road macera",
    price: 19, oldPrice: 30, duration: "2 saat · Her gün",
    hero: "/img/01.jpg",
    gallery: ["/img/01.jpg","/img/09.jpg","/img/10.jpg","/img/11.jpg","/img/12.jpg","/img/06.jpg"],
    intro: "Kendi quad'ını (ATV) sür, Toros manzaralı tepelere tırman, dere yataklarından toz ve su sıçratarak geç. Yaklaşık 2 saatlik parkurda adrenalin hiç düşmüyor. Ehliyet gerekmez, kask ve ekipman dahil.",
    highlights: ["Kişiye özel quad (ATV)","Toz ve su sıçratan parkur","2 saat off-road macera","Ehliyet gerekmez","Otelden ücretsiz alma-bırakma"],
    includes: ["Otelden alma-bırakma","Quad ve kask","Rehber eşliğinde parkur","Sigorta"],
    program: [{t:"Alınış",x:"Otelinizden servis ile alınıyorsunuz"},{t:"Brifing",x:"Güvenlik eğitimi ve quad kullanımı"},{t:"Parkur",x:"2 saat tepeler, dere geçişleri, toz"},{t:"Dönüş",x:"Mola sonrası otele bırakış"}],
    faq: [{q:"Tek başıma sürebilir miyim?",a:"16 yaş üzeri herkes tek başına sürebilir. Küçükler eğitmen/ebeveyn arkasında biner."},{q:"Deneyim gerekiyor mu?",a:"Hayır, başlangıç seviyesine uygun. Rehber baştan sona yanınızda."},{q:"Ne giymeliyim?",a:"Kirlenebilecek kıyafet, kapalı ayakkabı. Yedek kıyafet getirin."}],
  },
  {
    slug: "family-buggy-safari",
    name: "Family Buggy Safari",
    tagline: "Tüm aile tek buggy'de — 4 kişilik güvenli macera",
    price: 75, duration: "3-4 saat · Her gün",
    hero: "/img/13.jpg",
    gallery: ["/img/13.jpg","/img/14.jpg","/img/00.jpg","/img/07.jpg","/img/06.jpg","/img/03.jpg"],
    intro: "Ailece maceraya çıkmak isteyenler için 4 kişilik geniş kafesli buggy. Anne, baba ve çocuklar aynı araçta, güvenli kafes içinde çamur ve tozun tadını çıkarıyor. Fiyat araç başıdır — tüm aile bu ücrete dahil.",
    highlights: ["4 kişilik tek araç","Aile başı sabit fiyat","Kafesli, güvenli tasarım","Çocuklar için uygun (6+ yaş)","Otelden ücretsiz alma-bırakma"],
    includes: ["Otelden alma-bırakma","4 kişilik buggy","Kasklar","Rehberlik","Sigorta"],
    program: [{t:"Alınış",x:"Ailecek otelinizden alınıyorsunuz"},{t:"Brifing",x:"Güvenlik eğitimi ve araç tanıtımı"},{t:"Parkur",x:"Aile temposunda çamur ve toz parkuru"},{t:"Dönüş",x:"Mola sonrası otele bırakış"}],
    faq: [{q:"Fiyat kişi başı mı?",a:"Hayır, 75 € araç başıdır — 4 kişilik ailenin tamamı bu ücrete dahildir."},{q:"Çocuk yaş sınırı?",a:"Kafesli araç ve emniyet kemeriyle 6 yaş üzeri çocuklar rahatça katılabilir."},{q:"Kim kullanır?",a:"Ebeveyn kullanır, çocuklar yanında güvenle oturur. Kafes ve kemer tam koruma sağlar."}],
  },
];
export const getPkg = (s: string) => PKGS.find(p => p.slug === s);
