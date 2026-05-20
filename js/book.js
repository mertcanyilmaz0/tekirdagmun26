 /*
  ============================================================
    KOMİTE VERİLERİ
    Yeni komite eklemek için bu diziye bir nesne daha ekle.
    Zorunlu alanlar: name, fullName, subtitle, tags, desc, studyGuide
    Opsiyonel: img (fotoğraf yolu), icon (emoji fallback), color (bc1-bc12)
  ============================================================
  */
  const COMMITTEES = [
    {
      name: "UNSC",
      fullName: "BM Güvenlik Konseyi",
      subtitle: "Uluslararası barış ve güvenlik",
      tags: ["Uluslararası Hukuk", "Çatışma Çözümü"],
      desc: "Birleşmiş Milletler Güvenlik Konseyi, dünya barışını tehdit eden meseleleri ele alır. Veto hakkına sahip 5 daimi üye ile karar alma süreçleri ve kriz müdahalesi masada olacak.",
      studyGuide: "#",   /* ← PDF linkini buraya yaz */
      img: "",           /* ← "img/unsc.jpg" gibi fotoğraf ekleyebilirsin */
      icon: "📜",
      color: "bc1",
      width: 52, height: 148
    },
    {
      name: "ICJ",
      fullName: "Uluslararası Adalet Divanı",
      subtitle: "Devletler arası hukuki uyuşmazlıklar",
      tags: ["Uluslararası Hukuk", "Yargı"],
      desc: "Uluslararası Adalet Divanı, devletler arasındaki hukuki anlaşmazlıkları çözer. Delegeler hem davacı hem de hakim rolünü üstlenerek gerçek bir yargı simülasyonu yaşayacak.",
      studyGuide: "#",
      img: "", icon: "⚖️", color: "bc2", width: 46, height: 138
    },
    {
      name: "UNEP",
      fullName: "BM Çevre Programı",
      subtitle: "Sürdürülebilir kalkınma ve iklim",
      tags: ["Çevre", "İklim Krizi"],
      desc: "Küresel çevre sorunları, iklim değişikliği ve sürdürülebilir kalkınma gündemini ele alır. Delegeler somut politika önerileri geliştirerek geleceğin çevre mimarisini şekillendirecek.",
      studyGuide: "#",
      img: "", icon: "🌍", color: "bc3", width: 50, height: 152
    },
    {
      name: "ECOSOC",
      fullName: "Ekonomi ve Sosyal Konsey",
      subtitle: "Küresel ekonomik kalkınma",
      tags: ["Ekonomi", "Sosyal Politika"],
      desc: "Ekonomik kalkınma, sosyal refah ve sürdürülebilir büyüme konularında politika üretir. Yoksulluk, eşitsizlik ve kalkınma finansmanı gibi kritik başlıklar masada olacak.",
      studyGuide: "#",
      img: "", icon: "💰", color: "bc4", width: 48, height: 140
    },
    {
      name: "WHO",
      fullName: "Dünya Sağlık Örgütü",
      subtitle: "Küresel sağlık politikaları",
      tags: ["Sağlık", "Pandemi"],
      desc: "Salgın hastalıklar, evrensel sağlık hizmeti erişimi ve sağlık sistemlerinin güçlendirilmesi ele alınacak. Delegeler gerçekçi sağlık krizlerine çözüm üretecek.",
      studyGuide: "#",
      img: "", icon: "🏥", color: "bc5", width: 45, height: 144
    },
    {
      name: "UNHCR",
      fullName: "BM Mülteci Ajansı",
      subtitle: "Mülteci hakları ve koruma",
      tags: ["İnsan Hakları", "Göç"],
      desc: "Zorunlu göç, mülteci hakları ve sınır ötesi koruma mekanizmaları tartışılacak. Delegeler insani krizlere insancıl ve kalıcı çözümler üretmeye çalışacak.",
      studyGuide: "#",
      img: "", icon: "🤝", color: "bc6", width: 53, height: 150
    },
    {
      name: "COPUOS",
      fullName: "Uzayın Barışçıl Kullanımı Komitesi",
      subtitle: "Uzay hukuku ve teknoloji",
      tags: ["Uzay", "Teknoloji"],
      desc: "Uzayın hukuki statüsü, uydu teknolojileri, uzay enkazı ve yeni nesil uzay yarışının yönetimi tartışılacak. Geleceğin sınırını belirleyecek politikalar şekillenecek.",
      studyGuide: "#",
      img: "", icon: "🚀", color: "bc7", width: 50, height: 156
    },
    {
      name: "NATO PA",
      fullName: "NATO Parlamenter Asamblesi",
      subtitle: "Kolektif güvenlik ve savunma",
      tags: ["Savunma", "İttifak Politikası"],
      desc: "NATO'nun güvenlik mimarisi, genişleme politikası ve kolektif savunma kapasitesi ele alınacak. Delegeler hem ulusal hem de kolektif çıkarları dengelerken kritik kararlar alacak.",
      studyGuide: "#",
      img: "", icon: "🛡️", color: "bc8", width: 47, height: 142
    },
    {
      name: "ITU",
      fullName: "Uluslararası Telekomünikasyon Birliği",
      subtitle: "Dijital eşitsizlik ve internet yönetimi",
      tags: ["Dijital", "Teknoloji"],
      desc: "Dijital uçurum, siber güvenlik, internet yönetimi ve yapay zeka regülasyonu bu komitenin gündemini oluşturuyor. 21. yüzyılın en kritik dijital politikaları burada şekillenecek.",
      studyGuide: "#",
      img: "", icon: "📡", color: "bc9", width: 52, height: 146
    },
    {
      name: "IAEA",
      fullName: "Uluslararası Atom Enerjisi Ajansı",
      subtitle: "Nükleer güvenlik ve enerji",
      tags: ["Nükleer", "Enerji"],
      desc: "Nükleer silahların yayılmasının önlenmesi, nükleer enerji güvenliği ve radyasyon koruması ele alınacak. Dünyanın en hassas güvenlik dengeleri bu komitede tartışılacak.",
      studyGuide: "#",
      img: "", icon: "⚡", color: "bc10", width: 49, height: 154
    }
    /*
    ============================================================
      YENİ KOMİTE EKLEMEK İÇİN:
      Yukarıdaki son nesnenin sonuna virgül koy,
      aşağıdaki şablonu kopyalayıp doldur.
      color için bc1-bc12 arasından birini seç.
      width: 44-56 arası, height: 130-165 arası rastgele değer ver.
    ============================================================
    ,{
      name: "KISA AD",
      fullName: "Komitenin Tam Adı",
      subtitle: "Kısa açıklayıcı başlık",
      tags: ["Etiket1", "Etiket2"],
      desc: "Komite hakkında 2-3 cümle açıklama.",
      studyGuide: "#",
      img: "",
      icon: "🌐",
      color: "bc11",
      width: 50, height: 148
    }
    */
  ];
 
  /* ── RAFLAR PER ROW ── */
  const BOOKS_PER_SHELF = 5; /* bir rafta kaç kitap olsun */
 
  /* ── RENDER ── */
  function buildShelves() {
    const container = document.getElementById('shelvesContainer');
    const total = COMMITTEES.length;
    const shelfCount = Math.ceil(total / BOOKS_PER_SHELF);
 
    for (let s = 0; s < shelfCount; s++) {
      const slice = COMMITTEES.slice(s * BOOKS_PER_SHELF, (s + 1) * BOOKS_PER_SHELF);
      const wrap = document.createElement('div');
      wrap.className = 'shelf-wrap';
      const plank = document.createElement('div');
      plank.className = 'shelf-plank';
 
      /* dekoratif başlangıç kitabı */
      plank.appendChild(makeDecoBook());
 
      slice.forEach(c => plank.appendChild(makeBook(c)));
 
      /* dekoratif bitiş kitabı */
      plank.appendChild(makeDecoBook());
 
      wrap.appendChild(plank);
      container.appendChild(wrap);
    }
  }
 
  function makeBook(c) {
    const el = document.createElement('div');
    el.className = `book ${c.color}`;
    el.style.cssText = `width:${c.width}px;height:${c.height}px;`;
    el.innerHTML = `
      <div class="book-top"></div>
      <div class="book-shine"></div>
      <div class="book-shadow"></div>
      <span class="book-spine-title">${c.name}</span>
    `;
    el.addEventListener('click', () => openModal(c));
    return el;
  }
 
  function makeDecoBook() {
    const el = document.createElement('div');
    const w = 26 + Math.floor(Math.random() * 16);
    const h = 95 + Math.floor(Math.random() * 45);
    const colors = ['bc1','bc3','bc6','bc8','bc10'];
    const col = colors[Math.floor(Math.random() * colors.length)];
    el.className = `book book-deco ${col}`;
    el.style.cssText = `width:${w}px;height:${h}px;`;
    el.innerHTML = `<div class="book-shine"></div>`;
    return el;
  }
 
  /* ── MODAL ── */
  function openModal(c) {
    /* kapak */
    const cover = document.getElementById('bkCover');
    if (c.img) {
      cover.innerHTML = `<img src="${c.img}" alt="${c.fullName}">`;
      cover.style.background = '';
    } else {
      cover.innerHTML = c.icon;
      cover.style.background = getGradient(c.color);
    }
 
    document.getElementById('bkTitle').textContent = c.fullName;
    document.getElementById('bkSubtitle').textContent = c.subtitle;
    document.getElementById('bkDesc').textContent = c.desc;
 
    document.getElementById('bkBadges').innerHTML =
      c.tags.map(t => `<span class="bk-badge">${t}</span>`).join('');
 
    document.getElementById('bkFooter').innerHTML = `
      <a class="bk-btn bk-btn-primary" href="${c.studyGuide}" target="_blank">
        📄 Study Guide
      </a>
      <button class="bk-btn bk-btn-ghost" onclick="closeModal()">Kapat</button>
    `;
 
    document.getElementById('bkOverlay').classList.add('active');
  }
 
  function closeModal() {
    document.getElementById('bkOverlay').classList.remove('active');
  }
 
  function getGradient(cls) {
    const map = {
      bc1:'linear-gradient(170deg,#6B1580,#3B0D47)',
      bc2:'linear-gradient(170deg,#1a4a6b,#0a2540)',
      bc3:'linear-gradient(170deg,#2d6b1a,#0f3208)',
      bc4:'linear-gradient(170deg,#6b3a1a,#3a1a08)',
      bc5:'linear-gradient(170deg,#6b1a3a,#3a0820)',
      bc6:'linear-gradient(170deg,#1a3a6b,#0a1a3a)',
      bc7:'linear-gradient(170deg,#4a1a6b,#200a3a)',
      bc8:'linear-gradient(170deg,#1a6b5a,#083a2e)',
      bc9:'linear-gradient(170deg,#6b5a1a,#3a2e08)',
      bc10:'linear-gradient(170deg,#6b1a1a,#3a0808)',
      bc11:'linear-gradient(170deg,#1a5a6b,#082a3a)',
      bc12:'linear-gradient(170deg,#5a6b1a,#2a3a08)'
    };
    return map[cls] || '#1A1022';
  }
 
  /* ── EVENTS ── */
  document.getElementById('bkClose').addEventListener('click', closeModal);
  document.getElementById('bkOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('bkOverlay')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
 
  buildShelves();