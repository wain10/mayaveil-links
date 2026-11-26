'use strict';
const messages = {
  "en": {
    "heading": "Protected link",
    "open": "Open in MayaVeil",
    "need": "Need MayaVeil?",
    "about": "MayaVeil is a private RAM browser and file opener by Schopenhauer’s Lab. It opens protected links on your device.",
    "availability": "Public downloads are not available yet. If you’re testing MayaVeil, ask the sender for an invitation. After installation, reopen the original link.",
    "play": "Search Google Play",
    "apple": "Search the App Store",
    "incomplete": "This link is incomplete. Ask the sender to share it again.",
    "unlock": "Open the link in MayaVeil and enter the password from the sender.",
    "install": "If MayaVeil didn’t open, see the installation information below. After installation, reopen the original link."
  },
  "it": {
    "heading": "Link protetto",
    "open": "Apri in MayaVeil",
    "need": "Ti serve MayaVeil?",
    "about": "MayaVeil è il browser privato in RAM e lettore di file di Schopenhauer’s Lab. Apre i link protetti sul tuo dispositivo.",
    "availability": "Il download pubblico non è ancora disponibile. Se partecipi al test di MayaVeil, chiedi un invito al mittente. Dopo l’installazione, riapri il link originale.",
    "play": "Cerca su Google Play",
    "apple": "Cerca sull’App Store",
    "incomplete": "Il link è incompleto. Chiedi al mittente di inviarlo di nuovo.",
    "unlock": "Apri il link in MayaVeil e inserisci la password ricevuta dal mittente.",
    "install": "Se MayaVeil non si è aperta, consulta le informazioni qui sotto. Dopo l’installazione, riapri il link originale."
  },
  "es": {
    "heading": "Enlace protegido",
    "open": "Abrir en MayaVeil",
    "need": "¿Necesitas MayaVeil?",
    "about": "MayaVeil es el navegador privado en RAM y visor de archivos de Schopenhauer’s Lab. Abre los enlaces protegidos en tu dispositivo.",
    "availability": "La descarga pública aún no está disponible. Si participas en la prueba de MayaVeil, pide una invitación a quien te envió el enlace. Después de instalar la aplicación, vuelve a abrir el enlace original.",
    "play": "Buscar en Google Play",
    "apple": "Buscar en el App Store",
    "incomplete": "El enlace está incompleto. Pide a quien te lo envió que vuelva a compartirlo.",
    "unlock": "Abre el enlace en MayaVeil e introduce la contraseña que te enviaron.",
    "install": "Si MayaVeil no se ha abierto, consulta la información de instalación más abajo. Después de instalarla, vuelve a abrir el enlace original."
  },
  "fr": {
    "heading": "Lien protégé",
    "open": "Ouvrir dans MayaVeil",
    "need": "Besoin de MayaVeil ?",
    "about": "MayaVeil est le navigateur privé en mémoire vive et lecteur de fichiers de Schopenhauer’s Lab. Il ouvre les liens protégés sur votre appareil.",
    "availability": "Le téléchargement public n’est pas encore disponible. Si vous participez au test, demandez une invitation à la personne qui vous a envoyé le lien. Après l’installation, rouvrez le lien d’origine.",
    "play": "Rechercher sur Google Play",
    "apple": "Rechercher sur l’App Store",
    "incomplete": "Ce lien est incomplet. Demandez à la personne qui vous l’a envoyé de le partager à nouveau.",
    "unlock": "Ouvrez le lien dans MayaVeil et saisissez le mot de passe que vous avez reçu.",
    "install": "Si MayaVeil ne s’est pas ouvert, consultez les informations d’installation ci-dessous. Après l’installation, rouvrez le lien d’origine."
  },
  "de": {
    "heading": "Geschützter Link",
    "open": "In MayaVeil öffnen",
    "need": "MayaVeil installieren?",
    "about": "MayaVeil ist der private RAM-Browser und Dateibetrachter von Schopenhauer’s Lab. Geschützte Links werden auf deinem Gerät geöffnet.",
    "availability": "Ein öffentlicher Download ist noch nicht verfügbar. Wenn du MayaVeil testen möchtest, bitte die Person, die dir den Link geschickt hat, um eine Einladung. Öffne nach der Installation den ursprünglichen Link erneut.",
    "play": "Bei Google Play suchen",
    "apple": "Im App Store suchen",
    "incomplete": "Der Link ist unvollständig. Bitte die Person, die ihn dir geschickt hat, ihn erneut zu teilen.",
    "unlock": "Öffne den Link in MayaVeil und gib das Passwort ein, das du erhalten hast.",
    "install": "Falls MayaVeil sich nicht geöffnet hat, findest du unten Hinweise zur Installation. Öffne danach den ursprünglichen Link erneut."
  },
  "pt": {
    "heading": "Ligação protegida",
    "open": "Abrir no MayaVeil",
    "need": "Precisa do MayaVeil?",
    "about": "O MayaVeil é o navegador privado em RAM e leitor de ficheiros do Schopenhauer’s Lab. Abre ligações protegidas no seu dispositivo.",
    "availability": "A transferência pública ainda não está disponível. Se participa no teste, peça um convite a quem lhe enviou a ligação. Após a instalação, volte a abrir a ligação original.",
    "play": "Procurar no Google Play",
    "apple": "Procurar na App Store",
    "incomplete": "A ligação está incompleta. Peça a quem a enviou que a partilhe novamente.",
    "unlock": "Abra a ligação no MayaVeil e introduza a palavra-passe que recebeu.",
    "install": "Se o MayaVeil não abriu, consulte abaixo as informações de instalação. Depois de o instalar, volte a abrir a ligação original."
  },
  "ar": {
    "heading": "رابط محمي",
    "open": "فتح في MayaVeil",
    "need": "هل تحتاج إلى MayaVeil؟",
    "about": "MayaVeil متصفح خاص وقارئ ملفات من Schopenhauer’s Lab يعمل في الذاكرة المؤقتة. يفتح الروابط المحمية على جهازك.",
    "availability": "التنزيل العام غير متاح بعد. إذا كنت تشارك في الاختبار، فاطلب دعوة ممن أرسل إليك الرابط. بعد التثبيت، افتح الرابط الأصلي مجددًا.",
    "play": "البحث في Google Play",
    "apple": "البحث في App Store",
    "incomplete": "الرابط غير مكتمل. اطلب من المرسل مشاركته مجددًا.",
    "unlock": "افتح الرابط في MayaVeil وأدخل كلمة المرور التي تلقيتها من المرسل.",
    "install": "إذا لم يفتح MayaVeil، فراجع معلومات التثبيت أدناه. بعد التثبيت، افتح الرابط الأصلي مجددًا."
  },
  "hi": {
    "heading": "सुरक्षित लिंक",
    "open": "MayaVeil में खोलें",
    "need": "MayaVeil चाहिए?",
    "about": "MayaVeil, Schopenhauer’s Lab का निजी RAM ब्राउज़र और फ़ाइल रीडर है। यह सुरक्षित लिंक आपके डिवाइस पर खोलता है।",
    "availability": "सार्वजनिक डाउनलोड अभी उपलब्ध नहीं है। अगर आप MayaVeil का परीक्षण कर रहे हैं, तो लिंक भेजने वाले से आमंत्रण माँगें। ऐप इंस्टॉल करने के बाद मूल लिंक फिर से खोलें।",
    "play": "Google Play पर खोजें",
    "apple": "App Store पर खोजें",
    "incomplete": "यह लिंक अधूरा है। भेजने वाले से इसे फिर से साझा करने को कहें।",
    "unlock": "लिंक को MayaVeil में खोलें और भेजने वाले से मिला पासवर्ड दर्ज करें।",
    "install": "अगर MayaVeil नहीं खुला, तो नीचे इंस्टॉल करने की जानकारी देखें। इंस्टॉल करने के बाद मूल लिंक फिर से खोलें।"
  },
  "ja": {
    "heading": "保護されたリンク",
    "open": "MayaVeil で開く",
    "need": "MayaVeil をお探しですか？",
    "about": "MayaVeil は Schopenhauer’s Lab が開発した、RAM を使うプライベートブラウザ兼ファイルビューアです。保護されたリンクを端末上で開けます。",
    "availability": "一般向けダウンロードはまだ開始していません。テストに参加するには、リンクの送信者に招待を依頼してください。インストール後、元のリンクをもう一度開いてください。",
    "play": "Google Play で検索",
    "apple": "App Store で検索",
    "incomplete": "リンクが不完全です。送信者にもう一度共有してもらってください。",
    "unlock": "リンクを MayaVeil で開き、送信者から受け取ったパスワードを入力してください。",
    "install": "MayaVeil が開かなかった場合は、下のインストール案内をご覧ください。インストール後、元のリンクをもう一度開いてください。"
  },
  "zh-Hans": {
    "heading": "受保护的链接",
    "open": "在 MayaVeil 中打开",
    "need": "需要 MayaVeil？",
    "about": "MayaVeil 是 Schopenhauer’s Lab 开发的私密内存浏览器和文件阅读器，可在你的设备上打开受保护的链接。",
    "availability": "目前尚未开放公开下载。如果你正在参与测试，请向链接发送者索取邀请。安装后，请重新打开原始链接。",
    "play": "在 Google Play 中搜索",
    "apple": "在 App Store 中搜索",
    "incomplete": "链接不完整。请让发送者重新分享。",
    "unlock": "请在 MayaVeil 中打开链接，然后输入发送者提供的密码。",
    "install": "如果 MayaVeil 没有打开，请参阅下方的安装说明。安装后，请重新打开原始链接。"
  }
};

function updateLink() {
  const match = /^#maya1\.([A-Za-z0-9_-]{68,11608})(?:~([A-Za-z0-9-]{1,35}))?$/.exec(location.hash);
  const language = match && Object.hasOwn(messages, match[2]) ? match[2] : 'en';
  const copy = messages[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = copy.heading + ' · MayaVeil';
  document.querySelector('h1').textContent = copy.heading;
  for (const [id, text] of Object.entries({
    open: copy.open, 'install-title': copy.need, about: copy.about,
    availability: copy.availability, play: copy.play, apple: copy.apple
  })) document.getElementById(id).textContent = text;

  const action = document.getElementById('open');
  const help = document.getElementById('help');
  action.hidden = !match;
  if (!match) {
    action.removeAttribute('href');
    help.textContent = copy.incomplete;
    return;
  }
  help.textContent = new URLSearchParams(location.search).has('install') ? copy.install : copy.unlock;
  const fallback = location.origin + location.pathname + '?install' + location.hash;
  action.href = /Android/i.test(navigator.userAgent)
    ? 'intent://open/' + match[1] + '#Intent;scheme=mayaveil-link;package=app.ephemeral;S.browser_fallback_url=' + encodeURIComponent(fallback) + ';end'
    : 'mayaveil-link://open/' + match[1];
}
updateLink();
addEventListener('hashchange', updateLink);
