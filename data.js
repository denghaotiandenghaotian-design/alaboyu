/* ============================================================
 * data.js — 阿拉伯语零基础学习系统 内置数据集
 * 基准：参考表 A（28 字母）/ 参考表 B（键盘映射）/ 子场景种子词库
 * 全部数据本地内置，无需联网、无需后端。
 * ============================================================ */

/* ---------- 参考表 A：28 字母标准表 ---------- */
const LETTERS = [
  {id:1,  ar:"ا",  name:"ʾalif",  tr:"ā / ʾ",      artic:"声门音 / 长元音 ā",         zh:"啊（长）",            hard:false, note:"不连写；可作 carrier 承载 hamza"},
  {id:2,  ar:"ب",  name:"bāʾ",    tr:"b",          artic:"双唇浊塞音",               zh:"b 玻",               hard:false},
  {id:3,  ar:"ت",  name:"tāʾ",    tr:"t",          artic:"齿龈清塞音",               zh:"t 特",               hard:false},
  {id:4,  ar:"ث",  name:"thāʾ",   tr:"th",         artic:"齿间清擦音",               zh:"think 的 th",        hard:true,  group:"齿间音"},
  {id:5,  ar:"ج",  name:"jīm",    tr:"j",          artic:"齿龈后浊塞擦音",           zh:"近似「吉」",         hard:false},
  {id:6,  ar:"ح",  name:"ḥāʾ",    tr:"ḥ",          artic:"咽清擦音",                 zh:"喉咙哈气，无中文对应",hard:true,  group:"喉音"},
  {id:7,  ar:"خ",  name:"khāʾ",   tr:"kh",         artic:"软腭清擦音",               zh:"德 ch / 俄 х",       hard:true,  group:"喉音"},
  {id:8,  ar:"د",  name:"dāl",    tr:"d",          artic:"齿龈浊塞音",               zh:"d 得",               hard:false},
  {id:9,  ar:"ذ",  name:"dhāl",   tr:"dh",         artic:"齿间浊擦音",               zh:"this 的 th",         hard:true,  group:"齿间音"},
  {id:10, ar:"ر",  name:"rāʾ",    tr:"r",          artic:"齿龈颤音",                 zh:"大舌颤音 r",         hard:false, group:"流音"},
  {id:11, ar:"ز",  name:"zāy",    tr:"z",          artic:"齿龈浊擦音",               zh:"z 资",               hard:false},
  {id:12, ar:"س",  name:"sīn",    tr:"s",          artic:"齿龈清擦音",               zh:"s 丝",               hard:false},
  {id:13, ar:"ش",  name:"shīn",   tr:"sh",         artic:"齿龈后清擦音",             zh:"sh 诗",              hard:false},
  {id:14, ar:"ص",  name:"ṣād",    tr:"ṣ",          artic:"咽化清擦音",               zh:"重读 s",             hard:true,  group:"重读辅音"},
  {id:15, ar:"ض",  name:"ḍād",    tr:"ḍ",          artic:"咽化浊塞音",               zh:"重读 d",             hard:true,  group:"重读辅音"},
  {id:16, ar:"ط",  name:"ṭāʾ",    tr:"ṭ",          artic:"咽化清塞音",               zh:"重读 t",             hard:true,  group:"重读辅音"},
  {id:17, ar:"ظ",  name:"ẓāʾ",    tr:"ẓ",          artic:"咽化浊擦音",               zh:"重读 z/ð",           hard:true,  group:"重读辅音"},
  {id:18, ar:"ع",  name:"ʿayn",   tr:"ʿ",          artic:"咽浊擦音",                 zh:"喉咙收紧的「啊」，无中文对应", hard:true, group:"喉音"},
  {id:19, ar:"غ",  name:"ghayn",  tr:"gh",         artic:"软腭浊擦音",               zh:"法 r / 浊 kh",       hard:true,  group:"喉音"},
  {id:20, ar:"ف",  name:"fāʾ",    tr:"f",          artic:"唇齿清擦音",               zh:"f 佛",               hard:false},
  {id:21, ar:"ق",  name:"qāf",    tr:"q",          artic:"小舌清塞音",               zh:"深喉 k",             hard:true,  group:"喉音"},
  {id:22, ar:"ك",  name:"kāf",    tr:"k",          artic:"软腭清塞音",               zh:"k 科",               hard:false},
  {id:23, ar:"ل",  name:"lām",    tr:"l",          artic:"齿龈边音",                 zh:"l 勒",               hard:false, group:"流音"},
  {id:24, ar:"م",  name:"mīm",    tr:"m",          artic:"双唇鼻音",                 zh:"m 摸",               hard:false},
  {id:25, ar:"ن",  name:"nūn",    tr:"n",          artic:"齿龈鼻音",                 zh:"n 呢",               hard:false},
  {id:26, ar:"ه",  name:"hāʾ",    tr:"h",          artic:"声门清擦音",               zh:"h 喝",               hard:false},
  {id:27, ar:"و",  name:"wāw",    tr:"w / ū",      artic:"双唇近音 / 长元音 ū",       zh:"w 乌",               hard:false, group:"流音"},
  {id:28, ar:"ي",  name:"yāʾ",    tr:"y / ī",      artic:"硬腭近音 / 长元音 ī",       zh:"y 衣",               hard:false, group:"流音"}
];

/* ---------- 参考表 B：键盘布局映射（Windows Arabic 101） ---------- */
const KEYBOARD = {
  top:    [["Q","ض"],["W","ص"],["E","ث"],["R","ق"],["T","ف"],["Y","غ"],["U","ع"],["I","ه"],["O","خ"],["P","ح"],["[","ج"],["]","د"],["\\","ذ"]],
  main:   [["A","ش"],["S","س"],["D","ي"],["F","ب"],["G","ل"],["H","ا"],["J","ت"],["K","ن"],["L","م"],[";","ك"],["'","ط"]],
  bottom: [["Z","ئ"],["X","ء"],["C","ؤ"],["V","ر"],["B","لا"],["N","ى"],["M","ة"],[",","و"],[".","ز"],["/","ظ"]]
};
const VOWELS = [
  {key:"Shift+Q", ar:"َ",  name:"fatha"},
  {key:"Shift+W", ar:"ً",  name:"tanwīn fatha"},
  {key:"Shift+E", ar:"ُ",  name:"damma"},
  {key:"Shift+R", ar:"ٌ",  name:"tanwīn damma"},
  {key:"Shift+A", ar:"ِ",  name:"kasra"},
  {key:"Shift+S", ar:"ٍ",  name:"tanwīn kasra"},
  {key:"Shift+X", ar:"ْ",  name:"sukūn"},
  {key:"Shift+`", ar:"ّ",  name:"shadda（因系统而异）"}
];

/* ---------- A1 词汇库（含子场景种子词） ---------- */
const VOCAB = [
  // 人称代词
  {ar:"أنا",   tr:"ʾanā",        zh:"我",         cat:"代词", level:"A1"},
  {ar:"أنت",   tr:"ʾanta",       zh:"你(男)",     cat:"代词", level:"A1"},
  {ar:"أنتِ",  tr:"ʾanti",       zh:"你(女)",     cat:"代词", level:"A1"},
  {ar:"هو",    tr:"huwa",        zh:"他",         cat:"代词", level:"A1"},
  {ar:"هي",    tr:"hiya",        zh:"她",         cat:"代词", level:"A1"},
  {ar:"نحن",   tr:"naḥnu",       zh:"我们",       cat:"代词", level:"A1"},
  // 疑问/方位
  {ar:"أين",   tr:"ʾayna",       zh:"哪里",       cat:"疑问", level:"A1"},
  {ar:"كم",    tr:"kam",         zh:"多少",       cat:"疑问", level:"A1"},
  {ar:"ماذا",  tr:"mādhā",       zh:"什么",       cat:"疑问", level:"A1"},
  {ar:"يمين",  tr:"yamīn",       zh:"右",         cat:"方位", level:"A1"},
  {ar:"يسار",  tr:"yasār",       zh:"左",         cat:"方位", level:"A1"},
  {ar:"مستقيم",tr:"mustaqīm",    zh:"直",         cat:"方位", level:"A1"},
  {ar:"قريب",  tr:"qarīb",       zh:"近",         cat:"方位", level:"A1"},
  {ar:"بعيد",  tr:"baʿīd",       zh:"远",         cat:"方位", level:"A1"},
  // 餐厅
  {ar:"ماء",   tr:"māʾ",         zh:"水",         cat:"餐厅", level:"A1"},
  {ar:"خبز",   tr:"khubz",       zh:"面包",       cat:"餐厅", level:"A1"},
  {ar:"أرز",   tr:"ʾaruzz",      zh:"米饭",       cat:"餐厅", level:"A1"},
  {ar:"قهوة",  tr:"qahwa",       zh:"咖啡",       cat:"餐厅", level:"A1"},
  {ar:"شاي",   tr:"shāy",        zh:"茶",         cat:"餐厅", level:"A1"},
  {ar:"لحم",   tr:"laḥm",        zh:"肉",         cat:"餐厅", level:"A1"},
  {ar:"سمك",   tr:"samak",       zh:"鱼",         cat:"餐厅", level:"A1"},
  {ar:"سكر",   tr:"sukkar",      zh:"糖",         cat:"餐厅", level:"A1"},
  {ar:"ملح",   tr:"milḥ",        zh:"盐",         cat:"餐厅", level:"A1"},
  // 购物
  {ar:"غالي",  tr:"ghālī",       zh:"贵",         cat:"购物", level:"A1"},
  {ar:"رخيص",  tr:"rakhīṣ",      zh:"便宜",       cat:"购物", level:"A1"},
  {ar:"بكم",   tr:"bikam",       zh:"多少钱",     cat:"购物", level:"A1"},
  {ar:"تفاح",  tr:"tuffāḥ",      zh:"苹果",       cat:"购物", level:"A1"},
  {ar:"قميص",  tr:"qamīṣ",       zh:"衬衫",       cat:"购物", level:"A1"},
  {ar:"سوق",   tr:"sūq",         zh:"市场",       cat:"购物", level:"A1"},
  {ar:"جديد",  tr:"jadīd",       zh:"新",         cat:"购物", level:"A1"},
  // 机场/身份
  {ar:"اسم",   tr:"ism",         zh:"名字",       cat:"身份", level:"A1"},
  {ar:"جنسية", tr:"jinsiyya",    zh:"国籍",       cat:"身份", level:"A1"},
  {ar:"عمل",   tr:"ʿamal",       zh:"工作",       cat:"身份", level:"A1"},
  {ar:"طالب",  tr:"ṭālib",       zh:"学生",       cat:"身份", level:"A1"},
  {ar:"طالبة", tr:"ṭāliba",      zh:"女学生",     cat:"身份", level:"A1"},
  {ar:"سياحة", tr:"siyāḥa",      zh:"旅游",       cat:"身份", level:"A1"},
  {ar:"مدرس",  tr:"mudarris",    zh:"老师",       cat:"身份", level:"A1"},
  // 数字
  {ar:"واحد",  tr:"wāḥid",       zh:"一",         cat:"数字", level:"A1"},
  {ar:"اثنان", tr:"ithnān",      zh:"二",         cat:"数字", level:"A1"},
  {ar:"ثلاثة", tr:"thalātha",    zh:"三",         cat:"数字", level:"A1"},
  {ar:"أربعة", tr:"arbaʿa",      zh:"四",         cat:"数字", level:"A1"},
  {ar:"خمسة",  tr:"khamsa",      zh:"五",         cat:"数字", level:"A1"},
  {ar:"عشرة",  tr:"ʿashara",     zh:"十",         cat:"数字", level:"A1"},
  // 颜色/家庭/时间/日常
  {ar:"أحمر",  tr:"aḥmar",       zh:"红",         cat:"颜色", level:"A1"},
  {ar:"أبيض",  tr:"abyaḍ",       zh:"白",         cat:"颜色", level:"A1"},
  {ar:"أسود",  tr:"aswad",       zh:"黑",         cat:"颜色", level:"A1"},
  {ar:"أم",    tr:"umm",         zh:"妈妈",       cat:"家庭", level:"A1"},
  {ar:"أب",    tr:"ab",          zh:"爸爸",       cat:"家庭", level:"A1"},
  {ar:"ابن",   tr:"ibn",         zh:"儿子",       cat:"家庭", level:"A1"},
  {ar:"بنت",   tr:"bint",        zh:"女儿",       cat:"家庭", level:"A1"},
  {ar:"يوم",   tr:"yawm",        zh:"天/日",      cat:"时间", level:"A1"},
  {ar:"ليل",   tr:"layl",        zh:"夜",         cat:"时间", level:"A1"},
  {ar:"صباح",  tr:"ṣabāḥ",       zh:"早晨",       cat:"时间", level:"A1"},
  {ar:"بيت",   tr:"bayt",        zh:"家/房子",    cat:"日常", level:"A1"},
  {ar:"كتاب",  tr:"kitāb",       zh:"书",         cat:"日常", level:"A1"},
  {ar:"باب",   tr:"bāb",         zh:"门",         cat:"日常", level:"A1"},
  {ar:"نعم",   tr:"naʿam",       zh:"是",         cat:"日常", level:"A1"},
  {ar:"لا",    tr:"lā",          zh:"不",         cat:"日常", level:"A1"},
  {ar:"شكراً", tr:"shukran",     zh:"谢谢",       cat:"日常", level:"A1"},
  {ar:"من فضلك",tr:"min faḍlik", zh:"请",         cat:"日常", level:"A1"}
];

/* ---------- 语法知识库（思维导图 / 全景） ---------- */
/* 结构：{title, levels:["A1必会"/"A2进阶"], root:{label,children:[...]}, order:[...]} */
const GRAMMAR = {
  alphabet: {
    title:"阿拉伯语字母（概览）",
    tree:{
      label:"28 字母", children:[
        {label:"喉音组 ⚠️", children:[{label:"ح خ ع غ ق"},{label:"发音部位：咽部/小舌"}]},
        {label:"齿间音组 ⚠️", children:[{label:"ث ذ"},{label:"舌尖夹齿"}]},
        {label:"重读辅音组 ⚠️", children:[{label:"ص ض ط ظ"},{label:"咽化=更重更靠后"}]},
        {label:"流音组", children:[{label:"ر ل م ن و ي"}]},
        {label:"连写规则", children:[{label:"独立/词首/词中/词尾四态"},{label:"ا د ذ ر ز و 不连后"}]}
      ]
    }
  },
  case: {
    title:"名词格位（الإعراب）",
    tree:{
      label:"名词格位", children:[
        {label:"主格 الرفع", children:[{label:"标志: ـُو / ـٌ (双/复)"},{label:"名词句主语/动词主语"}]},
        {label:"宾格 النصب", children:[{label:"标志: ـَـِ / ـاً"},{label:"宾语/介词宾语"}]},
        {label:"属格 الجر", children:[{label:"标志: ـِ / ـٍ"},{label:"介词后 / إضافة(正偏组合)"}]},
        {label:"⚠️ 固定词", children:[{label:"很多高频词永远主格"}]}
      ]
    }
  },
  verb: {
    title:"动词变位（人称标记）",
    tree:{
      label:"动词变位", children:[
        {label:"过去式 الماضي", children:[{label:"词根+人称后缀"},{label:"هو فعل / هم فعلوا"}]},
        {label:"现在式 المضارع", children:[{label:"前缀 يـ/تـ/نـ/أـ"},{label:"أكتب / تكتب / يكتب"}]},
        {label:"⚠️ 阴/复变化", children:[{label:"ـت 阴性过去"},{label:"ـنَ 阴性现在"}]}
      ]
    }
  },
  comparative: {
    title:"比较级与最高级（التفضيل，第二~三册）",
    tree:{
      label:"比较级 أفعل", children:[
        {label:"句型 أفعل من", children:[{label:"أكبر من（比…大）"},{label:"أفضل من（比…好）"}]},
        {label:"最高级", children:[{label:"الأفعل（最…）"},{label:"أكبر مدينة（最大的城市）"}]},
        {label:"⚠️ 词形限制", children:[{label:"长于三字母的形容词不用 أفعل 型"},{label:"كثير→أكثر / قليل→أقل"}]}
      ]
    }
  },
  panorama: {
    title:"语法体系全景（A1→A2）",
    tree:{
      label:"语法全景", children:[
        {label:"词法", children:[
          {label:"名词[A1必会]", children:[{label:"性/数/格"},{label:"冠词 ال"}]},
          {label:"代词[A1必会]", children:[{label:"人称代词"},{label:"指示代词 هذا"}]},
          {label:"动词[A1必会→A2进阶]", children:[{label:"过去/现在"},{label:"否定 ما/لم"}]},
          {label:"虚词[A1必会]", children:[{label:"في/من/إلى"},{label:"A2: أن/إن"}]}
        ]},
        {label:"句法", children:[
          {label:"名词句[A1必会]", children:[{label:"مبتدأ+خبر"},{label:"无动词"}]},
          {label:"动词句[A1必会]", children:[{label:"动词+主语"}]},
          {label:"A2 从句", children:[{label:"أن+名词句"},{label:"关系代词 الذي"}]}
        ]}
      ]
    },
    order:[
      "① 字母与语音（28 字母、连写、喉音）",
      "② 人称代词 + 名词句（مبتدأ+خبر）",
      "③ 名词的性/数/格（主宾属三格）",
      "④ 冠词 ال + 介词 في/من/إلى",
      "⑤ 动词过去/现在式基础变位",
      "⑥ 否定 ما / لم（A1 末）",
      "⑦ A2：关系代词 الذي、أن/إن、条件句",
      "⑧ A2：比较级 أفعل 与最高级（第二册）",
      "⑨ A2：词根派生（وزن）与常用动词词型（第二~三册）",
      "⑩ A2→B1：序数词、数字规则与时间表达（第三册）"
    ]
  }
};

/* ---------- 情景对话脚本（5.2a~d） ---------- */
const DIALOGUES = [
  {
    key:"restaurant", title:"点餐 في المطعم",
    aiRole:"服务员", userRole:"顾客",
    seeds:[{ar:"ماء",tr:"māʾ",zh:"水"},{ar:"خبز",tr:"khubz",zh:"面包"},{ar:"أرز",tr:"ʾaruzz",zh:"米饭"},
           {ar:"قهوة",tr:"qahwa",zh:"咖啡"},{ar:"شاي",tr:"shāy",zh:"茶"},{ar:"كم",tr:"kam",zh:"多少"}],
    sentences:[
      {ar:"أريدُ قهوةً وماءً، من فضلك", tr:"ʾurīdu qahwatan wa māʾan, min faḍlik", zh:"我想要咖啡和水，请。"},
      {ar:"كم السعر؟", tr:"kam as-siʿr?", zh:"多少钱？"},
      {ar:"شكراً جزيلاً", tr:"shukran jazīlan", zh:"非常感谢。"}
    ],
    flow:[
      {ai:{ar:"مرحباً، ماذا تريد؟",tr:"marḥaban, mādhā turīd?",zh:"你好，想要点什么？"},
       prompt:"说：我想要咖啡和水，请。",
       user:{ar:"أريدُ قهوةً وماءً، من فضلك",tr:"ʾurīdu qahwatan wa māʾan, min faḍlik",zh:"我想要咖啡和水，请。"}},
      {ai:{ar:"حسناً. كم السعر؟",tr:"ḥasanan. kam as-siʿr?",zh:"好的。多少钱？"},
       prompt:"问价格：多少钱？",
       user:{ar:"كم السعر؟",tr:"kam as-siʿr?",zh:"多少钱？"}},
      {ai:{ar:"عشرة ريال. شكراً!",tr:"ʿashara riyāl. shukran!",zh:"十里亚尔。谢谢！"},
       prompt:"致谢：非常感谢。",
       user:{ar:"شكراً جزيلاً",tr:"shukran jazīlan",zh:"非常感谢。"}}
    ],
    summary:"高频句型：أريد…（我想要）/ كم السعر؟（多少钱）/ من فضلك（请）。隐藏考点：金额用阿拉伯数字+货币单位，数字认读需练熟。",
    improve:"① 数字+货币单位要脱口而出；② 点单先说饮品再说主食；③ 谢谢用 شكراً جزيلاً 更自然；④ 注意 قهوة 的宾格 tanwīn قهوةً。"
  },
  {
    key:"street", title:"问路 في الشارع",
    aiRole:"路人", userRole:"问路者",
    seeds:[{ar:"أين",tr:"ʾayna",zh:"哪里"},{ar:"يمين",tr:"yamīn",zh:"右"},{ar:"يسار",tr:"yasār",zh:"左"},
           {ar:"مستقيم",tr:"mustaqīm",zh:"直"},{ar:"قريب",tr:"qarīb",zh:"近"},{ar:"بعيد",tr:"baʿīd",zh:"远"}],
    sentences:[
      {ar:"أين المحطة؟", tr:"ʾayna al-maḥaṭṭa?", zh:"车站在哪里？"},
      {ar:"اذهب يميناً ثم يساراً", tr:"idhhab yamīnan thumma yasāran", zh:"向右走然后向左。"},
      {ar:"قريب من هنا", tr:"qarīb min hunā", zh:"离这儿很近。"}
    ],
    flow:[
      {ai:{ar:"أهلاً، كيف أستطيع المساعدة؟",tr:"ahlan, kayfa astaṭīʿ al-musāʿada?",zh:"你好，我能怎么帮你？"},
       prompt:"问：车站在哪里？",
       user:{ar:"أين المحطة؟",tr:"ʾayna al-maḥaṭṭa?",zh:"车站在哪里？"}},
      {ai:{ar:"اذهب مستقيماً ثم يميناً",tr:"idhhab mustaqīman thumma yamīnan",zh:"直走然后向右。"},
       prompt:"重复方向：向右走然后向左。",
       user:{ar:"اذهب يميناً ثم يساراً",tr:"idhhab yamīnan thumma yasāran",zh:"向右走然后向左。"}},
      {ai:{ar:"نعم، قريب من هنا",tr:"naʿam, qarīb min hunā",zh:"对，离这儿很近。"},
       prompt:"确认：离这儿很近。",
       user:{ar:"قريب من هنا",tr:"qarīb min hunā",zh:"离这儿很近。"}}
    ],
    summary:"高频句型：أين + 名词？/ اذهب يميناً/يساراً（向右/左走）/ مستقيم（直）。方向词 يمين/يسار 是重灾区。",
    improve:"① 先练熟 يمين/يسار 的辨音与辨义，极易混；② 指路句式固定 اذهب + 方向；③ 用 ثم（然后）连接多步；④ 近/远 qarīb/baʿīd 对比记忆。"
  },
  {
    key:"market", title:"购物砍价 في السوق",
    aiRole:"摊主", userRole:"顾客",
    seeds:[{ar:"غالي",tr:"ghālī",zh:"贵"},{ar:"رخيص",tr:"rakhīṣ",zh:"便宜"},{ar:"بكم",tr:"bikam",zh:"多少钱"},
           {ar:"تفاح",tr:"tuffāḥ",zh:"苹果"},{ar:"قميص",tr:"qamīṣ",zh:"衬衫"}],
    sentences:[
      {ar:"بكم هذا القميص؟", tr:"bikam hādhā al-qamīṣ?", zh:"这件衬衫多少钱？"},
      {ar:"خفّض السعر من فضلك", tr:"khaffiḍ as-siʿr min faḍlik", zh:"（请）降降价吧。"},
      {ar:"ثلاثة تفاحات", tr:"thalāthat tuffāḥāt", zh:"三个苹果。"}
    ],
    flow:[
      {ai:{ar:"أهلاً وسهلاً، ماذا تبحث عن؟",tr:"ahlan wa sahlan, mādhā tabḥath ʿan?",zh:"欢迎，你在找什么？"},
       prompt:"问：这件衬衫多少钱？",
       user:{ar:"بكم هذا القميص؟",tr:"bikam hādhā al-qamīṣ?",zh:"这件衬衫多少钱？"}},
      {ai:{ar:"عشرون ريالاً",tr:"ʿishrūna riyālan",zh:"二十里亚尔。"},
       prompt:"说：（请）降降价吧。",
       user:{ar:"خفّض السعر من فضلك",tr:"khaffiḍ as-siʿr min faḍlik",zh:"（请）降降价吧。"}},
      {ai:{ar:"حسناً، خمسة عشر",tr:"ḥasanan, khamsata ʿashar",zh:"好吧，十五。"},
       prompt:"买三苹果：三个苹果。",
       user:{ar:"ثلاثة تفاحات",tr:"thalāthat tuffāḥāt",zh:"三个苹果。"}}
    ],
    summary:"高频句型：بكم هذا؟（这个多少钱）/ هذا غالي（这个贵）/ خفّض السعر（降价）。隐藏语法：数字+名词性别搭配（ثلاثة تفاحات 用复数词尾 ـات）。",
    improve:"① 数字与名词性别必须一致；② 砍价用 خفّض السعر من فضلك；③ 水果名词多以 ـة 结尾（阴性）；④ 金额用阿拉伯数字+ريال。"
  },
  {
    key:"airport", title:"自我介绍与机场入境 في المطار",
    aiRole:"入境官", userRole:"旅客",
    seeds:[{ar:"اسم",tr:"ism",zh:"名字"},{ar:"جنسية",tr:"jinsiyya",zh:"国籍"},{ar:"عمل",tr:"ʿamal",zh:"工作"},
           {ar:"طالب",tr:"ṭālib",zh:"学生"},{ar:"سياحة",tr:"siyāḥa",zh:"旅游"}],
    sentences:[
      {ar:"ما اسمك؟", tr:"mā ismuka?", zh:"你叫什么名字？"},
      {ar:"أنا طالب من الصين", tr:"ʾanā ṭālib min aṣ-ṣīn", zh:"我是来自中国的学生。"},
      {ar:"أنا هنا للسياحة", tr:"ʾanā hunā li-s-siyāḥa", zh:"我来这里旅游。"}
    ],
    flow:[
      {ai:{ar:"ما اسمك؟",tr:"mā ismuka?",zh:"你叫什么名字？"},
       prompt:"答：我叫（你的名字），我是学生。",
       user:{ar:"أنا طالب من الصين",tr:"ʾanā ṭālib min aṣ-ṣīn",zh:"我是来自中国的学生。"}},
      {ai:{ar:"ما عملك؟",tr:"mā ʿamaluka?",zh:"你的职业是什么？"},
       prompt:"说：我来这里旅游。",
       user:{ar:"أنا هنا للسياحة",tr:"ʾanā hunā li-s-siyāḥa",zh:"我来这里旅游。"}},
      {ai:{ar:"أهلاً وسهلاً بك في بلادنا",tr:"ahlan wa sahlan bika fī bilādinā",zh:"欢迎来到我国。"},
       prompt:"致谢：谢谢你。",
       user:{ar:"شكراً لك",tr:"shukran laka",zh:"谢谢你。"}}
    ],
    summary:"综合实战：主格人称代词 + 名词句（أنا طالب）。回扣模块一考点：人称代词、名词句、介词 min/li。",
    improve:"① 名词句无需动词：أنا + 名词；② 国籍/来源用 من + 国名；③ 来意 أكون هنا لـ + 目的；④ 注意 طالب(男)/طالبة(女) 按自身性别选。"
  },
  {
    key:"hotel", title:"酒店入住 في الفندق",
    aiRole:"前台", userRole:"旅客",
    seeds:[{ar:"فندق",tr:"funduq",zh:"酒店"},{ar:"غرفة",tr:"ghurfa",zh:"房间"},{ar:"حجز",tr:"ḥajz",zh:"预订"},
           {ar:"ليلة",tr:"layla",zh:"晚（一夜）"},{ar:"مفتاح",tr:"miftāḥ",zh:"钥匙"},{ar:"كم",tr:"kam",zh:"多少"}],
    sentences:[
      {ar:"عندي حجز باسم أحمد", tr:"ʿindī ḥajz bi-ism aḥmad", zh:"我有以艾哈迈德名义的预订。"},
      {ar:"كم السعر لليلة واحدة؟", tr:"kam as-siʿr li-layla wāḥida?", zh:"一晚多少钱？"},
      {ar:"أريد غرفة بمنظر البحر", tr:"ʾurīdu ghurfa bimanẓar al-baḥr", zh:"我想要海景房。"}
    ],
    flow:[
      {ai:{ar:"أهلاً بك في فندقنا، كيف أساعدك؟",tr:"ahlan bika fī funduqinā, kayfa usāʿiduk?",zh:"欢迎来到我们酒店，怎么帮你？"},
       prompt:"说：我有预订，名字是艾哈迈德。",
       user:{ar:"عندي حجز باسم أحمد",tr:"ʿindī ḥajz bi-ism aḥmad",zh:"我有以艾哈迈德名义的预订。"}},
      {ai:{ar:"جيد، غرفتك في الطابق الثالث",tr:"ḥasan, ghurfatuk fī aṭ-ṭābiq ath-thālith",zh:"好的，你的房间在三楼。"},
       prompt:"问价格：一晚多少钱？",
       user:{ar:"كم السعر لليلة واحدة؟",tr:"kam as-siʿr li-layla wāḥida?",zh:"一晚多少钱？"}},
      {ai:{ar:"مئة ريال، ومفتاحك جاهز",tr:"miʾat riyāl, wa-miftāḥuk jāhiz",zh:"一百里亚尔，你的钥匙准备好了。"},
       prompt:"致谢：非常感谢。",
       user:{ar:"شكراً جزيلاً",tr:"shukran jazīlan",zh:"非常感谢。"}}
    ],
    summary:"高频句型：عندي حجز（我有预订）/ كم السعر لـ…？（…多少钱？）/ أريد غرفة…（我想要…房间）。隐藏语法：منظر البحر（海景）为 إضافة 正偏组合；序数词第三层 الطابق الثالث。",
    improve:"① 入住先报预订姓名（باسم + 名字）；② غرفة/ليلة/مفتاح 三个入住高频名词要熟；③ 提需求用 أريد + 名词；④ 楼层用序数词：الطابق الثالث（第三层）。"
  },
  {
    key:"clinic", title:"看医生 عند الطبيب",
    aiRole:"医生", userRole:"病人",
    seeds:[{ar:"طبيب",tr:"ṭabīb",zh:"医生"},{ar:"ألم",tr:"alam",zh:"疼痛"},{ar:"بطن",tr:"baṭn",zh:"肚子"},
           {ar:"حمى",tr:"ḥummā",zh:"发烧"},{ar:"دواء",tr:"dawāʾ",zh:"药"},{ar:"راحة",tr:"rāḥa",zh:"休息"}],
    sentences:[
      {ar:"عندي ألم في البطن", tr:"ʿindī alam fī al-baṭn", zh:"我肚子疼。"},
      {ar:"أشعر بالحمى منذ يومين", tr:"ʾashʿuru bil-ḥummā mundhu yawmayn", zh:"我发烧两天了。"},
      {ar:"ما هو الدواء المناسب؟", tr:"mā huwa ad-dawāʾ al-munāsib?", zh:"什么药合适？"}
    ],
    flow:[
      {ai:{ar:"ما هي شكواك؟",tr:"mā hiya shakwāk?",zh:"你哪里不舒服？"},
       prompt:"说：我肚子疼。",
       user:{ar:"عندي ألم في البطن",tr:"ʿindī alam fī al-baṭn",zh:"我肚子疼。"}},
      {ai:{ar:"هل لديك حمى؟",tr:"hal ladayka ḥummā?",zh:"你发烧吗？"},
       prompt:"说：我发烧两天了。",
       user:{ar:"أشعر بالحمى منذ يومين",tr:"ʾashʿuru bil-ḥummā mundhu yawmayn",zh:"我发烧两天了。"}},
      {ai:{ar:"خذ هذا الدواء واسترح",tr:"khudh hādhā ad-dawāʾ wa-stariḥ",zh:"吃这个药并休息。"},
       prompt:"问：什么药合适？",
       user:{ar:"ما هو الدواء المناسب؟",tr:"mā huwa ad-dawāʾ al-munāsib?",zh:"什么药合适？"}}
    ],
    summary:"高频句型：عندي ألم في…（我…疼）/ أشعر بـ…（我感觉…）/ خذ هذا الدواء（吃这个药）。隐藏语法：منذ（自从）表示持续时长，后接时间名词。",
    improve:"① 身体部位词要熟（بطن/رأس/حلق/معدة）；② منذ + 时间 = 已持续多久；③ 医嘱常用祈使句 خذ/استرح；④ 主诉固定用 عندي + ألم في + 部位。"
  },
  {
    key:"library", title:"图书馆借书 في المكتبة",
    aiRole:"图书管理员", userRole:"学生",
    seeds:[{ar:"مكتبة",tr:"maktaba",zh:"图书馆"},{ar:"كتاب",tr:"kitāb",zh:"书"},{ar:"استعارة",tr:"istiʿāra",zh:"借阅"},
           {ar:"بطاقة",tr:"biṭāqa",zh:"卡"},{ar:"تاريخ",tr:"tārīkh",zh:"历史"},{ar:"أسبوع",tr:"usbūʿ",zh:"周"}],
    sentences:[
      {ar:"أريد أن أستعير هذا الكتاب", tr:"ʾurīdu an ʾastaʿīra hādhā al-kitāb", zh:"我想借这本书。"},
      {ar:"كم مدة الاستعارة؟", tr:"kam muddat al-istiʿāra?", zh:"借阅期限是多久？"},
      {ar:"أمتلك بطاقة المكتبة", tr:"ʾamtaliku biṭāqat al-maktaba", zh:"我有图书馆借书卡。"}
    ],
    flow:[
      {ai:{ar:"أهلاً، كيف أساعدك؟",tr:"ahlan, kayfa usāʿiduk?",zh:"你好，怎么帮你？"},
       prompt:"说：我想借这本书。",
       user:{ar:"أريد أن أستعير هذا الكتاب",tr:"ʾurīdu an ʾastaʿīra hādhā al-kitāb",zh:"我想借这本书。"}},
      {ai:{ar:"تفضل، أين بطاقتك؟",tr:"tafaḍḍal, ʾayna biṭāqatuk?",zh:"请，你的卡呢？"},
       prompt:"说：我有图书馆借书卡。",
       user:{ar:"أمتلك بطاقة المكتبة",tr:"ʾamtaliku biṭāqat al-maktaba",zh:"我有图书馆借书卡。"}},
      {ai:{ar:"جيد، يمكنك إرجاعه بعد أسبوعين",tr:"ḥasan, yumkinuk ʾirjāʿuhu baʿda usbūʿayn",zh:"好的，你两周后还书。"},
       prompt:"问：借阅期限是多久？",
       user:{ar:"كم مدة الاستعارة؟",tr:"kam muddat al-istiʿāra?",zh:"借阅期限是多久？"}}
    ],
    summary:"高频句型：أريد أن أستعير…（我想借…）/ كم مدة…？（…期限多久？）/ يمكنك إرجاعه（你可以归还）。隐藏语法：أن + 现在式（أريد أن…）；إرجاع 是 أرجَع 的词根（مصدر）。",
    improve:"① 借书动词 أستعير 与 إرجاع（归还）成对记；② بطاقة المكتبة（借书卡）是常见搭配；③ 期限用 مدة الاستعارة；④ 两周 usbūʿayn 是 usbūʿ 的双数形式。"
  },
  {
    key:"phone", title:"打电话 في الهاتف",
    aiRole:"同事（接听）", userRole:"打电话者",
    seeds:[{ar:"هاتف",tr:"hātif",zh:"电话"},{ar:"رقم",tr:"raqm",zh:"号码"},{ar:"اتصال",tr:"ittiṣāl",zh:"通话"},
           {ar:"رسالة",tr:"risāla",zh:"留言"},{ar:"اجتماع",tr:"ijtimāʿ",zh:"会议"},{ar:"جوال",tr:"jawwāl",zh:"手机"}],
    sentences:[
      {ar:"هل يمكنني التحدث مع المدير؟", tr:"hal yumkinunī at-taḥadduth maʿa al-mudīr?", zh:"我能和经理通话吗？"},
      {ar:"أرجوك أعد الاتصال لاحقاً", tr:"ʾarjūk aʿid al-ittiṣāl lāḥiqan", zh:"请稍后再打。"},
      {ar:"سأترك رسالة له", tr:"sa-ʾatruku risāla lahu", zh:"我会给他留言。"}
    ],
    flow:[
      {ai:{ar:"مرحباً، من المتصل؟",tr:"marḥaban, man al-mutasall?",zh:"你好，谁打来的？"},
       prompt:"问：我能和经理通话吗？",
       user:{ar:"هل يمكنني التحدث مع المدير؟",tr:"hal yumkinunī at-taḥadduth maʿa al-mudīr?",zh:"我能和经理通话吗？"}},
      {ai:{ar:"إنه في اجتماع الآن",tr:"innahu fī ijtimāʿ al-āna",zh:"他正在开会。"},
       prompt:"说：请稍后再打。",
       user:{ar:"أرجوك أعد الاتصال لاحقاً",tr:"ʾarjūk aʿid al-ittiṣāl lāḥiqan",zh:"请稍后再打。"}},
      {ai:{ar:"حسناً، سأنتظر اتصالك",tr:"ḥasanan, sa-ʾantaẓiru ittiṣālak",zh:"好的，我等你的电话。"},
       prompt:"说：我会给他留言。",
       user:{ar:"سأترك رسالة له",tr:"sa-ʾatruku risāla lahu",zh:"我会给他留言。"}}
    ],
    summary:"高频句型：هل يمكنني التحدث مع…？（我能和…通话吗？）/ أعد الاتصال（再打）/ سأترك رسالة（我留言）。隐藏语法：سـ 表将来；من المتصل？（谁打来的？）为电话套话。",
    improve:"① 通话场景固定套话：من المتصل/أعد الاتصال/سأنتظر؛ ② 留言用 ترك رسالة；③ 开会用 في اجتماع؛ ④ لاحقاً（稍后）与 بعد قليل 通用。"
  },
  {
    key:"classroom", title:"课堂问答 في الفصل",
    aiRole:"老师", userRole:"学生",
    seeds:[{ar:"فصل",tr:"faṣl",zh:"教室"},{ar:"درس",tr:"dars",zh:"课"},{ar:"سؤال",tr:"suʾāl",zh:"问题"},
           {ar:"إجابة",tr:"ijāba",zh:"回答"},{ar:"سبورة",tr:"sabūra",zh:"黑板"},{ar:"قلم",tr:"qalam",zh:"笔"}],
    sentences:[
      {ar:"أستاذي، عندي سؤال", tr:"ʾustādhī, ʿindī suʾāl", zh:"老师，我有一个问题。"},
      {ar:"هل يمكنك تكرار الجملة؟", tr:"hal yumkinuka takrār al-jumla?", zh:"你能重复这个句子吗？"},
      {ar:"لا أفهم هذا الدرس", tr:"lā ʾafham hādhā ad-dars", zh:"我不懂这课。"}
    ],
    flow:[
      {ai:{ar:"من يريد أن يجيب؟",tr:"man yurīdu an yujīb?",zh:"谁想回答？"},
       prompt:"说：老师，我有一个问题。",
       user:{ar:"أستاذي، عندي سؤال",tr:"ʾustādhī, ʿindī suʾāl",zh:"老师，我有一个问题。"}},
      {ai:{ar:"تفضل، اسأل",tr:"tafaḍḍal, isʾal",zh:"请讲，问吧。"},
       prompt:"说：你能重复这个句子吗？",
       user:{ar:"هل يمكنك تكرار الجملة؟",tr:"hal yumkinuka takrār al-jumla?",zh:"你能重复这个句子吗？"}},
      {ai:{ar:"طبعاً، استمع جيداً",tr:"ṭabʿan, istamiʿ jayyidan",zh:"当然，好好听。"},
       prompt:"说：我不懂这课。",
       user:{ar:"لا أفهم هذا الدرس",tr:"lā ʾafham hādhā ad-dars",zh:"我不懂这课。"}}
    ],
    summary:"高频句型：عندي سؤال（我有问题）/ هل يمكنك…？（你能…吗？）/ لا أفهم（我不懂）。隐藏语法：أن + 现在式（يريد أن يجيب）；否定现在式 لا أفهم。",
    improve:"① 课堂用语要熟：اسأل/أجب/استمع/كرر؛ ② تكرار（重复）为高频词根؛ ③ 提问礼貌开头 أستاذي/من فضلك؛ ④ 不懂直接说 لا أفهم، 老师会放慢语速。"
  },
  {
    key:"trip", title:"郊游与野餐 في الرحلة",
    aiRole:"朋友", userRole:"你",
    seeds:[{ar:"حديقة",tr:"ḥadīqa",zh:"公园"},{ar:"نزهة",tr:"nuzha",zh:"郊游"},{ar:"صورة",tr:"ṣūra",zh:"照片"},
           {ar:"طعام",tr:"ṭaʿām",zh:"食物"},{ar:"عطلة",tr:"ʿuṭla",zh:"假期"},{ar:"جميل",tr:"jamīl",zh:"美丽的"}],
    sentences:[
      {ar:"نخرج للنزهة يوم الجمعة", tr:"nakhruju lin-nuzha yawm al-jumʿa", zh:"我们周五出去郊游。"},
      {ar:"الجو جميل في الحديقة", tr:"al-jaww jamīl fī al-ḥadīqa", zh:"公园里天气很好。"},
      {ar:"التقط لنا صورة من فضلك", tr:"iltaqiṭ lanā ṣūra min faḍlik", zh:"请给我们拍张照。"}
    ],
    flow:[
      {ai:{ar:"أين نذهب هذا الأسبوع؟",tr:"ʾayna nadhhabu hādhā al-usbūʿ?",zh:"这周我们去哪？"},
       prompt:"说：我们周五出去郊游。",
       user:{ar:"نخرج للنزهة يوم الجمعة",tr:"nakhruju lin-nuzha yawm al-jumʿa",zh:"我们周五出去郊游。"}},
      {ai:{ar:"فكرة جيدة، الحديقة قريبة",tr:"fikra jayyida, al-ḥadīqa qarība",zh:"好主意，公园很近。"},
       prompt:"说：公园里天气很好。",
       user:{ar:"الجو جميل في الحديقة",tr:"al-jaww jamīl fī al-ḥadīqa",zh:"公园里天气很好。"}},
      {ai:{ar:"لا تنسَ الكاميرا",tr:"lā tansa al-kāmīrā",zh:"别忘了相机。"},
       prompt:"说：请给我们拍张照。",
       user:{ar:"التقط لنا صورة من فضلك",tr:"iltaqiṭ lanā ṣūra min faḍlik",zh:"请给我们拍张照。"}}
    ],
    summary:"高频句型：نخرج إلى…（我们去…）/ الجو جميل（天气很好）/ التقط صورة（拍照）。隐藏语法：命令式 التقط；否定命令 لا تنسَ（别忘了）。",
    improve:"① نزهة/رحلة/عطلة 三个休闲词对比记忆；② 拍照动词固定搭配 التقط صورة؛ ③ لا تنسَ 是否定命令式的常用形；④ 周末活动用 يوم الجمعة / نهاية الأسبوع。"
  }
];

/* ---------- 分级听力材料（6.1） ---------- */
const LISTENING = [
  {
    title:"在咖啡馆（对话）", level:"A1", speed:"慢速", type:"对话",
    text:[
      {ar:"مرحباً، ماذا تريد؟", tr:"marḥaban, mādhā turīd?", zh:"你好，你想点什么？"},
      {ar:"أريدُ قهوةً وماءً", tr:"ʾurīdu qahwatan wa māʾan", zh:"我想要咖啡和水。"},
      {ar:"كم السعر؟", tr:"kam as-siʿr?", zh:"多少钱？"},
      {ar:"خمسة ريال", tr:"khamsa riyāl", zh:"五里亚尔。"}
    ],
    vocab:[{ar:"قهوة",tr:"qahwa",zh:"咖啡"},{ar:"ماء",tr:"māʾ",zh:"水"},{ar:"ريال",tr:"riyāl",zh:"里亚尔(货币)"}],
    questions:[
      {q:"顾客点了什么？", options:["咖啡和水","茶和面包","米饭"], a:0},
      {q:"价格是多少？", options:["三元","五里亚尔","十里亚尔"], a:1},
      {q:"这是一段什么类型的听力？", options:["独白","对话","新闻"], a:1}
    ]
  },
  {
    title:"我的一天（独白）", level:"A1", speed:"常速", type:"独白",
    text:[
      {ar:"أنا طالب", tr:"ʾanā ṭālib", zh:"我是学生。"},
      {ar:"أصحو في الصباح", tr:"aṣḥū fī aṣ-ṣabāḥ", zh:"我早晨醒来。"},
      {ar:"أقرأ كتاباً ثم أذهب إلى البيت", tr:"aqraʾu kitāban thumma adhhabu ilā al-bayt", zh:"我读一本书，然后回家。"}
    ],
    vocab:[{ar:"طالب",tr:"ṭālib",zh:"学生"},{ar:"صباح",tr:"ṣabāḥ",zh:"早晨"},{ar:"كتاب",tr:"kitāb",zh:"书"},{ar:"بيت",tr:"bayt",zh:"家"}],
    questions:[
      {q:"说话人的身份是？", options:["老师","学生","商人"], a:1},
      {q:"他早晨做什么？", options:["睡觉","醒来","吃饭"], a:1},
      {q:"读完书之后他？", options:["去学校","回家","喝水"], a:1}
    ]
  },
  {
    title:"问路与方向（对话）", level:"A1", speed:"慢速", type:"对话",
    text:[
      {ar:"أين المحطة؟", tr:"ʾayna al-maḥaṭṭa?", zh:"车站在哪里？"},
      {ar:"اذهب مستقيماً ثم يميناً", tr:"idhhab mustaqīman thumma yamīnan", zh:"直走然后向右。"},
      {ar:"قريب من هنا", tr:"qarīb min hunā", zh:"离这儿很近。"}
    ],
    vocab:[{ar:"محطة",tr:"maḥaṭṭa",zh:"车站"},{ar:"يمين",tr:"yamīn",zh:"右"},{ar:"قريب",tr:"qarīb",zh:"近"}],
    questions:[
      {q:"问路者想找什么？", options:["车站","市场","学校"], a:0},
      {q:"指路者让先怎么走？", options:["左转","直走","右转"], a:1},
      {q:"目的地离得？", options:["很远","很近","不知道"], a:1}
    ]
  },
  {
    title:"图书馆借书（独白）", level:"A2", speed:"常速", type:"独白",
    text:[
      {ar:"أذهب إلى المكتبة كل أسبوع", tr:"adhhabu ilā al-maktaba kulla usbūʿ", zh:"我每周去图书馆。"},
      {ar:"أستعير كتاباً عن التاريخ", tr:"ʾastaʿīru kitāban ʿan at-tārīkh", zh:"我借一本关于历史的书。"},
      {ar:"المكتبة مفتوحة من التاسعة إلى الخامسة", tr:"al-maktaba maftūḥa min at-tāsiʿa ilā al-khāmisa", zh:"图书馆从九点开到五点。"}
    ],
    vocab:[{ar:"مكتبة",tr:"maktaba",zh:"图书馆"},{ar:"أستعير",tr:"ʾastaʿīru",zh:"我借"},{ar:"تاريخ",tr:"tārīkh",zh:"历史"}],
    questions:[
      {q:"说话人多久去一次图书馆？", options:["每天","每周","每月"], a:1},
      {q:"他借了什么书？", options:["关于历史的","关于语言的","关于城市的"], a:0},
      {q:"图书馆几点关门？", options:["五点","六点","八点"], a:0}
    ]
  },
  {
    title:"在诊所（对话）", level:"A2", speed:"慢速", type:"对话",
    text:[
      {ar:"عندي ألم في الرأس", tr:"ʿindī alam fī ar-raʾs", zh:"我头疼。"},
      {ar:"كم يوماً وأنت مريض؟", tr:"kam yawman wa-ʾanta marīḍ?", zh:"你病了几天？"},
      {ar:"منذ ثلاثة أيام", tr:"mundhu thalāthat ayyām", zh:"三天了。"},
      {ar:"خذ هذا الدواء واشرب الماء الكثير", tr:"khudh hādhā ad-dawāʾ wa-shrab al-māʾ al-kathīr", zh:"吃这个药，多喝水。"}
    ],
    vocab:[{ar:"رأس",tr:"raʾs",zh:"头"},{ar:"دواء",tr:"dawāʾ",zh:"药"},{ar:"منذ",tr:"mundhu",zh:"自从"}],
    questions:[
      {q:"病人哪里疼？", options:["头","肚子","牙"], a:0},
      {q:"他病了多久？", options:["一天","三天","一周"], a:1},
      {q:"医生让他做什么？", options:["吃药多喝水","多睡觉","住院"], a:0}
    ]
  },
  {
    title:"新闻简报（独白）", level:"B1", speed:"常速", type:"独白",
    text:[
      {ar:"قرأت في الصحيفة خبراً عن الاقتصاد", tr:"qaraʾtu fī aṣ-ṣaḥīfa khabaran ʿan al-iqtiṣād", zh:"我在报纸上读到一条经济新闻。"},
      {ar:"الأسعار ترتفع هذا العام", tr:"al-ʾasʿār tartafiʿu hādhā al-ʿām", zh:"今年物价在上涨。"},
      {ar:"الخبراء يحللون الأسباب بعناية", tr:"al-khubarāʾ yuḥallilūna al-ʾasbāb bi-ʿināya", zh:"专家们认真分析原因。"}
    ],
    vocab:[{ar:"اقتصاد",tr:"iqtiṣād",zh:"经济"},{ar:"أسعار",tr:"ʾasʿār",zh:"物价"},{ar:"خبراء",tr:"khubarāʾ",zh:"专家"}],
    questions:[
      {q:"说话人从哪读到新闻？", options:["报纸","电视","网络"], a:0},
      {q:"今年物价怎样？", options:["下跌","上涨","不变"], a:1},
      {q:"谁在分析原因？", options:["记者","专家","政府"], a:1}
    ]
  },
  {
    title:"外事访问（对话）", level:"B1", speed:"慢速", type:"对话",
    text:[
      {ar:"السفير يزور بلادنا هذا الأسبوع", tr:"as-safīr yazūru bilādanā hādhā al-usbūʿ", zh:"大使本周访问我国。"},
      {ar:"متى سيصل الوفد؟", tr:"matā sayaṣilu al-wafd?", zh:"代表团什么时候到达？"},
      {ar:"سيصل صباح الغد", tr:"sayaṣilu ṣabāḥ al-ghad", zh:"明早到达。"},
      {ar:"أعدت الحكومة برنامجاً حافلاً", tr:"ʾaʿaddat al-ḥukūma barnāmajan ḥāfilan", zh:"政府准备了丰富的日程。"}
    ],
    vocab:[{ar:"سفير",tr:"safīr",zh:"大使"},{ar:"وفد",tr:"wafd",zh:"代表团"},{ar:"حكومة",tr:"ḥukūma",zh:"政府"}],
    questions:[
      {q:"谁本周访问？", options:["大使","部长","记者"], a:0},
      {q:"代表团什么时候到？", options:["明早","明晚","今天"], a:0},
      {q:"政府准备了什么？", options:["丰富的日程","礼物","演讲"], a:0}
    ]
  }
];

/* ---------- 即兴表达话题库（5.3） ---------- */
const TOPICS = [
  {title:"介绍我的城市", guide:["你的城市叫什么？","城市里有什么（河/山/市场）？","你喜欢它什么？"],
   vocab:["مدينة (城市)","نهر (河)","جبل (山)","سوق (市场)","جميل (美丽)"],
   frames:["أنا من مدينة… (我来自…市)","في مدينتي… (在我的城市有…)","أحب مدينتي لأن… (我爱我的城市因为…)"]},
  {title:"我的一天", guide:["你几点起床？","白天做什么？","晚上做什么？"],
   vocab:["صباح (早晨)","أقرأ (我读)","أذهب (我去)","ليل (夜)","بيت (家)"],
   frames:["أصحو في… (我在…醒来)","أقرأ كتاباً (我读一本书)","مساءً أذهب إلى البيت (晚上我回家)"]},
  {title:"我的家庭", guide:["你家有几口人？","他们的身份？","你最爱谁？"],
   vocab:["أم (妈妈)","أب (爸爸)","ابن (儿子)","بنت (女儿)","طالب (学生)"],
   frames:["في عائلتي… (我家有…)","أبي مدرس (我爸是老师)","أحب أمي (我爱妈妈)"]},
  {title:"我的周末", guide:["周末你做什么？","和谁一起？","最开心的是什么？"],
   vocab:["عطلة (假期)","حديقة (公园)","صديق (朋友)","سفر (旅行)"],
   frames:["في نهاية الأسبوع… (在周末…)","أذهب مع أصدقائي إلى… (我和朋友们去…)","أحب… كثيراً (我非常喜欢…)"]},
  {title:"学习阿拉伯语", guide:["你为什么学阿语？","怎么学（听说读写）？","最难的是什么？"],
   vocab:["لغة (语言)","نطق (发音)","قواعد (语法)","قراءة (阅读)"],
   frames:["أتعلم العربية لأن… (我学阿语因为…)","أستمع إلى… (我听…)","أصعب شيء هو… (最难的是…)"]}
];

/* 艾宾浩斯遗忘曲线复习间隔（天） */
const EB_INTERVALS = [0, 1, 2, 4, 7, 15, 30];

/* 易混字母组（7.3 辨形题） */
const CONFUSABLE = [
  ["ب","ت","ث"], ["ج","ح","خ"], ["س","ش"], ["ص","ض"], ["د","ذ"], ["ر","ز"], ["ق","ف"], ["ع","غ"]
];

/* ============================================================
 * 教材书目（基于《新编阿拉伯语》系列整理）
 * 注：作者/课数等依据公开资料整理，具体以实体书版权页为准。
 * ============================================================ */
const TEXTBOOKS = [
  {title:"新编阿拉伯语（第一册）", author:"国少华、邹兰芳", press:"外语教学与研究出版社", vol:"1 / 6", lessons:24,
   note:"零基础起点（2002 初版）。共 24 课：1–12 课为语音阶段，14 课起进入课文；覆盖问候、家庭、问路、餐厅、购物、学校、时间、天气、旅行、职业、健康等基础情景与核心语法（名词句、性数格、动词过去/现在式）。"},
  {title:"新编阿拉伯语（第二册）", author:"国少华、蒋传瑛", press:"外语教学与研究出版社", vol:"2 / 6", lessons:17,
   note:"巩固基础（2003 初版）。共 17 课，分公共交际、业余生活等主题，扩充词汇与语篇表达，引入更多复合句与衔接。"},
  {title:"新编阿拉伯语（第三册）", author:"国少华、叶良英、吴晓琴、薛庆国", press:"外语教学与研究出版社", vol:"3 / 6", lessons:null,
   note:"中阶阅读与写作（2004 初版），扩充词汇量与语法复杂度，向语篇理解过渡。"},
  {title:"新编阿拉伯语（第四册）", author:"国少华、叶良英、吴晓琴、张宏", press:"外语教学与研究出版社", vol:"4 / 6", lessons:null,
   note:"中高阶，侧重原文阅读、翻译与综合运用（2006 初版）。"},
  {title:"新编阿拉伯语（第五册）", author:"国少华、张洪仪、李宁", press:"外语教学与研究出版社", vol:"5 / 6", lessons:null,
   note:"高阶精读（2010 初版），接近 CEFR B1+，强化翻译与批判阅读。"},
  {title:"新编阿拉伯语（第六册）", author:"国少华、张洪仪、李宁", press:"外语教学与研究出版社", vol:"6 / 6", lessons:null,
   note:"全套最高阶精读（2015 初版），完整覆盖阿拉伯语专业 1–3 年级主干课（精读）。"},
  {title:"新编阿拉伯语 教师用书（第一~三册配套）", author:"国少华 等", press:"外语教学与研究出版社", vol:"配套", lessons:"—",
   note:"与精读教材配套的教学参考书，含教案、练习答案与拓展，建议师生对照使用。"}
];
/* 注：外研社另出版独立于本系列的《实用阿拉伯语听力教程》《阿拉伯语读写教程》等专项教程，
   不属于《新编阿拉伯语》6 册精读本体，本系统「听力训练 / 综合自测·听」可与之配合。 */

/* ============================================================
 * 12 个情景板块（对应《新编阿拉伯语》第一册主要课次主题）
 * ============================================================ */
const SCENES = [
  /* —— 第一册 —— */
  {key:"greet",    name:"问候与相识", ar:"التحية",     lesson:"第一册 第14课",  desc:"打招呼、询问近况、道别", vol:"1"},
  {key:"family",   name:"家庭与亲属", ar:"العائلة",     lesson:"第一册 第16课",  desc:"家人称谓、介绍家庭", vol:"1"},
  {key:"direction",name:"问路与方位", ar:"الطريق",      lesson:"第一册 第8课",   desc:"方向词、指路、远近", vol:"1"},
  {key:"dining",   name:"餐厅与饮食", ar:"المطعم",      lesson:"第一册 第21课",  desc:"点餐、食物、价格", vol:"1"},
  {key:"shopping", name:"购物与砍价", ar:"التسوق",      lesson:"第一册 综合情景", desc:"市场、商品、数字、议价", vol:"1"},
  {key:"school",   name:"学校与学习", ar:"المدرسة",     lesson:"第一册 第6/9课", desc:"师生、书本文具、读写", vol:"1"},
  {key:"time",     name:"时间与日期", ar:"الوقت",       lesson:"第一册 第19课",  desc:"天/周/月/年、早晚、时态", vol:"1"},
  {key:"weather",  name:"天气与季节", ar:"الطقس",       lesson:"第一册 综合情景", desc:"晴雨冷暖、四季描述", vol:"1"},
  {key:"travel",   name:"旅行与机场", ar:"السفر",       lesson:"第一册 第20课",  desc:"交通、酒店、护照、机票", vol:"1"},
  {key:"job",      name:"职业与工作", ar:"العمل",       lesson:"第一册 第11/17课", desc:"职业名称、工作单位、薪资", vol:"1"},
  {key:"desc",     name:"颜色·数字·描述", ar:"الأوصاف",  lesson:"第一册 贯穿",    desc:"颜色、基数词、大小新旧", vol:"1"},
  {key:"health",   name:"健康与就医", ar:"الصحة",       lesson:"第一册 综合情景", desc:"身体、病症、就医用药", vol:"1"},
  /* —— 第二册 —— */
  {key:"visit",    name:"拜访与做客", ar:"الزيارة",     lesson:"一册 第15课 · 二册", desc:"登门拜访、邀请与接待、礼物", vol:"2"},
  {key:"net",      name:"网络与通信", ar:"الاتصالات",   lesson:"一册 第18课 · 二册", desc:"网上来信、电话、信息与邮件", vol:"2"},
  {key:"outing",   name:"郊游与休闲", ar:"الترفيه",     lesson:"一册 第20课 · 二册", desc:"郊游、公园、周末与度假", vol:"2"},
  /* —— 第三册 —— */
  {key:"lang",     name:"语言与文化", ar:"اللغة",       lesson:"一册 第22课 · 三册", desc:"标准语与方言、语言学习、文化", vol:"3"},
  {key:"news",     name:"新闻与媒体", ar:"الأخبار",     lesson:"二册 · 三册阅读",   desc:"报纸广播、电视网络、时事报道", vol:"3"},
  /* —— 第四册 —— */
  {key:"diplo",    name:"外事与访问", ar:"الزيارة الرسمية", lesson:"一册 第23课 · 四册", desc:"外事接待、国事访问、会晤与协议", vol:"4"}
];

/* ============================================================
 * 单词库 WORDS（按情景板块 + 等级 + 词性组织，约 140 词）
 * 字段：id, ar, tr, zh, pos(词性), lvl, scene
 * ============================================================ */
const WORDS = [
  /* —— 问候 —— */
  {id:"w_greet_1",  ar:"مرحباً",        tr:"marḥaban",            zh:"你好（欢迎）", pos:"感叹", lvl:"A1", scene:"greet"},
  {id:"w_greet_2",  ar:"السلام عليكم",  tr:"as-salāmu ʿalaykum",  zh:"祝你平安（您好）", pos:"短语", lvl:"A1", scene:"greet"},
  {id:"w_greet_3",  ar:"صباح الخير",    tr:"ṣabāḥ al-khayr",      zh:"早上好", pos:"短语", lvl:"A1", scene:"greet"},
  {id:"w_greet_4",  ar:"مساء الخير",    tr:"masāʾ al-khayr",      zh:"晚上好", pos:"短语", lvl:"A1", scene:"greet"},
  {id:"w_greet_5",  ar:"كيف حالك",      tr:"kayfa ḥāluk",         zh:"你好吗", pos:"短语", lvl:"A1", scene:"greet"},
  {id:"w_greet_6",  ar:"بخير",          tr:"bikhayr",             zh:"很好（身体/状态）", pos:"形容词", lvl:"A1", scene:"greet"},
  {id:"w_greet_7",  ar:"الحمد لله",     tr:"al-ḥamdu lillāh",     zh:"感谢真主（我很好）", pos:"短语", lvl:"A1", scene:"greet"},
  {id:"w_greet_8",  ar:"أهلاً وسهلاً",  tr:"ahlan wa sahlan",     zh:"欢迎", pos:"短语", lvl:"A1", scene:"greet"},
  {id:"w_greet_9",  ar:"وداعاً",        tr:"wadāʿan",             zh:"再见", pos:"感叹", lvl:"A1", scene:"greet"},
  {id:"w_greet_10", ar:"إلى اللقاء",    tr:"ilā al-liqāʾ",        zh:"回头见", pos:"短语", lvl:"A1", scene:"greet"},
  {id:"w_greet_11", ar:"اسم",           tr:"ism",                 zh:"名字", pos:"名词", lvl:"A1", scene:"greet"},
  {id:"w_greet_12", ar:"صديق",          tr:"ṣadīq",               zh:"朋友", pos:"名词", lvl:"A1", scene:"greet"},

  /* —— 家庭 —— */
  {id:"w_fam_1",  ar:"عائلة",  tr:"ʿāʾila",  zh:"家庭", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_2",  ar:"أب",      tr:"ab",      zh:"父亲", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_3",  ar:"أم",      tr:"umm",     zh:"母亲", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_4",  ar:"أخ",      tr:"akh",     zh:"兄弟", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_5",  ar:"أخت",     tr:"ukht",    zh:"姐妹", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_6",  ar:"ابن",     tr:"ibn",     zh:"儿子", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_7",  ar:"بنت",     tr:"bint",    zh:"女儿", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_8",  ar:"جد",      tr:"jadd",    zh:"祖父 / 祖辈", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_9",  ar:"جدة",     tr:"jadda",   zh:"祖母", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_10", ar:"زوج",     tr:"zawj",    zh:"丈夫", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_11", ar:"زوجة",    tr:"zawja",   zh:"妻子", pos:"名词", lvl:"A1", scene:"family"},
  {id:"w_fam_12", ar:"كبير",    tr:"kabīr",   zh:"大的 / 年长的", pos:"形容词", lvl:"A1", scene:"family"},

  /* —— 问路 —— */
  {id:"w_dir_1",  ar:"أين",       tr:"ayna",        zh:"哪里", pos:"疑问", lvl:"A1", scene:"direction"},
  {id:"w_dir_2",  ar:"شارع",      tr:"shāriʿ",      zh:"街道", pos:"名词", lvl:"A1", scene:"direction"},
  {id:"w_dir_3",  ar:"محطة",      tr:"maḥaṭṭa",     zh:"车站", pos:"名词", lvl:"A1", scene:"direction"},
  {id:"w_dir_4",  ar:"يمين",      tr:"yamīn",       zh:"右", pos:"名词", lvl:"A1", scene:"direction"},
  {id:"w_dir_5",  ar:"يسار",      tr:"yasār",       zh:"左", pos:"名词", lvl:"A1", scene:"direction"},
  {id:"w_dir_6",  ar:"مستقيم",    tr:"mustaqīm",    zh:"直的", pos:"形容词", lvl:"A1", scene:"direction"},
  {id:"w_dir_7",  ar:"قريب",      tr:"qarīb",       zh:"近的", pos:"形容词", lvl:"A1", scene:"direction"},
  {id:"w_dir_8",  ar:"بعيد",      tr:"baʿīd",       zh:"远的", pos:"形容词", lvl:"A1", scene:"direction"},
  {id:"w_dir_9",  ar:"هنا",       tr:"hunā",        zh:"这里", pos:"副词", lvl:"A1", scene:"direction"},
  {id:"w_dir_10", ar:"هناك",      tr:"hunāka",      zh:"那里", pos:"副词", lvl:"A1", scene:"direction"},
  {id:"w_dir_11", ar:"ذهب",       tr:"dhahaba",     zh:"去（过去式）", pos:"动词", lvl:"A1", scene:"direction"},
  {id:"w_dir_12", ar:"ماذا",      tr:"mādhā",       zh:"什么", pos:"疑问", lvl:"A1", scene:"direction"},

  /* —— 餐厅 —— */
  {id:"w_dine_1",  ar:"مطعم",  tr:"maṭʿam",  zh:"餐厅", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_2",  ar:"ماء",    tr:"māʾ",     zh:"水", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_3",  ar:"خبز",    tr:"khubz",   zh:"面包", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_4",  ar:"أرز",    tr:"ʾaruzz",  zh:"米饭", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_5",  ar:"لحم",    tr:"laḥm",    zh:"肉", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_6",  ar:"سمك",    tr:"samak",   zh:"鱼", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_7",  ar:"قهوة",   tr:"qahwa",   zh:"咖啡", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_8",  ar:"شاي",    tr:"shāy",    zh:"茶", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_9",  ar:"سكر",    tr:"sukkar",  zh:"糖", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_10", ar:"ملح",    tr:"milḥ",    zh:"盐", pos:"名词", lvl:"A1", scene:"dining"},
  {id:"w_dine_11", ar:"جائع",   tr:"jāʾiʿ",   zh:"饿的", pos:"形容词", lvl:"A1", scene:"dining"},
  {id:"w_dine_12", ar:"آكل",    tr:"ākul",    zh:"我吃", pos:"动词", lvl:"A1", scene:"dining"},

  /* —— 购物 —— */
  {id:"w_shop_1",  ar:"سوق",     tr:"sūq",      zh:"市场", pos:"名词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_2",  ar:"متجر",    tr:"matjar",   zh:"商店", pos:"名词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_3",  ar:"غالي",    tr:"ghālī",    zh:"贵的", pos:"形容词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_4",  ar:"رخيص",    tr:"rakhīṣ",   zh:"便宜的", pos:"形容词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_5",  ar:"بكم",     tr:"bikam",    zh:"多少钱", pos:"短语", lvl:"A1", scene:"shopping"},
  {id:"w_shop_6",  ar:"ثمن",     tr:"thaman",   zh:"价格", pos:"名词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_7",  ar:"تفاح",    tr:"tuffāḥ",   zh:"苹果", pos:"名词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_8",  ar:"موز",     tr:"mawz",     zh:"香蕉", pos:"名词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_9",  ar:"قميص",    tr:"qamīṣ",    zh:"衬衫", pos:"名词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_10", ar:"حذاء",    tr:"ḥidhāʾ",   zh:"鞋", pos:"名词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_11", ar:"جديد",    tr:"jadīd",    zh:"新的", pos:"形容词", lvl:"A1", scene:"shopping"},
  {id:"w_shop_12", ar:"قديم",    tr:"qadīm",    zh:"旧的", pos:"形容词", lvl:"A1", scene:"shopping"},

  /* —— 学校 —— */
  {id:"w_sch_1",  ar:"مدرسة",   tr:"madrasa",   zh:"学校", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_2",  ar:"طالب",    tr:"ṭālib",     zh:"学生（男）", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_3",  ar:"طالبة",   tr:"ṭāliba",    zh:"学生（女）", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_4",  ar:"مدرس",    tr:"mudarris",  zh:"老师（男）", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_5",  ar:"مدرّسة",  tr:"mudarrisa", zh:"老师（女）", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_6",  ar:"كتاب",    tr:"kitāb",     zh:"书", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_7",  ar:"قلم",     tr:"qalam",     zh:"笔", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_8",  ar:"ورقة",    tr:"waraqa",    zh:"纸", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_9",  ar:"فصل",     tr:"faṣl",      zh:"季节 / 班级", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_10", ar:"جامعة",   tr:"jāmiʿa",    zh:"大学", pos:"名词", lvl:"A1", scene:"school"},
  {id:"w_sch_11", ar:"قرأ",     tr:"qaraʾa",    zh:"读（过去式）", pos:"动词", lvl:"A1", scene:"school"},
  {id:"w_sch_12", ar:"يكتب",    tr:"yaktub",    zh:"他写（现在式）", pos:"动词", lvl:"A1", scene:"school"},

  /* —— 时间 —— */
  {id:"w_time_1",  ar:"يوم",     tr:"yawm",    zh:"天 / 日", pos:"名词", lvl:"A1", scene:"time"},
  {id:"w_time_2",  ar:"أسبوع",   tr:"usbūʿ",   zh:"周", pos:"名词", lvl:"A1", scene:"time"},
  {id:"w_time_3",  ar:"شهر",     tr:"shahr",   zh:"月", pos:"名词", lvl:"A1", scene:"time"},
  {id:"w_time_4",  ar:"سنة",     tr:"sana",    zh:"年", pos:"名词", lvl:"A1", scene:"time"},
  {id:"w_time_5",  ar:"صباح",    tr:"ṣabāḥ",   zh:"早晨", pos:"名词", lvl:"A1", scene:"time"},
  {id:"w_time_6",  ar:"مساء",    tr:"masāʾ",   zh:"傍晚", pos:"名词", lvl:"A1", scene:"time"},
  {id:"w_time_7",  ar:"ليل",     tr:"layl",    zh:"夜", pos:"名词", lvl:"A1", scene:"time"},
  {id:"w_time_8",  ar:"الآن",    tr:"al-āna",  zh:"现在", pos:"副词", lvl:"A1", scene:"time"},
  {id:"w_time_9",  ar:"غداً",    tr:"ghadan",  zh:"明天", pos:"副词", lvl:"A1", scene:"time"},
  {id:"w_time_10", ar:"أمس",     tr:"ams",     zh:"昨天", pos:"副词", lvl:"A1", scene:"time"},
  {id:"w_time_11", ar:"ساعة",    tr:"sāʿa",    zh:"小时 / 钟", pos:"名词", lvl:"A1", scene:"time"},
  {id:"w_time_12", ar:"اليوم",   tr:"al-yawm", zh:"今天", pos:"名词", lvl:"A1", scene:"time"},

  /* —— 天气 —— */
  {id:"w_wth_1",  ar:"طقس",    tr:"ṭaqs",     zh:"天气", pos:"名词", lvl:"A1", scene:"weather"},
  {id:"w_wth_2",  ar:"شمس",    tr:"shams",    zh:"太阳", pos:"名词", lvl:"A1", scene:"weather"},
  {id:"w_wth_3",  ar:"مطر",    tr:"maṭar",    zh:"雨", pos:"名词", lvl:"A1", scene:"weather"},
  {id:"w_wth_4",  ar:"ثلج",    tr:"thalj",    zh:"雪", pos:"名词", lvl:"A1", scene:"weather"},
  {id:"w_wth_5",  ar:"ريح",    tr:"rīḥ",      zh:"风", pos:"名词", lvl:"A1", scene:"weather"},
  {id:"w_wth_6",  ar:"حار",    tr:"ḥār",      zh:"热的", pos:"形容词", lvl:"A1", scene:"weather"},
  {id:"w_wth_7",  ar:"بارد",   tr:"bārid",    zh:"冷的", pos:"形容词", lvl:"A1", scene:"weather"},
  {id:"w_wth_8",  ar:"جميل",   tr:"jamīl",    zh:"美丽的", pos:"形容词", lvl:"A1", scene:"weather"},
  {id:"w_wth_9",  ar:"غائم",   tr:"ghāʾim",   zh:"多云的", pos:"形容词", lvl:"A2", scene:"weather"},
  {id:"w_wth_10", ar:"صافٍ",   tr:"ṣāfin",    zh:"晴朗的", pos:"形容词", lvl:"A2", scene:"weather"},
  {id:"w_wth_11", ar:"فصل",    tr:"faṣl",     zh:"季节", pos:"名词", lvl:"A1", scene:"weather"},
  {id:"w_wth_12", ar:"ربيع",   tr:"rabīʿ",    zh:"春天", pos:"名词", lvl:"A1", scene:"weather"},

  /* —— 旅行 —— */
  {id:"w_trv_1",  ar:"سفر",      tr:"safar",       zh:"旅行", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_2",  ar:"طائرة",    tr:"ṭāʾira",      zh:"飞机", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_3",  ar:"قطار",     tr:"qiṭār",       zh:"火车", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_4",  ar:"سيارة",    tr:"sayyāra",     zh:"汽车", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_5",  ar:"فندق",     tr:"funduq",      zh:"酒店", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_6",  ar:"جواز سفر", tr:"jawāz safar", zh:"护照", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_7",  ar:"تذكرة",    tr:"tadhkara",    zh:"票", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_8",  ar:"مطار",     tr:"maṭār",       zh:"机场", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_9",  ar:"رحلة",     tr:"riḥla",       zh:"旅程", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_10", ar:"دولة",     tr:"dawla",       zh:"国家", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_11", ar:"مدينة",    tr:"madīna",      zh:"城市", pos:"名词", lvl:"A1", scene:"travel"},
  {id:"w_trv_12", ar:"قرية",     tr:"qarya",       zh:"村庄", pos:"名词", lvl:"A1", scene:"travel"},

  /* —— 职业 —— */
  {id:"w_job_1",  ar:"عمل",    tr:"ʿamal",     zh:"工作", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_2",  ar:"طبيب",   tr:"ṭabīb",     zh:"医生（男）", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_3",  ar:"مهندس",  tr:"muhandis",  zh:"工程师", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_4",  ar:"معلم",   tr:"muʿallim",  zh:"教师", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_5",  ar:"ممرضة",  tr:"mummarriḍa",zh:"护士（女）", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_6",  ar:"ممرض",   tr:"mummarriḍ", zh:"护士（男）", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_7",  ar:"شرطي",   tr:"shurṭī",    zh:"警察", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_8",  ar:"موظف",   tr:"mūẓaf",     zh:"职员", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_9",  ar:"جندي",   tr:"jundī",     zh:"士兵", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_10", ar:"راتب",   tr:"rātib",     zh:"工资", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_11", ar:"شركة",   tr:"sharika",   zh:"公司", pos:"名词", lvl:"A1", scene:"job"},
  {id:"w_job_12", ar:"بائع",   tr:"bāyiʿ",     zh:"售货员", pos:"名词", lvl:"A1", scene:"job"},

  /* —— 颜色·数字·描述 —— */
  {id:"w_desc_1",  ar:"أحمر",    tr:"aḥmar",   zh:"红色", pos:"形容词", lvl:"A1", scene:"desc"},
  {id:"w_desc_2",  ar:"أزرق",    tr:"azraq",   zh:"蓝色", pos:"形容词", lvl:"A1", scene:"desc"},
  {id:"w_desc_3",  ar:"أخضر",    tr:"akhḍar",  zh:"绿色", pos:"形容词", lvl:"A1", scene:"desc"},
  {id:"w_desc_4",  ar:"أبيض",    tr:"abyaḍ",   zh:"白色", pos:"形容词", lvl:"A1", scene:"desc"},
  {id:"w_desc_5",  ar:"أسود",    tr:"aswad",   zh:"黑色", pos:"形容词", lvl:"A1", scene:"desc"},
  {id:"w_desc_6",  ar:"أصفر",    tr:"aṣfar",   zh:"黄色", pos:"形容词", lvl:"A1", scene:"desc"},
  {id:"w_desc_7",  ar:"كبير",    tr:"kabīr",   zh:"大的", pos:"形容词", lvl:"A1", scene:"desc"},
  {id:"w_desc_8",  ar:"صغير",    tr:"ṣaghīr",  zh:"小的", pos:"形容词", lvl:"A1", scene:"desc"},
  {id:"w_desc_9",  ar:"واحد",    tr:"wāḥid",   zh:"一", pos:"数词", lvl:"A1", scene:"desc"},
  {id:"w_desc_10", ar:"اثنان",   tr:"ithnān",  zh:"二", pos:"数词", lvl:"A1", scene:"desc"},
  {id:"w_desc_11", ar:"ثلاثة",   tr:"thalātha",zh:"三", pos:"数词", lvl:"A1", scene:"desc"},
  {id:"w_desc_12", ar:"عشرة",    tr:"ʿashara", zh:"十", pos:"数词", lvl:"A1", scene:"desc"},

  /* —— 健康 —— */
  {id:"w_hlth_1",  ar:"صحة",     tr:"ṣiḥḥa",     zh:"健康", pos:"名词", lvl:"A1", scene:"health"},
  {id:"w_hlth_2",  ar:"مستشفى",  tr:"mustashfā", zh:"医院", pos:"名词", lvl:"A1", scene:"health"},
  {id:"w_hlth_3",  ar:"دواء",    tr:"dawāʾ",     zh:"药", pos:"名词", lvl:"A1", scene:"health"},
  {id:"w_hlth_4",  ar:"رأس",     tr:"raʾs",      zh:"头", pos:"名词", lvl:"A1", scene:"health"},
  {id:"w_hlth_5",  ar:"ألم",     tr:"alam",      zh:"疼痛", pos:"名词", lvl:"A1", scene:"health"},
  {id:"w_hlth_6",  ar:"حمى",     tr:"ḥummā",     zh:"发烧", pos:"名词", lvl:"A1", scene:"health"},
  {id:"w_hlth_7",  ar:"سعال",    tr:"suʿāl",     zh:"咳嗽", pos:"名词", lvl:"A1", scene:"health"},
  {id:"w_hlth_8",  ar:"مريض",    tr:"marīḍ",     zh:"生病的", pos:"形容词", lvl:"A1", scene:"health"},
  {id:"w_hlth_9",  ar:"تعبان",   tr:"taʿbān",    zh:"累的", pos:"形容词", lvl:"A1", scene:"health"},
  {id:"w_hlth_10", ar:"راحة",    tr:"rāḥa",      zh:"休息", pos:"名词", lvl:"A1", scene:"health"},
  {id:"w_hlth_11", ar:"جيد",     tr:"jayyid",    zh:"好的", pos:"形容词", lvl:"A1", scene:"health"},
  {id:"w_hlth_12", ar:"طبيب",    tr:"ṭabīb",     zh:"医生", pos:"名词", lvl:"A1", scene:"health"},

  /* —— 问候 · 扩充（第二册） —— */
  {id:"w_greet_13", ar:"لقاء",        tr:"liqāʾ",       zh:"会面 / 见面", pos:"名词", lvl:"A2", scene:"greet", vol:"2"},
  {id:"w_greet_14", ar:"تحية",        tr:"taḥiyya",     zh:"问候 / 致意", pos:"名词", lvl:"A2", scene:"greet", vol:"2"},
  {id:"w_greet_15", ar:"مع السلامة",  tr:"maʿa as-salāma", zh:"再见（保重）", pos:"短语", lvl:"A2", scene:"greet", vol:"2"},
  {id:"w_greet_16", ar:"مسرور",       tr:"masrūr",      zh:"高兴的", pos:"形容词", lvl:"A2", scene:"greet", vol:"2"},
  {id:"w_greet_17", ar:"ضيف",         tr:"ḍayf",        zh:"客人", pos:"名词", lvl:"A2", scene:"greet", vol:"2"},
  {id:"w_greet_18", ar:"تعارف",       tr:"taʿāruf",     zh:"相识", pos:"名词", lvl:"A2", scene:"greet", vol:"2"},

  /* —— 家庭 · 扩充（第二册） —— */
  {id:"w_fam_13", ar:"خال",    tr:"khāl",      zh:"舅舅（母系）", pos:"名词", lvl:"A2", scene:"family", vol:"2"},
  {id:"w_fam_14", ar:"خالة",   tr:"khāla",     zh:"姨母（母系）", pos:"名词", lvl:"A2", scene:"family", vol:"2"},
  {id:"w_fam_15", ar:"عم",     tr:"ʿamm",      zh:"伯父 / 叔父", pos:"名词", lvl:"A2", scene:"family", vol:"2"},
  {id:"w_fam_16", ar:"عمة",    tr:"ʿamma",     zh:"姑母", pos:"名词", lvl:"A2", scene:"family", vol:"2"},
  {id:"w_fam_17", ar:"قريب",   tr:"qarīb",     zh:"亲戚", pos:"名词", lvl:"A2", scene:"family", vol:"2"},
  {id:"w_fam_18", ar:"حفيد",   tr:"ḥafīd",     zh:"孙子", pos:"名词", lvl:"A2", scene:"family", vol:"2"},

  /* —— 问路 · 扩充（第二册） —— */
  {id:"w_dir_13", ar:"شمال",   tr:"shamāl",    zh:"北", pos:"名词", lvl:"A2", scene:"direction", vol:"2"},
  {id:"w_dir_14", ar:"جنوب",   tr:"janūb",     zh:"南", pos:"名词", lvl:"A2", scene:"direction", vol:"2"},
  {id:"w_dir_15", ar:"شرق",    tr:"sharq",     zh:"东", pos:"名词", lvl:"A2", scene:"direction", vol:"2"},
  {id:"w_dir_16", ar:"غرب",    tr:"gharb",     zh:"西", pos:"名词", lvl:"A2", scene:"direction", vol:"2"},
  {id:"w_dir_17", ar:"مسافة",  tr:"masāfa",    zh:"距离", pos:"名词", lvl:"A2", scene:"direction", vol:"2"},
  {id:"w_dir_18", ar:"خريطة",  tr:"kharīṭa",   zh:"地图", pos:"名词", lvl:"A2", scene:"direction", vol:"2"},

  /* —— 餐厅 · 扩充（第二册） —— */
  {id:"w_dine_13", ar:"فطور",    tr:"fuṭūr",    zh:"早餐", pos:"名词", lvl:"A2", scene:"dining", vol:"2"},
  {id:"w_dine_14", ar:"غداء",    tr:"ghadāʾ",   zh:"午餐", pos:"名词", lvl:"A2", scene:"dining", vol:"2"},
  {id:"w_dine_15", ar:"عشاء",    tr:"ʿashāʾ",   zh:"晚餐", pos:"名词", lvl:"A2", scene:"dining", vol:"2"},
  {id:"w_dine_16", ar:"حلوى",    tr:"ḥalwā",    zh:"甜点", pos:"名词", lvl:"A2", scene:"dining", vol:"2"},
  {id:"w_dine_17", ar:"فاتورة",  tr:"fātūra",   zh:"账单", pos:"名词", lvl:"A2", scene:"dining", vol:"2"},
  {id:"w_dine_18", ar:"مطبخ",    tr:"maṭbakh",  zh:"厨房", pos:"名词", lvl:"A2", scene:"dining", vol:"2"},

  /* —— 购物 · 扩充（第二册） —— */
  {id:"w_shop_13", ar:"تخفيض",  tr:"takhfīḍ",  zh:"减价 / 折扣", pos:"名词", lvl:"A2", scene:"shopping", vol:"2"},
  {id:"w_shop_14", ar:"خصم",    tr:"khaṣm",    zh:"折扣", pos:"名词", lvl:"A2", scene:"shopping", vol:"2"},
  {id:"w_shop_15", ar:"نقود",   tr:"nuqūd",    zh:"现金", pos:"名词", lvl:"A2", scene:"shopping", vol:"2"},
  {id:"w_shop_16", ar:"بطاقة",  tr:"biṭāqa",   zh:"卡", pos:"名词", lvl:"A2", scene:"shopping", vol:"2"},
  {id:"w_shop_17", ar:"بضاعة",  tr:"biḍāʿa",   zh:"货物 / 商品", pos:"名词", lvl:"A2", scene:"shopping", vol:"2"},
  {id:"w_shop_18", ar:"محفظة",  tr:"miḥfaẓa",  zh:"钱包", pos:"名词", lvl:"A2", scene:"shopping", vol:"2"},

  /* —— 学校 · 扩充（第二册） —— */
  {id:"w_sch_13", ar:"درس",     tr:"dars",     zh:"功课 / 课", pos:"名词", lvl:"A2", scene:"school", vol:"2"},
  {id:"w_sch_14", ar:"امتحان",  tr:"imtiḥān",  zh:"考试", pos:"名词", lvl:"A2", scene:"school", vol:"2"},
  {id:"w_sch_15", ar:"واجب",    tr:"wājib",    zh:"作业", pos:"名词", lvl:"A2", scene:"school", vol:"2"},
  {id:"w_sch_16", ar:"مكتبة",   tr:"maktaba",  zh:"图书馆", pos:"名词", lvl:"A2", scene:"school", vol:"2"},
  {id:"w_sch_17", ar:"أستاذ",   tr:"ʾustādh",  zh:"教授 / 老师（尊称）", pos:"名词", lvl:"A2", scene:"school", vol:"2"},
  {id:"w_sch_18", ar:"تلميذ",   tr:"tilmīdh",  zh:"学生（中小学）", pos:"名词", lvl:"A2", scene:"school", vol:"2"},

  /* —— 时间 · 扩充（第二册） —— */
  {id:"w_time_13", ar:"دقيقة",    tr:"daqīqa",    zh:"分钟", pos:"名词", lvl:"A2", scene:"time", vol:"2"},
  {id:"w_time_14", ar:"موعد",     tr:"mawʿid",    zh:"约定时间 / 约会", pos:"名词", lvl:"A2", scene:"time", vol:"2"},
  {id:"w_time_15", ar:"تاريخ",    tr:"tārīkh",    zh:"日期 / 历史", pos:"名词", lvl:"A2", scene:"time", vol:"2"},
  {id:"w_time_16", ar:"بعد غد",   tr:"baʿda ghad", zh:"后天", pos:"副词", lvl:"A2", scene:"time", vol:"2"},
  {id:"w_time_17", ar:"قبل أمس",  tr:"qabla ams",  zh:"前天", pos:"副词", lvl:"A2", scene:"time", vol:"2"},
  {id:"w_time_18", ar:"تقويم",    tr:"taqwīm",    zh:"日历", pos:"名词", lvl:"A2", scene:"time", vol:"2"},

  /* —— 天气 · 扩充（第二册） —— */
  {id:"w_wth_13", ar:"حرارة",    tr:"ḥarāra",    zh:"热度 / 温度", pos:"名词", lvl:"A2", scene:"weather", vol:"2"},
  {id:"w_wth_14", ar:"سحابة",    tr:"saḥāba",    zh:"云", pos:"名词", lvl:"A2", scene:"weather", vol:"2"},
  {id:"w_wth_15", ar:"عاصفة",    tr:"ʿāṣifa",    zh:"暴风雨", pos:"名词", lvl:"A2", scene:"weather", vol:"2"},
  {id:"w_wth_16", ar:"صيف",      tr:"ṣayf",      zh:"夏天", pos:"名词", lvl:"A2", scene:"weather", vol:"2"},
  {id:"w_wth_17", ar:"خريف",     tr:"kharīf",    zh:"秋天", pos:"名词", lvl:"A2", scene:"weather", vol:"2"},
  {id:"w_wth_18", ar:"شتاء",     tr:"shitāʾ",    zh:"冬天", pos:"名词", lvl:"A2", scene:"weather", vol:"2"},

  /* —— 旅行 · 扩充（第二册） —— */
  {id:"w_trv_13", ar:"أمتعة",    tr:"amtiʿa",    zh:"行李", pos:"名词", lvl:"A2", scene:"travel", vol:"2"},
  {id:"w_trv_14", ar:"حقيبة",    tr:"ḥaqība",    zh:"手提箱 / 包", pos:"名词", lvl:"A2", scene:"travel", vol:"2"},
  {id:"w_trv_15", ar:"وصول",     tr:"wuṣūl",     zh:"到达", pos:"名词", lvl:"A2", scene:"travel", vol:"2"},
  {id:"w_trv_16", ar:"مغادرة",   tr:"mughādara", zh:"离开 / 出发", pos:"名词", lvl:"A2", scene:"travel", vol:"2"},
  {id:"w_trv_17", ar:"حجز",      tr:"ḥajz",      zh:"预订", pos:"名词", lvl:"A2", scene:"travel", vol:"2"},
  {id:"w_trv_18", ar:"مفتاح",    tr:"miftāḥ",    zh:"钥匙", pos:"名词", lvl:"A2", scene:"travel", vol:"2"},

  /* —— 职业 · 扩充（第二册） —— */
  {id:"w_job_13", ar:"وظيفة",  tr:"waẓīfa",  zh:"职位 / 工作", pos:"名词", lvl:"A2", scene:"job", vol:"2"},
  {id:"w_job_14", ar:"مدير",   tr:"mudīr",   zh:"经理", pos:"名词", lvl:"A2", scene:"job", vol:"2"},
  {id:"w_job_15", ar:"محام",   tr:"muḥāmī",  zh:"律师", pos:"名词", lvl:"A2", scene:"job", vol:"2"},
  {id:"w_job_16", ar:"تاجر",   tr:"tājir",   zh:"商人", pos:"名词", lvl:"A2", scene:"job", vol:"2"},
  {id:"w_job_17", ar:"عامل",   tr:"ʿāmil",   zh:"工人", pos:"名词", lvl:"A2", scene:"job", vol:"2"},
  {id:"w_job_18", ar:"مصنع",   tr:"maṣnaʿ",  zh:"工厂", pos:"名词", lvl:"A2", scene:"job", vol:"2"},

  /* —— 颜色·描述 · 扩充（第二册） —— */
  {id:"w_desc_13", ar:"بنفسجي",    tr:"banafsajī", zh:"紫色", pos:"形容词", lvl:"A2", scene:"desc", vol:"2"},
  {id:"w_desc_14", ar:"رمادي",     tr:"ramādī",    zh:"灰色", pos:"形容词", lvl:"A2", scene:"desc", vol:"2"},
  {id:"w_desc_15", ar:"برتقالي",   tr:"burtuqālī", zh:"橙色", pos:"形容词", lvl:"A2", scene:"desc", vol:"2"},
  {id:"w_desc_16", ar:"نحيف",      tr:"naḥīf",     zh:"瘦的", pos:"形容词", lvl:"A2", scene:"desc", vol:"2"},
  {id:"w_desc_17", ar:"سمين",      tr:"samīn",     zh:"胖的", pos:"形容词", lvl:"A2", scene:"desc", vol:"2"},
  {id:"w_desc_18", ar:"قوي",       tr:"qawī",      zh:"强壮的", pos:"形容词", lvl:"A2", scene:"desc", vol:"2"},

  /* —— 健康 · 扩充（第二册） —— */
  {id:"w_hlth_13", ar:"صيدلية",  tr:"ṣaydaliyya", zh:"药店", pos:"名词", lvl:"A2", scene:"health", vol:"2"},
  {id:"w_hlth_14", ar:"عيادة",   tr:"ʿiyāda",     zh:"诊所", pos:"名词", lvl:"A2", scene:"health", vol:"2"},
  {id:"w_hlth_15", ar:"طوارئ",   tr:"ṭawāriʾ",    zh:"急诊", pos:"名词", lvl:"A2", scene:"health", vol:"2"},
  {id:"w_hlth_16", ar:"بطن",     tr:"baṭn",       zh:"肚子", pos:"名词", lvl:"A2", scene:"health", vol:"2"},
  {id:"w_hlth_17", ar:"معدة",    tr:"miʿida",     zh:"胃", pos:"名词", lvl:"A2", scene:"health", vol:"2"},
  {id:"w_hlth_18", ar:"وصفة",    tr:"waṣfa",      zh:"处方", pos:"名词", lvl:"A2", scene:"health", vol:"2"},

  /* —— 拜访与做客（第一~二册） —— */
  {id:"w_visit_1",  ar:"زيارة",       tr:"ziyāra",       zh:"拜访 / 访问", pos:"名词", lvl:"A1", scene:"visit", vol:"2"},
  {id:"w_visit_2",  ar:"مضيف",        tr:"muḍīf",        zh:"主人（接待者）", pos:"名词", lvl:"A2", scene:"visit", vol:"2"},
  {id:"w_visit_3",  ar:"هدية",        tr:"hadiyya",      zh:"礼物", pos:"名词", lvl:"A1", scene:"visit", vol:"2"},
  {id:"w_visit_4",  ar:"كرسي",        tr:"kursī",        zh:"椅子", pos:"名词", lvl:"A1", scene:"visit", vol:"2"},
  {id:"w_visit_5",  ar:"طاولة",       tr:"ṭāwila",       zh:"桌子", pos:"名词", lvl:"A1", scene:"visit", vol:"2"},
  {id:"w_visit_6",  ar:"جرس",         tr:"jaras",        zh:"门铃", pos:"名词", lvl:"A2", scene:"visit", vol:"2"},
  {id:"w_visit_7",  ar:"مجلس",        tr:"majlis",       zh:"客厅 / 座席", pos:"名词", lvl:"A2", scene:"visit", vol:"2"},
  {id:"w_visit_8",  ar:"طعام",        tr:"ṭaʿām",        zh:"食物", pos:"名词", lvl:"A1", scene:"visit", vol:"2"},
  {id:"w_visit_9",  ar:"تفضل",        tr:"tafaḍḍal",     zh:"请（进 / 坐 / 用）", pos:"动词", lvl:"A2", scene:"visit", vol:"2"},
  {id:"w_visit_10", ar:"ودود",        tr:"wadūd",        zh:"友好的", pos:"形容词", lvl:"A2", scene:"visit", vol:"2"},
  {id:"w_visit_11", ar:"عودة",        tr:"ʿawda",        zh:"归来 / 返回", pos:"名词", lvl:"A2", scene:"visit", vol:"2"},
  {id:"w_visit_12", ar:"جيران",       tr:"jīrān",        zh:"邻居（复数）", pos:"名词", lvl:"A2", scene:"visit", vol:"2"},

  /* —— 网络与通信（第一~二册） —— */
  {id:"w_net_1",  ar:"هاتف",          tr:"hātif",        zh:"电话", pos:"名词", lvl:"A1", scene:"net", vol:"2"},
  {id:"w_net_2",  ar:"جوال",          tr:"jawwāl",       zh:"手机", pos:"名词", lvl:"A2", scene:"net", vol:"2"},
  {id:"w_net_3",  ar:"حاسوب",         tr:"ḥāsūb",        zh:"电脑", pos:"名词", lvl:"A2", scene:"net", vol:"2"},
  {id:"w_net_4",  ar:"إنترنت",        tr:"ʾinternet",    zh:"互联网", pos:"名词", lvl:"A2", scene:"net", vol:"2"},
  {id:"w_net_5",  ar:"بريد",          tr:"barīd",        zh:"邮政 / 邮件", pos:"名词", lvl:"A2", scene:"net", vol:"2"},
  {id:"w_net_6",  ar:"بريد إلكتروني", tr:"barīd ʾiliktrūnī", zh:"电子邮件", pos:"名词", lvl:"A2", scene:"net", vol:"2"},
  {id:"w_net_7",  ar:"رسالة",         tr:"risāla",       zh:"消息 / 信", pos:"名词", lvl:"A1", scene:"net", vol:"2"},
  {id:"w_net_8",  ar:"رقم",           tr:"raqm",         zh:"号码", pos:"名词", lvl:"A1", scene:"net", vol:"2"},
  {id:"w_net_9",  ar:"اتصال",         tr:"ittiṣāl",      zh:"通话 / 联系", pos:"名词", lvl:"A2", scene:"net", vol:"2"},
  {id:"w_net_10", ar:"موقع",          tr:"mawqiʿ",       zh:"网站", pos:"名词", lvl:"A2", scene:"net", vol:"2"},
  {id:"w_net_11", ar:"صفحة",          tr:"ṣafḥa",        zh:"页面", pos:"名词", lvl:"A2", scene:"net", vol:"2"},
  {id:"w_net_12", ar:"عنوان",         tr:"ʿunwān",       zh:"地址 / 标题", pos:"名词", lvl:"A2", scene:"net", vol:"2"},

  /* —— 郊游与休闲（第一~二册） —— */
  {id:"w_out_1",  ar:"حديقة",         tr:"ḥadīqa",       zh:"花园 / 公园", pos:"名词", lvl:"A1", scene:"outing", vol:"2"},
  {id:"w_out_2",  ar:"جبل",           tr:"jabal",        zh:"山", pos:"名词", lvl:"A1", scene:"outing", vol:"2"},
  {id:"w_out_3",  ar:"نهر",           tr:"nahr",         zh:"河", pos:"名词", lvl:"A1", scene:"outing", vol:"2"},
  {id:"w_out_4",  ar:"بحر",           tr:"baḥr",         zh:"海", pos:"名词", lvl:"A1", scene:"outing", vol:"2"},
  {id:"w_out_5",  ar:"شاطئ",          tr:"shāṭiʾ",       zh:"海滩", pos:"名词", lvl:"A2", scene:"outing", vol:"2"},
  {id:"w_out_6",  ar:"نزهة",          tr:"nuzha",        zh:"郊游 / 散步", pos:"名词", lvl:"A2", scene:"outing", vol:"2"},
  {id:"w_out_7",  ar:"عطلة",          tr:"ʿuṭla",        zh:"假期", pos:"名词", lvl:"A2", scene:"outing", vol:"2"},
  {id:"w_out_8",  ar:"نهاية الأسبوع", tr:"nihāyat al-usbūʿ", zh:"周末", pos:"名词", lvl:"A2", scene:"outing", vol:"2"},
  {id:"w_out_9",  ar:"صورة",          tr:"ṣūra",         zh:"照片 / 图片", pos:"名词", lvl:"A1", scene:"outing", vol:"2"},
  {id:"w_out_10", ar:"تصوير",         tr:"taṣwīr",       zh:"摄影", pos:"名词", lvl:"A2", scene:"outing", vol:"2"},
  {id:"w_out_11", ar:"قارب",          tr:"qārib",        zh:"船", pos:"名词", lvl:"A2", scene:"outing", vol:"2"},
  {id:"w_out_12", ar:"سباحة",         tr:"sibāḥa",       zh:"游泳", pos:"名词", lvl:"A2", scene:"outing", vol:"2"},

  /* —— 语言与文化（第一~三册） —— */
  {id:"w_lang_1",  ar:"لغة",           tr:"lugha",        zh:"语言", pos:"名词", lvl:"A1", scene:"lang", vol:"3"},
  {id:"w_lang_2",  ar:"لغة عربية",     tr:"lugha ʿarabiyya", zh:"阿拉伯语", pos:"名词", lvl:"A1", scene:"lang", vol:"3"},
  {id:"w_lang_3",  ar:"معنى",          tr:"maʿnā",        zh:"意思", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},
  {id:"w_lang_4",  ar:"كلمة",          tr:"kalima",       zh:"单词", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},
  {id:"w_lang_5",  ar:"جملة",          tr:"jumla",        zh:"句子", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},
  {id:"w_lang_6",  ar:"لهجة",          tr:"lahja",        zh:"方言", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},
  {id:"w_lang_7",  ar:"فصحى",          tr:"fuṣḥā",        zh:"标准语", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},
  {id:"w_lang_8",  ar:"حوار",          tr:"ḥiwār",        zh:"对话", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},
  {id:"w_lang_9",  ar:"نطق",           tr:"nuṭq",         zh:"发音", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},
  {id:"w_lang_10", ar:"كتابة",         tr:"kitāba",       zh:"书写", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},
  {id:"w_lang_11", ar:"ثقافة",         tr:"thaqāfa",      zh:"文化", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},
  {id:"w_lang_12", ar:"قواعد",         tr:"qawāʿid",      zh:"语法（规则）", pos:"名词", lvl:"A2", scene:"lang", vol:"3"},

  /* —— 外事与访问（第一~四册） —— */
  {id:"w_dip_1",  ar:"سفير",           tr:"safīr",        zh:"大使", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_2",  ar:"سفارة",          tr:"safāra",       zh:"大使馆", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_3",  ar:"رئيس",           tr:"raʾīs",        zh:"总统 / 主席", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_4",  ar:"وزير",           tr:"wazīr",        zh:"部长", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_5",  ar:"وفد",            tr:"wafd",         zh:"代表团", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_6",  ar:"مؤتمر",          tr:"muʾtamar",     zh:"会议 / 大会", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_7",  ar:"اتفاق",          tr:"ittifāq",      zh:"协议", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_8",  ar:"علاقات",         tr:"ʿalāqāt",      zh:"关系", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_9",  ar:"تعاون",          tr:"taʿāwun",      zh:"合作", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_10", ar:"سياسة",          tr:"siyāsa",       zh:"政治", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_11", ar:"اقتصاد",         tr:"iqtiṣād",      zh:"经济", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},
  {id:"w_dip_12", ar:"زيارة رسمية",    tr:"ziyāra rasmīyya", zh:"正式访问", pos:"名词", lvl:"A2", scene:"diplo", vol:"4"},

  /* —— 新闻与媒体（第二~三册） —— */
  {id:"w_news_1",  ar:"خبر",           tr:"khabar",       zh:"新闻 / 消息", pos:"名词", lvl:"A1", scene:"news", vol:"3"},
  {id:"w_news_2",  ar:"صحيفة",         tr:"ṣaḥīfa",       zh:"报纸", pos:"名词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_3",  ar:"مجلة",          tr:"majalla",      zh:"杂志", pos:"名词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_4",  ar:"راديو",         tr:"rādyū",        zh:"收音机", pos:"名词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_5",  ar:"تلفاز",         tr:"tilfāz",       zh:"电视机", pos:"名词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_6",  ar:"قناة",          tr:"qanāh",        zh:"频道", pos:"名词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_7",  ar:"برنامج",        tr:"barnāmaj",     zh:"节目 / 程序", pos:"名词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_8",  ar:"مقابلة",        tr:"muqābala",     zh:"采访", pos:"名词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_9",  ar:"مراسل",         tr:"murāsil",      zh:"记者（通讯员）", pos:"名词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_10", ar:"حدث",           tr:"ḥadath",       zh:"事件", pos:"名词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_11", ar:"عالمي",         tr:"ʿālamī",       zh:"国际的 / 世界的", pos:"形容词", lvl:"A2", scene:"news", vol:"3"},
  {id:"w_news_12", ar:"أخبار",         tr:"ʾakhbār",      zh:"新闻（复数）", pos:"名词", lvl:"A1", scene:"news", vol:"3"},

  /* ============ B1 词库（第三~六册） ============ */
  /* —— 问候 B1 —— */
  {id:"w_greet_19", ar:"سعادة",   tr:"saʿāda",   zh:"幸福", pos:"名词", lvl:"B1", scene:"greet", vol:"3"},
  {id:"w_greet_20", ar:"أمنية",   tr:"umniyya",  zh:"愿望", pos:"名词", lvl:"B1", scene:"greet", vol:"3"},
  {id:"w_greet_21", ar:"تهنئة",   tr:"tahniʾa",  zh:"祝贺", pos:"名词", lvl:"B1", scene:"greet", vol:"3"},
  /* —— 家庭 B1 —— */
  {id:"w_fam_19", ar:"تربية",   tr:"tarbiya",  zh:"教养 / 教育", pos:"名词", lvl:"B1", scene:"family", vol:"3"},
  {id:"w_fam_20", ar:"زواج",    tr:"zawāj",    zh:"婚姻", pos:"名词", lvl:"B1", scene:"family", vol:"3"},
  {id:"w_fam_21", ar:"مولود",   tr:"mawlūd",   zh:"新生儿", pos:"名词", lvl:"B1", scene:"family", vol:"3"},
  /* —— 问路 B1 —— */
  {id:"w_dir_19", ar:"اتجاه",      tr:"ittijāh",      zh:"方向", pos:"名词", lvl:"B1", scene:"direction", vol:"3"},
  {id:"w_dir_20", ar:"مفترق",      tr:"mufṭaraq",     zh:"交叉口", pos:"名词", lvl:"B1", scene:"direction", vol:"3"},
  {id:"w_dir_21", ar:"طريق سريع",  tr:"ṭarīq sarīʿ",  zh:"高速公路", pos:"名词", lvl:"B1", scene:"direction", vol:"3"},
  /* —— 餐厅 B1 —— */
  {id:"w_dine_19", ar:"وجبة",  tr:"wajba",   zh:"一餐", pos:"名词", lvl:"B1", scene:"dining", vol:"3"},
  {id:"w_dine_20", ar:"شهي",   tr:"shahī",   zh:"美味的", pos:"形容词", lvl:"B1", scene:"dining", vol:"3"},
  {id:"w_dine_21", ar:"نادل",  tr:"nādil",   zh:"服务员", pos:"名词", lvl:"B1", scene:"dining", vol:"3"},
  /* —— 购物 B1 —— */
  {id:"w_shop_19", ar:"جودة",     tr:"jawda",      zh:"质量", pos:"名词", lvl:"B1", scene:"shopping", vol:"3"},
  {id:"w_shop_20", ar:"ضمان",     tr:"ḍamān",      zh:"保修 / 担保", pos:"名词", lvl:"B1", scene:"shopping", vol:"3"},
  {id:"w_shop_21", ar:"متسوق",    tr:"mutasawwiq", zh:"购物者", pos:"名词", lvl:"B1", scene:"shopping", vol:"3"},
  /* —— 学校 B1 —— */
  {id:"w_sch_19", ar:"منهج",    tr:"manhaj",    zh:"课程大纲", pos:"名词", lvl:"B1", scene:"school", vol:"3"},
  {id:"w_sch_20", ar:"بحث",     tr:"baḥth",     zh:"研究 / 论文", pos:"名词", lvl:"B1", scene:"school", vol:"3"},
  {id:"w_sch_21", ar:"مشروع",   tr:"mashrūʿ",   zh:"项目", pos:"名词", lvl:"B1", scene:"school", vol:"3"},
  /* —— 时间 B1 —— */
  {id:"w_time_19", ar:"عصر",   tr:"ʿaṣr",   zh:"下午 / 时代", pos:"名词", lvl:"B1", scene:"time", vol:"3"},
  {id:"w_time_20", ar:"لاحق",  tr:"lāḥiq",  zh:"之后的", pos:"形容词", lvl:"B1", scene:"time", vol:"3"},
  {id:"w_time_21", ar:"فوري",  tr:"fawrī",  zh:"立即的", pos:"形容词", lvl:"B1", scene:"time", vol:"3"},
  /* —— 天气 B1 —— */
  {id:"w_wth_19", ar:"رطوبة",  tr:"ruṭūba",  zh:"湿度", pos:"名词", lvl:"B1", scene:"weather", vol:"3"},
  {id:"w_wth_20", ar:"مناخ",   tr:"munākh",  zh:"气候", pos:"名词", lvl:"B1", scene:"weather", vol:"3"},
  {id:"w_wth_21", ar:"أجواء",  tr:"ajwāʾ",   zh:"气氛 / 天气", pos:"名词", lvl:"B1", scene:"weather", vol:"3"},
  /* —— 旅行 B1 —— */
  {id:"w_trv_19", ar:"إقامة",    tr:"iqāma",    zh:"居留 / 住宿", pos:"名词", lvl:"B1", scene:"travel", vol:"3"},
  {id:"w_trv_20", ar:"سياحي",    tr:"siyāḥī",   zh:"旅游的", pos:"形容词", lvl:"B1", scene:"travel", vol:"3"},
  {id:"w_trv_21", ar:"منتجع",    tr:"muntajaʿ", zh:"度假村", pos:"名词", lvl:"B1", scene:"travel", vol:"3"},
  /* —— 职业 B1 —— */
  {id:"w_job_19", ar:"إنتاج",   tr:"intāj",    zh:"生产", pos:"名词", lvl:"B1", scene:"job", vol:"3"},
  {id:"w_job_20", ar:"تجارة",   tr:"tijāra",   zh:"贸易", pos:"名词", lvl:"B1", scene:"job", vol:"3"},
  {id:"w_job_21", ar:"مبيعات",  tr:"mabīʿāt",  zh:"销售（复数）", pos:"名词", lvl:"B1", scene:"job", vol:"3"},
  /* —— 描述 B1 —— */
  {id:"w_desc_19", ar:"فاخر",   tr:"fākhir",  zh:"豪华的", pos:"形容词", lvl:"B1", scene:"desc", vol:"3"},
  {id:"w_desc_20", ar:"بسيط",   tr:"basīṭ",   zh:"简单的", pos:"形容词", lvl:"B1", scene:"desc", vol:"3"},
  {id:"w_desc_21", ar:"مذهل",   tr:"mudh-hil",zh:"惊人的", pos:"形容词", lvl:"B1", scene:"desc", vol:"3"},
  /* —— 健康 B1 —— */
  {id:"w_hlth_19", ar:"عملية",  tr:"ʿamaliyya", zh:"手术", pos:"名词", lvl:"B1", scene:"health", vol:"3"},
  {id:"w_hlth_20", ar:"فحص",    tr:"faḥṣ",      zh:"检查", pos:"名词", lvl:"B1", scene:"health", vol:"3"},
  {id:"w_hlth_21", ar:"علاج",   tr:"ʿilāj",     zh:"治疗", pos:"名词", lvl:"B1", scene:"health", vol:"3"},
  /* —— 拜访 B1 —— */
  {id:"w_visit_13", ar:"وليمة",     tr:"walīma",      zh:"宴席", pos:"名词", lvl:"B1", scene:"visit", vol:"3"},
  {id:"w_visit_14", ar:"ترحيب",     tr:"tarḥīb",      zh:"欢迎 / 接待", pos:"名词", lvl:"B1", scene:"visit", vol:"3"},
  {id:"w_visit_15", ar:"ضيافة",     tr:"ḍiyāfa",      zh:"款待", pos:"名词", lvl:"B1", scene:"visit", vol:"3"},
  {id:"w_visit_16", ar:"دعوة",      tr:"daʿwa",       zh:"邀请", pos:"名词", lvl:"B1", scene:"visit", vol:"3"},
  {id:"w_visit_17", ar:"تقدير",     tr:"taqdīr",      zh:"感激 / 赏识", pos:"名词", lvl:"B1", scene:"visit", vol:"3"},
  {id:"w_visit_18", ar:"مبكر",      tr:"mubakkir",    zh:"早的", pos:"形容词", lvl:"B1", scene:"visit", vol:"3"},
  /* —— 网络 B1 —— */
  {id:"w_net_13", ar:"تطبيق",        tr:"taṭbīq",       zh:"应用 / 软件", pos:"名词", lvl:"B1", scene:"net", vol:"3"},
  {id:"w_net_14", ar:"بيانات",       tr:"bayānāt",      zh:"数据", pos:"名词", lvl:"B1", scene:"net", vol:"3"},
  {id:"w_net_15", ar:"شبكة",         tr:"shabaka",      zh:"网络", pos:"名词", lvl:"B1", scene:"net", vol:"3"},
  {id:"w_net_16", ar:"صندوق بريد",   tr:"ṣundūq barīd", zh:"邮箱", pos:"名词", lvl:"B1", scene:"net", vol:"3"},
  {id:"w_net_17", ar:"إرسال",        tr:"ʾirsāl",       zh:"发送", pos:"名词", lvl:"B1", scene:"net", vol:"3"},
  {id:"w_net_18", ar:"استقبال",      tr:"istiqbāl",     zh:"接收", pos:"名词", lvl:"B1", scene:"net", vol:"3"},
  /* —— 郊游 B1 —— */
  {id:"w_out_13", ar:"مغامرة",    tr:"mughāmara",  zh:"冒险", pos:"名词", lvl:"B1", scene:"outing", vol:"3"},
  {id:"w_out_14", ar:"استرخاء",   tr:"istirkhāʾ",  zh:"放松", pos:"名词", lvl:"B1", scene:"outing", vol:"3"},
  {id:"w_out_15", ar:"مخيم",      tr:"mukhayyam",  zh:"营地", pos:"名词", lvl:"B1", scene:"outing", vol:"3"},
  {id:"w_out_16", ar:"شواء",      tr:"shiwāʾ",     zh:"烧烤", pos:"名词", lvl:"B1", scene:"outing", vol:"3"},
  {id:"w_out_17", ar:"غروب",      tr:"ghurūb",     zh:"日落", pos:"名词", lvl:"B1", scene:"outing", vol:"3"},
  {id:"w_out_18", ar:"منظر",      tr:"manẓar",     zh:"景色", pos:"名词", lvl:"B1", scene:"outing", vol:"3"},
  /* —— 语言 B1 —— */
  {id:"w_lang_13", ar:"اشتقاق",   tr:"ishtiqāq",   zh:"派生", pos:"名词", lvl:"B1", scene:"lang", vol:"3"},
  {id:"w_lang_14", ar:"تصريف",    tr:"taṣrīf",     zh:"词法变位", pos:"名词", lvl:"B1", scene:"lang", vol:"3"},
  {id:"w_lang_15", ar:"مفردات",   tr:"mufradāt",   zh:"词汇", pos:"名词", lvl:"B1", scene:"lang", vol:"3"},
  {id:"w_lang_16", ar:"إملاء",    tr:"imlāʾ",      zh:"听写", pos:"名词", lvl:"B1", scene:"lang", vol:"3"},
  {id:"w_lang_17", ar:"أدب",      tr:"ʾadab",      zh:"文学", pos:"名词", lvl:"B1", scene:"lang", vol:"3"},
  {id:"w_lang_18", ar:"شعر",      tr:"shiʿr",      zh:"诗歌", pos:"名词", lvl:"B1", scene:"lang", vol:"3"},
  /* —— 外事 B1（第四~六册） —— */
  {id:"w_dip_13", ar:"قمة",          tr:"qimma",         zh:"峰会", pos:"名词", lvl:"B1", scene:"diplo", vol:"4"},
  {id:"w_dip_14", ar:"معاهدة",       tr:"muʿāhada",      zh:"条约", pos:"名词", lvl:"B1", scene:"diplo", vol:"4"},
  {id:"w_dip_15", ar:"توقيع",        tr:"tawqīʿ",        zh:"签署", pos:"名词", lvl:"B1", scene:"diplo", vol:"4"},
  {id:"w_dip_16", ar:"اجتماع",       tr:"ijtimāʿ",       zh:"会议", pos:"名词", lvl:"B1", scene:"diplo", vol:"4"},
  {id:"w_dip_17", ar:"بيان مشترك",   tr:"bayān mushtarak", zh:"联合声明", pos:"名词", lvl:"B1", scene:"diplo", vol:"4"},
  {id:"w_dip_18", ar:"عقد",          tr:"ʿaqd",          zh:"合同 / 协议", pos:"名词", lvl:"B1", scene:"diplo", vol:"4"},
  /* —— 新闻 B1 —— */
  {id:"w_news_13", ar:"تقرير",   tr:"taqrīr",   zh:"报道", pos:"名词", lvl:"B1", scene:"news", vol:"3"},
  {id:"w_news_14", ar:"تحليل",   tr:"taḥlīl",   zh:"分析", pos:"名词", lvl:"B1", scene:"news", vol:"3"},
  {id:"w_news_15", ar:"تعليق",   tr:"taʿlīq",   zh:"评论", pos:"名词", lvl:"B1", scene:"news", vol:"3"},
  {id:"w_news_16", ar:"تصريح",   tr:"taṣrīḥ",   zh:"声明", pos:"名词", lvl:"B1", scene:"news", vol:"3"},
  {id:"w_news_17", ar:"عناوين",  tr:"ʿanāwīn",  zh:"标题（复数）", pos:"名词", lvl:"B1", scene:"news", vol:"3"},
  {id:"w_news_18", ar:"عاجل",    tr:"ʿājil",    zh:"紧急的", pos:"形容词", lvl:"B1", scene:"news", vol:"3"}
];

/* ============================================================
 * 词根族词库（FAMILIES，加载时展开注入 WORDS）
 * 字段：root(词根) / scene / vol / lvl / ex(族级例句) / f(派生词族)
 * 册次权重向第五、六册倾斜。
 * ============================================================ */
const FAMILIES_5 = [
  {root:"كتب",scene:"school",vol:"5",lvl:"B1",ex:[["هذا الكاتب مشهور جدا","这位作家非常有名"],["أكتب رسالة إلى صديقي","我在给朋友写信"]],f:[
    {ar:"كاتب",tr:"kātib",zh:"作家",pos:"名词"},{ar:"مكتوب",tr:"maktūb",zh:"书信 / 写好的",pos:"名词"},{ar:"كتابة",tr:"kitāba",zh:"写作",pos:"名词"},{ar:"كتّاب",tr:"kuttāb",zh:"作家们",pos:"名词"},{ar:"مكتب",tr:"maktab",zh:"书桌 / 办公室",pos:"名词"}]},
  {root:"قرأ",scene:"lang",vol:"5",lvl:"B1",ex:[["القراءة عادة مفيدة","阅读是有益的习惯"]],f:[
    {ar:"قارئ",tr:"qāriʾ",zh:"读者",pos:"名词"},{ar:"قارئة",tr:"qāriʾa",zh:"女读者",pos:"名词"},{ar:"قرّاء",tr:"qurrāʾ",zh:"读者们",pos:"名词"},{ar:"مقروء",tr:"maqrūʾ",zh:"被阅读的",pos:"形容词"}]},
  {root:"درس",scene:"school",vol:"5",lvl:"B1",ex:[["الدراسة تتطلب صبرا","学习需要耐心"]],f:[
    {ar:"دارس",tr:"dāris",zh:"学习者",pos:"名词"},{ar:"مذاكرة",tr:"mudhākara",zh:"复习",pos:"名词"},{ar:"مدروس",tr:"madrūs",zh:"经过研究的",pos:"形容词"},{ar:"دراسي",tr:"dirāsī",zh:"学业的",pos:"形容词"}]},
  {root:"علم",scene:"lang",vol:"5",lvl:"B1",ex:[["العلم نور","知识是光明"],["المعلومات متوفرة على الإنترنت","信息在网上可获得"]],f:[
    {ar:"عالم",tr:"ʿālim",zh:"科学家 / 学者",pos:"名词"},{ar:"علماء",tr:"ʿulamāʾ",zh:"学者们",pos:"名词"},{ar:"علوم",tr:"ʿulūm",zh:"科学",pos:"名词"},{ar:"تعليم",tr:"taʿlīm",zh:"教育",pos:"名词"},{ar:"معلومة",tr:"maʿlūma",zh:"信息",pos:"名词"},{ar:"معلومات",tr:"maʿlūmāt",zh:"资料 / 信息",pos:"名词"}]},
  {root:"بحث",scene:"school",vol:"5",lvl:"B1",ex:[["البحث العلمي مهم جدا","科学研究非常重要"]],f:[
    {ar:"باحث",tr:"bāḥith",zh:"研究者",pos:"名词"},{ar:"بحوث",tr:"buḥūth",zh:"研究 / 论文（复数）",pos:"名词"},{ar:"بحثي",tr:"baḥthī",zh:"研究的",pos:"形容词"},{ar:"باحثون",tr:"bāḥithūn",zh:"研究者们",pos:"名词"}]},
  {root:"فهم",scene:"lang",vol:"5",lvl:"B1",ex:[["أفهم الدرس الآن","我现在明白这课了"]],f:[
    {ar:"فهم",tr:"fahm",zh:"理解",pos:"名词"},{ar:"مفهوم",tr:"mafhūm",zh:"概念",pos:"名词"},{ar:"تفاهم",tr:"tafāhum",zh:"相互理解",pos:"名词"},{ar:"مفهومة",tr:"mafhūma",zh:"可理解的（阴）",pos:"形容词"}]},
  {root:"نظر",scene:"lang",vol:"5",lvl:"B1",ex:[["هذه نظرية حديثة","这是一个新理论"]],f:[
    {ar:"نظرية",tr:"naẓariyya",zh:"理论",pos:"名词"},{ar:"نظريات",tr:"naẓariyyāt",zh:"理论（复数）",pos:"名词"},{ar:"منظور",tr:"manẓūr",zh:"观点 / 视角",pos:"名词"},{ar:"نظّارة",tr:"naẓẓāra",zh:"眼镜",pos:"名词"}]},
  {root:"فكر",scene:"lang",vol:"5",lvl:"B1",ex:[["عندي فكرة جديدة","我有一个新想法"]],f:[
    {ar:"فكرة",tr:"fikra",zh:"想法",pos:"名词"},{ar:"أفكار",tr:"afkār",zh:"想法（复数）",pos:"名词"},{ar:"تفكير",tr:"tafkīr",zh:"思考",pos:"名词"},{ar:"مفكر",tr:"mufakkir",zh:"思想家",pos:"名词"},{ar:"مفكرون",tr:"mufakkirūn",zh:"思想家们",pos:"名词"}]},
  {root:"ثقف",scene:"lang",vol:"5",lvl:"B1",ex:[["الثقافة العربية غنية","阿拉伯文化很丰富"]],f:[
    {ar:"ثقافة",tr:"thaqāfa",zh:"文化",pos:"名词"},{ar:"ثقافي",tr:"thaqāfī",zh:"文化的",pos:"形容词"},{ar:"مثقف",tr:"muthaqqaf",zh:"有文化的",pos:"形容词"},{ar:"مثقفون",tr:"muthaqqafūn",zh:"文化人",pos:"名词"}]},
  {root:"أدب",scene:"lang",vol:"5",lvl:"B1",ex:[["الأدب العربي له تاريخ طويل","阿拉伯文学历史悠久"]],f:[
    {ar:"أدبي",tr:"ʾadabī",zh:"文学的",pos:"形容词"},{ar:"أديب",tr:"ʾadīb",zh:"文学家",pos:"名词"},{ar:"أدباء",tr:"ʾudabāʾ",zh:"文学家们",pos:"名词"}]},
  {root:"تاريخ",scene:"lang",vol:"5",lvl:"B1",ex:[["أحب دراسة التاريخ","我喜欢学历史"]],f:[
    {ar:"تاريخي",tr:"tārīkhī",zh:"历史的",pos:"形容词"},{ar:"مؤرخ",tr:"muʾarrikh",zh:"历史学家",pos:"名词"},{ar:"تواريخ",tr:"tawārīkh",zh:"日期（复数）",pos:"名词"}]},
  {root:"مجتمع",scene:"news",vol:"5",lvl:"B1",ex:[["المجتمع يتغير بسرعة","社会在快速变化"]],f:[
    {ar:"مجتمعات",tr:"mujtamaʿāt",zh:"社会（复数）",pos:"名词"},{ar:"اجتماعي",tr:"ijtimāʿī",zh:"社会的",pos:"形容词"}]},
  {root:"إنسان",scene:"news",vol:"5",lvl:"B1",ex:[["الإنسان يحب السلام","人热爱和平"]],f:[
    {ar:"أناس",tr:"ʾunās",zh:"人们",pos:"名词"},{ar:"إنساني",tr:"ʾinsānī",zh:"人道的",pos:"形容词"},{ar:"إنسانية",tr:"ʾinsāniyya",zh:"人道主义",pos:"名词"}]},
  {root:"وطن",scene:"news",vol:"5",lvl:"B1",ex:[["الوطن غالٍ على القلب","祖国在心上珍贵"]],f:[
    {ar:"وطني",tr:"waṭanī",zh:"爱国的 / 本国的",pos:"形容词"},{ar:"وطنية",tr:"waṭaniyya",zh:"爱国主义",pos:"名词"},{ar:"موطن",tr:"mawṭin",zh:"故乡",pos:"名词"}]},
  {root:"حرب",scene:"news",vol:"5",lvl:"B1",ex:[["الحرب تدمر المدن","战争摧毁城市"]],f:[
    {ar:"حروب",tr:"ḥurūb",zh:"战争（复数）",pos:"名词"},{ar:"محارب",tr:"muḥārib",zh:"战士",pos:"名词"},{ar:"حربي",tr:"ḥarbī",zh:"军事的",pos:"形容词"}]},
  {root:"سلم",scene:"news",vol:"5",lvl:"B1",ex:[["نتمنى السلام للجميع","我们祝愿人人和平"]],f:[
    {ar:"سلمي",tr:"silmī",zh:"和平的",pos:"形容词"},{ar:"سلامة",tr:"salāma",zh:"安全",pos:"名词"},{ar:"مسالم",tr:"musālim",zh:"爱好和平的",pos:"形容词"}]},
  {root:"قديم",scene:"news",vol:"5",lvl:"B1",ex:[["هذه مدينة قديمة","这是一座古城"]],f:[
    {ar:"أقدم",tr:"aqdam",zh:"更古老",pos:"形容词"},{ar:"تقليد",tr:"taqlīd",zh:"传统",pos:"名词"},{ar:"تقليدي",tr:"taqlīdī",zh:"传统的",pos:"形容词"}]},
  {root:"تراث",scene:"lang",vol:"5",lvl:"B1",ex:[["التراث جزء من الهوية","遗产是身份的一部分"]],f:[
    {ar:"تراثي",tr:"turāthī",zh:"遗产的",pos:"形容词"},{ar:"إرث",tr:"irth",zh:"遗产 / 继承",pos:"名词"}]},
  {root:"عصر",scene:"time",vol:"5",lvl:"B1",ex:[["نعيش في عصر التكنولوجيا","我们生活在科技时代"]],f:[
    {ar:"عصري",tr:"ʿaṣrī",zh:"现代的",pos:"形容词"},{ar:"معاصر",tr:"muʿāṣir",zh:"当代的",pos:"形容词"}]},
  {root:"تقدم",scene:"news",vol:"5",lvl:"B1",ex:[["التقنية تتقدم بسرعة","技术发展很快"]],f:[
    {ar:"متقدم",tr:"mutaqaddim",zh:"先进的",pos:"形容词"},{ar:"تقدمي",tr:"taqaddumī",zh:"进步的",pos:"形容词"}]},
  {root:"تطور",scene:"news",vol:"5",lvl:"B1",ex:[["المدينة تتطور كل يوم","城市每天都在发展"]],f:[
    {ar:"متطور",tr:"mutaṭawwir",zh:"发达的",pos:"形容词"},{ar:"تطوير",tr:"taṭwīr",zh:"开发 / 发展",pos:"名词"}]},
  {root:"اخترع",scene:"school",vol:"5",lvl:"B1",ex:[["الاختراع يغير الحياة","发明改变生活"]],f:[
    {ar:"اختراع",tr:"ikhtirāʿ",zh:"发明",pos:"名词"},{ar:"مخترع",tr:"mukhtariʿ",zh:"发明家",pos:"名词"},{ar:"مخترعات",tr:"mukhtariʿāt",zh:"发明（复数）",pos:"名词"},{ar:"مبتكر",tr:"mubtakir",zh:"创新者",pos:"名词"}]},
  {root:"آلة",scene:"school",vol:"5",lvl:"B1",ex:[["الآلة تسهل العمل","机器使工作轻松"]],f:[
    {ar:"آلات",tr:"ʾālāt",zh:"机器（复数）",pos:"名词"},{ar:"آلي",tr:"ʾālī",zh:"自动的",pos:"形容词"}]},
  {root:"طاقة",scene:"school",vol:"5",lvl:"B1",ex:[["الطاقة ضرورية للحياة","能量对生活是必需的"]],f:[
    {ar:"طاقات",tr:"ṭāqāt",zh:"能量（复数）",pos:"名词"}]},
  {root:"فضاء",scene:"school",vol:"5",lvl:"B1",ex:[["يستكشف الإنسان الفضاء","人类在探索太空"]],f:[
    {ar:"فضائي",tr:"faḍāʾī",zh:"太空的",pos:"形容词"}]},
  {root:"ذرة",scene:"school",vol:"5",lvl:"B1",ex:[["الذرة أصغر جزء من المادة","原子是物质的最小部分"]],f:[
    {ar:"ذري",tr:"dharrī",zh:"原子的",pos:"形容词"},{ar:"ذرات",tr:"dharrāt",zh:"原子（复数）",pos:"名词"}]},
  {root:"خلية",scene:"school",vol:"5",lvl:"B1",ex:[["الخلية أساس الكائن الحي","细胞是生物的基础"]],f:[
    {ar:"خلايا",tr:"khalāyā",zh:"细胞（复数）",pos:"名词"},{ar:"خلوي",tr:"khalawī",zh:"细胞的",pos:"形容词"}]},
  {root:"طب",scene:"health",vol:"5",lvl:"B1",ex:[["الطب الحديث تقدم كثيرا","现代医学进步很大"]],f:[
    {ar:"طبي",tr:"ṭibbī",zh:"医学的",pos:"形容词"},{ar:"أطباء",tr:"ʾaṭibbāʾ",zh:"医生们",pos:"名词"}]},
  {root:"بيئة",scene:"health",vol:"5",lvl:"B1",ex:[["نحمي البيئة من التلوث","我们保护环境免受污染"]],f:[
    {ar:"بيئي",tr:"bīʾī",zh:"环境的",pos:"形容词"},{ar:"بيئات",tr:"bīʾāt",zh:"环境（复数）",pos:"名词"},{ar:"تلوث",tr:"talawwuth",zh:"污染",pos:"名词"}]},
  {root:"فقر",scene:"job",vol:"5",lvl:"B1",ex:[["الفقر مشكلة عالمية","贫穷是世界性问题"]],f:[
    {ar:"فقير",tr:"faqīr",zh:"穷人",pos:"名词"},{ar:"فقراء",tr:"fuqarāʾ",zh:"穷人（复数）",pos:"名词"},{ar:"أفقر",tr:"afqar",zh:"更穷",pos:"形容词"}]},
  {root:"أعمال",scene:"job",vol:"5",lvl:"B1",ex:[["الأعمال التجارية نشطة","商业活动活跃"]],f:[
    {ar:"تشغيل",tr:"tashghīl",zh:"就业 / 运行",pos:"名词"},{ar:"عملي",tr:"ʿamalī",zh:"实践的 / 实用的",pos:"形容词"}]},
  {root:"منتج",scene:"job",vol:"5",lvl:"B1",ex:[["المنتجات المحلية جيدة","本地产品很好"]],f:[
    {ar:"منتجات",tr:"muntajāt",zh:"产品（复数）",pos:"名词"},{ar:"إنتاجية",tr:"intājiyya",zh:"生产力",pos:"名词"}]},
  {root:"تجاري",scene:"job",vol:"5",lvl:"B1",ex:[["التجارة الإلكترونية تنمو","电子商务在增长"]],f:[
    {ar:"تجار",tr:"tujjār",zh:"商人（复数）",pos:"名词"},{ar:"تسويق",tr:"taswīq",zh:"营销",pos:"名词"}]},
  {root:"سوق",scene:"shopping",vol:"5",lvl:"B1",ex:[["الأسواق مليئة بالناس","市场里挤满了人"]],f:[
    {ar:"أسواق",tr:"aswāq",zh:"市场（复数）",pos:"名词"},{ar:"تسوّق",tr:"tasawwuq",zh:"购物 / 逛街",pos:"名词"}]},
  {root:"مال",scene:"job",vol:"5",lvl:"B1",ex:[["الإدارة المالية مهمة","财务管理很重要"]],f:[
    {ar:"أموال",tr:"amwāl",zh:"资金",pos:"名词"},{ar:"مالي",tr:"mālī",zh:"金融的",pos:"形容词"},{ar:"تمويل",tr:"tamwīl",zh:"融资",pos:"名词"}]},
  {root:"اقتصاد",scene:"news",vol:"5",lvl:"B1",ex:[["الاقتصاد العالمي مترابط","全球经济相互关联"]],f:[
    {ar:"اقتصادي",tr:"iqtiṣādī",zh:"经济的",pos:"形容词"},{ar:"اقتصاديات",tr:"iqtiṣādiyyāt",zh:"经济学",pos:"名词"}]},
  {root:"ثروة",scene:"job",vol:"5",lvl:"B1",ex:[["الثروة لا تصنع السعادة","财富不制造幸福"]],f:[
    {ar:"ثروات",tr:"tharwāt",zh:"财富（复数）",pos:"名词"},{ar:"ثري",tr:"thariyy",zh:"富有的",pos:"形容词"},{ar:"أثرياء",tr:"ʾathriyāʾ",zh:"富人（复数）",pos:"名词"}]},
  {root:"صحة",scene:"health",vol:"5",lvl:"B1",ex:[["الحياة الصحية تبدأ بالنوم الجيد","健康生活从好睡眠开始"]],f:[
    {ar:"صحي",tr:"ṣiḥḥī",zh:"健康的",pos:"形容词"},{ar:"أصحاء",tr:"ʾaṣiḥḥāʾ",zh:"健康的人（复数）",pos:"名词"}]},
  {root:"سكن",scene:"family",vol:"5",lvl:"B1",ex:[["البيت مسكن مريح","家是舒适的住所"]],f:[
    {ar:"مسكن",tr:"maskan",zh:"住宅",pos:"名词"},{ar:"سكني",tr:"sakanī",zh:"住宅的",pos:"形容词"},{ar:"سكان",tr:"sukkān",zh:"居民",pos:"名词"}]},
  {root:"بناء",scene:"direction",vol:"5",lvl:"B1",ex:[["المباني الحديثة عالية","现代建筑很高"]],f:[
    {ar:"مبنى",tr:"mabnā",zh:"建筑物",pos:"名词"},{ar:"أبنية",tr:"ʾabniya",zh:"建筑物（复数）",pos:"名词"},{ar:"بنّاء",tr:"bannāʾ",zh:"建筑工人",pos:"名词"}]},
  /* —— vol5 补充（学术/科技/社会/生活深度） —— */
  {root:"تعلّم",scene:"school",vol:"5",lvl:"B1",ex:[["التعلم المستمر ضروري","终身学习是必要的"]],f:[
    {ar:"تعليمي",tr:"taʿlīmī",zh:"教学的",pos:"形容词"},{ar:"متعلم",tr:"mutaʿallim",zh:"学习者",pos:"名词"},{ar:"تعلّم",tr:"taʿallum",zh:"学习（名词）",pos:"名词"}]},
  {root:"تجربة",scene:"school",vol:"5",lvl:"B1",ex:[["التجربة خير معلم","经验是最好的老师"]],f:[
    {ar:"مختبر",tr:"mukhtabar",zh:"实验室",pos:"名词"},{ar:"تجارب",tr:"tajārib",zh:"实验 / 经验（复数）",pos:"名词"}]},
  {root:"امتحان",scene:"school",vol:"5",lvl:"B1",ex:[["الامتحانات تبدأ الأسبوع القادم","考试下周开始"]],f:[
    {ar:"امتحانات",tr:"imtiḥānāt",zh:"考试（复数）",pos:"名词"},{ar:"نتائج",tr:"natāʾij",zh:"结果（复数）",pos:"名词"}]},
  {root:"مادة",scene:"school",vol:"5",lvl:"B1",ex:[["هذه المادة صعبة لكنها مفيدة","这门课难但有用"]],f:[
    {ar:"مواد",tr:"mawādd",zh:"科目（复数）",pos:"名词"},{ar:"مناهج",tr:"manāhij",zh:"课程大纲（复数）",pos:"名词"}]},
  {root:"نص",scene:"lang",vol:"5",lvl:"B1",ex:[["نصوص الكتاب واضحة","书中的文本清晰"]],f:[
    {ar:"نصوص",tr:"nuṣūṣ",zh:"文本（复数）",pos:"名词"},{ar:"مؤلف",tr:"muʾallif",zh:"作者",pos:"名词"},{ar:"تأليف",tr:"taʾlīf",zh:"著作",pos:"名词"}]},
  {root:"شعر",scene:"lang",vol:"5",lvl:"B1",ex:[["قرأنا قصيدة في الصف","我们在课堂读了一首诗"]],f:[
    {ar:"قصيدة",tr:"qaṣīda",zh:"诗歌（单）",pos:"名词"},{ar:"قصائد",tr:"qaṣāʾid",zh:"诗歌（复数）",pos:"名词"},{ar:"شاعر",tr:"shāʿir",zh:"诗人",pos:"名词"},{ar:"شعراء",tr:"shuʿarāʾ",zh:"诗人（复数）",pos:"名词"}]},
  {root:"قصة",scene:"lang",vol:"5",lvl:"B1",ex:[["أحب القصص القصيرة","我喜欢短篇小说"]],f:[
    {ar:"قصص",tr:"qiṣaṣ",zh:"故事（复数）",pos:"名词"},{ar:"حكاية",tr:"ḥikāya",zh:"传说 / 故事",pos:"名词"},{ar:"حكايات",tr:"ḥikāyāt",zh:"传说（复数）",pos:"名词"}]},
  {root:"لغة",scene:"lang",vol:"5",lvl:"B1",ex:[["اللغات تفتح عقولنا","语言打开我们的心智"]],f:[
    {ar:"لغات",tr:"lughāt",zh:"语言（复数）",pos:"名词"},{ar:"مترجم",tr:"mutarjim",zh:"翻译者",pos:"名词"},{ar:"مترجمة",tr:"mutarjima",zh:"女翻译",pos:"名词"}]},
  {root:"نحو",scene:"lang",vol:"5",lvl:"B1",ex:[["النحو يساعد على الفهم","语法帮助理解"]],f:[
    {ar:"نحوي",tr:"naḥwī",zh:"语法的",pos:"形容词"},{ar:"قاموس",tr:"qāmūs",zh:"词典",pos:"名词"},{ar:"معجم",tr:"muʿjam",zh:"词典 / 词汇表",pos:"名词"}]},
  {root:"قضية",scene:"news",vol:"5",lvl:"B1",ex:[["ناقشنا قضايا المجتمع","我们讨论了社会议题"]],f:[
    {ar:"قضايا",tr:"qaḍāyā",zh:"议题（复数）",pos:"名词"},{ar:"ظاهرة",tr:"ẓāhira",zh:"现象",pos:"名词"},{ar:"ظواهر",tr:"ẓawāhir",zh:"现象（复数）",pos:"名词"}]},
  {root:"شركة",scene:"job",vol:"5",lvl:"B1",ex:[["الشركات الكبرى تستثمر هنا","大公司在此投资"]],f:[
    {ar:"شركات",tr:"sharikāt",zh:"公司（复数）",pos:"名词"},{ar:"ميزانية",tr:"mīzāniyya",zh:"预算",pos:"名词"},{ar:"أسهم",tr:"ashum",zh:"股票",pos:"名词"}]},
  {root:"راتب",scene:"job",vol:"5",lvl:"B1",ex:[["الرواتب تزيد كل سنة","工资逐年增加"]],f:[
    {ar:"رواتب",tr:"rawātib",zh:"工资（复数）",pos:"名词"},{ar:"علاوة",tr:"ʿilāwa",zh:"津贴",pos:"名词"}]},
  {root:"مرض",scene:"health",vol:"5",lvl:"B1",ex:[["الوقاية خير من العلاج","预防胜于治疗"]],f:[
    {ar:"أمراض",tr:"ʾamrāḍ",zh:"疾病（复数）",pos:"名词"},{ar:"أعراض",tr:"ʾaʿrāḍ",zh:"症状（复数）",pos:"名词"},{ar:"تشخيص",tr:"tashkhīṣ",zh:"诊断",pos:"名词"},{ar:"وقاية",tr:"wiqāya",zh:"预防",pos:"名词"}]},
  {root:"دواء",scene:"health",vol:"5",lvl:"B1",ex:[["أدوية كثيرة في الصيدلية","药店里有很多药"]],f:[
    {ar:"أدوية",tr:"ʾadwiya",zh:"药物（复数）",pos:"名词"},{ar:"جرعة",tr:"jurʿa",zh:"剂量",pos:"名词"}]},
  {root:"غاز",scene:"health",vol:"5",lvl:"B1",ex:[["الغازات تسبب الاحتباس الحراري","气体导致温室效应"]],f:[
    {ar:"غازات",tr:"ghāzāt",zh:"气体（复数）",pos:"名词"},{ar:"كربون",tr:"karbūn",zh:"碳",pos:"名词"}]},
  {root:"جهاز",scene:"school",vol:"5",lvl:"B1",ex:[["الأجهزة الحديثة سهلة الاستخدام","现代设备易于使用"]],f:[
    {ar:"أجهزة",tr:"ʾajhiza",zh:"设备（复数）",pos:"名词"},{ar:"تقنية",tr:"taqniya",zh:"技术",pos:"名词"},{ar:"تقنيات",tr:"taqniyāt",zh:"技术（复数）",pos:"名词"}]},
  {root:"رسالة",scene:"net",vol:"5",lvl:"B1",ex:[["الرسائل تصل بسرعة","消息很快到达"]],f:[
    {ar:"رسائل",tr:"rasāʾil",zh:"消息（复数）",pos:"名词"},{ar:"مرفقات",tr:"muraffaqāt",zh:"附件",pos:"名词"}]},
  {root:"رقم",scene:"desc",vol:"5",lvl:"B1",ex:[["الأرقام أساس الرياضيات","数字是数学的基础"]],f:[
    {ar:"أعداد",tr:"ʾaʿdād",zh:"数字（复数）",pos:"名词"},{ar:"رقمي",tr:"raqmī",zh:"数字的",pos:"形容词"}]},
  {root:"قريب",scene:"family",vol:"5",lvl:"B1",ex:[["الأقارب يزوروننا في العيد","亲戚们在节日来看我们"]],f:[
    {ar:"أقارب",tr:"ʾaqārib",zh:"亲属（复数）",pos:"名词"},{ar:"نسب",tr:"nasab",zh:"血统 / 亲缘",pos:"名词"}]},
  {root:"موسم",scene:"time",vol:"5",lvl:"B1",ex:[["مواسم السنة أربعة","一年有四季"]],f:[
    {ar:"مواسم",tr:"mawāsim",zh:"季节（复数）",pos:"名词"},{ar:"فصول",tr:"fuṣūl",zh:"季节 / 章节（复数）",pos:"名词"}]},
  {root:"سائح",scene:"travel",vol:"5",lvl:"B1",ex:[["السياح يعجبون بالمدينة","游客们喜爱这座城市"]],f:[
    {ar:"سياح",tr:"suwwāḥ",zh:"游客（复数）",pos:"名词"},{ar:"وجهات",tr:"wijhāt",zh:"目的地（复数）",pos:"名词"}]},
  {root:"طبق",scene:"dining",vol:"5",lvl:"B1",ex:[["الأطباق الشرقية مشهورة","东方菜肴很有名"]],f:[
    {ar:"أطباق",tr:"ʾaṭbāq",zh:"菜肴（复数）",pos:"名词"},{ar:"مكونات",tr:"mukawwināt",zh:"配料（复数）",pos:"名词"}]},
  {root:"تخفيض",scene:"shopping",vol:"5",lvl:"B1",ex:[["التخفيضات تشمل كل الأقسام","折扣涵盖所有楼层"]],f:[
    {ar:"تخفيضات",tr:"takhfīḍāt",zh:"折扣（复数）",pos:"名词"},{ar:"عروض",tr:"ʿurūḍ",zh:"优惠（复数）",pos:"名词"}]},
  {root:"رعد",scene:"weather",vol:"5",lvl:"B1",ex:[["سمعنا الرعد والبرق","我们听到了雷和闪电"]],f:[
    {ar:"برق",tr:"barq",zh:"闪电",pos:"名词"},{ar:"عاصف",tr:"ʿāṣif",zh:"猛烈的",pos:"形容词"}]},
  {root:"شارع",scene:"direction",vol:"5",lvl:"B1",ex:[["شوارع العاصمة واسعة","首都的街道宽阔"]],f:[
    {ar:"شوارع",tr:"shawāriʿ",zh:"街道（复数）",pos:"名词"},{ar:"أحياء",tr:"ʾaḥyāʾ",zh:"街区（复数）",pos:"名词"},{ar:"ضواحي",tr:"ḍawāḥī",zh:"郊区",pos:"名词"}]},
  {root:"عمارة",scene:"direction",vol:"5",lvl:"B1",ex:[["العمارة الإسلامية فريدة","伊斯兰建筑独具特色"]],f:[
    {ar:"معماري",tr:"miʿmārī",zh:"建筑的",pos:"形容词"},{ar:"معمار",tr:"miʿmār",zh:"建筑艺术",pos:"名词"}]},
  {root:"مهنة",scene:"job",vol:"5",lvl:"B1",ex:[["المهن الحرفية مهمة","手工艺职业很重要"]],f:[
    {ar:"مهن",tr:"mihan",zh:"职业（复数）",pos:"名词"},{ar:"حرفي",tr:"ḥirfī",zh:"手工艺的",pos:"形容词"}]},
  {root:"مواصلات",scene:"travel",vol:"5",lvl:"B1",ex:[["المواصلات العامة رخيصة","公共交通便宜"]],f:[
    {ar:"حافلة",tr:"ḥāfila",zh:"公交车",pos:"名词"},{ar:"حافلات",tr:"ḥāfilāt",zh:"公交车（复数）",pos:"名词"}]},
  {root:"جامعة",scene:"school",vol:"5",lvl:"B1",ex:[["الجامعات تفتح أبوابها للطلاب","大学向学生开放"]],f:[
    {ar:"جامعات",tr:"jāmiʿāt",zh:"大学（复数）",pos:"名词"},{ar:"كلية",tr:"kulliyya",zh:"学院",pos:"名词"},{ar:"كليات",tr:"kulliyyāt",zh:"学院（复数）",pos:"名词"}]},
  {root:"مصدر",scene:"school",vol:"5",lvl:"B1",ex:[["المصادر الموثوقة أساس البحث","可靠来源是研究的基础"]],f:[
    {ar:"مصادر",tr:"maṣādir",zh:"来源（复数）",pos:"名词"},{ar:"مراجع",tr:"marājiʿ",zh:"参考资料（复数）",pos:"名词"}]},
  {root:"ضغط",scene:"health",vol:"5",lvl:"B1",ex:[["ضغط العمل يؤثر على الصحة","工作压力影响健康"]],f:[
    {ar:"توتر",tr:"tawattur",zh:"紧张",pos:"名词"},{ar:"نفسي",tr:"nafsī",zh:"心理的",pos:"形容词"}]},
  {root:"رياضة",scene:"outing",vol:"5",lvl:"B1",ex:[["الرياضة اليومية تقوي الجسم","每天运动强健体魄"]],f:[
    {ar:"ملعب",tr:"malʿab",zh:"球场",pos:"名词"},{ar:"ملاعب",tr:"malāʿib",zh:"球场（复数）",pos:"名词"}]},
  {root:"هواية",scene:"outing",vol:"5",lvl:"B1",ex:[["الهوايات تجمل الحياة","爱好使生活美好"]],f:[
    {ar:"هوايات",tr:"hawāyāt",zh:"爱好（复数）",pos:"名词"}]},
  {root:"مهرجان",scene:"lang",vol:"5",lvl:"B1",ex:[["المهرجانات تعكس التراث","节庆反映遗产"]],f:[
    {ar:"مهرجانات",tr:"mahrajānāt",zh:"节庆（复数）",pos:"名词"},{ar:"فنون",tr:"funūn",zh:"艺术（复数）",pos:"名词"},{ar:"فنّ",tr:"fann",zh:"艺术",pos:"名词"}]}
];

const FAMILIES_6 = [
  {root:"دولة",scene:"diplo",vol:"6",lvl:"B1",ex:[["الدول العربية متعاونة","阿拉伯国家相互合作"]],f:[
    {ar:"دول",tr:"duwal",zh:"国家（复数）",pos:"名词"},{ar:"دولي",tr:"duwalī",zh:"国际的",pos:"形容词"},{ar:"دولية",tr:"duwaliyya",zh:"国际性",pos:"名词"}]},
  {root:"حكم",scene:"diplo",vol:"6",lvl:"B1",ex:[["الحكومة تعمل للشعب","政府为人民工作"]],f:[
    {ar:"حاكم",tr:"ḥākim",zh:"统治者",pos:"名词"},{ar:"أحكام",tr:"ʾaḥkām",zh:"裁决（复数）",pos:"名词"},{ar:"حكمي",tr:"ḥukmī",zh:"统治的 / 司法的",pos:"形容词"}]},
  {root:"سياسة",scene:"diplo",vol:"6",lvl:"B1",ex:[["السياسة الخارجية متوازنة","外交政策是平衡的"]],f:[
    {ar:"سياسي",tr:"siyāsī",zh:"政治的",pos:"形容词"},{ar:"سياسيون",tr:"siyāsiyyūn",zh:"政治家们",pos:"名词"}]},
  {root:"قانون",scene:"diplo",vol:"6",lvl:"B1",ex:[["القانون يحمي الحقوق","法律保护权利"]],f:[
    {ar:"قانوني",tr:"qānūnī",zh:"合法的 / 法律的",pos:"形容词"},{ar:"قوانين",tr:"qawānīn",zh:"法律（复数）",pos:"名词"},{ar:"قانونية",tr:"qānūniyya",zh:"合法性",pos:"名词"}]},
  {root:"عدل",scene:"diplo",vol:"6",lvl:"B1",ex:[["العدالة أساس المجتمع","正义是社会的基础"]],f:[
    {ar:"عادل",tr:"ʿādil",zh:"公正的",pos:"形容词"},{ar:"عدالة",tr:"ʿadāla",zh:"正义",pos:"名词"},{ar:"معدل",tr:"muʿaddal",zh:"平均的 / 比率",pos:"名词"}]},
  {root:"حق",scene:"diplo",vol:"6",lvl:"B1",ex:[["لكل إنسان حقوق","每个人都有权利"]],f:[
    {ar:"حقوق",tr:"ḥuqūq",zh:"权利（复数）",pos:"名词"},{ar:"حقيقي",tr:"ḥaqīqī",zh:"真实的",pos:"形容词"},{ar:"حقيقة",tr:"ḥaqīqa",zh:"真相",pos:"名词"}]},
  {root:"رأي",scene:"news",vol:"6",lvl:"B1",ex:[["الرأي العام مؤثر","公众舆论有影响力"]],f:[
    {ar:"آراء",tr:"ʾārāʾ",zh:"意见（复数）",pos:"名词"},{ar:"استفتاء",tr:"istiftāʾ",zh:"公投 / 民调",pos:"名词"}]},
  {root:"قرار",scene:"news",vol:"6",lvl:"B1",ex:[["اتخذنا قرارا مهما","我们做了一个重要决定"]],f:[
    {ar:"قرارات",tr:"qarārāt",zh:"决定（复数）",pos:"名词"},{ar:"مقرر",tr:"muqarrar",zh:"已决定的 / 必修课",pos:"形容词"}]},
  {root:"انتخاب",scene:"diplo",vol:"6",lvl:"B1",ex:[["الانتخابات تتم كل أربع سنوات","选举每四年举行一次"]],f:[
    {ar:"انتخابات",tr:"intikhābāt",zh:"选举（复数）",pos:"名词"},{ar:"ناخب",tr:"nākhib",zh:"选民",pos:"名词"},{ar:"منتخب",tr:"muntakhab",zh:"当选者",pos:"名词"}]},
  {root:"حزب",scene:"diplo",vol:"6",lvl:"B1",ex:[["الأحزاب تتنافس في الانتخابات","政党在选举中竞争"]],f:[
    {ar:"أحزاب",tr:"ʾaḥzāb",zh:"政党（复数）",pos:"名词"},{ar:"حزبي",tr:"ḥizbī",zh:"党派的",pos:"形容词"}]},
  {root:"معارض",scene:"diplo",vol:"6",lvl:"B1",ex:[["المعارضة تعرض رأيها","反对派表达其观点"]],f:[
    {ar:"معارضة",tr:"muʿāraḍa",zh:"反对 / 反对派",pos:"名词"},{ar:"معارضون",tr:"muʿāriḍūn",zh:"反对者们",pos:"名词"}]},
  {root:"مجلس",scene:"diplo",vol:"6",lvl:"B1",ex:[["المجلس يوافق على القانون","议会批准法律"]],f:[
    {ar:"مجالس",tr:"majālis",zh:"议会（复数）",pos:"名词"},{ar:"مقاعد",tr:"maqāʿid",zh:"席位（复数）",pos:"名词"}]},
  {root:"رئاسة",scene:"diplo",vol:"6",lvl:"B1",ex:[["الرئيس يفتتح المؤتمر","总统主持大会开幕"]],f:[
    {ar:"رؤساء",tr:"ruʾasāʾ",zh:"总统们 / 领导们",pos:"名词"},{ar:"رئاسة",tr:"riʾāsa",zh:"总统任期 / 主席职务",pos:"名词"},{ar:"رئيسي",tr:"raʾīsī",zh:"主要的",pos:"形容词"}]},
  {root:"وزير",scene:"diplo",vol:"6",lvl:"B1",ex:[["وزراء الخارجية اجتمعوا","各国外长举行了会议"]],f:[
    {ar:"وزراء",tr:"wuzarāʾ",zh:"部长们",pos:"名词"},{ar:"وزارة",tr:"wizāra",zh:"部（政府机构）",pos:"名词"},{ar:"وزاري",tr:"wizārī",zh:"部级的",pos:"形容词"}]},
  {root:"اتفاق",scene:"diplo",vol:"6",lvl:"B1",ex:[["الاتفاقية دخلت حيز التنفيذ","协议已生效"]],f:[
    {ar:"اتفاقية",tr:"ittifāqiyya",zh:"协定",pos:"名词"},{ar:"متفق",tr:"muttafiq",zh:"一致的",pos:"形容词"}]},
  {root:"مفاوض",scene:"diplo",vol:"6",lvl:"B1",ex:[["المفاوضات مستمرة","谈判仍在进行"]],f:[
    {ar:"مفاوضات",tr:"mufāwaḍāt",zh:"谈判（复数）",pos:"名词"},{ar:"مفاوضون",tr:"mufāwiḍūn",zh:"谈判者们",pos:"名词"}]},
  {root:"أمن",scene:"diplo",vol:"6",lvl:"B1",ex:[["الأمن والاستقرار هدفنا","安全与稳定是我们的目标"]],f:[
    {ar:"أمان",tr:"ʾamān",zh:"安宁",pos:"名词"},{ar:"أمين",tr:"ʾamīn",zh:"可靠的 / 秘书",pos:"名词"},{ar:"أمني",tr:"ʾamnī",zh:"安全方面的",pos:"形容词"}]},
  {root:"دفاع",scene:"diplo",vol:"6",lvl:"B1",ex:[["الدفاع عن الوطن واجب","保卫祖国是义务"]],f:[
    {ar:"مدافع",tr:"mudāfiʿ",zh:"辩护者 / 后卫",pos:"名词"},{ar:"دفاعي",tr:"difāʿī",zh:"防御的",pos:"形容词"}]},
  {root:"جيش",scene:"diplo",vol:"6",lvl:"B1",ex:[["الجيش يحمي الحدود","军队保卫边境"]],f:[
    {ar:"جيوش",tr:"juyūsh",zh:"军队（复数）",pos:"名词"},{ar:"عسكري",tr:"ʿaskarī",zh:"军人的 / 军事的",pos:"形容词"},{ar:"عسكريون",tr:"ʿaskariyyūn",zh:"军人（复数）",pos:"名词"}]},
  {root:"هجرة",scene:"news",vol:"6",lvl:"B1",ex:[["الهجرة ظاهرة عالمية","移民是世界性现象"]],f:[
    {ar:"مهاجر",tr:"muhājir",zh:"移民",pos:"名词"},{ar:"مهاجرة",tr:"muhājira",zh:"女移民",pos:"名词"},{ar:"هاجر",tr:"hājara",zh:"迁居 / 移民（动词过去）",pos:"动词"}]},
  {root:"لجوء",scene:"news",vol:"6",lvl:"B1",ex:[["اللاجئون يحتاجون إلى مساعدة","难民需要帮助"]],f:[
    {ar:"لاجئ",tr:"lājiʾ",zh:"难民",pos:"名词"},{ar:"لاجئون",tr:"lājiʾūn",zh:"难民（复数）",pos:"名词"}]},
  {root:"تنمية",scene:"news",vol:"6",lvl:"B1",ex:[["التنمية المستدامة هدف عالمي","可持续发展是世界目标"]],f:[
    {ar:"نماء",tr:"namāʾ",zh:"成长",pos:"名词"},{ar:"نامٍ",tr:"nāmin",zh:"发展的",pos:"形容词"}]},
  {root:"مشروع",scene:"job",vol:"6",lvl:"B1",ex:[["المشاريع الكبيرة تحتاج إلى تمويل","大项目需要资金"]],f:[
    {ar:"مشاريع",tr:"mashārīʿ",zh:"项目（复数）",pos:"名词"},{ar:"مشروعية",tr:"mashrūʿiyya",zh:"合法性",pos:"名词"}]},
  {root:"استثمار",scene:"job",vol:"6",lvl:"B1",ex:[["الاستثمار الأجنبي ينمو","外国投资在增长"]],f:[
    {ar:"مستثمر",tr:"mustathmir",zh:"投资者",pos:"名词"},{ar:"استثمارات",tr:"istithmārāt",zh:"投资（复数）",pos:"名词"}]},
  {root:"تعاون",scene:"diplo",vol:"6",lvl:"B1",ex:[["التعاون الدولي يحقق السلام","国际合作实现和平"]],f:[
    {ar:"متعاون",tr:"mutaʿāwin",zh:"合作的",pos:"形容词"},{ar:"تعاوني",tr:"taʿāwunī",zh:"合作社的",pos:"形容词"}]},
  {root:"مساعد",scene:"news",vol:"6",lvl:"B1",ex:[["المساعدات الإنسانية في الطريق","人道主义援助正在途中"]],f:[
    {ar:"مساعدة",tr:"musāʿada",zh:"帮助",pos:"名词"},{ar:"مساعدات",tr:"musāʿadāt",zh:"援助（复数）",pos:"名词"},{ar:"ساعد",tr:"sāʿada",zh:"帮助（动词过去）",pos:"动词"}]},
  {root:"تطوع",scene:"news",vol:"6",lvl:"B1",ex:[["المتطوعون يساعدون المجتمع","志愿者帮助社会"]],f:[
    {ar:"متطوع",tr:"mutaṭawwiʿ",zh:"志愿者",pos:"名词"},{ar:"تطوعي",tr:"taṭawwuʿī",zh:"志愿的",pos:"形容词"}]},
  {root:"عالم",scene:"news",vol:"6",lvl:"B1",ex:[["العولمة تربط الشعوب","全球化连接各民族"]],f:[
    {ar:"عوالم",tr:"ʿawālim",zh:"世界（复数）",pos:"名词"},{ar:"عولمة",tr:"ʿawlama",zh:"全球化",pos:"名词"}]},
  {root:"مستقبل",scene:"time",vol:"6",lvl:"B1",ex:[["المستقبل مليء بالأمل","未来充满希望"]],f:[
    {ar:"مستقبلي",tr:"mustaqbalī",zh:"未来的",pos:"形容词"}]},
  {root:"تحديث",scene:"news",vol:"6",lvl:"B1",ex:[["التحديث يغير المجتمع","现代化改变社会"]],f:[
    {ar:"محدث",tr:"muḥaddath",zh:"更新的 / 现代化的",pos:"形容词"}]},
  {root:"منظمة",scene:"diplo",vol:"6",lvl:"B1",ex:[["المنظمة الدولية تعمل للسلام","国际组织为和平而努力"]],f:[
    {ar:"منظمات",tr:"munaẓẓamāt",zh:"组织（复数）",pos:"名词"},{ar:"تنظيم",tr:"tanẓīm",zh:"组织（行为）",pos:"名词"},{ar:"منظّم",tr:"munaddham",zh:"有条理的",pos:"形容词"}]},
  {root:"مؤسسة",scene:"job",vol:"6",lvl:"B1",ex:[["المؤسسات التعليمية تتطور","教育机构在发展"]],f:[
    {ar:"مؤسسات",tr:"muʾassasāt",zh:"机构（复数）",pos:"名词"},{ar:"تأسيس",tr:"taʾsīs",zh:"建立",pos:"名词"},{ar:"مؤسّس",tr:"muʾassis",zh:"创始人",pos:"名词"}]},
  {root:"إعلام",scene:"news",vol:"6",lvl:"B1",ex:[["الإعلام ينقل الأخبار بسرعة","媒体快速传递新闻"]],f:[
    {ar:"إعلامي",tr:"ʾiʿlāmī",zh:"媒体的",pos:"形容词"},{ar:"إعلاميون",tr:"ʾiʿlāmiyyūn",zh:"媒体人",pos:"名词"}]},
  {root:"صحافة",scene:"news",vol:"6",lvl:"B1",ex:[["الصحافة الحرة ضرورية","自由新闻业是必需的"]],f:[
    {ar:"صحفي",tr:"ṣuḥufī",zh:"记者",pos:"名词"},{ar:"صحفيون",tr:"ṣuḥufiyyūn",zh:"记者（复数）",pos:"名词"}]},
  {root:"نشر",scene:"news",vol:"6",lvl:"B1",ex:[["نشرت الصحيفة تقريرا","报纸发表了一篇报道"]],f:[
    {ar:"منشور",tr:"manshūr",zh:"出版物 / 帖子",pos:"名词"},{ar:"ناشر",tr:"nāshir",zh:"出版商",pos:"名词"},{ar:"نشرات",tr:"nasharāt",zh:"简报（复数）",pos:"名词"}]},
  {root:"إدارة",scene:"job",vol:"6",lvl:"B1",ex:[["الإدارة الجيدة ترفع الإنتاج","好的管理提高产量"]],f:[
    {ar:"إداري",tr:"ʾidārī",zh:"行政的",pos:"形容词"},{ar:"مديرية",tr:"mudīriyya",zh:"局 / 处",pos:"名词"}]},
  /* —— vol6 补充（政治/法律/国际/哲学/深度议题） —— */
  {root:"نظام",scene:"diplo",vol:"6",lvl:"B1",ex:[["الأنظمة السياسية تختلف بين الدول","各国的政治制度不同"]],f:[
    {ar:"أنظمة",tr:"ʾanẓima",zh:"制度（复数）",pos:"名词"},{ar:"سياسات",tr:"siyāsāt",zh:"政策（复数）",pos:"名词"}]},
  {root:"قاض",scene:"diplo",vol:"6",lvl:"B1",ex:[["القضاة يصدرون الأحكام","法官作出裁决"]],f:[
    {ar:"قاضٍ",tr:"qāḍin",zh:"法官",pos:"名词"},{ar:"قضاة",tr:"quḍāh",zh:"法官（复数）",pos:"名词"},{ar:"محكمة",tr:"maḥkama",zh:"法院",pos:"名词"}]},
  {root:"عضو",scene:"diplo",vol:"6",lvl:"B1",ex:[["أعضاء المنظمة كثيرون","该组织成员众多"]],f:[
    {ar:"أعضاء",tr:"ʾaʿḍāʾ",zh:"成员（复数）",pos:"名词"},{ar:"عضوية",tr:"ʿuḍwiyya",zh:"会员资格",pos:"名词"}]},
  {root:"دبلوماسية",scene:"diplo",vol:"6",lvl:"B1",ex:[["الدبلوماسية تحل الخلافات","外交解决分歧"]],f:[
    {ar:"دبلوماسي",tr:"diblūmāsī",zh:"外交官",pos:"名词"},{ar:"بعثة",tr:"biʿtha",zh:"使团",pos:"名词"},{ar:"بعثات",tr:"biʿthāt",zh:"使团（复数）",pos:"名词"}]},
  {root:"ميثاق",scene:"diplo",vol:"6",lvl:"B1",ex:[["ميثاق الأمم المتحدة معروف","《联合国宪章》众所周知"]],f:[
    {ar:"معاهدات",tr:"muʿāhadāt",zh:"条约（复数）",pos:"名词"},{ar:"مواثيق",tr:"mawāthīq",zh:"宪章（复数）",pos:"名词"}]},
  {root:"جلسة",scene:"diplo",vol:"6",lvl:"B1",ex:[["الجلسة الأخيرة كانت مثمرة","最后一届会议富有成果"]],f:[
    {ar:"جلسات",tr:"jalasāt",zh:"会议（复数）",pos:"名词"},{ar:"مفاوض",tr:"mufāwiḍ",zh:"谈判者",pos:"名词"}]},
  {root:"قناة",scene:"news",vol:"6",lvl:"B1",ex:[["القنوات الفضائية كثيرة","卫星频道很多"]],f:[
    {ar:"قنوات",tr:"qanawāt",zh:"频道（复数）",pos:"名词"},{ar:"تغطية",tr:"taghṭiya",zh:"报道 / 覆盖",pos:"名词"}]},
  {root:"محتوى",scene:"news",vol:"6",lvl:"B1",ex:[["المحتوى الجيد يثقف الجمهور","优质内容教育大众"]],f:[
    {ar:"منصات",tr:"munaṣṣāt",zh:"平台（复数）",pos:"名词"},{ar:"ترويج",tr:"tarwīj",zh:"宣传 / 推广",pos:"名词"}]},
  {root:"استطلاع",scene:"news",vol:"6",lvl:"B1",ex:[["أظهر الاستطلاع تغير الرأي","民调显示观点变化"]],f:[
    {ar:"مؤشر",tr:"muʾashshir",zh:"指标",pos:"名词"},{ar:"نسبة",tr:"nisba",zh:"比率",pos:"名词"}]},
  {root:"عملة",scene:"job",vol:"6",lvl:"B1",ex:[["العملات العالمية تتغير","世界货币在变化"]],f:[
    {ar:"عملات",tr:"ʿumalāt",zh:"货币（复数）",pos:"名词"},{ar:"تبادل",tr:"tabādul",zh:"交换",pos:"名词"}]},
  {root:"بنك",scene:"job",vol:"6",lvl:"B1",ex:[["البنوك تقدم خدمات كثيرة","银行提供很多服务"]],f:[
    {ar:"بنوك",tr:"bunūk",zh:"银行（复数）",pos:"名词"},{ar:"فوائد",tr:"fawāʾid",zh:"利息 / 好处（复数）",pos:"名词"}]},
  {root:"تصدير",scene:"job",vol:"6",lvl:"B1",ex:[["الصادرات تزيد دخل البلد","出口增加国家收入"]],f:[
    {ar:"صادرات",tr:"ṣādirāt",zh:"出口（复数）",pos:"名词"},{ar:"واردات",tr:"wāridāt",zh:"进口（复数）",pos:"名词"}]},
  {root:"جيش",scene:"diplo",vol:"6",lvl:"B1",ex:[["القوات المسلحة تحمي الوطن","武装力量保卫祖国"]],f:[
    {ar:"قوات",tr:"quwwāt",zh:"军队（复数）",pos:"名词"},{ar:"سلاح",tr:"silāḥ",zh:"武器",pos:"名词"},{ar:"أسلحة",tr:"ʾasliḥa",zh:"武器（复数）",pos:"名词"}]},
  {root:"حماية",scene:"diplo",vol:"6",lvl:"B1",ex:[["حماية الحقوق واجب الدولة","保护权利是国家的义务"]],f:[
    {ar:"حمى",tr:"ḥimā",zh:"保护区 / 受保护地",pos:"名词"},{ar:"محمية",tr:"maḥmiyya",zh:"受保护的",pos:"形容词"}]},
  {root:"نزوح",scene:"news",vol:"6",lvl:"B1",ex:[["النزوح مشكلة إنسانية","流离失所是人道问题"]],f:[
    {ar:"مهجّر",tr:"muhajjar",zh:"被迫离乡的",pos:"形容词"},{ar:"إيواء",tr:"ʾīwāʾ",zh:"收容",pos:"名词"}]},
  {root:"حرية",scene:"diplo",vol:"6",lvl:"B1",ex:[["الحريات الأساسية مكفولة","基本自由有保障"]],f:[
    {ar:"حريات",tr:"ḥurriyyāt",zh:"自由（复数）",pos:"名词"},{ar:"مكفول",tr:"makfūl",zh:"有保障的",pos:"形容词"}]},
  {root:"خطة",scene:"news",vol:"6",lvl:"B1",ex:[["خطط التنمية طويلة المدى","发展计划是长期的"]],f:[
    {ar:"خطط",tr:"khutaṭ",zh:"计划（复数）",pos:"名词"},{ar:"رؤية",tr:"ruʾya",zh:"愿景",pos:"名词"}]},
  {root:"قارة",scene:"news",vol:"6",lvl:"B1",ex:[["العالم سبع قارات","世界有七大洲"]],f:[
    {ar:"قارات",tr:"qārāt",zh:"大陆（复数）",pos:"名词"},{ar:"محيط",tr:"muḥīṭ",zh:"大洋 / 周围环境",pos:"名词"}]},
  {root:"فلسفة",scene:"lang",vol:"6",lvl:"B1",ex:[["الفلسفة تسأل عن معنى الحياة","哲学追问生命的意义"]],f:[
    {ar:"منطق",tr:"manṭiq",zh:"逻辑",pos:"名词"},{ar:"منطقي",tr:"manṭiqī",zh:"合乎逻辑的",pos:"形容词"}]},
  {root:"دين",scene:"lang",vol:"6",lvl:"B1",ex:[["الأديان تدعو إلى التسامح","宗教倡导宽容"]],f:[
    {ar:"أديان",tr:"ʾadyān",zh:"宗教（复数）",pos:"名词"},{ar:"ديني",tr:"dīnī",zh:"宗教的",pos:"形容词"},{ar:"إيمان",tr:"īmān",zh:"信仰",pos:"名词"}]},
  {root:"خلق",scene:"news",vol:"6",lvl:"B1",ex:[["الأخلاق أساس التعامل","道德是交往的基础"]],f:[
    {ar:"أخلاق",tr:"ʾakhlāq",zh:"道德",pos:"名词"},{ar:"أخلاقي",tr:"ʾakhlāqī",zh:"道德的",pos:"形容词"},{ar:"ضمير",tr:"ḍamīr",zh:"良心",pos:"名词"}]},
  {root:"حضارة",scene:"lang",vol:"6",lvl:"B1",ex:[["الحضارات تتواصل عبر التاريخ","文明在历史中交流"]],f:[
    {ar:"حضارات",tr:"ḥaḍārāt",zh:"文明（复数）",pos:"名词"},{ar:"عصور",tr:"ʿuṣūr",zh:"时代（复数）",pos:"名词"}]},
  {root:"رواية",scene:"lang",vol:"6",lvl:"B1",ex:[["الروايات العربية تترجم للعالم","阿拉伯小说被译介到世界"]],f:[
    {ar:"روايات",tr:"riwāyāt",zh:"长篇小说（复数）",pos:"名词"},{ar:"مسرحية",tr:"masraḥiyya",zh:"戏剧",pos:"名词"},{ar:"مسرحيات",tr:"masraḥiyyāt",zh:"戏剧（复数）",pos:"名词"}]},
  {root:"أكاديمي",scene:"school",vol:"6",lvl:"B1",ex:[["الحياة الأكاديمية غنية","学术生活很充实"]],f:[
    {ar:"بحثي",tr:"baḥthī",zh:"研究的",pos:"形容词"},{ar:"دراسات",tr:"dirāsāt",zh:"研究 / 课程（复数）",pos:"名词"}]},
  {root:"فئة",scene:"news",vol:"6",lvl:"B1",ex:[["كل فئات المجتمع تشارك","社会各阶层都参与"]],f:[
    {ar:"فئات",tr:"fiʾāt",zh:"阶层（复数）",pos:"名词"},{ar:"توزيع",tr:"tawzīʿ",zh:"分配",pos:"名词"}]},
  {root:"انبعاث",scene:"weather",vol:"6",lvl:"B1",ex:[["انبعاثات الكربون تهدد المناخ","碳排放威胁气候"]],f:[
    {ar:"انبعاثات",tr:"inbiʿāthāt",zh:"排放（复数）",pos:"名词"},{ar:"احتباس",tr:"iḥtibās",zh:"温室效应 / 滞留",pos:"名词"}]},
  {root:"نفط",scene:"job",vol:"6",lvl:"B1",ex:[["النفط مصدر الطاقة الأول","石油是第一能源"]],f:[
    {ar:"غاز",tr:"ghāz",zh:"天然气",pos:"名词"},{ar:"كهرباء",tr:"kahrabāʾ",zh:"电",pos:"名词"}]},
  {root:"قمر",scene:"school",vol:"6",lvl:"B1",ex:[["الأقمار الصناعية تنقل البيانات","卫星传输数据"]],f:[
    {ar:"أقمار",tr:"aqmār",zh:"卫星（复数）",pos:"名词"},{ar:"صناعي",tr:"ṣināʿī",zh:"人造的 / 工业的",pos:"形容词"}]},
  {root:"حقبة",scene:"time",vol:"6",lvl:"B1",ex:[["دخلنا حقبة جديدة","我们进入了一个新时代"]],f:[
    {ar:"أعوام",tr:"ʾaʿwām",zh:"年（复数）",pos:"名词"},{ar:"مرحلة",tr:"marḥala",zh:"阶段",pos:"名词"},{ar:"مراحل",tr:"marāḥil",zh:"阶段（复数）",pos:"名词"}]},
  {root:"انتماء",scene:"news",vol:"6",lvl:"B1",ex:[["الانتماء يعطي الإنسان هوية","归属感赋予人身份"]],f:[
    {ar:"مواطنة",tr:"muwāṭana",zh:"公民身份",pos:"名词"},{ar:"هوية",tr:"hawiyya",zh:"身份",pos:"名词"}]},
  {root:"تحدي",scene:"news",vol:"6",lvl:"B1",ex:[["التحديات تدفعنا إلى التقدم","挑战推动我们前进"]],f:[
    {ar:"تحديات",tr:"taḥaddiyāt",zh:"挑战（复数）",pos:"名词"},{ar:"أفق",tr:"ʾufuq",zh:"前景 / 地平线",pos:"名词"},{ar:"آفاق",tr:"ʾāfāq",zh:"前景（复数）",pos:"名词"}]},
  {root:"مجتمع",scene:"news",vol:"6",lvl:"B1",ex:[["المجتمع المدني فاعل أساسي","公民社会是重要行动者"]],f:[
    {ar:"مدني",tr:"madaniyy",zh:"公民的 / 民事的",pos:"形容词"},{ar:"أهلي",tr:"ʾahlī",zh:"民间组织的",pos:"形容词"}]},
  {root:"رأسمال",scene:"job",vol:"6",lvl:"B1",ex:[["رأس المال يحرك الاقتصاد","资本驱动经济"]],f:[
    {ar:"رأسمالية",tr:"raʾsmāliyya",zh:"资本主义",pos:"名词"},{ar:"سوق حرة",tr:"sūq ḥurra",zh:"自由市场",pos:"名词"}]},
  {root:"تسامح",scene:"lang",vol:"6",lvl:"B1",ex:[["التسامح أساس التعايش","宽容是共处的基础"]],f:[
    {ar:"متسامح",tr:"mutasāmiḥ",zh:"宽容的",pos:"形容词"},{ar:"تعايش",tr:"taʿāyush",zh:"共处",pos:"名词"}]},
  {root:"إصلاح",scene:"news",vol:"6",lvl:"B1",ex:[["الإصلاح عملية مستمرة","改革是持续的过程"]],f:[
    {ar:"إصلاحات",tr:"ʾiṣlāḥāt",zh:"改革（复数）",pos:"名词"},{ar:"مصلح",tr:"muṣliḥ",zh:"改革者",pos:"名词"}]}
];

/* ============================================================
 * 补充主题词库（PLAIN_EXTRA，向第五、六册倾斜，含例句）
 * ============================================================ */
const PLAIN_EXTRA = [
  /* —— vol5 科学 / 教育 / 学术 —— */
  {ar:"كيمياء",tr:"kīmiyāʾ",zh:"化学",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الکيمياء مادة علمية"},
  {ar:"فيزياء",tr:"fīziyāʾ",zh:"物理",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الفيزياء تفسر الظواهر"},
  {ar:"رياضيات",tr:"riyāḍiyyāt",zh:"数学",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الرياضيات أساس العلوم"},
  {ar:"أحياء",tr:"ʾaḥyāʾ",zh:"生物（学）",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"نحافظ على الأحياء البرية"},
  {ar:"فلك",tr:"falak",zh:"天文学",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"علم الفلك يدرس النجوم"},
  {ar:"فرضية",tr:"farḍiyya",zh:"假设",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الفرضية تحتاج إلى دليل"},
  {ar:"إثبات",tr:"ʾithbāt",zh:"证明",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الإثبات العلمي مهم"},
  {ar:"استنتاج",tr:"istintāj",zh:"推断",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الاستنتاج يتبع الملاحظة"},
  {ar:"ملاحظة",tr:"mulāḥaẓa",zh:"观察",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الملاحظة الدقيقة ضرورية"},
  {ar:"اختبار",tr:"ikhtibār",zh:"测试",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"اجتزت الاختبار بنجاح"},
  {ar:"مقياس",tr:"miqyās",zh:"度量 / 标准",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"المقياس دقيق جداً"},
  {ar:"وحدة",tr:"waḥda",zh:"单位",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"كل مادة لها وحدة قياس"},
  {ar:"كتلة",tr:"kutla",zh:"质量",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الكتلة لا تتغير بالمكان"},
  {ar:"حجم",tr:"ḥajm",zh:"体积",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"حجم المكعب كبير"},
  {ar:"وزن",tr:"wazn",zh:"重量",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"وزن الحقيبة ثقيل"},
  {ar:"طول",tr:"ṭūl",zh:"长度",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"طول النهر ألف كيلومتر"},
  {ar:"عرض",tr:"ʿarḍ",zh:"宽度",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"عرض الطريق عشرة أمتار"},
  {ar:"ارتفاع",tr:"irtifāʿ",zh:"高度",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"ارتفاع الجبل كبير"},
  {ar:"عمق",tr:"ʿumq",zh:"深度",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"عمق البحر مذهل"},
  {ar:"محاضرة",tr:"muḥāḍara",zh:"讲座",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"حضرت محاضرة عن التاريخ"},
  {ar:"ندوة",tr:"nadwa",zh:"研讨会",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الندوة بدأت في العاشرة"},
  {ar:"ورشة",tr:"warsha",zh:"工作坊",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"ورشة الكتابة مفيدة"},
  {ar:"شهادة",tr:"shahāda",zh:"证书 / 学位",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"حصلت على شهادة جامعية"},
  {ar:"درجة",tr:"daraja",zh:"学位 / 等级",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"درجة الحرارة مرتفعة"},
  {ar:"تخصص",tr:"takhaṣṣuṣ",zh:"专业",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"تخصصي اللغة العربية"},
  {ar:"فرع",tr:"farʿ",zh:"分支",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"فرع الشركة في المدينة"},
  {ar:"أطروحة",tr:"ʾuṭrūḥa",zh:"学位论文",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"أطروحته عن الأدب"},
  {ar:"استبيان",tr:"istibyān",zh:"问卷",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"أجبنا عن الاستبيان"},
  {ar:"تقييم",tr:"taqwīm",zh:"评估",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"تقييم المعلم عادل"},
  /* —— vol5 社会 / 自然 / 地理 —— */
  {ar:"أمة",tr:"ʾumma",zh:"民族 / 共同体",pos:"名词",lvl:"B1",vol:"5",scene:"news",ex:"الأمة العربية واحدة"},
  {ar:"شعب",tr:"shaʿb",zh:"人民 / 民族",pos:"名词",lvl:"B1",vol:"5",scene:"news",ex:"الشعب يحب السلام"},
  {ar:"شعوب",tr:"shuʿūb",zh:"民族（复数）",pos:"名词",lvl:"B1",vol:"5",scene:"news",ex:"الشعوب تتعاون"},
  {ar:"مواطن",tr:"muwāṭin",zh:"公民",pos:"名词",lvl:"B1",vol:"5",scene:"news",ex:"المواطن يحترم القانون"},
  {ar:"مقيم",tr:"muqīm",zh:"常住居民",pos:"名词",lvl:"B1",vol:"5",scene:"news",ex:"المقيمون في الحي ودودون"},
  {ar:"زائر",tr:"zāʾir",zh:"访客",pos:"名词",lvl:"B1",vol:"5",scene:"visit",ex:"الزوار كثر في الصيف"},
  {ar:"حرفة",tr:"ḥirfa",zh:"手艺",pos:"名词",lvl:"B1",vol:"5",scene:"job",ex:"الحرفة تتطلب صبراً"},
  {ar:"صحراء",tr:"ṣaḥrāʾ",zh:"沙漠",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"الصحراء واسعة"},
  {ar:"واحة",tr:"wāḥa",zh:"绿洲",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"الواحة مليئة بالنخيل"},
  {ar:"سهل",tr:"sahl",zh:"平原",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"السهل خصب"},
  {ar:"هضبة",tr:"hadba",zh:"高原",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"الهضبة عالية"},
  {ar:"وادي",tr:"wādī",zh:"河谷 / 山谷",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"الوادي جميل"},
  {ar:"جزيرة",tr:"jazīra",zh:"岛屿",pos:"名词",lvl:"B1",vol:"5",scene:"travel",ex:"الجزيرة قريبة من الساحل"},
  {ar:"ساحل",tr:"sāḥil",zh:"海岸",pos:"名词",lvl:"B1",vol:"5",scene:"travel",ex:"الساحل طويل"},
  {ar:"ميناء",tr:"mīnāʾ",zh:"港口",pos:"名词",lvl:"B1",vol:"5",scene:"travel",ex:"الميناء مزدحم"},
  {ar:"نفق",tr:"nafaq",zh:"隧道",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"النفق طويل"},
  {ar:"جسر",tr:"jisr",zh:"桥梁",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الجسر جديد"},
  {ar:"ممر",tr:"mamar",zh:"通道",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الممر يؤدي إلى الساحة"},
  /* —— vol5 健康 / 医疗 / 艺术 —— */
  {ar:"معمل",tr:"maʿmal",zh:"化验室 / 实验室",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"الفحص في المعمل"},
  {ar:"أشعة",tr:"ʾashiʿʿa",zh:"射线 / 扫描",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"عملت أشعة للرئة"},
  {ar:"تخدير",tr:"takhdīr",zh:"麻醉",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"التخدير ناجح"},
  {ar:"إسعاف",tr:"ʾisʿāf",zh:"急救",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"سيارة الإسعاف وصلت"},
  {ar:"جراح",tr:"jarrāḥ",zh:"外科医生",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"الجراح ماهر"},
  {ar:"مريضة",tr:"marīḍa",zh:"女病人",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"المريضة تتحسن"},
  {ar:"معافى",tr:"muʿāfā",zh:"健康的",pos:"形容词",lvl:"B1",vol:"5",scene:"health",ex:"هو معافى من المرض"},
  {ar:"لوحة",tr:"lawḥa",zh:"画",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"اللوحة في المتحف"},
  {ar:"نحت",tr:"naḥt",zh:"雕塑",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"النحت فن قديم"},
  {ar:"موسيقى",tr:"mūsīqā",zh:"音乐",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"الموسيقى تريح النفس"},
  {ar:"أغنية",tr:"ʾughniyya",zh:"歌曲",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"الأغنية جميلة"},
  {ar:"فيلم",tr:"film",zh:"电影",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"شاهدنا فيلماً"},
  {ar:"مسلسل",tr:"musalsal",zh:"电视剧",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"المسلسل مشوق"},
  {ar:"تمثيل",tr:"tamthīl",zh:"表演",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"التمثيل ممتع"},
  {ar:"جمهور",tr:"jamhūr",zh:"观众 / 公众",pos:"名词",lvl:"B1",vol:"5",scene:"news",ex:"الجمهور كبير"},
  {ar:"نقد",tr:"naqd",zh:"批评 / 评论",pos:"名词",lvl:"B1",vol:"5",scene:"news",ex:"النقد البناء مفيد"},
  /* —— vol5 生活 / 消费 —— */
  {ar:"إيجار",tr:"ījār",zh:"房租",pos:"名词",lvl:"B1",vol:"5",scene:"family",ex:"الإيجار مرتفع"},
  {ar:"مالك",tr:"mālik",zh:"房主 / 所有者",pos:"名词",lvl:"B1",vol:"5",scene:"family",ex:"المالك لطيف"},
  {ar:"مستأجر",tr:"mustaʾjir",zh:"租户",pos:"名词",lvl:"B1",vol:"5",scene:"family",ex:"المستأجرون جدد"},
  {ar:"قسط",tr:"qisṭ",zh:"分期款",pos:"名词",lvl:"B1",vol:"5",scene:"shopping",ex:"أدفع القسط شهرياً"},
  {ar:"مدخرات",tr:"mudakhkharāt",zh:"积蓄",pos:"名词",lvl:"B1",vol:"5",scene:"shopping",ex:"المدخرات تكفي"},
  {ar:"إنفاق",tr:"infāq",zh:"支出",pos:"名词",lvl:"B1",vol:"5",scene:"shopping",ex:"الإنفاق بحكمة"},
  {ar:"ادخار",tr:"iddikhār",zh:"储蓄",pos:"名词",lvl:"B1",vol:"5",scene:"shopping",ex:"الادخار عادة جيدة"},
  {ar:"بقالة",tr:"baqqāla",zh:"杂货店",pos:"名词",lvl:"B1",vol:"5",scene:"shopping",ex:"البقالة قريبة"},
  {ar:"مخبز",tr:"makhbaz",zh:"面包店",pos:"名词",lvl:"B1",vol:"5",scene:"dining",ex:"المخبز يفتح مبكراً"},
  {ar:"مقهى",tr:"maqhā",zh:"咖啡馆",pos:"名词",lvl:"B1",vol:"5",scene:"dining",ex:"اجتمعنا في المقهى"},
  /* —— vol6 国际 / 政治 / 外交 —— */
  {ar:"مندوب",tr:"mandūb",zh:"代表 / 特使",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"المندوب رحب بالضيوف"},
  {ar:"مراقب",tr:"murāqib",zh:"观察员",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"المراقبون حاضرو"},
  {ar:"تصويت",tr:"taṣwīt",zh:"投票",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"التصويت سري"},
  {ar:"أغلبية",tr:"ʾaghlabiyya",zh:"多数",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الأغلبية وافقت"},
  {ar:"أقلية",tr:"ʾaqalliyya",zh:"少数",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الأقلية احتجت"},
  {ar:"توازن",tr:"tawāzun",zh:"平衡",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"التوازن ضروري"},
  {ar:"استقرار",tr:"istiqrār",zh:"稳定",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الاستقرار يهم الجميع"},
  {ar:"أزمة",tr:"ʾazma",zh:"危机",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الأزمة تمر بسرعة"},
  {ar:"أزمات",tr:"ʾazamāt",zh:"危机（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الأزمات تعلمنا"},
  {ar:"حل",tr:"ḥall",zh:"解决 / 方案",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"وجدنا حلاً"},
  {ar:"حلول",tr:"ḥulūl",zh:"解决方案（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الحلول كثيرة"},
  {ar:"فرصة",tr:"furṣa",zh:"机会",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الفرصة مناسبة"},
  {ar:"فرص",tr:"furaṣ",zh:"机会（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الفرص كثيرة"},
  {ar:"تهديد",tr:"tahdīd",zh:"威胁",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"التهديد ليس حلاً"},
  {ar:"خطر",tr:"khaṭar",zh:"危险",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الخطر محدق"},
  {ar:"مصالح",tr:"maṣāliḥ",zh:"利益（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"المصالح المشتركة"},
  {ar:"سيادة",tr:"siyāda",zh:"主权",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"السيادة مقدسة"},
  {ar:"استقلال",tr:"istiqlāl",zh:"独立",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الاستقلال مكسب"},
  {ar:"اتحاد",tr:"ittiḥād",zh:"联盟",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الاتحاد قوة"},
  {ar:"تحالف",tr:"taḥāluf",zh:"同盟",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"التحالف قائم"},
  {ar:"حياد",tr:"ḥiyād",zh:"中立",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"البلد يحافظ على الحياد"},
  {ar:"تدخل",tr:"tadakhkhul",zh:"干预",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"التدخل الخارجي مرفوض"},
  {ar:"انسحاب",tr:"insiḥāb",zh:"撤出",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الانسحاب تم بهدوء"},
  {ar:"حصار",tr:"ḥiṣār",zh:"封锁",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الحصار يؤثر على الناس"},
  {ar:"عقوبات",tr:"ʿuqūbāt",zh:"制裁",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"العقوبات تشددت"},
  {ar:"لجنة",tr:"lajna",zh:"委员会",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"اللجنة اجتمعت"},
  {ar:"لجان",tr:"lajān",zh:"委员会（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"اللجان تعمل"},
  {ar:"برلمان",tr:"barlamān",zh:"议会",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"البرلمان صوت الشعب"},
  {ar:"نواب",tr:"nuwwāb",zh:"议员（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"النواب ناقشوا"},
  {ar:"اقتراع",tr:"iqtirāʿ",zh:"投票 / 选举",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الاقتراع حر"},
  /* —— vol6 经济 / 金融 —— */
  {ar:"نمو",tr:"numuww",zh:"增长",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"النمو الاقتصادي جيد"},
  {ar:"ركود",tr:"rukūd",zh:"衰退",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الركود يؤثر على السوق"},
  {ar:"تضخم",tr:"taḍakhkhum",zh:"通货膨胀",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"التضخم يرفع الأسعار"},
  {ar:"بطالة",tr:"biṭāla",zh:"失业",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"البطالة مشكلة"},
  {ar:"عجز",tr:"ʿajz",zh:"赤字",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"عجز الميزانية يقل"},
  {ar:"فائض",tr:"fāʾiḍ",zh:"盈余",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"لدينا فائض"},
  {ar:"ديون",tr:"duyūn",zh:"债务（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الديون تتراكم"},
  {ar:"دين",tr:"dayn",zh:"债务",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الدين يجب سداده"},
  {ar:"قرض",tr:"qarḍ",zh:"贷款",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"أخذت قرضاً"},
  {ar:"قروض",tr:"qurūḍ",zh:"贷款（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"القروض كثيرة"},
  {ar:"سند",tr:"sanad",zh:"债券",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"السند آمن"},
  {ar:"سندات",tr:"sanadāt",zh:"债券（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"السندات تباع"},
  {ar:"عمولة",tr:"ʿumūla",zh:"佣金",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"العمولة معقولة"},
  {ar:"ربح",tr:"ribḥ",zh:"利润",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الربح زاد"},
  {ar:"خسارة",tr:"khasāra",zh:"损失",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الخسارة فادحة"},
  {ar:"خسائر",tr:"khasāʾir",zh:"损失（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الخسائر كبيرة"},
  {ar:"استهلاك",tr:"istihlāk",zh:"消费",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الاستهلاك يرتفع"},
  {ar:"مورد",tr:"mawrid",zh:"资源",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"المورد متجدد"},
  {ar:"موارد",tr:"mawārid",zh:"资源（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الموارد الطبيعية"},
  {ar:"قطاع",tr:"qiṭāʿ",zh:"部门",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"القطاع الخاص"},
  {ar:"قطاعات",tr:"qiṭāʿāt",zh:"部门（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"كل القطاعات"},
  {ar:"خام",tr:"khām",zh:"原材料",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الخام رخيص"},
  /* —— vol6 法律 / 政治 —— */
  {ar:"دستور",tr:"dustūr",zh:"宪法",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الدستور يحمي الحقوق"},
  {ar:"تعديل",tr:"taʿdīl",zh:"修正案",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"التعديل مقترح"},
  {ar:"بند",tr:"band",zh:"条款",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"البند الأول"},
  {ar:"بنود",tr:"bunūd",zh:"条款（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"البنود واضحة"},
  {ar:"عقوبة",tr:"ʿuqūba",zh:"刑罚",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"العقوبة عادلة"},
  {ar:"جريمة",tr:"jarīma",zh:"罪行",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الجريمة مكشوفة"},
  {ar:"جرائم",tr:"jarāʾim",zh:"罪行（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الجرائم تنخفض"},
  {ar:"شاهد",tr:"shāhid",zh:"证人",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الشاهد قال الحقيقة"},
  {ar:"شهود",tr:"shuhūd",zh:"证人（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الشهود حضروا"},
  {ar:"اعتراف",tr:"iʿtirāf",zh:"认罪 / 承认",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الاعتراف صريح"},
  {ar:"براءة",tr:"barāʾa",zh:"无罪",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"ثبتت براءته"},
  {ar:"إدانة",tr:"ʾidāna",zh:"定罪",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الإدانة نهائية"},
  {ar:"سجن",tr:"sijn",zh:"监狱",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"السجن عقوبة"},
  {ar:"سجون",tr:"sujūn",zh:"监狱（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"السجون مكتظة"},
  /* —— vol6 哲学 / 伦理 / 思想 —— */
  {ar:"قيمة",tr:"qīma",zh:"价值",pos:"名词",lvl:"B1",vol:"6",scene:"lang",ex:"القيمة المعنوية"},
  {ar:"قيم",tr:"qiyam",zh:"价值观（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"lang",ex:"القيم الأصيلة"},
  {ar:"مبدأ",tr:"mabdaʾ",zh:"原则",pos:"名词",lvl:"B1",vol:"6",scene:"lang",ex:"المبدأ ثابت"},
  {ar:"مبادئ",tr:"mabādiʾ",zh:"原则（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"lang",ex:"مبادئنا واضحة"},
  {ar:"وعي",tr:"waʿy",zh:"意识",pos:"名词",lvl:"B1",vol:"6",scene:"lang",ex:"الوعي يزداد"},
  {ar:"حكمة",tr:"ḥikma",zh:"智慧",pos:"名词",lvl:"B1",vol:"6",scene:"lang",ex:"الحكمة في القول"},
  {ar:"حكماء",tr:"ḥukamāʾ",zh:"智者（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"lang",ex:"الحكماء ينصحون"},
  {ar:"هدف",tr:"hadaf",zh:"目标",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الهدف واضح"},
  {ar:"أهداف",tr:"ʾahdāf",zh:"目标（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"أهدافنا كبيرة"},
  /* —— vol6 媒体 / 科技 / 全球 —— */
  {ar:"رقمنة",tr:"raqmata",zh:"数字化",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"الرقمنة تسرع العمل"},
  {ar:"خوارزمية",tr:"khawārizmiyya",zh:"算法",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"الخوارزمية دقيقة"},
  {ar:"شبكات",tr:"shabakāt",zh:"网络（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"الشبكات متصلة"},
  {ar:"خوادم",tr:"khawādim",zh:"服务器（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"الخوادم تعمل"},
  {ar:"قاعدة",tr:"qāʿida",zh:"基础 / 数据库",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"قاعدة البيانات كبيرة"},
  {ar:"قواعد",tr:"qawāʿid",zh:"规则 / 数据库（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"القواعد واضحة"},
  {ar:"منظمة",tr:"munaẓẓama",zh:"组织（机构）",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"المنظمة الدولية"},
  {ar:"تفويض",tr:"tafwīḍ",zh:"授权 / 委任",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"التفويض رسمي"},
  {ar:"امتياز",tr:"imtiyāz",zh:"特权",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الامتياز محدود"},
  {ar:"اللامركزية",tr:"al-lāmarkaziyya",zh:"去中心化",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"اللامركزية فعالة"},
  /* —— vol5 城市 / 交通 —— */
  {ar:"برج",tr:"burj",zh:"塔楼 / 大厦",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"البرج عالٍ"},
  {ar:"أبراج",tr:"ʾabrāj",zh:"塔楼（复数）",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الأبراج كثيرة"},
  {ar:"ساحة",tr:"sāḥa",zh:"广场",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الساحة واسعة"},
  {ar:"محافظة",tr:"muḥāfaẓa",zh:"省 / 行政区",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"المحافظة جميلة"},
  {ar:"منطقة",tr:"mantiqa",zh:"地区",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"المنطقة هادئة"},
  {ar:"مركز",tr:"markaz",zh:"中心",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"المركز مزدحم"},
  {ar:"ضاحية",tr:"ḍāḥiya",zh:"郊区（城郊）",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الضاحية نظيفة"},
  {ar:"بلدية",tr:"baladiyya",zh:"市政府",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"البلدية تخدم المواطنين"},
  {ar:"زقاق",tr:"zuqāq",zh:"小巷",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الزقاق ضيق"},
  {ar:"درب",tr:"darb",zh:"路 / 道",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الدرب طويل"},
  {ar:"موقف",tr:"mawqif",zh:"停车场 / 车站",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الموقف قريب"},
  {ar:"رصيف",tr:"raṣīf",zh:"站台 / 人行道",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الرصيف مزدحم"},
  {ar:"إشارة",tr:"ʾishāra",zh:"信号灯 / 标志",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الإشارة حمراء"},
  {ar:"لافتة",tr:"lāfita",zh:"路牌 / 招牌",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"اللافتة واضحة"},
  {ar:"حارة",tr:"ḥāra",zh:"车道 / 街区",pos:"名词",lvl:"B1",vol:"5",scene:"direction",ex:"الحارة واحدة"},
  /* —— vol5 教育 / 职业 —— */
  {ar:"خريج",tr:"kharīj",zh:"毕业生",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الخريج يبحث عن عمل"},
  {ar:"قبول",tr:"qabūl",zh:"录取 / 接受",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"القبول في الجامعة"},
  {ar:"تسجيل",tr:"tasjīl",zh:"注册 / 登记",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"التسجيل بدأ"},
  {ar:"صف",tr:"ṣaff",zh:"班 / 排",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الصف الثالث"},
  {ar:"دفعة",tr:"dafʿa",zh:"届 / 一批",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"دفعة 2026"},
  {ar:"أستاذة",tr:"ʾustādha",zh:"女教授",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الأستاذة تشرح جيداً"},
  {ar:"عميد",tr:"ʿamīd",zh:"院长",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"العميد يلقي كلمة"},
  {ar:"قاعة",tr:"qāʿa",zh:"大厅 / 教室",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"القاعة مليئة"},
  {ar:"مدرج",tr:"madraj",zh:"阶梯教室",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"المدرج كبير"},
  {ar:"رسوم",tr:"rusūm",zh:"学费 / 费用",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الرسوم مرتفعة"},
  {ar:"ملخص",tr:"mulakhkhaṣ",zh:"摘要",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"الملخص مفيد"},
  {ar:"دبلوم",tr:"diblūm",zh:"文凭",pos:"名词",lvl:"B1",vol:"5",scene:"school",ex:"حصل على دبلوم"},
  /* —— vol5 情感 / 抽象 —— */
  {ar:"إحساس",tr:"ʾiḥsās",zh:"感受",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"الإحساس بالأمان"},
  {ar:"انطباع",tr:"intibāʿ",zh:"印象",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"الانطباع الأول"},
  {ar:"إعجاب",tr:"ʾiʿjāb",zh:"欣赏 / 钦佩",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"أعربت عن إعجابي"},
  {ar:"احترام",tr:"iḥtirām",zh:"尊重",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"الاحترام متبادل"},
  {ar:"امتنان",tr:"imtinān",zh:"感激",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"أشعر بالامتنان"},
  {ar:"اعتذار",tr:"iʿtidhār",zh:"道歉",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"قبل اعتذاره"},
  {ar:"موافقة",tr:"muwāfaqa",zh:"同意",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"أعطيت موافقتي"},
  {ar:"رفض",tr:"rafḍ",zh:"拒绝",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"الرفض واضح"},
  {ar:"سلوك",tr:"sulūk",zh:"行为",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"السلوك الجيد"},
  {ar:"تصرف",tr:"taṣarruf",zh:"举止",pos:"名词",lvl:"B1",vol:"5",scene:"lang",ex:"التصرف الصحيح"},
  /* —— vol5 健康 / 生活 —— */
  {ar:"لياقة",tr:"liyāqa",zh:"体能",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"اللياقة تهم الرياضي"},
  {ar:"تمرين",tr:"tamrīn",zh:"锻炼 / 练习",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"التمرين يومي"},
  {ar:"نوم",tr:"nawm",zh:"睡眠",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"النوم الجيد"},
  {ar:"أرق",tr:"ʾaraq",zh:"失眠",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"الأرق يزعجني"},
  {ar:"إرهاق",tr:"irhāq",zh:"疲劳",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"الإرهاق شديد"},
  {ar:"نشاط",tr:"nashāṭ",zh:"活力 / 活动",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"النشاط يزيد"},
  {ar:"حيوية",tr:"ḥayawiyya",zh:"活力",pos:"名词",lvl:"B1",vol:"5",scene:"health",ex:"الحيوية ظاهرة"},
  /* —— vol5 自然 / 时间 —— */
  {ar:"تربة",tr:"turab",zh:"土壤",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"التربة خصبة"},
  {ar:"صخر",tr:"ṣakhr",zh:"岩石",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"الصخر صلب"},
  {ar:"معدن",tr:"maʿdin",zh:"矿物",pos:"名词",lvl:"B1",vol:"5",scene:"job",ex:"المعدن ثمين"},
  {ar:"معادن",tr:"maʿādin",zh:"矿物（复数）",pos:"名词",lvl:"B1",vol:"5",scene:"job",ex:"المعادن كثيرة"},
  {ar:"خشب",tr:"khashab",zh:"木材",pos:"名词",lvl:"B1",vol:"5",scene:"desc",ex:"الخشب قوي"},
  {ar:"حجر",tr:"ḥajar",zh:"石头",pos:"名词",lvl:"B1",vol:"5",scene:"desc",ex:"الحجر ثقيل"},
  {ar:"رمل",tr:"raml",zh:"沙子",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"الرمل ناعم"},
  {ar:"ينبوع",tr:"yanbūʿ",zh:"泉",pos:"名词",lvl:"B1",vol:"5",scene:"travel",ex:"الينبوع صافٍ"},
  {ar:"سماء",tr:"samāʾ",zh:"天空",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"السماء صافية"},
  {ar:"نجم",tr:"najm",zh:"星星",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"النجوم تتلألأ"},
  {ar:"قمر",tr:"qamar",zh:"月亮",pos:"名词",lvl:"B1",vol:"5",scene:"weather",ex:"القمر مضيء"},
  {ar:"شروق",tr:"shurūq",zh:"日出",pos:"名词",lvl:"B1",vol:"5",scene:"time",ex:"الشروق جميل"},
  {ar:"فجر",tr:"fajr",zh:"拂晓",pos:"名词",lvl:"B1",vol:"5",scene:"time",ex:"استيقظنا عند الفجر"},
  {ar:"ظهر",tr:"ẓuhr",zh:"正午",pos:"名词",lvl:"B1",vol:"5",scene:"time",ex:"الظهر حار"},
  {ar:"مدة",tr:"muda",zh:"时长",pos:"名词",lvl:"B1",vol:"5",scene:"time",ex:"المدة قصيرة"},
  {ar:"جيل",tr:"jīl",zh:"一代人",pos:"名词",lvl:"B1",vol:"5",scene:"family",ex:"الجيل الجديد"},
  {ar:"أجيال",tr:"ʾajyāl",zh:"世代（复数）",pos:"名词",lvl:"B1",vol:"5",scene:"family",ex:"لأجيال قادمة"},
  /* —— vol6 数量 / 结构 / 全球 —— */
  {ar:"قرن",tr:"qarn",zh:"世纪",pos:"名词",lvl:"B1",vol:"6",scene:"time",ex:"بدأ القرن الجديد"},
  {ar:"قرون",tr:"qurūn",zh:"世纪（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"time",ex:"عاشت قروناً"},
  {ar:"ألف",tr:"ʾalf",zh:"一千",pos:"名词",lvl:"B1",vol:"6",scene:"desc",ex:"ألف ريال"},
  {ar:"آلاف",tr:"ʾālāf",zh:"数千（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"desc",ex:"آلاف الناس"},
  {ar:"مليون",tr:"milyūn",zh:"百万",pos:"名词",lvl:"B1",vol:"6",scene:"desc",ex:"مليون نسمة"},
  {ar:"مليار",tr:"milyār",zh:"十亿",pos:"名词",lvl:"B1",vol:"6",scene:"desc",ex:"مليار دولار"},
  {ar:"تعداد",tr:"taʿdād",zh:"人口统计",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"تعداد السكان"},
  {ar:"هيكل",tr:"haykal",zh:"结构",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"هيكل الإدارة"},
  {ar:"بنية",tr:"bunya",zh:"结构 / 架构",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"البنية التحتية"},
  {ar:"آلية",tr:"ʾāliyya",zh:"机制",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"آلية العمل"},
  {ar:"وسيط",tr:"wasīṭ",zh:"中介 / 调解人",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الوسيط عادل"},
  {ar:"طرف",tr:"ṭaraf",zh:"一方",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"كل طرف له رأي"},
  {ar:"أطراف",tr:"ʾaṭrāf",zh:"各方（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الأطراف اجتمعت"},
  {ar:"نسخة",tr:"nuskha",zh:"版本 / 副本",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"النسخة الجديدة"},
  {ar:"مخطط",tr:"mukhaṭṭaṭ",zh:"规划图 / 方案",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"المخطط واضح"},
  /* —— vol6 政治制度 / 媒体 —— */
  {ar:"جمهورية",tr:"jumhūriyya",zh:"共和国",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الجمهورية عريقة"},
  {ar:"ملكية",tr:"mulkiyya",zh:"君主制 / 所有权",pos:"名词",lvl:"B1",vol:"6",scene:"diplo",ex:"الملكية محدودة"},
  {ar:"نشرة",tr:"nashra",zh:"简报 / 公报",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"النشرة الصباحية"},
  {ar:"شريط",tr:"sharīṭ",zh:"胶片 / 条带",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الشريط الإخباري"},
  {ar:"دورية",tr:"dawriyya",zh:"期刊 / 定期的",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"مجلة دورية"},
  {ar:"مقال",tr:"maqāl",zh:"文章",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"كتب مقالاً"},
  {ar:"مقالات",tr:"maqālāt",zh:"文章（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"المقالات متنوعة"},
  {ar:"تعليق",tr:"taʿlīq",zh:"评论（媒体）",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"التعليق موضوعي"},
  /* —— vol6 经济 / 金融深化 —— */
  {ar:"شراكة",tr:"sharāka",zh:"伙伴关系",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الشراكة مثمرة"},
  {ar:"احتكار",tr:"iḥtikār",zh:"垄断",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الاحتكار ممنوع"},
  {ar:"تسهيل",tr:"tas-hīl",zh:"便利化",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"تسهيل التجارة"},
  {ar:"حوافز",tr:"ḥawāfiz",zh:"激励（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الحوافز تشجع"},
  {ar:"استراتيجية",tr:"istirātījiyya",zh:"战略",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الاستراتيجية ناجحة"},
  {ar:"صندوق",tr:"ṣundūq",zh:"基金",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الصندوق يدعم"},
  {ar:"صناديق",tr:"ṣanādīq",zh:"基金（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الصناديق متنوعة"},
  {ar:"بورصة",tr:"būrṣa",zh:"证券交易所",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"البورصة صاعدة"},
  {ar:"ضريبة",tr:"ḍarība",zh:"税",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الضريبة مخفضة"},
  {ar:"ضرائب",tr:"ḍarāʾib",zh:"税（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الضرائب عادلة"},
  {ar:"جمارك",tr:"jamārik",zh:"关税",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الجمارك منخفضة"},
  {ar:"تعريفة",tr:"taʿrīfa",zh:"税率 / 费率",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"التعريفة جديدة"},
  {ar:"احتياطي",tr:"iḥtiyāṭī",zh:"储备",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الاحتياطي يكفي"},
  /* —— vol6 科技前沿 —— */
  {ar:"روبوت",tr:"rūbūt",zh:"机器人",pos:"名词",lvl:"B1",vol:"6",scene:"school",ex:"الروبوت يعمل"},
  {ar:"مستشعر",tr:"mustashʿir",zh:"传感器",pos:"名词",lvl:"B1",vol:"6",scene:"school",ex:"المستشعر دقيق"},
  {ar:"تشفير",tr:"tashfīr",zh:"加密",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"التشفير قوي"},
  {ar:"برمجة",tr:"barmaja",zh:"编程",pos:"名词",lvl:"B1",vol:"6",scene:"school",ex:"البرمجة ممتعة"},
  {ar:"مبرمج",tr:"mubarmij",zh:"程序员",pos:"名词",lvl:"B1",vol:"6",scene:"school",ex:"المبرمج ماهر"},
  {ar:"واجهة",tr:"wājiha",zh:"界面",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"الواجهة بسيطة"},
  {ar:"مستخدم",tr:"mustakhdim",zh:"用户",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"المستخدم سعيد"},
  {ar:"مستخدمون",tr:"mustakhdimūn",zh:"用户（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"المستخدمون كثيرون"},
  {ar:"اشتراك",tr:"ishtirāk",zh:"订阅",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"الاشتراك شهري"},
  {ar:"إصدار",tr:"ʾiṣdār",zh:"版本 / 发布",pos:"名词",lvl:"B1",vol:"6",scene:"net",ex:"إصدار جديد"},
  {ar:"تجريبي",tr:"tajrībī",zh:"试验性的",pos:"形容词",lvl:"B1",vol:"6",scene:"net",ex:"البرنامج تجريبي"},
  /* —— vol6 社会 / 危机 / 健康 —— */
  {ar:"فجوة",tr:"fajwa",zh:"差距",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الفجوة تتسع"},
  {ar:"توترات",tr:"tawatturāt",zh:"紧张局势（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"التوترات تهدأ"},
  {ar:"احتجاج",tr:"iḥtijāj",zh:"抗议",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الاحتجاج سلمي"},
  {ar:"إضراب",tr:"ʾiḍrāb",zh:"罢工",pos:"名词",lvl:"B1",vol:"6",scene:"job",ex:"الإضراب انتهى"},
  {ar:"تظاهرة",tr:"muẓāhara",zh:"示威",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"التظاهرة منظمة"},
  {ar:"انفجار",tr:"infijār",zh:"爆炸",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الانفجار بعيد"},
  {ar:"كارثة",tr:"kāritha",zh:"灾难",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الكارثة فادحة"},
  {ar:"كوارث",tr:"kawārith",zh:"灾难（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الكوارث محدودة"},
  {ar:"إغاثة",tr:"ʾighātha",zh:"救援",pos:"名词",lvl:"B1",vol:"6",scene:"news",ex:"الإغاثة عاجلة"},
  {ar:"وباء",tr:"wabāʾ",zh:"流行病",pos:"名词",lvl:"B1",vol:"6",scene:"health",ex:"الوباء انتشر"},
  {ar:"أوبئة",tr:"ʾawbiʾa",zh:"流行病（复数）",pos:"名词",lvl:"B1",vol:"6",scene:"health",ex:"الأوبئة تظهر"},
  {ar:"لقاح",tr:"luqāḥ",zh:"疫苗",pos:"名词",lvl:"B1",vol:"6",scene:"health",ex:"اللقاح آمن"},
  {ar:"مناعة",tr:"manāʿa",zh:"免疫力",pos:"名词",lvl:"B1",vol:"6",scene:"health",ex:"المناعة قوية"},
  {ar:"عزل",tr:"ʿazl",zh:"隔离",pos:"名词",lvl:"B1",vol:"6",scene:"health",ex:"العزل ضروري"},
  {ar:"سريري",tr:"sarīrī",zh:"临床的",pos:"形容词",lvl:"B1",vol:"6",scene:"health",ex:"التجربة السريرية"},
  /* —— vol6 学术思想 —— */
  {ar:"منهجية",tr:"manhajiyya",zh:"方法论",pos:"名词",lvl:"B1",vol:"6",scene:"school",ex:"المنهجية علمية"},
  {ar:"نقدية",tr:"naqdiyya",zh:"批判性",pos:"名词",lvl:"B1",vol:"6",scene:"school",ex:"الفكر النقدي"},
  {ar:"تحليلي",tr:"taḥlīlī",zh:"分析性的",pos:"形容词",lvl:"B1",vol:"6",scene:"school",ex:"المنهج التحليلي"},
  {ar:"موضوعي",tr:"mawḍūʿī",zh:"客观的",pos:"形容词",lvl:"B1",vol:"6",scene:"school",ex:"الرأي الموضوعي"},
  {ar:"ذاتي",tr:"dhātī",zh:"主观的",pos:"形容词",lvl:"B1",vol:"6",scene:"school",ex:"الحكم الذاتي"}
];

const FAMILIES_34 = [
  {root:"سفر",scene:"travel",vol:"3",lvl:"B1",ex:[["السفر يوسع الأفق","旅行开阔眼界"]],f:[
    {ar:"مسافر",tr:"musāfir",zh:"旅客",pos:"名词"},{ar:"مسافرة",tr:"musāfira",zh:"女旅客",pos:"名词"},{ar:"أسفار",tr:"asfār",zh:"旅行（复数）",pos:"名词"}]},
  {root:"فندق",scene:"travel",vol:"3",lvl:"B1",ex:[["الفنادق الحديثة مريحة","现代酒店很舒适"]],f:[
    {ar:"فنادق",tr:"fanādiq",zh:"酒店（复数）",pos:"名词"},{ar:"فندقي",tr:"funduqī",zh:"酒店的",pos:"形容词"}]},
  {root:"طعام",scene:"dining",vol:"3",lvl:"B1",ex:[["الأطعمة المحلية لذيذة","本地食物很好吃"]],f:[
    {ar:"أطعمة",tr:"ʾaṭʿima",zh:"食物（复数）",pos:"名词"}]},
  {root:"شراء",scene:"shopping",vol:"3",lvl:"B1",ex:[["المشتريات كثيرة اليوم","今天的采购很多"]],f:[
    {ar:"مشتريات",tr:"mushtarayāt",zh:"购物 / 采购（复数）",pos:"名词"},{ar:"مشترٍ",tr:"mushtarin",zh:"买主",pos:"名词"},{ar:"بيع",tr:"bayʿ",zh:"出售",pos:"名词"}]},
  {root:"خدمة",scene:"dining",vol:"3",lvl:"B1",ex:[["الخدمات في هذا الفندق ممتازة","这家酒店的服务很好"]],f:[
    {ar:"خدمات",tr:"khadamāt",zh:"服务（复数）",pos:"名词"},{ar:"خادم",tr:"khādim",zh:"服务员 / 仆人",pos:"名词"},{ar:"خدّام",tr:"khuddām",zh:"服务员们",pos:"名词"}]},
  {root:"جمال",scene:"desc",vol:"3",lvl:"B1",ex:[["جمال الطبيعة يدهشنا","自然之美令我们惊叹"]],f:[
    {ar:"أجمل",tr:"ʾajmal",zh:"更美",pos:"形容词"},{ar:"جمالي",tr:"jamālī",zh:"审美的",pos:"形容词"},{ar:"تجميل",tr:"tajmīl",zh:"美容",pos:"名词"}]},
  {root:"سعادة",scene:"greet",vol:"3",lvl:"B1",ex:[["السعادة في القناعة","幸福在于知足"]],f:[
    {ar:"سعيد",tr:"saʿīd",zh:"快乐的",pos:"形容词"},{ar:"سعداء",tr:"suʿadāʾ",zh:"快乐的人（复数）",pos:"名词"},{ar:"أسعد",tr:"ʾasʿad",zh:"更幸福",pos:"形容词"}]},
  {root:"ثقة",scene:"greet",vol:"3",lvl:"B1",ex:[["الثقة أساس الصداقة","信任是友谊的基础"]],f:[
    {ar:"واثق",tr:"wāthiq",zh:"自信的",pos:"形容词"},{ar:"موثوق",tr:"mawthūq",zh:"可靠的",pos:"形容词"},{ar:"توثيق",tr:"tawthīq",zh:"认证 / 记录",pos:"名词"}]},
  {root:"صبر",scene:"family",vol:"3",lvl:"B1",ex:[["الصبر مفتاح الفرج","忍耐是解脱之钥"]],f:[
    {ar:"صبور",tr:"ṣabūr",zh:"有耐心的",pos:"形容词"},{ar:"صابرون",tr:"ṣābirūn",zh:"忍耐者们",pos:"名词"}]},
  {root:"شجاع",scene:"desc",vol:"3",lvl:"B1",ex:[["الشجاعة صفة نبيلة","勇敢是高贵的品质"]],f:[
    {ar:"شجاعة",tr:"shajāʿa",zh:"勇气",pos:"名词"},{ar:"شجعان",tr:"shujʿān",zh:"勇敢者（复数）",pos:"名词"},{ar:"تشجيع",tr:"tashjīʿ",zh:"鼓励",pos:"名词"}]},
  {root:"صدق",scene:"greet",vol:"3",lvl:"B1",ex:[["الصدق في الكلام","言语要诚实"]],f:[
    {ar:"صادق",tr:"ṣādiq",zh:"诚实的",pos:"形容词"},{ar:"صداقة",tr:"ṣadāqa",zh:"友谊",pos:"名词"},{ar:"أصدقاء",tr:"ʾaṣdiqāʾ",zh:"朋友（复数）",pos:"名词"}]},
  {root:"كرم",scene:"visit",vol:"3",lvl:"B1",ex:[["الكرم صفة عربية أصيلة","慷慨是阿拉伯人的本色"]],f:[
    {ar:"كريم",tr:"karīm",zh:"慷慨的",pos:"形容词"},{ar:"كرامة",tr:"karāma",zh:"尊严",pos:"名词"},{ar:"كرام",tr:"kirām",zh:"尊贵的人（复数）",pos:"名词"}]},
  {root:"شعور",scene:"health",vol:"3",lvl:"B1",ex:[["المشاعر تحتاج إلى احترام","情感需要尊重"]],f:[
    {ar:"شعور",tr:"shuʿūr",zh:"感觉",pos:"名词"},{ar:"مشاعر",tr:"mashāʿir",zh:"情感（复数）",pos:"名词"},{ar:"شعوري",tr:"shuʿūrī",zh:"情感的",pos:"形容词"}]},
  {root:"فرح",scene:"greet",vol:"3",lvl:"B1",ex:[["الفرح يملأ البيت","喜悦充满家园"]],f:[
    {ar:"مفرح",tr:"mufriḥ",zh:"令人高兴的",pos:"形容词"},{ar:"أفراح",tr:"ʾafrāḥ",zh:"庆典（复数）",pos:"名词"}]},
  {root:"حزن",scene:"health",vol:"3",lvl:"B1",ex:[["الحزن يزول مع الوقت","悲伤随时间消逝"]],f:[
    {ar:"حزين",tr:"ḥazīn",zh:"悲伤的",pos:"形容词"},{ar:"أحزان",tr:"ʾaḥzān",zh:"悲伤（复数）",pos:"名词"},{ar:"محزن",tr:"muḥzin",zh:"令人悲伤的",pos:"形容词"}]},
  {root:"غضب",scene:"health",vol:"3",lvl:"B1",ex:[["الغضب لا يحل المشاكل","愤怒不解决问题"]],f:[
    {ar:"غاضب",tr:"ghāḍib",zh:"愤怒的",pos:"形容词"},{ar:"مغضوب",tr:"maghḍūb",zh:"被激怒的",pos:"形容词"}]},
  {root:"خوف",scene:"health",vol:"3",lvl:"B1",ex:[["الخوف عدو النجاح","恐惧是成功的敌人"]],f:[
    {ar:"خائف",tr:"khāʾif",zh:"害怕的",pos:"形容词"},{ar:"مخيف",tr:"mukhīf",zh:"可怕的",pos:"形容词"}]},
  {root:"رغبة",scene:"lang",vol:"3",lvl:"B1",ex:[["رغبتي أن أتعلم أكثر","我的愿望是学更多"]],f:[
    {ar:"راغب",tr:"rāghib",zh:"想要的",pos:"形容词"},{ar:"رغبات",tr:"raghabāt",zh:"愿望（复数）",pos:"名词"}]},
  {root:"أمل",scene:"lang",vol:"3",lvl:"B1",ex:[["الأمل يصنع المستقبل","希望创造未来"]],f:[
    {ar:"آمال",tr:"ʾāmāl",zh:"希望（复数）",pos:"名词"},{ar:"متفائل",tr:"mutafāʾil",zh:"乐观的",pos:"形容词"},{ar:"تفاؤل",tr:"tafāʾul",zh:"乐观",pos:"名词"}]},
  {root:"يأس",scene:"lang",vol:"3",lvl:"B1",ex:[["لا تدع اليأس يدخل قلبك","别让绝望进入你的心"]],f:[
    {ar:"يائس",tr:"yāʾis",zh:"绝望的",pos:"形容词"},{ar:"تشاؤم",tr:"tashāʾum",zh:"悲观",pos:"名词"},{ar:"متشائم",tr:"mutashāʾim",zh:"悲观的",pos:"形容词"}]},
  {root:"عقل",scene:"lang",vol:"3",lvl:"B1",ex:[["العقل السليم في الجسم السليم","健全的头脑在健全的身体里"]],f:[
    {ar:"عاقل",tr:"ʿāqil",zh:"理智的",pos:"形容词"},{ar:"عقول",tr:"ʿuqūl",zh:"头脑（复数）",pos:"名词"},{ar:"عقلي",tr:"ʿaqlī",zh:"脑力的",pos:"形容词"}]},
  {root:"ذكاء",scene:"school",vol:"3",lvl:"B1",ex:[["الذكاء الاصطناعي يتقدم","人工智能在进步"]],f:[
    {ar:"ذكي",tr:"dhakiyy",zh:"聪明的",pos:"形容词"},{ar:"أذكياء",tr:"ʾadkiyāʾ",zh:"聪明人（复数）",pos:"名词"}]},
  {root:"جهد",scene:"school",vol:"3",lvl:"B1",ex:[["النجاح يتطلب جهدا","成功需要努力"]],f:[
    {ar:"جهود",tr:"juhūd",zh:"努力（复数）",pos:"名词"},{ar:"مجتهد",tr:"mujtahid",zh:"勤奋的",pos:"形容词"},{ar:"اجتهاد",tr:"ijtihād",zh:"勤勉",pos:"名词"}]},
  {root:"نجاح",scene:"school",vol:"3",lvl:"B1",ex:[["النجاح لا يأتي بسهولة","成功来之不易"]],f:[
    {ar:"ناجح",tr:"nājiḥ",zh:"成功的",pos:"形容词"},{ar:"نجاحات",tr:"najāḥāt",zh:"成功（复数）",pos:"名词"},{ar:"أنجح",tr:"ʾanjah",zh:"更成功",pos:"形容词"}]},
  {root:"فشل",scene:"school",vol:"3",lvl:"B1",ex:[["الفشل بداية النجاح","失败是成功之始"]],f:[
    {ar:"فاشل",tr:"fāshil",zh:"失败的",pos:"形容词"}]},
  {root:"حاجة",scene:"shopping",vol:"3",lvl:"B1",ex:[["لكل إنسان حاجات أساسية","每个人都有基本需求"]],f:[
    {ar:"حاجات",tr:"ḥājāt",zh:"需求（复数）",pos:"名词"},{ar:"محتاج",tr:"muḥtāj",zh:"需要帮助的",pos:"形容词"},{ar:"احتياج",tr:"iḥtiyāj",zh:"需求",pos:"名词"}]},
  {root:"قدرة",scene:"school",vol:"3",lvl:"B1",ex:[["قدرات الإنسان لا حدود لها","人的能力无限"]],f:[
    {ar:"قدرات",tr:"qadarāt",zh:"能力（复数）",pos:"名词"},{ar:"قادر",tr:"qādir",zh:"有能力的",pos:"形容词"},{ar:"إمكانية",tr:"ʾimkāniyya",zh:"可能性",pos:"名词"}]},
  {root:"عادة",scene:"family",vol:"3",lvl:"B1",ex:[["العادات الجيدة تبنى بالتكرار","好习惯靠重复养成"]],f:[
    {ar:"عادات",tr:"ʿādāt",zh:"习惯（复数）",pos:"名词"},{ar:"معتاد",tr:"muʿtād",zh:"习惯的",pos:"形容词"}]},
  {root:"سعر",scene:"shopping",vol:"3",lvl:"B1",ex:[["الأسعار معقولة هذا العام","今年价格合理"]],f:[
    {ar:"أسعار",tr:"ʾasʿār",zh:"价格（复数）",pos:"名词"},{ar:"تسعير",tr:"tasʿīr",zh:"定价",pos:"名词"}]}
];
/* —— 合并并展开词根族 + 补充词库注入 WORDS（生成唯一 id） —— */
(function(){
  const FAMILIES=[].concat(FAMILIES_5, FAMILIES_6, FAMILIES_34);
  const gen=[]; let i=0;
  FAMILIES.forEach(f=>{
    f.f.forEach(m=>{
      gen.push(Object.assign({id:'wxf'+(i++), scene:f.scene, vol:f.vol, lvl:f.lvl, ex:f.ex||[]}, m));
    });
  });
  (PLAIN_EXTRA||[]).forEach(m=>{
    gen.push(Object.assign({id:'wx'+(i++), ex:(m.ex?[[m.ex,'']]:[])}, m));
  });
  WORDS.push.apply(WORDS, gen);
})();

/* ============================================================
 * 句子库 SENTENCES（按情景板块 + 等级组织，约 48 句）
 * 字段：id, scene, lvl, ar, tr, zh, tag(句型)
 * ============================================================ */
const SENTENCES = [
  /* —— 问候 —— */
  {id:"s_greet_1", scene:"greet", lvl:"A1", ar:"السلام عليكم ورحمة الله", tr:"as-salāmu ʿalaykum wa raḥmatullāh", zh:"祝你平安并蒙主慈悯。", tag:"问候句"},
  {id:"s_greet_2", scene:"greet", lvl:"A1", ar:"صباح الخير، كيف حالك؟", tr:"ṣabāḥ al-khayr, kayfa ḥāluk?", zh:"早上好，你好吗？", tag:"疑问名词句"},
  {id:"s_greet_3", scene:"greet", lvl:"A1", ar:"الحمد لله، بخير", tr:"al-ḥamdu lillāh, bikhayr", zh:"感谢真主，我很好。", tag:"名词句"},
  {id:"s_greet_4", scene:"greet", lvl:"A1", ar:"أهلاً وسهلاً بك في بلادنا", tr:"ahlan wa sahlan bika fī bilādinā", zh:"欢迎你来到我国。", tag:"欢迎句"},
  {id:"s_greet_5", scene:"greet", lvl:"A1", ar:"إلى اللقاء يا صديقي", tr:"ilā al-liqāʾ yā ṣadīqī", zh:"回头见，我的朋友。", tag:"道别句"},

  /* —— 家庭 —— */
  {id:"s_fam_1", scene:"family", lvl:"A1", ar:"هذه عائلتي", tr:"hādhihi ʿāʾilatī", zh:"这是我的家庭。", tag:"指示名词句"},
  {id:"s_fam_2", scene:"family", lvl:"A1", ar:"أبي مدرس وأمي طبيبة", tr:"abī mudarris wa-ummī ṭabība", zh:"我爸爸是老师，妈妈是医生。", tag:"名词句"},
  {id:"s_fam_3", scene:"family", lvl:"A1", ar:"عندي أخ وأخت", tr:"ʿindī akh wa-ukht", zh:"我有一个兄弟和一个姐妹。", tag:" possession 句"},
  {id:"s_fam_4", scene:"family", lvl:"A1", ar:"جدي كبير وهو طيب", tr:"jaddī kabīr wa-huwa ṭayyib", zh:"我祖父年纪大了，他很和善。", tag:"并列句"},
  {id:"s_fam_5", scene:"family", lvl:"A1", ar:"ابنتي صغيرة", tr:"ibnatī ṣaghīra", zh:"我的女儿还小。", tag:"名词句"},

  /* —— 问路 —— */
  {id:"s_dir_1", scene:"direction", lvl:"A1", ar:"أين المحطة من فضلك؟", tr:"ʾayna al-maḥaṭṭa min faḍlik?", zh:"请问车站在哪里？", tag:"疑问句"},
  {id:"s_dir_2", scene:"direction", lvl:"A1", ar:"اذهب يميناً ثم يساراً", tr:"idhhab yamīnan thumma yasāran", zh:"向右走，然后向左。", tag:"祈使句"},
  {id:"s_dir_3", scene:"direction", lvl:"A1", ar:"المدرسة قريبة من هنا", tr:"al-madrasa qarība min hunā", zh:"学校离这儿很近。", tag:"名词句"},
  {id:"s_dir_4", scene:"direction", lvl:"A1", ar:"البيت بعيد عن المركز", tr:"al-bayt baʿīd ʿan al-markaz", zh:"家离市中心很远。", tag:"名词句"},
  {id:"s_dir_5", scene:"direction", lvl:"A1", ar:"ماذا تريد أن تفعل هنا؟", tr:"mādhā turīdu an tafʿal hunā?", zh:"你想在这儿做什么？", tag:"动词句"},

  /* —— 餐厅 —— */
  {id:"s_dine_1", scene:"dining", lvl:"A1", ar:"أريد قهوة وماءً من فضلك", tr:"urīdu qahwatan wa māʾan min faḍlik", zh:"我想要咖啡和水，请。", tag:"动词句"},
  {id:"s_dine_2", scene:"dining", lvl:"A1", ar:"كم السعر؟", tr:"kam as-siʿr?", zh:"多少钱？", tag:"疑问句"},
  {id:"s_dine_3", scene:"dining", lvl:"A1", ar:"هذا الطعام لذيذ", tr:"hādhā aṭ-ṭaʿām ladhīdh", zh:"这食物很好吃。", tag:"名词句"},
  {id:"s_dine_4", scene:"dining", lvl:"A1", ar:"أنا جائع الآن", tr:"anā jāʾiʿ al-āna", zh:"我现在饿了。", tag:"名词句"},
  {id:"s_dine_5", scene:"dining", lvl:"A1", ar:"شكراً جزيلاً على الغداء", tr:"shukran jazīlan ʿalā al-ghadāʾ", zh:"非常感谢这顿午餐。", tag:"致谢句"},

  /* —— 购物 —— */
  {id:"s_shop_1", scene:"shopping", lvl:"A1", ar:"بكم هذا القميص؟", tr:"bikam hādhā al-qamīṣ?", zh:"这件衬衫多少钱？", tag:"疑问句"},
  {id:"s_shop_2", scene:"shopping", lvl:"A1", ar:"خفّض السعر من فضلك", tr:"khaffiḍ as-siʿr min faḍlik", zh:"（请）降降价吧。", tag:"祈使句"},
  {id:"s_shop_3", scene:"shopping", lvl:"A1", ar:"التفاح طازج", tr:"at-tuffāḥ ṭāzij", zh:"苹果很新鲜。", tag:"名词句"},
  {id:"s_shop_4", scene:"shopping", lvl:"A1", ar:"أريد ثلاثة تفاحات", tr:"urīdu thalāthat tuffāḥāt", zh:"我要三个苹果。", tag:"动词句"},
  {id:"s_shop_5", scene:"shopping", lvl:"A1", ar:"المتجر مفتوح الآن", tr:"al-matjar maftūḥ al-āna", zh:"商店现在开门。", tag:"名词句"},

  /* —— 学校 —— */
  {id:"s_sch_1", scene:"school", lvl:"A1", ar:"أنا طالب في الجامعة", tr:"anā ṭālib fī al-jāmiʿa", zh:"我是大学的学生。", tag:"名词句"},
  {id:"s_sch_2", scene:"school", lvl:"A1", ar:"أقرأ كتاباً كل يوم", tr:"aqraʾu kitāban kulla yawm", zh:"我每天读一本书。", tag:"动词句"},
  {id:"s_sch_3", scene:"school", lvl:"A1", ar:"المدرسة كبيرة وجديدة", tr:"al-madrasa kabīra wa-jadīda", zh:"学校很大而且很新。", tag:"并列名词句"},
  {id:"s_sch_4", scene:"school", lvl:"A1", ar:"عندي قلم وورقة", tr:"ʿindī qalam wa-waraqa", zh:"我有一支笔和一张纸。", tag:" possession 句"},
  {id:"s_sch_5", scene:"school", lvl:"A2", ar:"المعلم يكتب على السبورة", tr:"al-muʿallim yaktubu ʿalā as-subūra", zh:"老师在黑板上写字。", tag:"动词句"},

  /* —— 时间 —— */
  {id:"s_time_1", scene:"time", lvl:"A1", ar:"اليوم هو الأحد", tr:"al-yawm huwa al-aḥad", zh:"今天是星期日。", tag:"名词句"},
  {id:"s_time_2", scene:"time", lvl:"A1", ar:"أصحو في الصباح", tr:"aṣḥū fī aṣ-ṣabāḥ", zh:"我早晨醒来。", tag:"动词句"},
  {id:"s_time_3", scene:"time", lvl:"A1", ar:"غداً سأسافر إلى القاهرة", tr:"ghadan sa-asāfiru ilā al-qāhira", zh:"明天我将去开罗旅行。", tag:"将来动词句"},
  {id:"s_time_4", scene:"time", lvl:"A1", ar:"الساعة الآن الثالثة", tr:"as-sāʿa al-āna ath-thālitha", zh:"现在三点钟。", tag:"名词句"},
  {id:"s_time_5", scene:"time", lvl:"A1", ar:"السنة فيها اثنا عشر شهراً", tr:"as-sana fīhā ithnā ʿashar shaharan", zh:"一年有十二个月。", tag:"名词句"},

  /* —— 天气 —— */
  {id:"s_wth_1", scene:"weather", lvl:"A1", ar:"الطقس جميل اليوم", tr:"aṭ-ṭaqs jamīl al-yawm", zh:"今天天气很好。", tag:"名词句"},
  {id:"s_wth_2", scene:"weather", lvl:"A1", ar:"الشمس ساطعة", tr:"ash-shams sāṭiʿa", zh:"阳光明媚。", tag:"名词句"},
  {id:"s_wth_3", scene:"weather", lvl:"A1", ar:"المطر غزير هذا الصباح", tr:"al-maṭar ghazīr hādhā aṣ-ṣabāḥ", zh:"今天早晨雨很大。", tag:"名词句"},
  {id:"s_wth_4", scene:"weather", lvl:"A1", ar:"الجو بارد في الشتاء", tr:"al-jaww bārid fī ash-shitāʾ", zh:"冬天天气冷。", tag:"名词句"},
  {id:"s_wth_5", scene:"weather", lvl:"A2", ar:"الربيع فصل جميل والزهور تزهر", tr:"ar-rabīʿ faṣl jamīl wa-az-zuhūr tazharu", zh:"春天是美丽的季节，花儿盛开。", tag:"并列句"},

  /* —— 旅行 —— */
  {id:"s_trv_1", scene:"travel", lvl:"A1", ar:"أنا أسافر إلى مصر", tr:"anā asāfiru ilā miṣr", zh:"我去埃及旅行。", tag:"动词句"},
  {id:"s_trv_2", scene:"travel", lvl:"A1", ar:"الطائرة متأخرة", tr:"aṭ-ṭāʾira mutaʾakhkhira", zh:"飞机晚点了。", tag:"名词句"},
  {id:"s_trv_3", scene:"travel", lvl:"A1", ar:"كم يبعد المطار من هنا؟", tr:"kam yabʿadu al-maṭār min hunā?", zh:"机场离这儿有多远？", tag:"疑问句"},
  {id:"s_trv_4", scene:"travel", lvl:"A1", ar:"لدي تذكرة القطار", tr:"ladayya tadhkirat al-qiṭār", zh:"我有火车票。", tag:" possession 句"},
  {id:"s_trv_5", scene:"travel", lvl:"A1", ar:"الفندق قريب من المحطة", tr:"al-funduq qarīb min al-maḥaṭṭa", zh:"酒店离车站很近。", tag:"名词句"},

  /* —— 职业 —— */
  {id:"s_job_1", scene:"job", lvl:"A1", ar:"أبي طبيب في المستشفى", tr:"abī ṭabīb fī al-mustashfā", zh:"我爸爸是医院的医生。", tag:"名词句"},
  {id:"s_job_2", scene:"job", lvl:"A1", ar:"أعمل في شركة كبيرة", tr:"aʿmalu fī sharika kabīra", zh:"我在一家大公司工作。", tag:"动词句"},
  {id:"s_job_3", scene:"job", lvl:"A1", ar:"هي مهندسة موهوبة", tr:"hiya muhandisa mawhūba", zh:"她是一位有天赋的工程师。", tag:"名词句"},
  {id:"s_job_4", scene:"job", lvl:"A1", ar:"الراتب جيد هذا الشهر", tr:"ar-rātib jayyid hādhā ash-shahr", zh:"这个月工资不错。", tag:"名词句"},
  {id:"s_job_5", scene:"job", lvl:"A1", ar:"أريد عملاً جديداً", tr:"urīdu ʿamalan jadīdan", zh:"我想要一份新工作。", tag:"动词句"},

  /* —— 颜色·数字·描述 —— */
  {id:"s_desc_1", scene:"desc", lvl:"A1", ar:"هذا الكتاب أحمر", tr:"hādhā al-kitāb aḥmar", zh:"这本书是红色的。", tag:"名词句"},
  {id:"s_desc_2", scene:"desc", lvl:"A1", ar:"القميص أزرق والحذاء أسود", tr:"al-qamīṣ azraq wa-al-ḥidhāʾ aswad", zh:"衬衫是蓝色的，鞋是黑色的。", tag:"并列名词句"},
  {id:"s_desc_3", scene:"desc", lvl:"A1", ar:"عندي ثلاثة أقلام", tr:"ʿindī thalāthat aqlām", zh:"我有三支笔。", tag:" possession 句"},
  {id:"s_desc_4", scene:"desc", lvl:"A1", ar:"البيت كبير والحديقة صغيرة", tr:"al-bayt kabīr wa-al-ḥadīqa ṣaghīra", zh:"房子大，花园小。", tag:"并列句"},
  {id:"s_desc_5", scene:"desc", lvl:"A1", ar:"عشرة تفاحات حمراء", tr:"ʿashara tuffāḥāt ḥumrāʾ", zh:"十个苹果是红色的。", tag:"名词句"},

  /* —— 健康 —— */
  {id:"s_hlth_1", scene:"health", lvl:"A1", ar:"أنا مريض اليوم", tr:"anā marīḍ al-yawm", zh:"我今天病了。", tag:"名词句"},
  {id:"s_hlth_2", scene:"health", lvl:"A1", ar:"عندي ألم في الرأس", tr:"ʿindī alam fī ar-raʾs", zh:"我头疼。", tag:" possession 句"},
  {id:"s_hlth_3", scene:"health", lvl:"A1", ar:"الحمى عالية", tr:"al-ḥummā ʿāliya", zh:"高烧。", tag:"名词句"},
  {id:"s_hlth_4", scene:"health", lvl:"A1", ar:"أحتاج إلى دواء", tr:"aḥtāju ilā dawāʾ", zh:"我需要药。", tag:"动词句"},
  {id:"s_hlth_5", scene:"health", lvl:"A1", ar:"الراحة مهمة للصحة", tr:"ar-rāḥa muhimma li-ṣ-ṣiḥḥa", zh:"休息对健康很重要。", tag:"名词句"},

  /* —— 问候 · 扩充（第二册） —— */
  {id:"s_greet_6", scene:"greet", lvl:"A2", ar:"تشرفنا بلقائك", tr:"tasharrafnā biliqāʾik", zh:"很高兴认识您。", tag:"客套句", vol:"2"},
  {id:"s_greet_7", scene:"greet", lvl:"A2", ar:"كيف حال الأسرة؟", tr:"kayfa ḥāl al-usra?", zh:"家人好吗？", tag:"疑问句", vol:"2"},
  {id:"s_greet_8", scene:"greet", lvl:"A2", ar:"مع السلامة، أراك غداً", tr:"maʿa as-salāma, arāka ghadan", zh:"再见，明天见。", tag:"道别句", vol:"2"},
  {id:"s_greet_9", scene:"greet", lvl:"A2", ar:"أهلاً بك في بيتنا", tr:"ahlan bika fī baytinā", zh:"欢迎你到我们家。", tag:"欢迎句", vol:"2"},

  /* —— 家庭 · 扩充（第二册） —— */
  {id:"s_fam_6", scene:"family", lvl:"A2", ar:"عندي جدة كبيرة في السن", tr:"ʿindī jadda kabīra fī as-sinn", zh:"我有一个年迈的祖母。", tag:"possession 句", vol:"2"},
  {id:"s_fam_7", scene:"family", lvl:"A2", ar:"عمي يعمل طبيباً", tr:"ʿammī yaʿmalu ṭabīban", zh:"我叔叔是医生。", tag:"动词句", vol:"2"},
  {id:"s_fam_8", scene:"family", lvl:"A2", ar:"عائلتي مكونة من خمسة أفراد", tr:"ʿāʾilatī mukawwana min khamsat afrād", zh:"我家有五口人。", tag:"名词句", vol:"2"},
  {id:"s_fam_9", scene:"family", lvl:"A2", ar:"حفيدهم يدرس في الصين", tr:"ḥafīduhum yadrusu fī aṣ-ṣīn", zh:"他们的孙子在中国学习。", tag:"动词句", vol:"2"},

  /* —— 问路 · 扩充（第二册） —— */
  {id:"s_dir_6", scene:"direction", lvl:"A2", ar:"المحطة في الشمال من هنا", tr:"al-maḥaṭṭa fī ash-shamāl min hunā", zh:"车站在这里的北边。", tag:"名词句", vol:"2"},
  {id:"s_dir_7", scene:"direction", lvl:"A2", ar:"اذهب إلى اليمين عند التقاطع", tr:"idhhab ilā al-yamīn ʿinda at-taqāṭuʿ", zh:"到路口往右走。", tag:"祈使句", vol:"2"},
  {id:"s_dir_8", scene:"direction", lvl:"A2", ar:"كم تبعد الجامعة عن هنا؟", tr:"kam tabʿudu al-jāmiʿa ʿan hunā?", zh:"大学离这里有多远？", tag:"疑问句", vol:"2"},
  {id:"s_dir_9", scene:"direction", lvl:"A2", ar:"أستطيع أن أريك الطريق", tr:"ʾastaṭīʿu an uriyaka aṭ-ṭarīq", zh:"我可以给你指路。", tag:"动词句", vol:"2"},

  /* —— 餐厅 · 扩充（第二册） —— */
  {id:"s_dine_6", scene:"dining", lvl:"A2", ar:"هل تفضل الشاي أم القهوة؟", tr:"hal tufaḍḍil ash-shāy am al-qahwa?", zh:"你喜欢茶还是咖啡？", tag:"选择疑问句", vol:"2"},
  {id:"s_dine_7", scene:"dining", lvl:"A2", ar:"الفطور جاهز في المطبخ", tr:"al-fuṭūr jāhiz fī al-maṭbakh", zh:"早餐在厨房准备好了。", tag:"名词句", vol:"2"},
  {id:"s_dine_8", scene:"dining", lvl:"A2", ar:"أريد الفاتورة من فضلك", tr:"ʾurīd al-fātūra min faḍlik", zh:"请给我账单。", tag:"动词句", vol:"2"},
  {id:"s_dine_9", scene:"dining", lvl:"A2", ar:"الطعام ساخن، انتبه", tr:"aṭ-ṭaʿām sākhin, intabih", zh:"食物很烫，小心。", tag:"祈使句", vol:"2"},

  /* —— 购物 · 扩充（第二册） —— */
  {id:"s_shop_6", scene:"shopping", lvl:"A2", ar:"هل يوجد تخفيض اليوم؟", tr:"hal yūjad takhfīḍ al-yawm?", zh:"今天有打折吗？", tag:"疑问句", vol:"2"},
  {id:"s_shop_7", scene:"shopping", lvl:"A2", ar:"أدفع نقداً أو ببطاقة", tr:"ʾadfaʿu naqdan aw bibṭāqa", zh:"我付现金或刷卡。", tag:"动词句", vol:"2"},
  {id:"s_shop_8", scene:"shopping", lvl:"A2", ar:"هذا الخصم كبير", tr:"hādhā al-khaṣm kabīr", zh:"这个折扣很大。", tag:"名词句", vol:"2"},
  {id:"s_shop_9", scene:"shopping", lvl:"A2", ar:"البضاعة في هذا المتجر جيدة", tr:"al-biḍāʿa fī hādhā al-matjar jayyida", zh:"这家店的货物很好。", tag:"名词句", vol:"2"},

  /* —— 学校 · 扩充（第二册） —— */
  {id:"s_sch_6", scene:"school", lvl:"A2", ar:"الامتحان سيكون يوم الخميس", tr:"al-imtiḥān sayakūnu yawm al-khamīs", zh:"考试将在星期四。", tag:"将来句", vol:"2"},
  {id:"s_sch_7", scene:"school", lvl:"A2", ar:"الواجب صعب لكن مفيد", tr:"al-wājib ṣaʿb lākin mufīd", zh:"作业难但有益。", tag:"并列句", vol:"2"},
  {id:"s_sch_8", scene:"school", lvl:"A2", ar:"ذهبت إلى المكتبة أمس", tr:"dhahabtu ilā al-maktaba ams", zh:"我昨天去了图书馆。", tag:"过去式", vol:"2"},
  {id:"s_sch_9", scene:"school", lvl:"A2", ar:"الأستاذ يشرح الدرس جيداً", tr:"al-ʾustādh yashraḥu ad-dars jayyidan", zh:"老师讲解得很好。", tag:"动词句", vol:"2"},

  /* —— 时间 · 扩充（第二册） —— */
  {id:"s_time_6", scene:"time", lvl:"A2", ar:"موعدنا الساعة الخامسة مساءً", tr:"mawʿidunā as-sāʿa al-khāmisa masāʾan", zh:"我们约在下午五点。", tag:"名词句", vol:"2"},
  {id:"s_time_7", scene:"time", lvl:"A2", ar:"بعد غدٍ عطلة", tr:"baʿda ghadin ʿuṭla", zh:"后天放假。", tag:"名词句", vol:"2"},
  {id:"s_time_8", scene:"time", lvl:"A2", ar:"كم الساعة الآن؟", tr:"kam as-sāʿa al-āna?", zh:"现在几点了？", tag:"疑问句", vol:"2"},
  {id:"s_time_9", scene:"time", lvl:"A2", ar:"التاريخ اليوم الخامس من الشهر", tr:"at-tārīkh al-yawm al-khāmis min ash-shahr", zh:"今天是本月五号。", tag:"名词句", vol:"2"},

  /* —— 天气 · 扩充（第二册） —— */
  {id:"s_wth_6", scene:"weather", lvl:"A2", ar:"درجة الحرارة اليوم ثلاثون", tr:"darajat al-ḥarāra al-yawm thalāthūn", zh:"今天气温三十度。", tag:"名词句", vol:"2"},
  {id:"s_wth_7", scene:"weather", lvl:"A2", ar:"في الصيف الجو حار جداً", tr:"fī aṣ-ṣayf al-jaww ḥār jiddan", zh:"夏天天气很热。", tag:"名词句", vol:"2"},
  {id:"s_wth_8", scene:"weather", lvl:"A2", ar:"السماء مليئة بالغيوم", tr:"as-samāʾ malīʾa bil-ghuyūm", zh:"天空布满云。", tag:"名词句", vol:"2"},
  {id:"s_wth_9", scene:"weather", lvl:"A2", ar:"العاصفة قادمة غداً", tr:"al-ʿāṣifa qādima ghadan", zh:"暴风雨明天要来。", tag:"名词句", vol:"2"},

  /* —— 旅行 · 扩充（第二册） —— */
  {id:"s_trv_6", scene:"travel", lvl:"A2", ar:"حجزت غرفة في الفندق", tr:"ḥajaztu ghurfa fī al-funduq", zh:"我订了酒店房间。", tag:"过去式", vol:"2"},
  {id:"s_trv_7", scene:"travel", lvl:"A2", ar:"متى موعد وصول الطائرة؟", tr:"matā mawʿid wuṣūl aṭ-ṭāʾira?", zh:"飞机什么时候到达？", tag:"疑问句", vol:"2"},
  {id:"s_trv_8", scene:"travel", lvl:"A2", ar:"أمتعتي ثقيلة", tr:"ʾamtiʿatī thaqīla", zh:"我的行李很重。", tag:"名词句", vol:"2"},
  {id:"s_trv_9", scene:"travel", lvl:"A2", ar:"يحتاج المسافر إلى جواز سفر", tr:"yaḥtāj al-musāfir ilā jawāz safar", zh:"旅客需要护照。", tag:"动词句", vol:"2"},

  /* —— 职业 · 扩充（第二册） —— */
  {id:"s_job_6", scene:"job", lvl:"A2", ar:"المدير يريد مقابلتك", tr:"al-mudīr yurīdu muqābaltak", zh:"经理想见你。", tag:"动词句", vol:"2"},
  {id:"s_job_7", scene:"job", lvl:"A2", ar:"وظيفتي الجديدة ممتعة", tr:"waẓīfatī al-jadīda mumtiʿa", zh:"我的新工作很有意思。", tag:"名词句", vol:"2"},
  {id:"s_job_8", scene:"job", lvl:"A2", ar:"العاملون في المصنع مجتهدون", tr:"al-ʿāmilūn fī al-maṣnaʿ mujtahidūn", zh:"工厂的工人们很勤奋。", tag:"名词句", vol:"2"},
  {id:"s_job_9", scene:"job", lvl:"A2", ar:"أعمل من الصباح إلى المساء", tr:"aʿmalu min aṣ-ṣabāḥ ilā al-masāʾ", zh:"我从早工作到晚。", tag:"动词句", vol:"2"},

  /* —— 颜色·描述 · 扩充（第二册） —— */
  {id:"s_desc_6", scene:"desc", lvl:"A2", ar:"البيت أبيض من الخارج", tr:"al-bayt abyaḍ min al-khārij", zh:"房子外面是白色的。", tag:"名词句", vol:"2"},
  {id:"s_desc_7", scene:"desc", lvl:"A2", ar:"هذا الرجل طويل ونحيف", tr:"hādhā ar-rajul ṭawīl wa-naḥīf", zh:"这个男人又高又瘦。", tag:"并列句", vol:"2"},
  {id:"s_desc_8", scene:"desc", lvl:"A2", ar:"القطة سوداء صغيرة", tr:"al-qiṭṭa sawdāʾ ṣaghīra", zh:"那只猫是黑色的小猫。", tag:"名词句", vol:"2"},
  {id:"s_desc_9", scene:"desc", lvl:"A2", ar:"كم عدد الطلاب في الفصل؟", tr:"kam ʿadad aṭ-ṭullāb fī al-faṣl?", zh:"班里有多少学生？", tag:"疑问句", vol:"2"},

  /* —— 健康 · 扩充（第二册） —— */
  {id:"s_hlth_6", scene:"health", lvl:"A2", ar:"أذهب إلى الطبيب غداً", tr:"adhhabu ilā aṭ-ṭabīb ghadan", zh:"我明天去看医生。", tag:"动词句", vol:"2"},
  {id:"s_hlth_7", scene:"health", lvl:"A2", ar:"الطبيب وصف لي دواءً", tr:"aṭ-ṭabīb waṣafa lī dawāʾan", zh:"医生给我开了药。", tag:"过去式", vol:"2"},
  {id:"s_hlth_8", scene:"health", lvl:"A2", ar:"اشرب الماء الكثير", tr:"ishrab al-māʾ al-kathīr", zh:"多喝水。", tag:"祈使句", vol:"2"},
  {id:"s_hlth_9", scene:"health", lvl:"A2", ar:"المستشفى بعيد عن بيتنا", tr:"al-mustashfā baʿīd ʿan baytinā", zh:"医院离我们家很远。", tag:"名词句", vol:"2"},

  /* —— 拜访与做客 —— */
  {id:"s_visit_1", scene:"visit", lvl:"A1", ar:"تفضل بالدخول", tr:"tafaḍḍal bid-dukhūl", zh:"请进。", tag:"客套句", vol:"2"},
  {id:"s_visit_2", scene:"visit", lvl:"A1", ar:"مرحباً بك في بيتنا", tr:"marḥaban bika fī baytinā", zh:"欢迎到我们家来。", tag:"欢迎句", vol:"2"},
  {id:"s_visit_3", scene:"visit", lvl:"A1", ar:"هذه هدية صغيرة لك", tr:"hādhihi hadiyya ṣaghīra lak", zh:"这是给你的小礼物。", tag:"名词句", vol:"2"},
  {id:"s_visit_4", scene:"visit", lvl:"A1", ar:"اجلس من فضلك", tr:"ijlis min faḍlik", zh:"请坐。", tag:"祈使句", vol:"2"},
  {id:"s_visit_5", scene:"visit", lvl:"A2", ar:"هل تريد شاياً أم قهوة؟", tr:"hal turīd shāyan am qahwa?", zh:"你想喝茶还是咖啡？", tag:"选择疑问句", vol:"2"},
  {id:"s_visit_6", scene:"visit", lvl:"A2", ar:"أشكرك على الزيارة", tr:"ʾashkuruka ʿalā az-ziyāra", zh:"谢谢你的来访。", tag:"致谢句", vol:"2"},

  /* —— 网络与通信 —— */
  {id:"s_net_1", scene:"net", lvl:"A2", ar:"أرسلت لك رسالة إلكترونية", tr:"ʾarsaltu laka risālatan ʾiliktrūniyya", zh:"我给你发了封电子邮件。", tag:"过去式", vol:"2"},
  {id:"s_net_2", scene:"net", lvl:"A2", ar:"هاتفي قديم لكنه يعمل", tr:"hātifī qadīm lākinnahu yaʿmal", zh:"我的电话旧但能用。", tag:"并列句", vol:"2"},
  {id:"s_net_3", scene:"net", lvl:"A1", ar:"ما رقم هاتفك؟", tr:"mā raqm hātifik?", zh:"你的电话号码是多少？", tag:"疑问句", vol:"2"},
  {id:"s_net_4", scene:"net", lvl:"A2", ar:"أتصفح الإنترنت كل يوم", tr:"ʾataṣaffaḥu al-ʾinternet kulla yawm", zh:"我每天上网。", tag:"动词句", vol:"2"},
  {id:"s_net_5", scene:"net", lvl:"A2", ar:"اتصل بنا على هذا الرقم", tr:"ittaṣil binā ʿalā hādhā ar-raqm", zh:"请打这个号码联系我们。", tag:"祈使句", vol:"2"},
  {id:"s_net_6", scene:"net", lvl:"A2", ar:"الصفحة لا تفتح", tr:"aṣ-ṣafḥa lā taftaḥ", zh:"网页打不开。", tag:"否定句", vol:"2"},

  /* —— 郊游与休闲 —— */
  {id:"s_out_1", scene:"outing", lvl:"A1", ar:"نذهب إلى الحديقة في العطلة", tr:"nadhhabu ilā al-ḥadīqa fī al-ʿuṭla", zh:"假期我们去公园。", tag:"动词句", vol:"2"},
  {id:"s_out_2", scene:"outing", lvl:"A1", ar:"الجبل عالٍ جداً", tr:"al-jabal ʿālun jiddan", zh:"山非常高。", tag:"名词句", vol:"2"},
  {id:"s_out_3", scene:"outing", lvl:"A2", ar:"السباحة في البحر ممتعة", tr:"as-sibāḥa fī al-baḥr mumtiʿa", zh:"在海里游泳很愉快。", tag:"名词句", vol:"2"},
  {id:"s_out_4", scene:"outing", lvl:"A2", ar:"التقطنا صوراً جميلة", tr:"iltaqaṭnā ṣuwaran jamīla", zh:"我们拍了漂亮的照片。", tag:"过去式", vol:"2"},
  {id:"s_out_5", scene:"outing", lvl:"A2", ar:"هل تحب السفر إلى الشاطئ؟", tr:"hal tuḥibb as-safar ilā ash-shāṭiʾ?", zh:"你喜欢去海滩旅行吗？", tag:"疑问句", vol:"2"},
  {id:"s_out_6", scene:"outing", lvl:"A2", ar:"نهاية الأسبوع قريبة", tr:"nihāyat al-usbūʿ qarība", zh:"周末快到了。", tag:"名词句", vol:"2"},

  /* —— 语言与文化 —— */
  {id:"s_lang_1", scene:"lang", lvl:"A1", ar:"اللغة العربية لغة جميلة", tr:"al-lugha al-ʿarabiyya lugha jamīla", zh:"阿拉伯语是一门美丽的语言。", tag:"名词句", vol:"3"},
  {id:"s_lang_2", scene:"lang", lvl:"A1", ar:"أتعلم العربية منذ سنة", tr:"ʾataʿallamu al-ʿarabiyya mundhu sana", zh:"我学阿拉伯语一年了。", tag:"动词句", vol:"3"},
  {id:"s_lang_3", scene:"lang", lvl:"A1", ar:"ما معنى هذه الكلمة؟", tr:"mā maʿnā hādhihi al-kalima?", zh:"这个单词什么意思？", tag:"疑问句", vol:"3"},
  {id:"s_lang_4", scene:"lang", lvl:"A2", ar:"لهجتنا مختلفة عن الفصحى", tr:"lahjatunā mukhtalifa ʿan al-fuṣḥā", zh:"我们的方言与标准语不同。", tag:"名词句", vol:"3"},
  {id:"s_lang_5", scene:"lang", lvl:"A2", ar:"رتب هذه الجملة", tr:"rattib hādhihi al-jumla", zh:"请排列这个句子。", tag:"祈使句", vol:"3"},
  {id:"s_lang_6", scene:"lang", lvl:"A2", ar:"النطق الصحيح مهم جداً", tr:"an-nuṭq aṣ-ṣaḥīḥ muhimm jiddan", zh:"正确发音非常重要。", tag:"名词句", vol:"3"},

  /* —— 外事与访问 —— */
  {id:"s_dip_1", scene:"diplo", lvl:"A2", ar:"السفير يزور بلادنا غداً", tr:"as-safīr yazūru bilādanā ghadan", zh:"大使明天访问我国。", tag:"动词句", vol:"4"},
  {id:"s_dip_2", scene:"diplo", lvl:"A2", ar:"وزير الخارجية عقد مؤتمراً صحفياً", tr:"wazīr al-khārijiyya ʿaqada muʾtamaran ṣuḥufiyyan", zh:"外交部长举行了记者会。", tag:"过去式", vol:"4"},
  {id:"s_dip_3", scene:"diplo", lvl:"A2", ar:"العلاقات بين البلدين قوية", tr:"al-ʿalāqāt bayna al-baldayn qawiyya", zh:"两国关系牢固。", tag:"名词句", vol:"4"},
  {id:"s_dip_4", scene:"diplo", lvl:"A2", ar:"وقع البلدان اتفاقية تعاون", tr:"waqqaʿa al-baldān ittifāqiyyat taʿāwun", zh:"两国签署了合作协议。", tag:"过去式", vol:"4"},
  {id:"s_dip_5", scene:"diplo", lvl:"A2", ar:"أهلاً بالوفد الصيني", tr:"ahlan bil-wafd aṣ-ṣīnī", zh:"欢迎中国代表团。", tag:"欢迎句", vol:"4"},
  {id:"s_dip_6", scene:"diplo", lvl:"A2", ar:"نتعاون في مجال الاقتصاد", tr:"nataʿāwanu fī majāl al-iqtiṣād", zh:"我们在经济领域合作。", tag:"动词句", vol:"4"},

  /* —— 新闻与媒体 —— */
  {id:"s_news_1", scene:"news", lvl:"A1", ar:"قرأت الخبر في الصحيفة", tr:"qaraʾtu al-khabar fī aṣ-ṣaḥīfa", zh:"我在报纸上读了这条新闻。", tag:"过去式", vol:"3"},
  {id:"s_news_2", scene:"news", lvl:"A2", ar:"البرنامج يبدأ في الثامنة", tr:"al-barnāmaj yabdaʾu fī ath-thāmina", zh:"节目八点开始。", tag:"动词句", vol:"3"},
  {id:"s_news_3", scene:"news", lvl:"A2", ar:"ماذا قال المراسل؟", tr:"mādhā qāla al-murāsil?", zh:"记者说了什么？", tag:"疑问句", vol:"3"},
  {id:"s_news_4", scene:"news", lvl:"A2", ar:"أشاهد الأخبار كل مساء", tr:"ʾushāhidu al-ʾakhbār kulla masāʾ", zh:"我每晚看新闻。", tag:"动词句", vol:"3"},
  {id:"s_news_5", scene:"news", lvl:"A2", ar:"هذه قناة عالمية", tr:"hādhihi qanāh ʿālamiyya", zh:"这是一个国际频道。", tag:"名词句", vol:"3"},
  {id:"s_news_6", scene:"news", lvl:"A2", ar:"الخبر لم يظهر بعد", tr:"al-khabar lam yaẓhar baʿd", zh:"新闻还没出来。", tag:"否定句", vol:"3"},

  /* ============ B1 句子（第三~六册） ============ */
  /* —— 问候 B1 —— */
  {id:"s_greet_10", scene:"greet", lvl:"B1", ar:"أتمنى لك النجاح", tr:"ʾatamannā laka an-najāḥ", zh:"祝你成功。", tag:"祝愿句", vol:"3"},
  {id:"s_greet_11", scene:"greet", lvl:"B1", ar:"نهنئك بمناسبة العيد", tr:"nuhanniʾuka bimunāsabat al-ʿīd", zh:"我们祝贺你节日快乐。", tag:"祝愿句", vol:"3"},
  /* —— 家庭 B1 —— */
  {id:"s_fam_10", scene:"family", lvl:"B1", ar:"تربية الأطفال تحتاج إلى صبر", tr:"tarbiyat al-aṭfāl taḥtāju ilā ṣabr", zh:"教育孩子需要耐心。", tag:"动词句", vol:"3"},
  {id:"s_fam_11", scene:"family", lvl:"B1", ar:"زواج أخي سيكون في الصيف القادم", tr:"zawāj akhī sayakūnu fī aṣ-ṣayf al-qādim", zh:"我哥哥的婚礼将在明年夏天举行。", tag:"将来句", vol:"3"},
  /* —— 问路 B1 —— */
  {id:"s_dir_10", scene:"direction", lvl:"B1", ar:"اتبع الاتجاه الشمالي لمدة عشر دقائق", tr:"ittabiʿ al-ittijāh ash-shamālī li-muddat ʿashar daqāʾiq", zh:"朝北走十分钟。", tag:"祈使句", vol:"3"},
  {id:"s_dir_11", scene:"direction", lvl:"B1", ar:"الطريق السريع يؤدي إلى المطار", tr:"aṭ-ṭarīq as-sarīʿ yuʾaddī ilā al-maṭār", zh:"高速公路通往机场。", tag:"动词句", vol:"3"},
  /* —— 餐厅 B1 —— */
  {id:"s_dine_10", scene:"dining", lvl:"B1", ar:"هذه الوجبة لذيذة جداً", tr:"hādhihi al-wajba ladhīdha jiddan", zh:"这顿饭非常好吃。", tag:"名词句", vol:"3"},
  {id:"s_dine_11", scene:"dining", lvl:"B1", ar:"النادل يقدم الطعام بسرعة", tr:"an-nādil yuqaddimu aṭ-ṭaʿām bisurʿa", zh:"服务员上菜很快。", tag:"动词句", vol:"3"},
  /* —— 购物 B1 —— */
  {id:"s_shop_10", scene:"shopping", lvl:"B1", ar:"هذا المنتج ذو جودة عالية", tr:"hādhā al-muntaj dhu jawda ʿāliya", zh:"这个产品质量很高。", tag:"名词句", vol:"3"},
  {id:"s_shop_11", scene:"shopping", lvl:"B1", ar:"المتجر يعطي ضماناً لمدة سنة", tr:"al-matjar yuʿṭī ḍamānan li-muddat sana", zh:"商店提供一年保修。", tag:"动词句", vol:"3"},
  /* —— 学校 B1 —— */
  {id:"s_sch_10", scene:"school", lvl:"B1", ar:"المشروع البحثي يتطلب وقتاً وجهداً", tr:"al-mashrūʿ al-baḥthī yataṭallabu waqtan wa-juhdan", zh:"研究项目需要时间和努力。", tag:"动词句", vol:"3"},
  {id:"s_sch_11", scene:"school", lvl:"B1", ar:"منهج هذا العام أصعب من السابق", tr:"manhaj hādhā al-ʿām aṣʿab min as-sābiq", zh:"今年的课程比去年难。", tag:"比较句", vol:"3"},
  /* —— 时间 B1 —— */
  {id:"s_time_10", scene:"time", lvl:"B1", ar:"في العصر الجديد أصبح التواصل أسهل", tr:"fī al-ʿaṣr al-jadīd aṣbaḥa at-tawāṣul ʾashal", zh:"新时代交流变得更方便。", tag:"动词句", vol:"3"},
  {id:"s_time_11", scene:"time", lvl:"B1", ar:"سنناقش هذا الموضوع لاحقاً", tr:"sanunāqishu hādhā al-mawḍūʿ lāḥiqan", zh:"我们稍后讨论这个话题。", tag:"将来句", vol:"3"},
  /* —— 天气 B1 —— */
  {id:"s_wth_10", scene:"weather", lvl:"B1", ar:"رطوبة الجو عالية في الصيف", tr:"ruṭūbat al-jaww ʿāliya fī aṣ-ṣayf", zh:"夏天湿度很高。", tag:"名词句", vol:"3"},
  {id:"s_wth_11", scene:"weather", lvl:"B1", ar:"المناخ في هذه المنطقة معتدل", tr:"al-munākh fī hādhihi al-mantiqa muʿtadil", zh:"这个地区气候温和。", tag:"名词句", vol:"3"},
  /* —— 旅行 B1 —— */
  {id:"s_trv_10", scene:"travel", lvl:"B1", ar:"حصلت على تأشيرة السفر", tr:"ḥaṣaltu ʿalā taʾshīrat as-safar", zh:"我拿到了旅行签证。", tag:"过去式", vol:"3"},
  {id:"s_trv_11", scene:"travel", lvl:"B1", ar:"المنتجع قريب من الشاطئ", tr:"al-muntajaʿ qarīb min ash-shāṭiʾ", zh:"度假村离海滩很近。", tag:"名词句", vol:"3"},
  /* —— 职业 B1 —— */
  {id:"s_job_10", scene:"job", lvl:"B1", ar:"الإنتاج يزداد سنة بعد سنة", tr:"al-intāj yazdādu sanatan baʿda sana", zh:"产量逐年增加。", tag:"动词句", vol:"3"},
  {id:"s_job_11", scene:"job", lvl:"B1", ar:"التجارة بين البلدين نشطة", tr:"at-tijāra bayna al-baladayn nashīṭa", zh:"两国贸易活跃。", tag:"名词句", vol:"3"},
  /* —— 描述 B1 —— */
  {id:"s_desc_10", scene:"desc", lvl:"B1", ar:"الفندق فاخر ومذهل", tr:"al-funduq fākhir wa-mudh-hil", zh:"酒店豪华而惊人。", tag:"并列句", vol:"3"},
  {id:"s_desc_11", scene:"desc", lvl:"B1", ar:"التصميم بسيط لكنه جميل", tr:"at-taṣmīm basīṭ lākinnahu jamīl", zh:"设计简单但漂亮。", tag:"并列句", vol:"3"},
  /* —— 健康 B1 —— */
  {id:"s_hlth_10", scene:"health", lvl:"B1", ar:"العملية الجراحية نجحت", tr:"al-ʿamaliyya al-jirāḥiyya najiḥat", zh:"手术很成功。", tag:"过去式", vol:"3"},
  {id:"s_hlth_11", scene:"health", lvl:"B1", ar:"فحص الدم يظهر النتيجة غداً", tr:"faḥṣ ad-dam yuẓhiru an-natīja ghadan", zh:"血检明天出结果。", tag:"动词句", vol:"3"},
  /* —— 拜访 B1 —— */
  {id:"s_visit_7", scene:"visit", lvl:"B1", ar:"أقاموا وليمة كبيرة للضيوف", tr:"ʾaqāmū walīma kabīra li-ḍ-ḍuyūf", zh:"他们为客人摆了丰盛的宴席。", tag:"过去式", vol:"3"},
  {id:"s_visit_8", scene:"visit", lvl:"B1", ar:"أشكركم على حسن الضيافة", tr:"ʾashkurukum ʿalā ḥusn aḍ-ḍiyāfa", zh:"感谢你们的盛情款待。", tag:"致谢句", vol:"3"},
  {id:"s_visit_9", scene:"visit", lvl:"B1", ar:"تلقيت دعوة إلى العشاء", tr:"talaqqaytu daʿwa ilā al-ʿashāʾ", zh:"我收到了晚餐邀请。", tag:"过去式", vol:"3"},
  {id:"s_visit_10", scene:"visit", lvl:"B1", ar:"نرحب بكم في كل وقت", tr:"nuraḥḥibu bikum fī kull waqt", zh:"我们随时欢迎你们。", tag:"动词句", vol:"3"},
  /* —— 网络 B1 —— */
  {id:"s_net_7", scene:"net", lvl:"B1", ar:"حمّلت تطبيقاً جديداً على هاتفي", tr:"ḥammaltu taṭbīqan jadīdan ʿalā hātifī", zh:"我往手机上下载了一个新应用。", tag:"过去式", vol:"3"},
  {id:"s_net_8", scene:"net", lvl:"B1", ar:"البيانات محفوظة في الموقع", tr:"al-bayānāt maḥfūẓa fī al-mawqiʿ", zh:"数据保存在网站上。", tag:"名词句", vol:"3"},
  {id:"s_net_9", scene:"net", lvl:"B1", ar:"أرسل لي رسالة عبر البريد الإلكتروني", tr:"arsil lī risāla ʿabra al-barīd al-ʾiliktrūnī", zh:"请通过电子邮件给我发消息。", tag:"祈使句", vol:"3"},
  {id:"s_net_10", scene:"net", lvl:"B1", ar:"الشبكة بطيئة اليوم", tr:"ash-shabaka baṭīʾa al-yawm", zh:"今天网络很慢。", tag:"名词句", vol:"3"},
  /* —— 郊游 B1 —— */
  {id:"s_out_7", scene:"outing", lvl:"B1", ar:"قضينا عطلة ممتعة في المخيم", tr:"qaḍaynā ʿuṭla mumtiʿa fī al-mukhayyam", zh:"我们在营地度过了愉快的假期。", tag:"过去式", vol:"3"},
  {id:"s_out_8", scene:"outing", lvl:"B1", ar:"الغروب في البحر جميل جداً", tr:"al-ghurūb fī al-baḥr jamīl jiddan", zh:"海上的日落非常美。", tag:"名词句", vol:"3"},
  {id:"s_out_9", scene:"outing", lvl:"B1", ar:"نصنع شواءً في الحديقة يوم الجمعة", tr:"naṣnaʿu shiwāʾan fī al-ḥadīqa yawm al-jumʿa", zh:"我们周五在公园烧烤。", tag:"动词句", vol:"3"},
  {id:"s_out_10", scene:"outing", lvl:"B1", ar:"أحتاج إلى قسط من الراحة والاسترخاء", tr:"ʾaḥtāju ilā qisṭ min ar-rāḥa wal-istirkhāʾ", zh:"我需要休息和放松。", tag:"动词句", vol:"3"},
  /* —— 语言 B1 —— */
  {id:"s_lang_7", scene:"lang", lvl:"B1", ar:"الصرف والاشتقاق أساس اللغة العربية", tr:"aṣ-ṣarf wal-ishtiqāq ʾasās al-lugha al-ʿarabiyya", zh:"词法与派生是阿拉伯语的基础。", tag:"名词句", vol:"3"},
  {id:"s_lang_8", scene:"lang", lvl:"B1", ar:"حفظنا مفردات جديدة هذا الأسبوع", tr:"ḥafiẓnā mufradāt jadīda hādhā al-usbūʿ", zh:"这周我们记住了新词汇。", tag:"过去式", vol:"3"},
  {id:"s_lang_9", scene:"lang", lvl:"B1", ar:"إملاء الأستاذ سهل اليوم", tr:"imlāʾ al-ʾustādh sahl al-yawm", zh:"老师的听写今天不难。", tag:"名词句", vol:"3"},
  {id:"s_lang_10", scene:"lang", lvl:"B1", ar:"الأدب العربي غني بالشعر والنثر", tr:"al-ʾadab al-ʿarabī ghanī bish-shiʿr wan-nathr", zh:"阿拉伯文学富含诗歌和散文。", tag:"名词句", vol:"3"},
  /* —— 外事 B1（第四册） —— */
  {id:"s_dip_7", scene:"diplo", lvl:"B1", ar:"القمة الاقتصادية ستعقد في الرياض", tr:"al-qimma al-iqtiṣādiyya sa-tuʿqad fī ar-riyāḍ", zh:"经济峰会将在利雅得举行。", tag:"将来句", vol:"4"},
  {id:"s_dip_8", scene:"diplo", lvl:"B1", ar:"وقعوا معاهدة تعاون ثنائي", tr:"waqqaʿū muʿāhadat taʿāwun thunāʾī", zh:"他们签署了双边合作条约。", tag:"过去式", vol:"4"},
  {id:"s_dip_9", scene:"diplo", lvl:"B1", ar:"الاجتماع انتهى بتوقيع البيان المشترك", tr:"al-ijtimāʿ intahā bitawqīʿ al-bayān al-mushtarak", zh:"会议以签署联合声明结束。", tag:"过去式", vol:"4"},
  {id:"s_dip_10", scene:"diplo", lvl:"B1", ar:"الوفد يزور المتاحف بعد المؤتمر", tr:"al-wafd yazūru al-matāḥif baʿda al-muʾtamar", zh:"代表团会后参观博物馆。", tag:"动词句", vol:"4"},
  /* —— 新闻 B1 —— */
  {id:"s_news_7", scene:"news", lvl:"B1", ar:"التقرير يشرح الأسباب الرئيسية", tr:"at-taqrīr yashraḥu al-ʾasbāb ar-raʾīsiyya", zh:"报道解释了主要原因。", tag:"动词句", vol:"3"},
  {id:"s_news_8", scene:"news", lvl:"B1", ar:"المذيع علق على الأحداث الجارية", tr:"al-mudhīʿ ʿallaqa ʿalā al-ʾaḥdāth al-jāriya", zh:"主持人评论了时事。", tag:"过去式", vol:"3"},
  {id:"s_news_9", scene:"news", lvl:"B1", ar:"صدر تصريح رسمي من الحكومة", tr:"ṣadara taṣrīḥ rasmī min al-ḥukūma", zh:"政府发布了官方声明。", tag:"过去式", vol:"3"},
  {id:"s_news_10", scene:"news", lvl:"B1", ar:"هذا خبر عاجل ومهم", tr:"hādhā khabar ʿājil wa-muhimm", zh:"这是紧急而重要的新闻。", tag:"名词句", vol:"3"},

  /* ============ 扩展句库 EX（300 句，B1/B2，第三~六册） ============ */
  /* —— 条件句 —— */
  {id:"sx1", scene:"school", lvl:"B1", ar:"إذا درست جيداً ستنجح في الامتحان", tr:"ʾidhā darasta jayyidan sata-njaḥu fī al-imtiḥān", zh:"如果你努力学习，就会通过考试。", tag:"条件句", vol:"5", ctx:"إذا + 现在式，表将来条件"},
  {id:"sx2", scene:"travel", lvl:"B1", ar:"لو كان عندي وقت لسافرت إلى الخارج", tr:"law kāna ʿindī waqt lasāfartu ilā al-khārij", zh:"如果我有时间，就去国外旅行。", tag:"条件句", vol:"5", ctx:"لو + 过去式，表虚拟假设"},
  {id:"sx3", scene:"school", lvl:"B1", ar:"إن لم تفهم الدرس اسأل المعلم", tr:"ʾin lam tafham ad-dars isʾal al-muʿallim", zh:"如果没听懂课，就问老师。", tag:"条件句", vol:"5", ctx:"إن لم 否定条件 + 祈使"},
  {id:"sx4", scene:"diplo", lvl:"B1", ar:"إذا نجحت المفاوضات فسنوقع الاتفاقية", tr:"ʾidhā najiḥat al-mufāwaḍāt fasanuwaqqiʿu al-ittifāqiyya", zh:"如果谈判成功，我们就签署协定。", tag:"条件句", vol:"6", ctx:"إذا + فـ 结果句"},
  {id:"sx5", scene:"job", lvl:"B1", ar:"لو عمل الجميع بجد لتحسن الاقتصاد", tr:"law ʿamila al-jamīʿ bijidd lataḥassana al-iqtiṣād", zh:"如果大家都努力工作，经济就会好转。", tag:"条件句", vol:"6"},
  {id:"sx6", scene:"health", lvl:"B1", ar:"إن أخذت الدواء بانتظام فسوف تتحسن", tr:"ʾin ʾakhadhta ad-dawāʾ bintizām fasawfa tataḥassan", zh:"如果你按时吃药，就会好转。", tag:"条件句", vol:"5"},
  {id:"sx7", scene:"outing", lvl:"B1", ar:"إذا كان الجو جميلاً سنذهب إلى البحر", tr:"ʾidhā kāna al-jaww jamīlan sanadhhabu ilā al-baḥr", zh:"如果天气好，我们就去海边。", tag:"条件句", vol:"5"},
  {id:"sx8", scene:"net", lvl:"B1", ar:"لو توفر الإنترنت لأرسلت لك الصور", tr:"law tawaffara al-ʾinternet la-ʾarsaltu laka aṣ-ṣuwar", zh:"如果网络可用，我就把照片发给你。", tag:"条件句", vol:"5"},
  {id:"sx9", scene:"family", lvl:"B1", ar:"إن كنت متعباً فاسترح قليلاً", tr:"ʾin kunta mutaʿiban fastariḥ qalīlan", zh:"如果你累了，就休息一会儿。", tag:"条件句", vol:"5"},
  {id:"sx10", scene:"lang", lvl:"B1", ar:"إذا أردت أن تتقن العربية فاستمع كثيراً", tr:"ʾidhā ʾaradta ʾan tutqin al-ʿarabiyya fastamiʿ kathīran", zh:"如果你想精通阿拉伯语，就要多听。", tag:"条件句", vol:"5"},
  {id:"sx11", scene:"news", lvl:"B1", ar:"لو نشرت الصحيفة الخبر لانتشر بسرعة", tr:"law nasharat aṣ-ṣaḥīfa al-khabar la-ntashara bisurʿa", zh:"如果报纸刊登了这条新闻，就会迅速传播。", tag:"条件句", vol:"6"},
  {id:"sx12", scene:"shopping", lvl:"B1", ar:"إن كان السعر مناسباً فسأشتريه", tr:"ʾin kāna as-siʿr munāsiban fasa-ʾashtarīhi", zh:"如果价格合适，我就买它。", tag:"条件句", vol:"5"},
  /* —— 时间从句 —— */
  {id:"sx13", scene:"diplo", lvl:"B1", ar:"عندما يكبر الإنسان يتحمل المسؤولية", tr:"ʿindamā yakbur al-ʾinsān yataḥammal al-masʾūliyya", zh:"人长大后要承担责任。", tag:"时间句", vol:"6", ctx:"عندما + 现在式"},
  {id:"sx14", scene:"travel", lvl:"B1", ar:"حينما وصلنا إلى المطار تأخرت الطائرة", tr:"ḥīnamā waṣalnā ilā al-maṭār taʾakhkharat aṭ-ṭāʾira", zh:"我们到机场时飞机晚点了。", tag:"时间句", vol:"5"},
  {id:"sx15", scene:"diplo", lvl:"B1", ar:"بعد أن انتهى الاجتماع غادر الجميع القاعة", tr:"baʿda an intahā al-ijtimāʿ ghādara al-jamīʿ al-qāʿa", zh:"会议结束后大家都离开了大厅。", tag:"时间句", vol:"6", ctx:"بعد أن + 过去式"},
  {id:"sx16", scene:"travel", lvl:"B1", ar:"قبل أن تسافر احجز الفندق أولاً", tr:"qabla an tusāfir iḥjuz al-funduq ʾawwalan", zh:"出发前先订好酒店。", tag:"时间句", vol:"5", ctx:"قبل أن + 现在式"},
  {id:"sx17", scene:"family", lvl:"B1", ar:"بينما يقرأ الأب يشاهد الابن التلفاز", tr:"baynamā yaqraʾu al-ʾab yushāhidu al-ibn at-tilfāz", zh:"父亲读书时，儿子在看电视。", tag:"时间句", vol:"5", ctx:"بينما 表同时"},
  {id:"sx18", scene:"job", lvl:"B1", ar:"منذ أن عملت في هذه الشركة تغيرت حياتي", tr:"mundhu ʾan ʿamiltu fī hādhihi ash-sharika taghayyarat ḥayātī", zh:"自从在这家公司工作，我的生活就变了。", tag:"时间句", vol:"6", ctx:"منذ أن + 过去式"},
  {id:"sx19", scene:"news", lvl:"B1", ar:"كلما تقدمت التكنولوجيا زادت الراحة", tr:"kullamā taqaddamat at-tiknūlūjiyā zādat ar-rāḥa", zh:"技术越进步，生活越舒适。", tag:"时间句", vol:"6", ctx:"كلما 越…越…"},
  {id:"sx20", scene:"lang", lvl:"B1", ar:"طالما هناك أمل فهناك حياة", tr:"ṭālamā hunāka ʾamal fahunāka ḥayā", zh:"有希望就有生命。", tag:"时间句", vol:"6", ctx:"طالما 只要"},
  {id:"sx21", scene:"time", lvl:"B1", ar:"عندما يحل الليل تضاء المدينة", tr:"ʿindamā yaḥullu al-layl tuḍāʾ al-madīna", zh:"夜幕降临时城市亮起灯。", tag:"时间句", vol:"5"},
  {id:"sx22", scene:"school", lvl:"B1", ar:"بعد أن أتم دراستي سأسافر إلى القاهرة", tr:"baʿda an ʾutimma dirāsatī sa-ʾusāfiru ilā al-qāhira", zh:"完成学业后我将去开罗。", tag:"时间句", vol:"5"},
  {id:"sx23", scene:"weather", lvl:"B1", ar:"قبل أن يهطل المطر دخلنا البيت", tr:"qabla an yahṭul al-maṭar dakhalnā al-bayt", zh:"下雨前我们进了屋。", tag:"时间句", vol:"5"},
  {id:"sx24", scene:"visit", lvl:"B1", ar:"حينما زارنا الضيوف أعددنا الطعام", tr:"ḥīnamā zāranā aḍ-ḍuyūf ʾaʿdadnā aṭ-ṭaʿām", zh:"客人来访时我们准备了食物。", tag:"时间句", vol:"5"},
  {id:"sx25", scene:"news", lvl:"B1", ar:"منذ أن بدأت الحرب تغير كل شيء", tr:"mundhu ʾan badat al-ḥarb taghayyara kull shayʾ", zh:"自从战争开始，一切都变了。", tag:"时间句", vol:"6"},
  {id:"sx26", scene:"job", lvl:"B1", ar:"كلما ازداد الإنتاج انخفض السعر", tr:"kullamā izdāda al-intāj inkhafaḍa as-siʿr", zh:"产量增加，价格就下降。", tag:"时间句", vol:"6"},
  {id:"sx27", scene:"health", lvl:"B1", ar:"بينما كان المريض ينام دخل الطبيب", tr:"baynamā kāna al-marīḍ yanāmu dakhala aṭ-ṭabīb", zh:"病人睡觉时医生进来了。", tag:"时间句", vol:"5"},
  {id:"sx28", scene:"family", lvl:"B1", ar:"عندما كبرت فهمت نصيحة أبي", tr:"ʿindamā kabirtu fahimtu naṣīḥat ʾabī", zh:"长大后我才明白父亲的劝告。", tag:"时间句", vol:"5"},
  {id:"sx29", scene:"travel", lvl:"B1", ar:"بعد أن وصلنا إلى الفندق استرحنا قليلاً", tr:"baʿda an waṣalnā ilā al-funduq istaraḥnā qalīlan", zh:"到酒店后我们休息了一会儿。", tag:"时间句", vol:"5"},
  {id:"sx30", scene:"school", lvl:"B1", ar:"قبل أن يبدأ الدرس راجعنا الواجب", tr:"qabla an yabdaʾa ad-dars rājaʿnā al-wājib", zh:"上课前我们复习了作业。", tag:"时间句", vol:"5"},
  /* —— 因果句 —— */
  {id:"sx31", scene:"school", lvl:"B1", ar:"أدرس بجد لأن الامتحان قريب", tr:"ʾadrusu bijidd li-ʾanna al-imtiḥān qarīb", zh:"我努力学习，因为考试临近。", tag:"因果句", vol:"5", ctx:"لأنّ + 名词句"},
  {id:"sx32", scene:"weather", lvl:"B1", ar:"الجو بارد لذلك أرتدي المعطف", tr:"al-jaww bārid li-dhālika ʾartadī al-miʿṭaf", zh:"天气冷，所以我穿大衣。", tag:"因果句", vol:"5", ctx:"لذلك 所以"},
  {id:"sx33", scene:"travel", lvl:"B1", ar:"تأخرنا بسبب الزحام المروري", tr:"taʾakhkhamā bisabab az-zaḥām al-murūrī", zh:"我们因交通堵塞迟到了。", tag:"因果句", vol:"5", ctx:"بسبب 由于"},
  {id:"sx34", scene:"news", lvl:"B1", ar:"نتيجة للجهود الكبيرة تحقق النجاح", tr:"natījatan lil-juhūd al-kabīra taḥaqqaqa an-najāḥ", zh:"由于巨大努力，成功实现了。", tag:"因果句", vol:"6", ctx:"نتيجة لـ 由于"},
  {id:"sx35", scene:"diplo", lvl:"B1", ar:"تحسنت العلاقات لأن البلدين وقعا الاتفاق", tr:"taḥassanat al-ʿalāqāt li-ʾanna al-baladayn waqqaʿā al-ittifāq", zh:"关系改善了，因为两国签署了协议。", tag:"因果句", vol:"6"},
  {id:"sx36", scene:"health", lvl:"B1", ar:"يشعر بالتعب لأن نومه غير كافٍ", tr:"yashʿuru bit-taʿab li-ʾanna nawmahu ghayr kāfin", zh:"他感到累，因为睡眠不足。", tag:"因果句", vol:"5"},
  {id:"sx37", scene:"job", lvl:"B1", ar:"ارتفعت الأسعار بسبب زيادة الطلب", tr:"irtafaʿat al-ʾasʿār bisabab ziyādat aṭ-ṭalab", zh:"物价因需求增加而上涨。", tag:"因果句", vol:"6"},
  {id:"sx38", scene:"family", lvl:"B1", ar:"أحب هذه المدينة لأن سكانها طيبون", tr:"ʾuḥibb hādhihi al-madīna li-ʾanna sukkānahā ṭayyibūn", zh:"我喜欢这座城市，因为居民很友善。", tag:"因果句", vol:"5"},
  {id:"sx39", scene:"school", lvl:"B1", ar:"النتيجة كانت جيدة ولذلك فرحنا", tr:"an-natīja kānat jayyida wa-li-dhālika fariḥnā", zh:"成绩很好，所以我们很高兴。", tag:"因果句", vol:"5"},
  {id:"sx40", scene:"news", lvl:"B1", ar:"أغلقت المدرسة بسبب الثلوج الكثيفة", tr:"ʾughliqat al-madrasa bisabab ath-thulūj al-kathīfa", zh:"学校因大雪而关闭。", tag:"因果句", vol:"5"},
  {id:"sx41", scene:"diplo", lvl:"B1", ar:"انعقد المؤتمر لأن القضايا مهمة", tr:"inʿaqada al-muʾtamar li-ʾanna al-qadāyā muhimma", zh:"大会召开了，因为议题很重要。", tag:"因果句", vol:"6"},
  {id:"sx42", scene:"health", lvl:"B1", ar:"تلوث الهواء يسبب أمراضاً كثيرة", tr:"talawwuth al-hawāʾ yusabbibu ʾamrāḍan kathīra", zh:"空气污染导致许多疾病。", tag:"因果句", vol:"6"},
  /* —— 目的句 —— */
  {id:"sx43", scene:"lang", lvl:"B1", ar:"ندرس اللغة العربية لكي نفهم الثقافة", tr:"nadrusu al-lugha al-ʿarabiyya likay nafham ath-thaqāfa", zh:"我们学阿拉伯语是为了理解文化。", tag:"目的句", vol:"5", ctx:"لكي + 现在式"},
  {id:"sx44", scene:"school", lvl:"B1", ar:"ذهبت إلى المكتبة من أجل أن أقرأ", tr:"dhahabtu ilā al-maktaba min ʾajl an ʾaqraʾ", zh:"我去图书馆是为了读书。", tag:"目的句", vol:"5", ctx:"من أجل أن"},
  {id:"sx45", scene:"lang", lvl:"B1", ar:"أتكلم ببطء حتى يفهمني الجميع", tr:"ʾatakallamu bibutʾ ḥattā yafhamanī al-jamīʿ", zh:"我慢慢说，好让大家听懂。", tag:"目的句", vol:"5", ctx:"حتى + 现在式"},
  {id:"sx46", scene:"job", lvl:"B1", ar:"أعمل كثيراً لكي أعيش حياة أفضل", tr:"ʾaʿmalu kathīran likay ʾaʿīsha ḥayātan ʾafḍal", zh:"我努力工作，为了过更好的生活。", tag:"目的句", vol:"5"},
  {id:"sx47", scene:"travel", lvl:"B1", ar:"أحمل الخريطة حتى لا أضل الطريق", tr:"ʾaḥmil al-kharīṭa ḥattā lā ʾaḍilla aṭ-ṭarīq", zh:"我带着地图，以免迷路。", tag:"目的句", vol:"5", ctx:"حتى لا 以免"},
  {id:"sx48", scene:"news", lvl:"B1", ar:"ينشرون الأخبار من أجل توعية الناس", tr:"yanshurūna al-ʾakhbār min ʾajl tawʿiyat an-nās", zh:"他们发布新闻是为了唤醒民众。", tag:"目的句", vol:"6"},
  {id:"sx49", scene:"school", lvl:"B1", ar:"أراجع الدروس كل يوم كي أتفوق", tr:"ʾurājiʿu ad-durūs kulla yawm kay ʾatafawwaq", zh:"我每天复习功课，以便名列前茅。", tag:"目的句", vol:"5"},
  {id:"sx50", scene:"health", lvl:"B1", ar:"نمارس الرياضة حتى نحافظ على الصحة", tr:"numārisu ar-riyāḍa ḥattā nuḥāfiẓa ʿalā aṣ-ṣiḥḥa", zh:"我们锻炼身体以保持健康。", tag:"目的句", vol:"5"},
  {id:"sx51", scene:"diplo", lvl:"B1", ar:"عقدوا القمة لكي يعززوا التعاون", tr:"ʿaqadū al-qimma likay yuʿazzizū at-taʿāwun", zh:"他们举行峰会以加强合作。", tag:"目的句", vol:"6"},
  {id:"sx52", scene:"family", lvl:"B1", ar:"أدخر المال من أجل أن أشتري بيتاً", tr:"ʾuddakhir al-māl min ʾajl an ʾashtarī baytan", zh:"我攒钱是为了买房子。", tag:"目的句", vol:"5"},
  /* —— 转折 / 让步 / 对比 —— */
  {id:"sx53", scene:"job", lvl:"B1", ar:"رغم أن العمل صعب إلا أنه مفيد", tr:"raghma ʾan al-ʿamal ṣaʿb ʾillā ʾannahu mufīd", zh:"尽管工作难，但有益。", tag:"让步句", vol:"5", ctx:"رغم أن…إلا أن"},
  {id:"sx54", scene:"outing", lvl:"B1", ar:"على الرغم من المطر ذهبنا إلى الحديقة", tr:"ʿalā ar-raghm min al-maṭar dhahabnā ilā al-ḥadīqa", zh:"尽管下雨，我们还是去了公园。", tag:"让步句", vol:"5"},
  {id:"sx55", scene:"school", lvl:"B1", ar:"يريد أن يتعلم لكنه لا يجد الوقت", tr:"yurīdu ʾan yataʿallama lākinnahu lā yajid al-waqt", zh:"他想学，但没时间。", tag:"转折句", vol:"5"},
  {id:"sx56", scene:"desc", lvl:"B1", ar:"المدينة كبيرة بينما القرية صغيرة", tr:"al-madīna kabīra baynamā al-qarya ṣaghīra", zh:"城市大，而村庄小。", tag:"对比句", vol:"5", ctx:"بينما 而"},
  {id:"sx57", scene:"time", lvl:"B1", ar:"على الرغم من التأخير وصلنا في الموعد", tr:"ʿalā ar-raghm min at-taʾkhīr waṣalnā fī al-mawʿid", zh:"尽管有延误，我们还是按时到了。", tag:"让步句", vol:"5"},
  {id:"sx58", scene:"news", lvl:"B1", ar:"الخبر صحيح لكن تفاصيله ناقصة", tr:"al-khabar ṣaḥīḥ lākin tafāṣīluhu nāqiṣa", zh:"新闻是真的，但细节不全。", tag:"转折句", vol:"6"},
  {id:"sx59", scene:"family", lvl:"B1", ar:"أخي طويل بينما أنا قصير", tr:"ʾakhī ṭawīl baynamā ʾanā qaṣīr", zh:"我哥高，而我矮。", tag:"对比句", vol:"5"},
  {id:"sx60", scene:"job", lvl:"B1", ar:"رغم أن الراتب جيد إلا أن العمل مرهق", tr:"raghma ʾan ar-rātib jayyid ʾillā ʾanna al-ʿamal murhiq", zh:"尽管工资不错，但工作很累。", tag:"让步句", vol:"5"},
  {id:"sx61", scene:"shopping", lvl:"B1", ar:"هذا المتجر غالٍ لكن خدمته ممتازة", tr:"hādhā al-matjar ghālin lākin khidmatuhu mumtāza", zh:"这家店贵，但服务一流。", tag:"转折句", vol:"5"},
  {id:"sx62", scene:"diplo", lvl:"B1", ar:"الموقف صعب لكن الحل موجود", tr:"al-mawqif ṣaʿb lākin al-ḥall mawjūd", zh:"形势艰难，但办法是有的。", tag:"转折句", vol:"6"},
  {id:"sx63", scene:"weather", lvl:"B1", ar:"على الرغم من البرد استمر المشوار", tr:"ʿalā ar-raghm min al-bard istamarra al-mashwār", zh:"尽管天冷，行程还是继续了。", tag:"让步句", vol:"5"},
  {id:"sx64", scene:"health", lvl:"B1", ar:"المرض خطير لكن الأمل موجود", tr:"al-maraḍ khaṭīr lākin al-ʾamal mawjūd", zh:"病很重，但有希望。", tag:"转折句", vol:"5"},
  {id:"sx65", scene:"lang", lvl:"B1", ar:"الفصحى واضحة بينما اللهجات مختلفة", tr:"al-fuṣḥā wāḍiḥa baynamā al-lahajāt mukhtalifa", zh:"标准语清晰，而方言各有不同。", tag:"对比句", vol:"6"},
  {id:"sx66", scene:"school", lvl:"B1", ar:"رغم أن الامتحان صعب إلا أنني نجحت", tr:"raghma ʾan al-imtiḥān ṣaʿb ʾillā ʾannanī najiḥt", zh:"尽管考试难，我还是通过了。", tag:"让步句", vol:"5"},
  {id:"sx67", scene:"travel", lvl:"B1", ar:"الفندق صغير لكنه نظيف ومريح", tr:"al-funduq ṣaghīr lākinnahu naẓīf wa-murīḥ", zh:"酒店小，但干净舒适。", tag:"转折句", vol:"5"},
  {id:"sx68", scene:"news", lvl:"B1", ar:"الإعلان قصير بينما التفاصيل كثيرة", tr:"al-ʾiʿlān qaṣīr baynamā at-tafāṣīl kathīra", zh:"声明简短，而细节很多。", tag:"对比句", vol:"6"},
  {id:"sx69", scene:"family", lvl:"B1", ar:"الجدة كبيرة في السن لكنها نشيطة", tr:"al-jadda kabīra fī as-sinn lākinnahā nashīṭa", zh:"祖母年迈，但很精神。", tag:"转折句", vol:"5"},
  {id:"sx70", scene:"job", lvl:"B1", ar:"رغم المنافسة الشديدة بقيت الشركة قوية", tr:"raghma al-munāfasa ash-shadīda baqiyat ash-sharika qawiyya", zh:"尽管竞争激烈，公司依然强大。", tag:"让步句", vol:"6"},
  /* —— 关系从句 / 其他复合句 —— */
  {id:"sx71", scene:"news", lvl:"B1", ar:"هذا هو التقرير الذي نشرته الصحيفة", tr:"hādhā huwa at-taqrīr alladhī nasharat-hu aṣ-ṣaḥīfa", zh:"这就是报纸发表的那篇报道。", tag:"关系从句", vol:"6", ctx:"الذي 阳性关系代词"},
  {id:"sx72", scene:"school", lvl:"B1", ar:"الطالبة التي تدرس في الصف الأول مجتهدة", tr:"aṭ-ṭāliba allatī tadrusu fī aṣ-ṣaff al-ʾawwal mujtahida", zh:"在一年级学习的那位女学生很勤奋。", tag:"关系从句", vol:"5", ctx:"التي 阴性关系代词"},
  {id:"sx73", scene:"job", lvl:"B1", ar:"الشركة التي أعمل فيها كبيرة", tr:"ash-sharika allatī ʾaʿmalu fīhā kabīra", zh:"我工作的那家公司很大。", tag:"关系从句", vol:"5"},
  {id:"sx74", scene:"family", lvl:"B1", ar:"الرجل الذي رأيته أمس هو جارنا", tr:"ar-rajul alladhī raʾaytuhu ʾams huwa jārunā", zh:"昨天我看到的那个人是我们的邻居。", tag:"关系从句", vol:"5"},
  {id:"sx75", scene:"diplo", lvl:"B1", ar:"الاتفاقية التي وقعناها ستدخل حيز التنفيذ", tr:"al-ittifāqiyya allatī waqqaʿnāhā sata-dkhulu ḥayyaz at-tanfīdh", zh:"我们签署的协定将生效。", tag:"关系从句", vol:"6"},
  {id:"sx76", scene:"news", lvl:"B1", ar:"الأخبار التي تسمعها ليست كلها صحيحة", tr:"al-ʾakhbār allatī tasmaʿuhā laysat kulluhā ṣaḥīḥa", zh:"你听到的消息不都是真的。", tag:"关系从句", vol:"6"},
  {id:"sx77", scene:"lang", lvl:"B1", ar:"هذه هي الكلمة التي لم أفهم معناها", tr:"hādhihi hiya al-kalima allatī lam ʾafham maʿnāhā", zh:"这就是那个我没弄懂意思的词。", tag:"关系从句", vol:"5"},
  {id:"sx78", scene:"travel", lvl:"B1", ar:"أعرف فندقاً رخيصاً يمكنك أن تسكن فيه", tr:"ʾaʿrif funduqan rakhīṣan yumkinuka ʾan taskuna fīhi", zh:"我认识一家便宜的酒店，你可以住。", tag:"关系从句", vol:"5"},
  {id:"sx79", scene:"school", lvl:"B1", ar:"أقرأ الكتاب الذي أهداني إياه صديقي", tr:"ʾaqraʾu al-kitāb alladhī ʾahdānī ʾiyyāhu ṣadīqī", zh:"我在读朋友送我的那本书。", tag:"关系从句", vol:"5"},
  {id:"sx80", scene:"health", lvl:"B1", ar:"الدواء الذي وصفه الطبيب فعال جداً", tr:"ad-dawāʾ alladhī waṣafahu aṭ-ṭabīb faʿʿāl jiddan", zh:"医生开的药非常有效。", tag:"关系从句", vol:"5"},
  {id:"sx81", scene:"news", lvl:"B1", ar:"المقابلة التي أجراها المراسل مثيرة", tr:"al-muqābala allatī ʾajrāhā al-murāsil muthīra", zh:"记者做的采访很精彩。", tag:"关系从句", vol:"6"},
  {id:"sx82", scene:"shopping", lvl:"B1", ar:"اشتريت القميص الذي أعجبني في السوق", tr:"ishtaraytu al-qamīṣ alladhī ʾaʿjabanī fī as-sūq", zh:"我买了在市场上看中的那件衬衫。", tag:"关系从句", vol:"5"},
  {id:"sx83", scene:"school", lvl:"B1", ar:"أنا أعلم أن الامتحان سيكون صعباً", tr:"ʾanā ʾaʿlamu ʾanna al-imtiḥān sayakūnu ṣaʿban", zh:"我知道考试会很难。", tag:"أنّ 从句", vol:"5", ctx:"أعلم أن 认知动词+أنّ"},
  {id:"sx84", scene:"diplo", lvl:"B1", ar:"قالت الحكومة إن المفاوضات مستمرة", tr:"qālat al-ḥukūma ʾinna al-mufāwaḍāt mustamirra", zh:"政府说谈判仍在继续。", tag:"إنّ 从句", vol:"6"},
  {id:"sx85", scene:"family", lvl:"B1", ar:"أظن أن أخي سيعود غداً", tr:"ʾaẓunnu ʾanna ʾakhī sayaʿūdu ghadan", zh:"我想哥哥明天会回来。", tag:"أنّ 从句", vol:"5"},
  {id:"sx86", scene:"weather", lvl:"B1", ar:"تقول الأخبار إن الطقس سيتحسن", tr:"taqūlu al-ʾakhbār ʾinna aṭ-ṭaqs sayataḥassan", zh:"新闻说天气会好转。", tag:"إنّ 从句", vol:"6"},
  {id:"sx87", scene:"job", lvl:"B1", ar:"أعتقد أن المشروع يحتاج إلى وقت", tr:"ʾaʿtaqidu ʾanna al-mashrūʿ yaḥtāju ilā waqt", zh:"我认为项目需要时间。", tag:"أنّ 从句", vol:"6"},
  {id:"sx88", scene:"health", lvl:"B1", ar:"يقول الطبيب إن الراحة ضرورية", tr:"yaqūlu aṭ-ṭabīb ʾinna ar-rāḥa ḍarūriyya", zh:"医生说休息是必要的。", tag:"إنّ 从句", vol:"5"},
  {id:"sx89", scene:"news", lvl:"B1", ar:"أرجو أن تكون الأوضاع مستقرة", tr:"ʾarjū ʾan takūna al-ʾawḍāʿ mustaqirra", zh:"但愿局势稳定。", tag:"أنّ 从句", vol:"6"},
  {id:"sx90", scene:"lang", lvl:"B1", ar:"من المهم أن تتدرب كل يوم", tr:"min al-muhimm ʾan tatadarrab kulla yawm", zh:"每天练习很重要。", tag:"أنّ 从句", vol:"5"},
  {id:"sx91", scene:"school", lvl:"B1", ar:"من الأفضل أن تنام مبكراً", tr:"min al-ʾafḍal ʾan tanāma mubakkiran", zh:"最好早点睡。", tag:"أنّ 从句", vol:"5"},
  {id:"sx92", scene:"diplo", lvl:"B1", ar:"يجب أن يحترم الجميع القانون الدولي", tr:"yajibu ʾan yaḥtarima al-jamīʿ al-qānūn ad-duwalī", zh:"人人都应尊重国际法。", tag:"أنّ 从句", vol:"6"},
  {id:"sx93", scene:"job", lvl:"B1", ar:"يمكن أن تنجح إذا واصلت المحاولة", tr:"yumkin ʾan tanjaḥ ʾidhā wāṣalta al-muḥāwala", zh:"如果你坚持尝试，就可能成功。", tag:"أنّ 从句", vol:"5"},
  {id:"sx94", scene:"health", lvl:"B1", ar:"يجب أن تشرب الماء كثيراً في الصيف", tr:"yajibu ʾan tashrab al-māʾ kathīran fī aṣ-ṣayf", zh:"夏天应该多喝水。", tag:"أنّ 从句", vol:"5"},
  {id:"sx95", scene:"family", lvl:"B1", ar:"أريد أن أساعد والدي في العمل", tr:"ʾurīdu ʾan ʾusāʿida wālidayya fī al-ʿamal", zh:"我想帮父母干活。", tag:"أنّ 从句", vol:"5"},
  {id:"sx96", scene:"lang", lvl:"B1", ar:"نحن سعداء لأننا نتعلم شيئاً جديداً", tr:"naḥnu suʿadāʾ li-ʾannanā nataʿallamu shayʾan jadīdan", zh:"我们很高兴，因为我们学到了新东西。", tag:"因果句", vol:"5"},
  {id:"sx97", scene:"news", lvl:"B1", ar:"يعمل الصحفي ليلاً ونهاراً لينقل الخبر", tr:"yaʿmalu aṣ-ṣuḥufī laylan wanahāran li-yanqula al-khabar", zh:"记者日夜工作以报道新闻。", tag:"目的句", vol:"6"},
  {id:"sx98", scene:"travel", lvl:"B1", ar:"ما إن وصلنا حتى بدأت الرحلة", tr:"mā ʾin waṣalnā ḥattā badat ar-riḥla", zh:"我们一到，旅程就开始了。", tag:"时间句", vol:"5", ctx:"ما إن…حتى 一…就…"},
  {id:"sx99", scene:"school", lvl:"B1", ar:"كلما قرأت أكثر زادت ثقافتك", tr:"kullamā qaraʾta ʾakthar zādat thaqāfatuk", zh:"你读得越多，文化素养越高。", tag:"时间句", vol:"5"},
  {id:"sx100", scene:"diplo", lvl:"B1", ar:"على الرغم من الخلافات استمر الحوار", tr:"ʿalā ar-raghm min al-khilāfāt istamarra al-ḥiwār", zh:"尽管有分歧，对话仍在继续。", tag:"让步句", vol:"6"},
  /* —— 被动句 —— */
  {id:"sx101", scene:"news", lvl:"B1", ar:"قيل إن الاقتصاد سينمو هذا العام", tr:"qīla ʾinna al-iqtiṣād sayanmū hādhā al-ʿām", zh:"据说今年经济将增长。", tag:"被动句", vol:"6", ctx:"قيل إن 据说"},
  {id:"sx102", scene:"school", lvl:"B1", ar:"كتبت الرسالة بالعربية", tr:"kutibat ar-risāla bil-ʿarabiyya", zh:"这封信是用阿拉伯语写的。", tag:"被动句", vol:"5", ctx:"动词被动 kutibat"},
  {id:"sx103", scene:"news", lvl:"B1", ar:"أعلن عن موعد المؤتمر أمس", tr:"ʾuʿlina ʿan mawʿid al-muʾtamar ʾams", zh:"大会日期昨天公布了。", tag:"被动句", vol:"6"},
  {id:"sx104", scene:"travel", lvl:"B1", ar:"فتح المطار بعد ساعتين", tr:"futiḥa al-maṭār baʿda sāʿatayn", zh:"机场两小时后开放了。", tag:"被动句", vol:"5"},
  {id:"sx105", scene:"job", lvl:"B1", ar:"بني المصنع الجديد في المدينة", tr:"buniya al-maṣnaʿ al-jadīd fī al-madīna", zh:"新工厂建在城市里。", tag:"被动句", vol:"6"},
  {id:"sx106", scene:"news", lvl:"B1", ar:"انتشر الخبر بسرعة في جميع الوسائل", tr:"intashara al-khabar bisurʿa fī jamīʿ al-wasāʾil", zh:"消息迅速在所有媒体传播。", tag:"被动句", vol:"6"},
  {id:"sx107", scene:"school", lvl:"B1", ar:"يحفظ الدرس من قبل الطلاب", tr:"yuḥfaẓu ad-dars min qibal aṭ-ṭullāb", zh:"课文被学生们背诵。", tag:"被动句", vol:"5", ctx:"من قبل 被…"},
  {id:"sx108", scene:"health", lvl:"B1", ar:"علج المريض في المستشفى", tr:"ʿūlija al-marīḍ fī al-mustashfā", zh:"病人在医院接受了治疗。", tag:"被动句", vol:"5"},
  {id:"sx109", scene:"diplo", lvl:"B1", ar:"وقع الاتفاق من الطرفين", tr:"wuqqiʿa al-ittifāq min aṭ-ṭarafayn", zh:"协议由双方签署。", tag:"被动句", vol:"6"},
  {id:"sx110", scene:"news", lvl:"B1", ar:"تذاع الأخبار في الساعة التاسعة", tr:"tudhāʿu al-ʾakhbār fī as-sāʿa at-tāsiʿa", zh:"新闻在九点播出。", tag:"被动句", vol:"6"},
  /* —— 比较级与最高级 —— */
  {id:"sx111", scene:"desc", lvl:"B1", ar:"هذا البيت أجمل من ذلك", tr:"hādhā al-bayt ʾajmal min dhālika", zh:"这座房子比那座漂亮。", tag:"比较句", vol:"5", ctx:"أفعل من 比较结构"},
  {id:"sx112", scene:"shopping", lvl:"B1", ar:"هذا السوق أرخص من السوق الآخر", tr:"hādhā as-sūq ʾarkhaṣ min as-sūq al-ʾākhar", zh:"这个市场比另一个便宜。", tag:"比较句", vol:"5"},
  {id:"sx113", scene:"school", lvl:"B1", ar:"العربية ليست أصعب من الصينية", tr:"al-ʿarabiyya laysat ʾaṣʿab min aṣ-ṣīniyya", zh:"阿拉伯语不比汉语难。", tag:"比较句", vol:"5"},
  {id:"sx114", scene:"job", lvl:"B1", ar:"الإنتاج هذا العام أكثر من العام الماضي", tr:"al-intāj hādhā al-ʿām ʾakthar min al-ʿām al-māḍī", zh:"今年产量比去年多。", tag:"比较句", vol:"6"},
  {id:"sx115", scene:"travel", lvl:"B1", ar:"القطار أسرع من الحافلة", tr:"al-qiṭār ʾasraʿ min al-ḥāfila", zh:"火车比公共汽车快。", tag:"比较句", vol:"5"},
  {id:"sx116", scene:"diplo", lvl:"B1", ar:"هذه القمة أهم قمة في المنطقة", tr:"hādhihi al-qimma ʾahamm qimma fī al-mantiqa", zh:"这是本地区最重要的峰会。", tag:"最高级", vol:"6", ctx:"أفعل + 名词 最高级"},
  {id:"sx117", scene:"family", lvl:"B1", ar:"أمي أحب الناس إلى قلبي", tr:"ʾummī ʾaḥabb an-nās ilā qalbī", zh:"妈妈是我心中最爱的人。", tag:"最高级", vol:"5"},
  {id:"sx118", scene:"lang", lvl:"B1", ar:"الاستماع أفضل طريقة لتعلم اللغات", tr:"al-istimāʿ ʾafḍal ṭarīqa litaʿallum al-lughāt", zh:"听是学语言的最好方法。", tag:"最高级", vol:"5"},
  {id:"sx119", scene:"news", lvl:"B1", ar:"هذا أكبر حدث هذا العام", tr:"hādhā ʾakbar ḥadath hādhā al-ʿām", zh:"这是今年最大的事件。", tag:"最高级", vol:"6"},
  {id:"sx120", scene:"health", lvl:"B1", ar:"النوم المبكر خير من السهر", tr:"an-nawm al-mubakkir khayr min as-sahar", zh:"早睡比熬夜好。", tag:"比较句", vol:"5"},
  /* —— 感叹句与强调 —— */
  {id:"sx121", scene:"outing", lvl:"B1", ar:"ما أجمل هذا المنظر!", tr:"mā ʾajmal hādhā al-manẓar!", zh:"这景色多美啊！", tag:"感叹句", vol:"5", ctx:"ما + أفعل 感叹"},
  {id:"sx122", scene:"desc", lvl:"B1", ar:"كم هو لطيف هذا الفندق!", tr:"kam huwa laṭīf hādhā al-funduq!", zh:"这酒店多舒适啊！", tag:"感叹句", vol:"5"},
  {id:"sx123", scene:"school", lvl:"B1", ar:"يا لها من نتيجة رائعة!", tr:"yā lahā min natīja rāʾiʿa!", zh:"多么出色的成绩啊！", tag:"感叹句", vol:"5"},
  {id:"sx124", scene:"dining", lvl:"B1", ar:"ما ألذ هذا الطعام!", tr:"mā ʾaladhdh hādhā aṭ-ṭaʿām!", zh:"这食物真美味啊！", tag:"感叹句", vol:"5"},
  {id:"sx125", scene:"news", lvl:"B1", ar:"كم هي مفاجئة هذه الأخبار!", tr:"kam hiya mufājiʾa hādhihi al-ʾakhbār!", zh:"这消息多令人意外啊！", tag:"感叹句", vol:"6"},
  {id:"sx126", scene:"family", lvl:"B1", ar:"إنه هو الشخص الذي ساعدني", tr:"ʾinnahu huwa ash-shakhṣ alladhī sāʿadanī", zh:"正是他帮助了我。", tag:"强调句", vol:"5", ctx:"إن + ضمير 强调"},
  {id:"sx127", scene:"diplo", lvl:"B1", ar:"إن التعاون هو أساس السلام", tr:"ʾinna at-taʿāwun huwa ʾasās as-salām", zh:"合作正是和平的基础。", tag:"强调句", vol:"6"},
  {id:"sx128", scene:"lang", lvl:"B1", ar:"إن الممارسة هي طريق الإتقان", tr:"ʾinna al-mumārasa hiya ṭarīq al-ʾitqān", zh:"练习正是精通的途径。", tag:"强调句", vol:"5"},
  {id:"sx129", scene:"school", lvl:"B1", ar:"نعم، هذا هو الكتاب الذي أردت", tr:"naʿam, hādhā huwa al-kitāb alladhī ʾaradtu", zh:"是的，这正是我想要的书。", tag:"强调句", vol:"5"},
  {id:"sx130", scene:"news", lvl:"B1", ar:"حقيقةً، الوضع في تحسن مستمر", tr:"ḥaqīqatan, al-waḍʿ fī taḥassun mustamirr", zh:"的确，局势在持续好转。", tag:"强调句", vol:"6"},
  /* —— 否定与禁止 —— */
  {id:"sx131", scene:"school", lvl:"B1", ar:"لم أذهب إلى المدرسة أمس", tr:"lam ʾadhhab ilā al-madrasa ʾams", zh:"我昨天没去学校。", tag:"否定句", vol:"5", ctx:"لم + 现在式表过去否定"},
  {id:"sx132", scene:"news", lvl:"B1", ar:"لم تنشر الصحيفة الخبر بعد", tr:"lam tanshur aṣ-ṣaḥīfa al-khabar baʿd", zh:"报纸还没刊登这条新闻。", tag:"否定句", vol:"6"},
  {id:"sx133", scene:"job", lvl:"B1", ar:"لن أقبل هذه الوظيفة", tr:"lan ʾaqbal hādhihi al-waẓīfa", zh:"我不会接受这份工作。", tag:"否定句", vol:"5", ctx:"لن + 现在式表将来否定"},
  {id:"sx134", scene:"health", lvl:"B1", ar:"لا تدخن في المستشفى", tr:"lā tudakhkhin fī al-mustashfā", zh:"医院里禁止吸烟。", tag:"否定命令", vol:"5", ctx:"لا + 现在式 禁止"},
  {id:"sx135", scene:"travel", lvl:"B1", ar:"لا تنسَ جواز سفرك", tr:"lā tansa jawāza safarika", zh:"别忘了你的护照。", tag:"否定命令", vol:"5"},
  {id:"sx136", scene:"family", lvl:"B1", ar:"لا تقلق، كل شيء سيكون بخير", tr:"lā taqluq, kull shayʾ sayakūnu bikhayr", zh:"别担心，一切都会好的。", tag:"否定命令", vol:"5"},
  {id:"sx137", scene:"school", lvl:"B1", ar:"ما زال الامتحان بعيداً", tr:"mā zāla al-imtiḥān baʿīdan", zh:"考试还远着呢。", tag:"否定句", vol:"5", ctx:"ما زال 仍然"},
  {id:"sx138", scene:"news", lvl:"B1", ar:"ما تزال المفاوضات جارية", tr:"mā tazālu al-mufāwaḍāt jāriya", zh:"谈判仍在进行。", tag:"否定句", vol:"6"},
  {id:"sx139", scene:"school", lvl:"B1", ar:"لا يوجد شيء مستحيل", tr:"lā yūjad shayʾ mustaḥīl", zh:"没有不可能的事。", tag:"否定句", vol:"5"},
  {id:"sx140", scene:"diplo", lvl:"B1", ar:"لا خلاف بلا حل", tr:"lā khilāf bilā ḥall", zh:"没有无法解决的分歧。", tag:"否定句", vol:"6"},
  /* —— 祈使与建议 —— */
  {id:"sx141", scene:"health", lvl:"B1", ar:"خذ قسطاً من الراحة كل يوم", tr:"khudh qisṭan min ar-rāḥa kulla yawm", zh:"每天休息一会儿。", tag:"祈使句", vol:"5"},
  {id:"sx142", scene:"lang", lvl:"B1", ar:"كرر الجملة بصوت عالٍ", tr:"karrir al-jumla biṣawt ʿālin", zh:"大声重复这个句子。", tag:"祈使句", vol:"5"},
  {id:"sx143", scene:"school", lvl:"B1", ar:"انتبه إلى شرح المعلم", tr:"intabih ilā sharḥ al-muʿallim", zh:"注意听老师讲解。", tag:"祈使句", vol:"5"},
  {id:"sx144", scene:"news", lvl:"B1", ar:"اقرأ العناوين قبل التفاصيل", tr:"iqraʾ al-ʿanāwīn qabla at-tafāṣīl", zh:"先读标题再看细节。", tag:"祈使句", vol:"6"},
  {id:"sx145", scene:"travel", lvl:"B1", ar:"احجز التذكرة قبل أسبوع", tr:"iḥjuz at-tadhkara qabla usbūʿ", zh:"提前一周订票。", tag:"祈使句", vol:"5"},
  {id:"sx146", scene:"diplo", lvl:"B1", ar:"لنعمل معاً من أجل السلام", tr:"linʿmal maʿan min ʾajl as-salām", zh:"让我们为和平共同努力。", tag:"祈使句", vol:"6", ctx:"لـ + 现在式 提议"},
  {id:"sx147", scene:"school", lvl:"B1", ar:"لنبدأ الدرس الآن", tr:"linabdaʾ ad-dars al-āna", zh:"让我们现在开始上课。", tag:"祈使句", vol:"5"},
  {id:"sx148", scene:"health", lvl:"B1", ar:"اشرب الشاي الساخن عند البرد", tr:"ishrab ash-shāy as-sākhin ʿinda al-bard", zh:"天冷时喝热茶。", tag:"祈使句", vol:"5"},
  {id:"sx149", scene:"family", lvl:"B1", ar:"اتصل بوالديك كل أسبوع", tr:"ittaṣil biwālidayk kulla usbūʿ", zh:"每周给父母打电话。", tag:"祈使句", vol:"5"},
  {id:"sx150", scene:"lang", lvl:"B1", ar:"استمع إلى الأخبار بالعربية يومياً", tr:"istamiʿ ilā al-ʾakhbār bil-ʿarabiyya yawmiyyan", zh:"每天听阿拉伯语新闻。", tag:"祈使句", vol:"5"},
  /* —— 虚拟 / 祝愿 / 客套 —— */
  {id:"sx151", scene:"greet", lvl:"B1", ar:"أتمنى أن تزورنا في الصيف", tr:"ʾatamannā ʾan tazūranā fī aṣ-ṣayf", zh:"希望你夏天来看我们。", tag:"愿望句", vol:"5"},
  {id:"sx152", scene:"job", lvl:"B1", ar:"نرجو أن ينجح مشروعكم الجديد", tr:"narjū ʾan yanjaḥ mashrūʿukum al-jadīd", zh:"祝你们的新项目成功。", tag:"愿望句", vol:"6"},
  {id:"sx153", scene:"health", lvl:"B1", ar:"أتمنى لك الشفاء العاجل", tr:"ʾatamannā laka ash-shifāʾ al-ʿājil", zh:"祝你早日康复。", tag:"愿望句", vol:"5"},
  {id:"sx154", scene:"travel", lvl:"B1", ar:"رحلة سعيدة!", tr:"riḥla saʿīda!", zh:"旅途愉快！", tag:"祝愿句", vol:"5"},
  {id:"sx155", scene:"school", lvl:"B1", ar:"بالتوفيق في دراستك", tr:"bit-tawfīq fī dirāsatik", zh:"祝你学业顺利。", tag:"祝愿句", vol:"5"},
  {id:"sx156", scene:"visit", lvl:"B1", ar:"أهلاً وسهلاً بك في كل وقت", tr:"ahlan wa sahlan bika fī kull waqt", zh:"随时欢迎你。", tag:"客套句", vol:"5"},
  {id:"sx157", scene:"greet", lvl:"B1", ar:"يسعدني أن أتعرف عليك", tr:"yasuʿidunī ʾan ʾataʿarraf ʿalayk", zh:"很高兴认识你。", tag:"客套句", vol:"5"},
  {id:"sx158", scene:"visit", lvl:"B1", ar:"شرف لنا حضوركم", tr:"sharaf lanā ḥuḍūrukum", zh:"你们的到来是我们的荣幸。", tag:"客套句", vol:"6"},
  {id:"sx159", scene:"family", lvl:"B1", ar:"عسى أن تكون بخير دائماً", tr:"ʿasā ʾan takūna bikhayr dāʾiman", zh:"愿你永远安好。", tag:"愿望句", vol:"5"},
  {id:"sx160", scene:"news", lvl:"B1", ar:"نتمنى السلام والاستقرار للجميع", tr:"natamannā as-salām wal-istiqrār lil-jamīʿ", zh:"我们祝愿人人享有和平与稳定。", tag:"愿望句", vol:"6"},
  /* —— 间接引语 —— */
  {id:"sx161", scene:"news", lvl:"B1", ar:"قال الوزير إن الوضع تحت السيطرة", tr:"qāla al-wazīr ʾinna al-waḍʿ taḥta as-sayṭara", zh:"部长说局势已得到控制。", tag:"间接引语", vol:"6", ctx:"قال إن 转述"},
  {id:"sx162", scene:"school", lvl:"B1", ar:"سألني المعلم هل حفظت الدرس", tr:"saʾalanī al-muʿallim hal ḥafiẓtu ad-dars", zh:"老师问我是否背下了课文。", tag:"间接引语", vol:"5"},
  {id:"sx163", scene:"family", lvl:"B1", ar:"قالت أمي إن العشاء جاهز", tr:"qālat ʾummī ʾinna al-ʿashāʾ jāhiz", zh:"妈妈说晚饭准备好了。", tag:"间接引语", vol:"5"},
  {id:"sx164", scene:"diplo", lvl:"B1", ar:"أعلنوا أن القمة ستعقد في نوفمبر", tr:"ʾaʿlanū ʾanna al-qimma satuʿqadu fī nūfambir", zh:"他们宣布峰会将于十一月举行。", tag:"间接引语", vol:"6"},
  {id:"sx165", scene:"job", lvl:"B1", ar:"قال المدير إننا سنحصل على مكافأة", tr:"qāla al-mudīr ʾinnanā sanahṣulu ʿalā mukāfaʾa", zh:"经理说我们将获得奖金。", tag:"间接引语", vol:"5"},
  /* —— 数量与数字 —— */
  {id:"sx166", scene:"school", lvl:"B1", ar:"في الفصل أربعون طالباً", tr:"fī al-faṣl ʾarbaʿūn ṭāliban", zh:"班里有四十名学生。", tag:"数词句", vol:"5", ctx:"40–99 后接单数宾格"},
  {id:"sx167", scene:"time", lvl:"B1", ar:"أعمل ثماني ساعات في اليوم", tr:"ʾaʿmalu thamāniya sāʿāt fī al-yawm", zh:"我每天工作八小时。", tag:"数词句", vol:"5"},
  {id:"sx168", scene:"news", lvl:"B1", ar:"حضر المؤتمر مئة صحفي", tr:"ḥaḍara al-muʾtamar miʾat ṣuḥufī", zh:"一百名记者出席了大会。", tag:"数词句", vol:"6"},
  {id:"sx169", scene:"shopping", lvl:"B1", ar:"سعر هذا الكتاب خمسة وعشرون ريالاً", tr:"siʿr hādhā al-kitāb khamsa wa-ʿishrūn riyālan", zh:"这本书二十五里亚尔。", tag:"数词句", vol:"5"},
  {id:"sx170", scene:"health", lvl:"B1", ar:"درجة الحرارة سبع وثلاثون", tr:"darajat al-ḥarāra sabʿ wa-thalāthūn", zh:"体温三十七度。", tag:"数词句", vol:"5"},
  /* —— 时间表达 —— */
  {id:"sx171", scene:"time", lvl:"B1", ar:"وصلنا في السابعة والنصف", tr:"waṣalnā fī as-sābiʿa wan-niṣf", zh:"我们七点半到的。", tag:"时间表达", vol:"5"},
  {id:"sx172", scene:"time", lvl:"B1", ar:"الموعد في الربع الثالث", tr:"al-mawʿid fī ar-rubʿ ath-thālith", zh:"约会在三点十五。", tag:"时间表达", vol:"5"},
  {id:"sx173", scene:"time", lvl:"B1", ar:"بقي على الرحلة عشر دقائق", tr:"baqiya ʿalā ar-riḥla ʿashar daqāʾiq", zh:"离出发还有十分钟。", tag:"时间表达", vol:"5"},
  {id:"sx174", scene:"time", lvl:"B1", ar:"نلتقي يوم الخميس القادم", tr:"naltaqī yawm al-khamīs al-qādim", zh:"我们下周四见面。", tag:"时间表达", vol:"5"},
  {id:"sx175", scene:"time", lvl:"B1", ar:"المتجر مفتوح من التاسعة إلى العاشرة", tr:"al-matjar maftūḥ min at-tāsiʿa ilā al-ʿāshira", zh:"商店从九点开到十点。", tag:"时间表达", vol:"5"},
  /* —— 方位与地点 —— */
  {id:"sx176", scene:"direction", lvl:"B1", ar:"المتحف في وسط المدينة", tr:"al-matḥaf fī wasaṭ al-madīna", zh:"博物馆在市中心。", tag:"地点句", vol:"5"},
  {id:"sx177", scene:"direction", lvl:"B1", ar:"المحطة على بعد كيلومترين", tr:"al-maḥaṭṭa ʿalā buʿd kīlūmitrayn", zh:"车站在两公里外。", tag:"地点句", vol:"5"},
  {id:"sx178", scene:"direction", lvl:"B1", ar:"المستشفى مقابل الحديقة", tr:"al-mustashfā muqābil al-ḥadīqa", zh:"医院在公园对面。", tag:"地点句", vol:"5"},
  {id:"sx179", scene:"direction", lvl:"B1", ar:"المكتبة بجانب الجامعة", tr:"al-maktaba bijānib al-jāmiʿa", zh:"图书馆在大学旁边。", tag:"地点句", vol:"5"},
  {id:"sx180", scene:"direction", lvl:"B1", ar:"الشارع الرئيسي يؤدي إلى الساحة", tr:"ash-shāriʿ ar-raʾīsī yuʾaddī ilā as-sāḥa", zh:"主街通向广场。", tag:"地点句", vol:"5"},
  /* —— 职业与工作场景 —— */
  {id:"sx181", scene:"job", lvl:"B1", ar:"بدأت عملي في الساعة الثامنة", tr:"badaʾtu ʿamalī fī as-sāʿa ath-thāmina", zh:"我八点开始工作。", tag:"工作句", vol:"5"},
  {id:"sx182", scene:"job", lvl:"B1", ar:"أجتمع مع الزملاء كل صباح", tr:"ʾajtamiʿu maʿa az-zumalāʾ kulla ṣabāḥ", zh:"我每天早晨和同事们开会。", tag:"工作句", vol:"5"},
  {id:"sx183", scene:"job", lvl:"B1", ar:"المدير راضٍ عن أدائنا", tr:"al-mudīr rāḍin ʿan ʾadāʾinā", zh:"经理对我们的表现满意。", tag:"工作句", vol:"5"},
  {id:"sx184", scene:"job", lvl:"B1", ar:"سأقدم استقالتي نهاية الشهر", tr:"sa-ʾuqaddimu istiqālatī nihāyat ash-shahr", zh:"我月底将递交辞呈。", tag:"工作句", vol:"6"},
  {id:"sx185", scene:"job", lvl:"B1", ar:"الشركة توفر دورات تدريبية للموظفين", tr:"ash-sharika tuwaffiru dawrāt tadrībiyya lil-muwaẓẓafīn", zh:"公司为员工提供培训课程。", tag:"工作句", vol:"6"},
  /* —— 学习与教育 —— */
  {id:"sx186", scene:"school", lvl:"B1", ar:"أدرس أربع مواد هذا الفصل", tr:"ʾadrusu ʾarbaʿ mawādd hādhā al-faṣl", zh:"这学期我学四门课。", tag:"学习句", vol:"5"},
  {id:"sx187", scene:"school", lvl:"B1", ar:"المنهج الجديد يشمل التطبيق العملي", tr:"al-manhaj al-jadīd yashmalu at-taṭbīq al-ʿamalī", zh:"新课程包括实践应用。", tag:"学习句", vol:"6"},
  {id:"sx188", scene:"school", lvl:"B1", ar:"أكتب ملخصاً بعد كل درس", tr:"ʾaktubu mulakhkhaṣan baʿda kull dars", zh:"每课后我写一份摘要。", tag:"学习句", vol:"5"},
  {id:"sx189", scene:"school", lvl:"B1", ar:"الحفظ وحده لا يكفي للفهم", tr:"al-ḥifẓ wahdahu lā yakfī lil-fahm", zh:"光背不足以理解。", tag:"学习句", vol:"5"},
  {id:"sx190", scene:"school", lvl:"B1", ar:"أسأل الأستاذ عندما أشك في شيء", tr:"ʾasʾal al-ʾustādh ʿindamā ʾashukku fī shayʾ", zh:"有疑问时我就问老师。", tag:"学习句", vol:"5"},
  /* —— 社交与情感 —— */
  {id:"sx191", scene:"greet", lvl:"B1", ar:"أشعر بالسعادة عندما أراك", tr:"ʾashʿuru bis-saʿāda ʿindamā ʾarāk", zh:"见到你我很高兴。", tag:"情感句", vol:"5"},
  {id:"sx192", scene:"family", lvl:"B1", ar:"نفتقد من غاب عنا", tr:"naftaqidu man ghāba ʿannā", zh:"我们怀念离开的人。", tag:"情感句", vol:"5"},
  {id:"sx193", scene:"greet", lvl:"B1", ar:"أعتذر عن التأخير", tr:"ʾaʿtadhiru ʿan at-taʾkhīr", zh:"抱歉我迟到了。", tag:"道歉句", vol:"5"},
  {id:"sx194", scene:"visit", lvl:"B1", ar:"نشكركم على كرم الضيافة", tr:"nashkurukum ʿalā karam aḍ-ḍiyāfa", zh:"感谢你们的盛情款待。", tag:"致谢句", vol:"5"},
  {id:"sx195", scene:"health", lvl:"B1", ar:"أشعر بتحسن كبير اليوم", tr:"ʾashʿuru bitaḥassun kabīr al-yawm", zh:"我今天感觉好多了。", tag:"情感句", vol:"5"},
  /* —— 新闻与媒体表达 —— */
  {id:"sx196", scene:"news", lvl:"B1", ar:"التقرير يغطي الأحداث بالتفصيل", tr:"at-taqrīr yughaṭṭī al-ʾaḥdāth bit-tafṣīl", zh:"报道详细报道了事件。", tag:"新闻句", vol:"6"},
  {id:"sx197", scene:"news", lvl:"B1", ar:"المذيع يقدم البرنامج بأسلوب جذاب", tr:"al-mudhīʿ yuqaddimu al-barnāmaj bi-ʾuslūb jadhdhāb", zh:"主持人以引人入胜的方式主持节目。", tag:"新闻句", vol:"6"},
  {id:"sx198", scene:"news", lvl:"B1", ar:"الصحف اليومية تنشر أخبار العالم", tr:"aṣ-ṣuḥuf al-yawmiyya tanshuru ʾakhbār al-ʿālam", zh:"日报发布世界新闻。", tag:"新闻句", vol:"6"},
  {id:"sx199", scene:"news", lvl:"B1", ar:"التحليل يوضح أسباب الأزمة", tr:"at-taḥlīl yuwaddiḥu ʾasbāb al-ʾazma", zh:"分析阐明了危机的原因。", tag:"新闻句", vol:"6"},
  {id:"sx200", scene:"news", lvl:"B1", ar:"الإعلام يلعب دوراً كبيراً في المجتمع", tr:"al-ʾiʿlām yalʿabu dawran kabīran fī al-mujtamaʿ", zh:"媒体在社会中扮演重要角色。", tag:"新闻句", vol:"6"},
  /* —— 旅行与日常生活 —— */
  {id:"sx201", scene:"travel", lvl:"B1", ar:"أفضل السفر بالقطار على الطائرة", tr:"ʾufaḍḍil as-safar bil-qiṭār ʿalā aṭ-ṭāʾira", zh:"比起飞机我更喜欢坐火车旅行。", tag:"旅行句", vol:"5"},
  {id:"sx202", scene:"travel", lvl:"B1", ar:"نظف الغرفة وغادرنا الفندق", tr:"naẓẓafnā al-ghurfa wa-ghādarnā al-funduq", zh:"我们收拾好房间离开了酒店。", tag:"旅行句", vol:"5"},
  {id:"sx203", scene:"travel", lvl:"B1", ar:"أحتاج إلى حقيبة أكبر", tr:"ʾaḥtāju ilā ḥaqība ʾakbar", zh:"我需要一个大一点的包。", tag:"旅行句", vol:"5"},
  {id:"sx204", scene:"travel", lvl:"B1", ar:"متى تصل الرحلة من القاهرة؟", tr:"matā taṣil ar-riḥla min al-qāhira?", zh:"从开罗来的航班什么时候到？", tag:"旅行句", vol:"5"},
  {id:"sx205", scene:"travel", lvl:"B1", ar:"التأشيرة سارية لمدة ثلاثة أشهر", tr:"at-taʾshīra sāriya li-muddat thalāthat ʾashhur", zh:"签证有效期三个月。", tag:"旅行句", vol:"6"},
  /* —— 健康与就医 —— */
  {id:"sx206", scene:"health", lvl:"B1", ar:"أعاني من صداع منذ الصباح", tr:"ʾuʿānī min ṣudāʿ mundhu aṣ-ṣabāḥ", zh:"我从早晨就头疼。", tag:"就医句", vol:"5", ctx:"أعاني من 患…"},
  {id:"sx207", scene:"health", lvl:"B1", ar:"الطبيب نصحني بتقليل السكر", tr:"aṭ-ṭabīb naṣaḥanī bitaqlīl as-sukkar", zh:"医生建议我少吃糖。", tag:"就医句", vol:"5"},
  {id:"sx208", scene:"health", lvl:"B1", ar:"يجب أن تفحص نظرك كل سنة", tr:"yajibu ʾan tafḥaṣ naẓaraka kulla sana", zh:"你应该每年检查视力。", tag:"就医句", vol:"5"},
  {id:"sx209", scene:"health", lvl:"B1", ar:"الحمية الغذائية مفيدة لصحتك", tr:"al-ḥimya al-ghidhāʾiyya mufīda liṣiḥḥatik", zh:"饮食疗法对你的健康有益。", tag:"就医句", vol:"6"},
  {id:"sx210", scene:"health", lvl:"B1", ar:"تحسنت حالتي بعد أسبوع من العلاج", tr:"taḥassanat ḥālatī baʿda usbūʿ min al-ʿilāj", zh:"治疗一周后我的状况好转了。", tag:"就医句", vol:"5"},
  /* —— 购物与消费 —— */
  {id:"sx211", scene:"shopping", lvl:"B1", ar:"أقارن الأسعار قبل الشراء", tr:"ʾuqārinu al-ʾasʿār qabla ash-shirāʾ", zh:"购物前我比较价格。", tag:"购物句", vol:"5"},
  {id:"sx212", scene:"shopping", lvl:"B1", ar:"يمكنك الدفع نقداً أو بالبطاقة", tr:"yumkinuka ad-dafʿ naqdan ʾaw bil-biṭāqa", zh:"你可以付现金或刷卡。", tag:"购物句", vol:"5"},
  {id:"sx213", scene:"shopping", lvl:"B1", ar:"هذا المنتج له ضمان سنتين", tr:"hādhā al-muntaj lahu ḍamān sanatayn", zh:"这个产品有两年的保修。", tag:"购物句", vol:"5"},
  {id:"sx214", scene:"shopping", lvl:"B1", ar:"أريد أن أسترد المبلغ", tr:"ʾurīdu ʾan ʾastaridda al-mablagh", zh:"我想退款。", tag:"购物句", vol:"5"},
  {id:"sx215", scene:"shopping", lvl:"B1", ar:"التسوق عبر الإنترنت يوفر الوقت", tr:"at-tasawwuq ʿabra al-ʾinternet yuwaffiru al-waqt", zh:"网上购物节省时间。", tag:"购物句", vol:"6"},
  /* —— 饮食与餐饮 —— */
  {id:"sx216", scene:"dining", lvl:"B1", ar:"أطلب الطعام حسب الطلب الخاص", tr:"ʾaṭlubu aṭ-ṭaʿām ḥasab aṭ-ṭalab al-khāṣṣ", zh:"我按特殊要求点餐。", tag:"餐饮句", vol:"5"},
  {id:"sx217", scene:"dining", lvl:"B1", ar:"الطبق الرئيسي مع السلطة", tr:"aṭ-ṭabaq ar-raʾīsī maʿa as-salata", zh:"主菜配沙拉。", tag:"餐饮句", vol:"5"},
  {id:"sx218", scene:"dining", lvl:"B1", ar:"هل هذا الطعام حار؟", tr:"hal hādhā aṭ-ṭaʿām ḥārr?", zh:"这道菜辣吗？", tag:"餐饮句", vol:"5"},
  {id:"sx219", scene:"dining", lvl:"B1", ar:"أفضل الأكل في المنزل", tr:"ʾufaḍḍil al-ʾakl fī al-manzil", zh:"我更喜欢在家吃饭。", tag:"餐饮句", vol:"5"},
  {id:"sx220", scene:"dining", lvl:"B1", ar:"الغداء جاهز، تعال إلى المائدة", tr:"al-ghadāʾ jāhiz, taʿāl ilā al-māʾida", zh:"午饭好了，来餐桌吧。", tag:"餐饮句", vol:"5"},
  /* —— 家庭与关系 —— */
  {id:"sx221", scene:"family", lvl:"B1", ar:"والداي يعلمانني الصدق والاجتهاد", tr:"wālidāya yuʿallimānī aṣ-ṣidq wal-ijtihād", zh:"父母教我诚实和勤奋。", tag:"家庭句", vol:"5"},
  {id:"sx222", scene:"family", lvl:"B1", ar:"الأخوة يحبون بعضهم بعضاً", tr:"al-ʾikhwa yuḥibbūna baʿḍahum baʿḍan", zh:"兄弟们彼此相爱。", tag:"家庭句", vol:"5"},
  {id:"sx223", scene:"family", lvl:"B1", ar:"أشارك أهلي في الأعمال المنزلية", tr:"ʾushāriku ʾahlī fī al-ʾaʿmāl al-manziliyya", zh:"我帮家人做家务。", tag:"家庭句", vol:"5"},
  {id:"sx224", scene:"family", lvl:"B1", ar:"العائلة هي مصدر الدعم الأول", tr:"al-ʿāʾila hiya maṣdar ad-daʿm al-ʾawwal", zh:"家庭是第一支持来源。", tag:"家庭句", vol:"5"},
  {id:"sx225", scene:"family", lvl:"B1", ar:"نلتقي بالعائلة في العطلات", tr:"naltaqī bil-ʿāʾila fī al-ʿuṭal", zh:"假期我们和家人团聚。", tag:"家庭句", vol:"5"},
  /* —— 天气与自然 —— */
  {id:"sx226", scene:"weather", lvl:"B1", ar:"تتغير فصول السنة في بلادنا", tr:"tataghayyaru fuṣūl as-sana fī bilādinā", zh:"我们国家四季分明。", tag:"天气句", vol:"5"},
  {id:"sx227", scene:"weather", lvl:"B1", ar:"المناخ المعتدل يشجع السياحة", tr:"al-munākh al-muʿtadil yushajjiʿu as-siyāḥa", zh:"温和的气候促进旅游。", tag:"天气句", vol:"6"},
  {id:"sx228", scene:"weather", lvl:"B1", ar:"يبدو أن السماء ستمطر قريباً", tr:"yabdū ʾanna as-samāʾ satumṭiru qarīban", zh:"看起来天快下雨了。", tag:"天气句", vol:"5"},
  {id:"sx229", scene:"weather", lvl:"B1", ar:"أحمل مظلة تحسباً للمطر", tr:"ʾaḥmil maẓalla taḥassuban lil-maṭar", zh:"我带着伞以防下雨。", tag:"天气句", vol:"5"},
  {id:"sx230", scene:"weather", lvl:"B1", ar:"الرياح قوية هذا المساء", tr:"ar-riyāḥ qawiyya hādhā al-masāʾ", zh:"今晚风很大。", tag:"天气句", vol:"5"},
  /* —— 网络与科技 —— */
  {id:"sx231", scene:"net", lvl:"B1", ar:"أستخدم التطبيق لتعلم اللغات", tr:"ʾastakhdimu at-taṭbīq litaʿallum al-lughāt", zh:"我用这款应用学语言。", tag:"网络句", vol:"5"},
  {id:"sx232", scene:"net", lvl:"B1", ar:"يمكنك تحميل الملف من الموقع", tr:"yumkinuka tanzīl al-malaff min al-mawqiʿ", zh:"你可以从网站下载文件。", tag:"网络句", vol:"5"},
  {id:"sx233", scene:"net", lvl:"B1", ar:"الشبكة الاجتماعية تربط الأصدقاء", tr:"ash-shabaka al-ijtimāʿiyya tarbutu al-ʾaṣdiqāʾ", zh:"社交网络连接朋友。", tag:"网络句", vol:"6"},
  {id:"sx234", scene:"net", lvl:"B1", ar:"أرسلت الملف عبر البريد الإلكتروني", tr:"ʾarsaltu al-malaff ʿabra al-barīd al-ʾiliktrūnī", zh:"我通过电子邮件发送了文件。", tag:"网络句", vol:"5"},
  {id:"sx235", scene:"net", lvl:"B1", ar:"حسابي على الموقع محمي بكلمة مرور", tr:"ḥisābī ʿalā al-mawqiʿ maḥmī biklimat murūr", zh:"我在网站上的账号有密码保护。", tag:"网络句", vol:"6"},
  /* —— 语言与文化 —— */
  {id:"sx236", scene:"lang", lvl:"B1", ar:"اللغة تعكس تاريخ الشعوب", tr:"al-lugha taʿkisu tārīkh ash-shuʿūb", zh:"语言反映民族的历史。", tag:"文化句", vol:"6"},
  {id:"sx237", scene:"lang", lvl:"B1", ar:"نحتفظ بالتراث ونطوّره", tr:"nuḥāfiẓu ʿalā at-turāth wa-nuṭawwiruhu", zh:"我们保护并发展遗产。", tag:"文化句", vol:"6"},
  {id:"sx238", scene:"lang", lvl:"B1", ar:"العادات تختلف من بلد إلى آخر", tr:"al-ʿādāt takhtalifu min balad ilā ʾākhar", zh:"习俗因国家而异。", tag:"文化句", vol:"6"},
  {id:"sx239", scene:"lang", lvl:"B1", ar:"نقرأ الشعر العربي في الصف", tr:"naqraʾu ash-shiʿr al-ʿarabī fī aṣ-ṣaff", zh:"我们在课堂上读阿拉伯诗歌。", tag:"文化句", vol:"6"},
  {id:"sx240", scene:"lang", lvl:"B1", ar:"الفن جزء من هوية الأمة", tr:"al-fann juzʾ min hawiyyat al-ʾumma", zh:"艺术是民族身份的一部分。", tag:"文化句", vol:"6"},
  /* —— 环境与社会 —— */
  {id:"sx241", scene:"news", lvl:"B1", ar:"نحمي البيئة للأجيال القادمة", tr:"naḥmī al-bīʾa lil-ʾajyāl al-qādima", zh:"我们为后代保护环境。", tag:"社会句", vol:"6"},
  {id:"sx242", scene:"news", lvl:"B1", ar:"إعادة التدوير تقلل النفايات", tr:"ʾiʿādat at-tadwīr tuqallilu an-nafāyāt", zh:"回收利用减少垃圾。", tag:"社会句", vol:"6"},
  {id:"sx243", scene:"news", lvl:"B1", ar:"المتطوعون يشاركون في خدمة المجتمع", tr:"al-mutaṭawwiʿūn yushārikūna fī khidmat al-mujtamaʿ", zh:"志愿者参与服务社会。", tag:"社会句", vol:"6"},
  {id:"sx244", scene:"news", lvl:"B1", ar:"التعليم حق لكل إنسان", tr:"at-taʿlīm ḥaqq likull ʾinsān", zh:"教育是每个人的权利。", tag:"社会句", vol:"6"},
  {id:"sx245", scene:"news", lvl:"B1", ar:"نحترم الاختلاف ونقدر التنوع", tr:"naḥtarimu al-ikhtilāf wa-nuqaddiru at-tanawwuʿ", zh:"我们尊重差异、珍视多元。", tag:"社会句", vol:"6"},
  /* —— 外事与访问 —— */
  {id:"sx246", scene:"diplo", lvl:"B1", ar:"تبادل الطرفان وجهات النظر", tr:"tabādala aṭ-ṭarafān wijhāt an-naẓar", zh:"双方交换了意见。", tag:"外事句", vol:"6"},
  {id:"sx247", scene:"diplo", lvl:"B1", ar:"الزيارة تعزز العلاقات الثنائية", tr:"az-ziyāra tuʿazzizu al-ʿalāqāt ath-thunāʾiyya", zh:"访问增进双边关系。", tag:"外事句", vol:"6"},
  {id:"sx248", scene:"diplo", lvl:"B1", ar:"رحب الرئيس بالوفد الضيف", tr:"raḥḥaba ar-raʾīs bil-wafd aḍ-ḍayf", zh:"总统欢迎了来访代表团。", tag:"外事句", vol:"6"},
  {id:"sx249", scene:"diplo", lvl:"B1", ar:"انعقد مؤتمر القمة في العاصمة", tr:"inʿaqada muʾtamar al-qimma fī al-ʿāṣima", zh:"峰会在首都举行。", tag:"外事句", vol:"6"},
  {id:"sx250", scene:"diplo", lvl:"B1", ar:"تسعى الدول إلى تعزيز الأمن الإقليمي", tr:"tasʿā ad-duwal ilā taʿzīz al-ʾamn al-ʾiqlīmī", zh:"各国致力于加强地区安全。", tag:"外事句", vol:"6"},
  /* —— 观点与讨论 —— */
  {id:"sx251", scene:"news", lvl:"B1", ar:"من وجهة نظري، الحل يبدأ بالحوار", tr:"min wijhat naẓarī, al-ḥall yabdaʾu bil-ḥiwār", zh:"在我看来，解决办法始于对话。", tag:"观点句", vol:"6", ctx:"من وجهة نظري 依我之见"},
  {id:"sx252", scene:"school", lvl:"B1", ar:"أتفق مع رأيك في هذه النقطة", tr:"ʾuttafiq maʿa raʾyik fī hādhihi an-nuqṭa", zh:"在这一点上我同意你的看法。", tag:"观点句", vol:"5"},
  {id:"sx253", scene:"news", lvl:"B1", ar:"لا بد من مراجعة القرارات السابقة", tr:"lā budda min murājaʿat al-qarārāt as-sābiqa", zh:"必须重新审视此前的决定。", tag:"观点句", vol:"6"},
  {id:"sx254", scene:"school", lvl:"B1", ar:"أعتقد أن التجربة أفضل من النظرية", tr:"ʾaʿtaqidu ʾanna at-tajriba ʾafḍal min an-naẓariyya", zh:"我认为实践比理论更好。", tag:"观点句", vol:"5"},
  {id:"sx255", scene:"news", lvl:"B1", ar:"من الصعب اتخاذ قرار نهائي الآن", tr:"min aṣ-ṣaʿb ittikhādh qarār nihāʾī al-āna", zh:"现在很难做出最终决定。", tag:"观点句", vol:"6"},
  /* —— 计划与愿望 —— */
  {id:"sx256", scene:"time", lvl:"B1", ar:"أخطط لرحلة إلى الإسكندرية في الخريف", tr:"ʾukhaṭṭiṭu liriḥla ilā al-ʾiskandariyya fī al-kharīf", zh:"我计划秋天去亚历山大旅行。", tag:"计划句", vol:"5"},
  {id:"sx257", scene:"job", lvl:"B1", ar:"سأستثمر أموالي في مشروع صغير", tr:"sa-ʾastathmiru ʾamwālī fī mashrūʿ ṣaghīr", zh:"我打算把积蓄投入一个小项目。", tag:"计划句", vol:"6"},
  {id:"sx258", scene:"school", lvl:"B1", ar:"أطمح إلى دراسة الماجستير", tr:"ʾaṭmaḥu ilā dirāsat al-mājistīr", zh:"我渴望攻读硕士学位。", tag:"计划句", vol:"5"},
  {id:"sx259", scene:"family", lvl:"B1", ar:"نخطط للزواج في الربيع القادم", tr:"nukhaṭṭiṭu liz-zawāj fī ar-rabīʿ al-qādim", zh:"我们计划明年春天结婚。", tag:"计划句", vol:"5"},
  {id:"sx260", scene:"travel", lvl:"B1", ar:"حلمي أن أزور الأهرامات", tr:"ḥulmī ʾan ʾazūra al-ʾahrāmāt", zh:"我的梦想是参观金字塔。", tag:"计划句", vol:"5"},
  /* —— 描述与评价 —— */
  {id:"sx261", scene:"desc", lvl:"B1", ar:"المنزل واسع ومشرق", tr:"al-manzil wāsiʿ wa-mushriq", zh:"房子宽敞明亮。", tag:"描述句", vol:"5"},
  {id:"sx262", scene:"desc", lvl:"B1", ar:"المدينة القديمة مليئة بالمعالم التاريخية", tr:"al-madīna al-qadīma malīʾa bil-maʿālim at-tārīkhiyya", zh:"古城里满是历史古迹。", tag:"描述句", vol:"5"},
  {id:"sx263", scene:"job", lvl:"B1", ar:"المنتجات الجديدة ذات جودة عالية", tr:"al-muntajāt al-jadīda dhāt jawda ʿāliya", zh:"新产品质量很高。", tag:"描述句", vol:"6"},
  {id:"sx264", scene:"outing", lvl:"B1", ar:"الطبيعة هنا ساحرة في الربيع", tr:"aṭ-ṭabīʿa hunā sāḥira fī ar-rabīʿ", zh:"这里的春天景色迷人。", tag:"描述句", vol:"5"},
  {id:"sx265", scene:"news", lvl:"B1", ar:"الوضع الاقتصادي مستقر نسبياً", tr:"al-waḍʿ al-iqtiṣādī mustaqirr nisbiyyan", zh:"经济形势相对稳定。", tag:"描述句", vol:"6"},
  /* —— 过渡与衔接 —— */
  {id:"sx266", scene:"lang", lvl:"B1", ar:"أولاً، أقرأ؛ ثم أستمع؛ وأخيراً أتحدث", tr:"ʾawwalan, ʾaqraʾ; thumma ʾastamiʿ; wa-ʾakhīran ʾataḥaddath", zh:"首先我读；然后听；最后说。", tag:"衔接句", vol:"5", ctx:"أولاً…ثم…أخيراً 序列词"},
  {id:"sx267", scene:"news", lvl:"B1", ar:"باختصار، الوضع يستدعي الحذر", tr:"bikhtiṣār, al-waḍʿ yastadʿī al-ḥadhar", zh:"总之，形势需要警惕。", tag:"衔接句", vol:"6"},
  {id:"sx268", scene:"school", lvl:"B1", ar:"من ناحية أخرى، الدراسة تحتاج جهداً", tr:"min nāḥiya ʾukhrā, ad-dirāsa taḥtāju juhdan", zh:"另一方面，学习需要努力。", tag:"衔接句", vol:"5", ctx:"من ناحية أخرى 另一方面"},
  {id:"sx269", scene:"diplo", lvl:"B1", ar:"خلاصة القول، التعاون ضروري", tr:"khulāṣat al-qawl, at-taʿāwun ḍarūrī", zh:"总而言之，合作是必要的。", tag:"衔接句", vol:"6"},
  {id:"sx270", scene:"news", lvl:"B1", ar:"إضافة إلى ذلك، الأسعار في ارتفاع", tr:"ʾiḍāfatan ilā dhālika, al-ʾasʿār fī irtifāʿ", zh:"此外，物价在上涨。", tag:"衔接句", vol:"6"},
  /* —— 虚拟与委婉 —— */
  {id:"sx271", scene:"greet", lvl:"B1", ar:"أود أن أسألك سؤالاً", tr:"ʾawaddu ʾan ʾasʾalaka suʾālan", zh:"我想问你一个问题。", tag:"委婉句", vol:"5", ctx:"أود أن 我想"},
  {id:"sx272", scene:"school", lvl:"B1", ar:"هل يمكنك مساعدتي في هذا الأمر؟", tr:"hal yumkinuka musāʿadatī fī hādhā al-ʾamr?", zh:"你能在这件事上帮我吗？", tag:"委婉句", vol:"5"},
  {id:"sx273", scene:"visit", lvl:"B1", ar:"هل تسمح لي بالجلوس هنا؟", tr:"hal tasmaḥ lī bil-julūs hunā?", zh:"你允许我坐这里吗？", tag:"委婉句", vol:"5"},
  {id:"sx274", scene:"dining", lvl:"B1", ar:"أفترض أنك تحب القهوة السوداء", tr:"ʾaftariḍu ʾannaka tuḥibb al-qahwa as-sawdāʾ", zh:"我猜你喜欢黑咖啡。", tag:"委婉句", vol:"5"},
  {id:"sx275", scene:"news", lvl:"B1", ar:"ربما تتغير النتائج لاحقاً", tr:"rubbamā tataghayyaru an-natāʾij lāḥiqan", zh:"结果也许以后会变。", tag:"委婉句", vol:"6", ctx:"ربما 也许"},
  /* —— 习惯与常态 —— */
  {id:"sx276", scene:"time", lvl:"B1", ar:"أستيقظ عادة في السادسة", tr:"ʾastaʿyiqu ʿādatan fī as-sādisa", zh:"我通常六点起床。", tag:"习惯句", vol:"5", ctx:"عادةً 通常"},
  {id:"sx277", scene:"job", lvl:"B1", ar:"غالباً ما أتناول الغداء خارج المنزل", tr:"ghāliban mā ʾatanāwalu al-ghadāʾ khārij al-manzil", zh:"我经常在外面吃午饭。", tag:"习惯句", vol:"5"},
  {id:"sx278", scene:"school", lvl:"B1", ar:"أحياناً أذاكر مع زملائي", tr:"ʾaḥyānan ʾudhākiru maʿa zumalāʾī", zh:"有时我和同学一起复习。", tag:"习惯句", vol:"5"},
  {id:"sx279", scene:"outing", lvl:"B1", ar:"نادراً ما أخرج في الشتاء", tr:"nādiran mā ʾakhruj fī ash-shitāʾ", zh:"冬天我很少出门。", tag:"习惯句", vol:"5"},
  {id:"sx280", scene:"lang", lvl:"B1", ar:"أتدرب على الاستماع كل مساء", tr:"ʾatadarrabu ʿalā al-istimāʿ kulla masāʾ", zh:"我每晚练习听力。", tag:"习惯句", vol:"5"},
  /* —— 综合长句 —— */
  {id:"sx281", scene:"news", lvl:"B1", ar:"رغم أن الأخبار كثيرة إلا أن مصادرها مختلفة", tr:"raghma ʾanna al-ʾakhbār kathīra ʾillā ʾanna maṣādirahā mukhtalifa", zh:"尽管消息很多，但来源各异。", tag:"综合句", vol:"6"},
  {id:"sx282", scene:"diplo", lvl:"B1", ar:"إذا استمر الحوار فسنصل إلى حل يرضي الجميع", tr:"ʾidhā istamarra al-ḥiwār fasanasil ilā ḥall yurḍī al-jamīʿ", zh:"如果对话继续，我们会达成令各方满意的方案。", tag:"综合句", vol:"6"},
  {id:"sx283", scene:"job", lvl:"B1", ar:"الشركة التي تطورت بسرعة أصبحت رائدة", tr:"ash-sharika allatī taṭawwarat bisurʿa ʾaṣbaḥat rāʾida", zh:"快速发展的公司成了行业领军者。", tag:"综合句", vol:"6"},
  {id:"sx284", scene:"school", lvl:"B1", ar:"ما إن بدأ الدرس حتى انتبه الطلاب", tr:"mā ʾin badaʾa ad-dars ḥattā ntabaha aṭ-ṭullāb", zh:"课一开始，学生们就集中了注意力。", tag:"综合句", vol:"5"},
  {id:"sx285", scene:"health", lvl:"B1", ar:"بعد أن تحسن الطقس خرجنا للتنزه", tr:"baʿda ʾan taḥassana aṭ-ṭaqs kharajnā litanazzuh", zh:"天气好转后我们出去散步了。", tag:"综合句", vol:"5"},
  {id:"sx286", scene:"news", lvl:"B1", ar:"يقول الخبراء إن الحلول تحتاج إلى وقت وصبر", tr:"yaqūlu al-khubarāʾ ʾinna al-ḥulūl taḥtāju ilā waqt wa-ṣabr", zh:"专家们说解决方案需要时间和耐心。", tag:"综合句", vol:"6"},
  {id:"sx287", scene:"travel", lvl:"B1", ar:"حينما زرت المدينة أعجبتني عمارتها القديمة", tr:"ḥīnamā zurtu al-madīna ʾaʿjabanī ʿimāratuhā al-qadīma", zh:"访问那座城市时，我惊叹于它的古老建筑。", tag:"综合句", vol:"5"},
  {id:"sx288", scene:"lang", lvl:"B1", ar:"كلما تمرنت أكثر شعرت بتحسن أكبر", tr:"kullamā tamarrantu ʾakthar shaʿartu bitaḥassun ʾakbar", zh:"练习越多，我越感觉进步。", tag:"综合句", vol:"5"},
  {id:"sx289", scene:"family", lvl:"B1", ar:"الأسرة التي تتعاون تكون سعيدة", tr:"al-ʾusra allatī tataʿāwanu takūnu saʿīda", zh:"相互协作的家庭是幸福的。", tag:"综合句", vol:"5"},
  {id:"sx290", scene:"news", lvl:"B1", ar:"من أجل مستقبل أفضل يجب أن نعمل الآن", tr:"min ʾajl mustaqbal ʾafḍal yajibu ʾan naʿmala al-āna", zh:"为了更美好的未来，我们现在就必须行动。", tag:"综合句", vol:"6"},
  {id:"sx291", scene:"school", lvl:"B1", ar:"الطالب الذي يسأل يتعلم أكثر", tr:"aṭ-ṭālib alladhī yasʾal yataʿallamu ʾakthar", zh:"爱提问的学生学得更多。", tag:"综合句", vol:"5"},
  {id:"sx292", scene:"diplo", lvl:"B1", ar:"رغم اختلاف اللغات تجمعنا القيم المشتركة", tr:"raghma ikhtilāf al-lughāt tajmaʿunā al-qiyam al-mushtaraka", zh:"尽管语言不同，共同的价值把我们连在一起。", tag:"综合句", vol:"6"},
  {id:"sx293", scene:"health", lvl:"B1", ar:"عندما يتوقف التدخين تتحسن الرئة تدريجياً", tr:"ʿindamā yatawaqqaf at-tadkhīn tataḥassanu ar-riʾa tadrījiyyan", zh:"戒烟后肺会逐渐好转。", tag:"综合句", vol:"6"},
  {id:"sx294", scene:"news", lvl:"B1", ar:"إن الوسائل الحديثة غيرت طريقة حياتنا", tr:"ʾinna al-wasāʾil al-ḥadītha ghayyarat ṭarīqat ḥayātinā", zh:"现代媒体改变了我们的生活方式。", tag:"综合句", vol:"6"},
  {id:"sx295", scene:"school", lvl:"B1", ar:"لو بدأت الدراسة مبكراً لكان الأمر أسهل", tr:"law badat ad-dirāsa mubakkiran lakāna al-ʾamr ʾashal", zh:"如果早点开始学习，事情就会更容易。", tag:"综合句", vol:"5"},
  {id:"sx296", scene:"visit", lvl:"B1", ar:"تفضلوا إلى مجلسنا، البيت بيتكم", tr:"tafaḍḍalū ilā majlisinā, al-bayt baytukum", zh:"请到客厅来，你们随意。", tag:"综合句", vol:"5", ctx:"البيت بيتكم 客套"},
  {id:"sx297", scene:"weather", lvl:"B1", ar:"إذا استمر المطر سنؤجل الرحلة", tr:"ʾidhā istamarra al-maṭar sanuʾajjilu ar-riḥla", zh:"如果雨继续下，我们就推迟行程。", tag:"综合句", vol:"5"},
  {id:"sx298", scene:"job", lvl:"B1", ar:"الموظفون الذين يتدربون يطورون مهاراتهم", tr:"al-muwaẓẓafūn alladhīna yatadarrabūn yuṭawwirūna mahārātihim", zh:"接受培训的员工提升自己的技能。", tag:"综合句", vol:"6", ctx:"الذين 复数关系代词"},
  {id:"sx299", scene:"lang", lvl:"B1", ar:"من يريد أن يتقن اللغة عليه أن يحبها", tr:"man yurīdu ʾan yutqina al-lugha ʿalayhi ʾan yuḥibbaha", zh:"想精通一门语言，就要热爱它。", tag:"综合句", vol:"5", ctx:"من 泛指关系代词"},
  {id:"sx300", scene:"news", lvl:"B1", ar:"لن يتحقق التقدم إلا بالعمل الجاد والتعاون", tr:"lan yataḥaqqaqa at-taqaddum ʾillā bil-ʿamal al-jādd wat-taʿāwun", zh:"只有努力工作和合作，进步才能实现。", tag:"综合句", vol:"6"},
];

/* ============================================================
 * 课文库 ARTICLES（80 篇，每篇含听力文本/中文翻译/配套习题）
 * 字段：id, title, lvl, vol, scene, ar[](逐句听力文本), zh[](逐句翻译),
 *       q[](3 题：q 题干 / opts 选项 / ans 答案索引 / exp 解析)
 * ============================================================ */
const ARTICLES = [
  /* —— 第一册（16 篇） —— */
  {id:"a1", title:"问候我的邻居", lvl:"A2", vol:"1", scene:"greet",
   ar:["أقابل جاري في الصباح","أقول له: صباح الخير","يرد علي: صباح النور"],
   zh:["我早晨遇见邻居","我对他说：早上好","他回答我：早上好（回礼）"],
   q:[{q:"说话人什么时候遇见邻居？",opts:["傍晚","早晨","夜里"],ans:1,exp:"第一句 أقول له في الصباح（早晨）明确时间。"},
      {q:"邻居怎么回应？",opts:["صباح الخير","صباح النور","مساء الخير"],ans:1,exp:"第三句 يرد علي: صباح النور，是问候的标准回礼。"},
      {q:"「你好」的阿拉伯语问候是？",opts:["صباح الخير","تصبح على خير","مع السلامة"],ans:0,exp:"صباح الخير 是早晨问候语。"}]},
  {id:"a2", title:"我的家庭", lvl:"A2", vol:"1", scene:"family",
   ar:["عائلتي مكونة من خمسة أفراد","أبي مهندس وأمي طبيبة","أخي الأكبر يعمل في مدينة بعيدة"],
   zh:["我家有五口人","爸爸是工程师，妈妈是医生","我的大哥在远方的城市工作"],
   q:[{q:"家里有几口人？",opts:["三个","四个","五个"],ans:2,exp:"第一句 من خمسة أفراد（五个成员）。"},
      {q:"妈妈做什么工作？",opts:["工程师","医生","老师"],ans:1,exp:"第二句 أمي طبيبة（妈妈是医生）。"},
      {q:"哥哥在哪里工作？",opts:["在家","在远方城市","在国外学校"],ans:1,exp:"第三句 في مدينة بعيدة（在远方城市）。"}]},
  {id:"a3", title:"问路去车站", lvl:"A2", vol:"1", scene:"direction",
   ar:["أبحث عن محطة القطار","قال لي رجل: اذهب مستقيماً","ثم انعطف يميناً عند الإشارة"],
   zh:["我在找火车站","一个人告诉我：直走","然后在信号灯处右转"],
   q:[{q:"说话人在找什么？",opts:["机场","车站","市场"],ans:1,exp:"第一句 محطة القطار（火车站）。"},
      {q:"先怎么走？",opts:["左转","直走","右转"],ans:1,exp:"第二句 اذهب مستقيماً（直走）。"},
      {q:"在哪儿转弯？",opts:["在桥边","在信号灯处","在广场"],ans:1,exp:"第三句 عند الإشارة（在信号灯处）。"}]},
  {id:"a4", title:"在餐厅", lvl:"A2", vol:"1", scene:"dining",
   ar:["دخلنا مطعماً صغيراً","طلبت أرزاً مع لحم","الطعام كان لذيذاً والسعر معقولاً"],
   zh:["我们进了一家小餐馆","我点了米饭和肉","食物美味，价格合理"],
   q:[{q:"他们进了什么样的餐馆？",opts:["大餐厅","小餐馆","咖啡馆"],ans:1,exp:"مطعم صغير（小餐馆）。"},
      {q:"说话人点了什么？",opts:["鱼和面包","米饭和肉","鸡肉和汤"],ans:1,exp:"طلبت أرزاً مع لحم（米饭和肉）。"},
      {q:"对这家餐馆的评价是？",opts:["贵","难吃","美味且价格合理"],ans:2,exp:"لذيذاً والسعر معقولاً（美味、价格合理）。"}]},
  {id:"a5", title:"在市场买水果", lvl:"A2", vol:"1", scene:"shopping",
   ar:["ذهبت إلى السوق لشراء الفواكه","اشتريت تفاحاً وموزاً","سألت البائع عن السعر فكان مناسباً"],
   zh:["我去市场买水果","我买了苹果和香蕉","我问了摊主价格，很合适"],
   q:[{q:"说话人去市场做什么？",opts:["买衣服","买水果","买菜"],ans:1,exp:"لشراء الفواكه（买水果）。"},
      {q:"买了什么水果？",opts:["苹果和香蕉","橙子和梨","葡萄和桃"],ans:0,exp:"تفاحاً وموزاً（苹果和香蕉）。"},
      {q:"价格怎么样？",opts:["很贵","合适","不知道"],ans:1,exp:"مناسباً（合适）。"}]},
  {id:"a6", title:"我的学校", lvl:"A2", vol:"1", scene:"school",
   ar:["مدرستي كبيرة وجميلة","أدرس فيها اللغة العربية","معلمي يشرح الدرس بصبر"],
   zh:["我的学校又大又漂亮","我在那里学阿拉伯语","我的老师耐心地讲解课文"],
   q:[{q:"学校怎么样？",opts:["小","大而漂亮","旧"],ans:1,exp:"كبيرة وجميلة（大而漂亮）。"},
      {q:"说话人在学校学什么？",opts:["英语","阿拉伯语","法语"],ans:1,exp:"اللغة العربية（阿拉伯语）。"},
      {q:"老师讲课怎么样？",opts:["快","有耐心","严厉"],ans:1,exp:"بصبر（有耐心地）。"}]},
  {id:"a7", title:"一周七天", lvl:"A2", vol:"1", scene:"time",
   ar:["الأسبوع سبعة أيام","أعمل من السبت إلى الخميس","يوم الجمعة عطلة نذهب إلى الحديقة"],
   zh:["一周有七天","我从周六工作到周四","周五放假，我们去公园"],
   q:[{q:"一周有几天？",opts:["五天","六天","七天"],ans:2,exp:"سبعة أيام（七天）。"},
      {q:"周五是什么日子？",opts:["工作日","假期","上课日"],ans:1,exp:"يوم الجمعة عطلة（周五是假期）。"},
      {q:"周五他们去哪儿？",opts:["市场","公园","海边"],ans:1,exp:"إلى الحديقة（去公园）。"}]},
  {id:"a8", title:"春天的天气", lvl:"A2", vol:"1", scene:"weather",
   ar:["الربيع أجمل فصول السنة","الطقس معتدل والجو صافٍ","الزهور تتفتح في الحدائق"],
   zh:["春天是一年中最美的季节","天气温和、天空晴朗","花儿在公园里开放"],
   q:[{q:"作者认为哪个季节最美？",opts:["夏天","春天","冬天"],ans:1,exp:"الربيع أجمل فصول السنة（春天最美）。"},
      {q:"春天的天气怎么样？",opts:["很热","很冷","温和晴朗"],ans:2,exp:"معتدل والجو صافٍ（温和晴朗）。"},
      {q:"春天花怎么了？",opts:["凋谢","开放","被摘走"],ans:1,exp:"تتفتح（开放）。"}]},
  {id:"a9", title:"去机场", lvl:"A2", vol:"1", scene:"travel",
   ar:["وصلنا إلى المطار قبل موعد الرحلة","وضعنا الأمتعة في السيارة","انتظرنا في قاعة الانتظار"],
   zh:["我们提前到达机场","我们把行李放进车里","我们在候机厅等候"],
   q:[{q:"他们什么时候到的机场？",opts:["晚点","提前","准时"],ans:1,exp:"قبل موعد الرحلة（在航班时间之前）。"},
      {q:"行李放在了哪里？",opts:["家里","车里","机场"],ans:1,exp:"في السيارة（在车里）。"},
      {q:"他们在哪里等候？",opts:["候机厅","餐厅","商店"],ans:0,exp:"قاعة الانتظار（候机厅）。"}]},
  {id:"a10", title:"爸爸的职业", lvl:"A2", vol:"1", scene:"job",
   ar:["أبي يعمل في مستشفى كبير","هو طبيب ماهر","يحبه المرضى لأن قلبه طيب"],
   zh:["爸爸在一家大医院工作","他是一位医术高明的医生","病人喜欢他，因为他心肠好"],
   q:[{q:"爸爸在哪里工作？",opts:["学校","大医院","公司"],ans:1,exp:"في مستشفى كبير（大医院）。"},
      {q:"爸爸是什么职业？",opts:["医生","工程师","教师"],ans:0,exp:"طبيب ماهر（高明的医生）。"},
      {q:"病人为什么喜欢他？",opts:["他有钱","他心肠好","他年轻"],ans:1,exp:"لأن قلبه طيب（因为他心肠好）。"}]},
  {id:"a11", title:"颜色和衣服", lvl:"A2", vol:"1", scene:"desc",
   ar:["أفضل اللون الأزرق","اشتريت قميصاً أزرق جديداً","حذائي أسود وسروالي أبيض"],
   zh:["我最喜欢蓝色","我买了一件新蓝衬衫","我的鞋是黑的，裤子是白的"],
   q:[{q:"说话人最喜欢什么颜色？",opts:["红色","蓝色","绿色"],ans:1,exp:"أفضل اللون الأزرق（最喜欢蓝色）。"},
      {q:"他买了什么？",opts:["蓝裤子","蓝衬衫","蓝鞋"],ans:1,exp:"قميصاً أزرق（蓝衬衫）。"},
      {q:"鞋是什么颜色？",opts:["白色","蓝色","黑色"],ans:2,exp:"حذائي أسود（我的鞋是黑色）。"}]},
  {id:"a12", title:"看医生", lvl:"A2", vol:"1", scene:"health",
   ar:["شعرت بصداع قوي","ذهبت إلى الطبيب في الصباح","قال لي: خذ هذا الدواء واسترح"],
   zh:["我感到剧烈的头痛","早上我去看了医生","他对我说：吃这个药，好好休息"],
   q:[{q:"说话人怎么了？",opts:["胃疼","头痛","牙疼"],ans:1,exp:"صداع قوي（剧烈头痛）。"},
      {q:"他什么时候去看的医生？",opts:["早晨","中午","晚上"],ans:0,exp:"في الصباح（在早晨）。"},
      {q:"医生让他做什么？",opts:["住院","吃药休息","多运动"],ans:1,exp:"خذ هذا الدواء واسترح（吃药并休息）。"}]},
  {id:"a13", title:"我的城市", lvl:"A2", vol:"1", scene:"travel",
   ar:["مدينتي قديمة وجميلة","في وسطها سوق كبير","الناس فيها طيبون ويحبون الضيوف"],
   zh:["我的城市古老而美丽","市中心有一个大市场","那里的人善良又好客"],
   q:[{q:"城市怎么样？",opts:["新","古老美丽","小"],ans:1,exp:"قديمة وجميلة（古老而美丽）。"},
      {q:"市中心有什么？",opts:["大市场","大机场","大学"],ans:0,exp:"سوق كبير（大市场）。"},
      {q:"城里的人怎么样？",opts:["冷漠","善良好客","忙碌"],ans:1,exp:"طيبون ويحبون الضيوف（善良好客）。"}]},
  {id:"a14", title:"我的房间", lvl:"A2", vol:"1", scene:"desc",
   ar:["غرفتي صغيرة لكنها مرتبة","على الطاولة كتاب ودفتر","في الزاوية سرير مريح"],
   zh:["我的房间小但整洁","桌上有书和本子","角落里有一张舒适的床"],
   q:[{q:"房间怎么样？",opts:["又大又乱","小但整洁","宽敞"],ans:1,exp:"صغيرة لكنها مرتبة（小但整洁）。"},
      {q:"桌子上有什么？",opts:["书和本子","食物","手机"],ans:0,exp:"كتاب ودفتر（书和本子）。"},
      {q:"角落里有什么？",opts:["椅子","床","窗户"],ans:1,exp:"سرير مريح（舒适的床）。"}]},
  {id:"a15", title:"朋友来访", lvl:"A2", vol:"1", scene:"visit",
   ar:["صديقي زارني أمس","أعددنا شاياً وحلوى","تحدثنا حتى وقت متأخر"],
   zh:["我朋友昨天来看我","我们准备了茶和甜点","我们聊到很晚"],
   q:[{q:"朋友什么时候来的？",opts:["今天","昨天","前天"],ans:1,exp:"زارني أمس（昨天来看我）。"},
      {q:"他们准备了什么？",opts:["咖啡","茶和甜点","饭菜"],ans:1,exp:"شاياً وحلوى（茶和甜点）。"},
      {q:"他们聊到什么时候？",opts:["很早","很晚","中午"],ans:1,exp:"حتى وقت متأخر（直到很晚）。"}]},
  {id:"a16", title:"周末", lvl:"A2", vol:"1", scene:"outing",
   ar:["في نهاية الأسبوع لا أعمل","أخرج مع أصدقائي إلى الطبيعة","نلعب كرة القدم ونأكل سوية"],
   zh:["周末我不上班","我和朋友们去野外","我们一起踢足球、一起吃饭"],
   q:[{q:"周末说话人做什么？",opts:["上班","不上班","学习"],ans:1,exp:"لا أعمل（不工作）。"},
      {q:"他和谁一起出去？",opts:["家人","朋友","同事"],ans:1,exp:"مع أصدقائي（和朋友们）。"},
      {q:"他们玩什么？",opts:["篮球","足球","网球"],ans:1,exp:"كرة القدم（足球）。"}]},
  {id:"a17", title:"图书馆的一天", lvl:"A2", vol:"1", scene:"school",
   ar:["قضيت اليوم في المكتبة","قرأت كتباً عن التاريخ","المكتبة هادئة ومنظمة"],
   zh:["我在图书馆度过了一天","我读了一些历史书","图书馆安静又有序"],
   q:[{q:"说话人在哪里待了一天？",opts:["家里","图书馆","咖啡馆"],ans:1,exp:"في المكتبة（在图书馆）。"},
      {q:"他读了什么书？",opts:["小说","历史书","诗集"],ans:1,exp:"عن التاريخ（关于历史）。"},
      {q:"图书馆怎么样？",opts:["吵闹","安静有序","很小"],ans:1,exp:"هادئة ومنظمة（安静有序）。"}]},
  {id:"a18", title:"一封短信", lvl:"A2", vol:"1", scene:"net",
   ar:["كتبت رسالة إلى صديقي","أخبرته عن أخبار عائلتي","سألت عنه وعن دراسته"],
   zh:["我给朋友写了一封信","告诉了他我家的近况","我问候他并询问他的学业"],
   q:[{q:"信是写给谁的？",opts:["父母","朋友","老师"],ans:1,exp:"إلى صديقي（给朋友）。"},
      {q:"信中说了什么？",opts:["家庭近况","旅行计划","新闻"],ans:0,exp:"أخبار عائلتي（家的近况）。"},
      {q:"写信人问了什么？",opts:["工作","学习和近况","天气"],ans:1,exp:"عنه وعن دراسته（问他本人和他的学业）。"}]},
  {id:"a19", title:"我的一天", lvl:"A2", vol:"1", scene:"time",
   ar:["أستيقظ في السادسة صباحاً","أتناول الفطور ثم أذهب إلى العمل","في المساء أقرأ وأشاهد الأخبار"],
   zh:["我早上六点起床","吃早餐然后去上班","晚上我读书、看新闻"],
   q:[{q:"说话人几点起床？",opts:["五点","六点","七点"],ans:1,exp:"في السادسة صباحاً（早上六点）。"},
      {q:"早餐后他去做什么？",opts:["睡觉","上班","散步"],ans:1,exp:"أذهب إلى العمل（去上班）。"},
      {q:"晚上他做什么？",opts:["看电视连续剧","读书看新闻","运动"],ans:1,exp:"أقرأ وأشاهد الأخبار（读书看新闻）。"}]},
  {id:"a20", title:"自我介绍", lvl:"A2", vol:"1", scene:"greet",
   ar:["اسمي علي، وأنا من الصين","أعمل مدرساً في جامعة","أتعلم العربية منذ سنتين"],
   zh:["我叫阿里，来自中国","我在一所大学当老师","我学阿拉伯语两年了"],
   q:[{q:"他叫什么名字？",opts:["أحمد","علي","خالد"],ans:1,exp:"اسمي علي（我叫阿里）。"},
      {q:"他的职业是什么？",opts:["医生","工程师","教师"],ans:2,exp:"مدرساً في جامعة（大学老师）。"},
      {q:"他学阿拉伯语多久了？",opts:["一年","两年","三年"],ans:1,exp:"منذ سنتين（两年了）。"}]},
  /* —— 第二册（16 篇） —— */
  {id:"a21", title:"拜访亲戚", lvl:"A2", vol:"2", scene:"visit",
   ar:["زرنا عمي في بيت الجديدة","استقبلنا بحفاوة كبيرة","قدمنا له هدية صغيرة"],
   zh:["我们去了叔叔的新家","他热情地接待了我们","我们送了他一份小礼物"],
   q:[{q:"他们拜访了谁？",opts:["祖父","叔叔","朋友"],ans:1,exp:"عمي（我的叔叔）。"},
      {q:"叔叔怎么接待他们？",opts:["冷淡","热情","匆忙"],ans:1,exp:"بحفاوة كبيرة（非常热情）。"},
      {q:"他们带去了什么？",opts:["食物","礼物","书"],ans:1,exp:"هدية صغيرة（小礼物）。"}]},
  {id:"a22", title:"在电话里", lvl:"A2", vol:"2", scene:"net",
   ar:["اتصل بي صديقي من القاهرة","سألني عن العمل والدراسة","وعدته أن أزوره في الصيف"],
   zh:["我的朋友从开罗给我打电话","他问起我的工作和学习","我答应他夏天去看他"],
   q:[{q:"谁打来电话？",opts:["同事","朋友","亲戚"],ans:1,exp:"صديقي（我的朋友）。"},
      {q:"朋友从哪打来？",opts:["开罗","迪拜","贝鲁特"],ans:0,exp:"من القاهرة（从开罗）。"},
      {q:"说话人承诺什么？",opts:["写信","夏天去拜访","寄礼物"],ans:1,exp:"أزوره في الصيف（夏天去看他）。"}]},
  {id:"a23", title:"公园散步", lvl:"A2", vol:"2", scene:"outing",
   ar:["في العطلة ذهبنا إلى الحديقة الكبيرة","الماء يتدفق والأشجار عالية","جلسنا تحت شجرة نستريح"],
   zh:["假期我们去了大公园","流水潺潺，树木高大","我们坐在树下休息"],
   q:[{q:"他们去了哪里？",opts:["海边","大公园","山区"],ans:1,exp:"الحديقة الكبيرة（大公园）。"},
      {q:"公园里有什么？",opts:["水和树","商店","球场"],ans:0,exp:"الماء والأشجار（水和树）。"},
      {q:"他们在树下做什么？",opts:["吃饭","休息","拍照"],ans:1,exp:"نستريح（休息）。"}]},
  {id:"a24", title:"我的手机", lvl:"A2", vol:"2", scene:"net",
   ar:["هاتفي الجديد سريع جداً","أتصل به بأهلي كل يوم","أستخدمه أيضاً للدراسة"],
   zh:["我的新手机非常快","我每天用它和家人通话","我还用它学习"],
   q:[{q:"手机怎么样？",opts:["旧","非常快","便宜"],ans:1,exp:"سريع جداً（非常快）。"},
      {q:"他每天用手机做什么？",opts:["玩游戏","和家人通话","听音乐"],ans:1,exp:"أتصل بأهلي（和家人通话）。"},
      {q:"手机还有什么用途？",opts:["学习","购物","拍照"],ans:0,exp:"للدراسة（用于学习）。"}]},
  {id:"a25", title:"借书", lvl:"A2", vol:"2", scene:"school",
   ar:["أستعير كتباً من المكتبة كل أسبوع","أستطيع أن أحتفظ بها أسبوعين","يجب أن أعيدها في الموعد"],
   zh:["我每周从图书馆借书","我可以保留两周","我必须按时归还"],
   q:[{q:"借书频率是？",opts:["每天","每周","每月"],ans:1,exp:"كل أسبوع（每周）。"},
      {q:"书可以保留多久？",opts:["一周","两周","一个月"],ans:1,exp:"أسبوعين（两周）。"},
      {q:"必须怎样做？",opts:["买下它","按时归还","抄写它"],ans:1,exp:"أعيدها في الموعد（按时归还）。"}]},
  {id:"a26", title:"搬家", lvl:"A2", vol:"2", scene:"family",
   ar:["انتقلنا إلى شقة جديدة الشهر الماضي","البيت قريب من عملي","الجيران ودودون وأهلنا سعداء"],
   zh:["上个月我们搬进了新公寓","房子离我上班很近","邻居友善，家人都很高兴"],
   q:[{q:"什么时候搬的家？",opts:["上个月","上周","去年"],ans:0,exp:"الشهر الماضي（上个月）。"},
      {q:"新房子的优点是什么？",opts:["大","离工作近","便宜"],ans:1,exp:"قريب من عملي（离工作近）。"},
      {q:"邻居怎么样？",opts:["陌生","友善","吵闹"],ans:1,exp:"ودودون（友善）。"}]},
  {id:"a27", title:"周末野餐", lvl:"A2", vol:"2", scene:"outing",
   ar:["خططنا لنزهة يوم الجمعة","حملنا الطعام والماء","أمضينا يوماً جميلاً تحت الشمس"],
   zh:["我们计划周五去野餐","带上了食物和水","在阳光下度过了愉快的一天"],
   q:[{q:"野餐定在哪天？",opts:["周四","周五","周六"],ans:1,exp:"يوم الجمعة（周五）。"},
      {q:"带了什么？",opts:["书和笔","食物和水","衣服"],ans:1,exp:"الطعام والماء（食物和水）。"},
      {q:"这一天过得怎么样？",opts:["无聊","愉快","辛苦"],ans:1,exp:"يوماً جميلاً（愉快的一天）。"}]},
  {id:"a28", title:"学骑车", lvl:"A2", vol:"2", scene:"outing",
   ar:["أتعلم قيادة الدراجة الآن","سقطت مرتين لكني واصلت","أخيراً استطعت أن أركب وحدي"],
   zh:["我现在在学骑自行车","我摔了两次但继续坚持","最后我终于能自己骑了"],
   q:[{q:"他在学什么？",opts:["开车","骑自行车","游泳"],ans:1,exp:"قيادة الدراجة（骑自行车）。"},
      {q:"过程中发生了什么？",opts:["摔了两次","放弃了","买了新车"],ans:0,exp:"سقطت مرتين（摔了两次）。"},
      {q:"结果如何？",opts:["没学会","能自己骑了","受伤了"],ans:1,exp:"استطعت أن أركب وحدي（能自己骑了）。"}]},
  {id:"a29", title:"下雨天", lvl:"A2", vol:"2", scene:"weather",
   ar:["أمطرت السماء طوال اليوم","بقيت في البيت أشاهد المطر","في المساء توقف المطر وخرجنا"],
   zh:["天整整下了一天雨","我待在家里看雨","傍晚雨停了，我们出了门"],
   q:[{q:"雨下了多久？",opts:["一会儿","一整天","两天"],ans:1,exp:"طوال اليوم（一整天）。"},
      {q:"下雨时他在做什么？",opts:["出门","在家看雨","睡觉"],ans:1,exp:"أشاهد المطر（看雨）。"},
      {q:"什么时候雨停了？",opts:["早晨","中午","傍晚"],ans:2,exp:"في المساء（傍晚）。"}]},
  {id:"a30", title:"火车站", lvl:"A2", vol:"2", scene:"direction",
   ar:["محطة القطار مزدحمة في الصباح","الناس يجرون والتذاكر تنفد","وصلنا في الوقت المناسب"],
   zh:["早晨的火车站很拥挤","人们奔跑着，票快卖完了","我们及时赶到了"],
   q:[{q:"车站什么时候拥挤？",opts:["傍晚","早晨","深夜"],ans:1,exp:"في الصباح（早晨）。"},
      {q:"售票情况如何？",opts:["票很多","票快卖完","免费"],ans:1,exp:"التذاكر تنفد（票快卖完）。"},
      {q:"他们赶上了吗？",opts:["没赶上","刚好赶上","错过"],ans:1,exp:"في الوقت المناسب（及时）。"}]},
  {id:"a31", title:"购物中心的下午", lvl:"A2", vol:"2", scene:"shopping",
   ar:["قضينا بعد الظهر في المركز التجاري","الأقسام كثيرة والخدمات جيدة","اشتريت هدية لأمي"],
   zh:["我们下午逛了购物中心","楼层多，服务好","我给妈妈买了礼物"],
   q:[{q:"他们在哪过的下午？",opts:["超市","购物中心","餐厅"],ans:1,exp:"المركز التجاري（购物中心）。"},
      {q:"购物中心怎么样？",opts:["小而旧","楼层多服务好","很贵"],ans:1,exp:"الأقسام كثيرة والخدمات جيدة（楼层多服务好）。"},
      {q:"买了什么？",opts:["衣服","给妈妈的礼物","书"],ans:1,exp:"هدية لأمي（给妈妈的礼物）。"}]},
  {id:"a32", title:"厨师的一天", lvl:"A2", vol:"2", scene:"dining",
   ar:["أخي يعمل طاهياً في مطعم","يبدأ العمل مبكراً وينتهي متأخراً","يحب صنع الأطباق الجديدة"],
   zh:["我哥哥在一家餐厅当厨师","他早出晚归","他喜欢做新菜"],
   q:[{q:"哥哥做什么工作？",opts:["服务员","厨师","经理"],ans:1,exp:"طاهياً（厨师）。"},
      {q:"他的工作时间怎么样？",opts:["早出晚归","半天","自由"],ans:0,exp:"يبدأ مبكراً وينتهي متأخراً（早出晚归）。"},
      {q:"他喜欢做什么？",opts:["休息","做新菜","旅行"],ans:1,exp:"صنع الأطباق الجديدة（做新菜）。"}]},
  {id:"a33", title:"生病请假", lvl:"A2", vol:"2", scene:"health",
   ar:["أصبت بنزلة برد شديدة","اتصلت بالعمل وقلت إني مريض","بقيت في البيت أتعالج"],
   zh:["我得了重感冒","我打电话到单位说病了","我待在家里治疗"],
   q:[{q:"他得了什么病？",opts:["重感冒","头痛","发烧"],ans:0,exp:"نزلة برد شديدة（重感冒）。"},
      {q:"他怎么通知单位的？",opts:["写信","打电话","让同事转告"],ans:1,exp:"اتصلت بالعمل（打电话到单位）。"},
      {q:"他在家做什么？",opts:["休息治疗","工作","出去玩"],ans:0,exp:"أتعالج（接受治疗）。"}]},
  {id:"a34", title:"图书馆规则", lvl:"A2", vol:"2", scene:"school",
   ar:["في المكتبة يجب أن نهدأ","لا يجوز الأكل والشرب فيها","الهاتف يجب أن يكون صامتاً"],
   zh:["在图书馆必须保持安静","不允许在里面吃喝","手机必须静音"],
   q:[{q:"图书馆第一条规则是？",opts:["保持安静","大声朗读","跑来跑去"],ans:0,exp:"يجب أن نهدأ（必须安静）。"},
      {q:"能否在图书馆吃喝？",opts:["可以","不允许","看情况"],ans:1,exp:"لا يجوز الأكل والشرب（不允许吃喝）。"},
      {q:"手机应该怎样？",opts:["响铃","静音","关机"],ans:1,exp:"صامتاً（静音）。"}]},
  {id:"a35", title:"学做饭", lvl:"A2", vol:"2", scene:"dining",
   ar:["بدأت أتعلم الطبخ في البيت","جربت صنع الأرز بالدجاج","أول مرة نجح الطعام"],
   zh:["我开始在家学做饭","尝试做了鸡肉米饭","第一次做就成功了"],
   q:[{q:"他在学什么？",opts:["唱歌","做饭","画画"],ans:1,exp:"الطبخ（做饭）。"},
      {q:"他做了什么菜？",opts:["鸡肉米饭","鱼汤","沙拉"],ans:0,exp:"الأرز بالدجاج（鸡肉米饭）。"},
      {q:"结果怎样？",opts:["失败","成功","一般"],ans:1,exp:"نجح الطعام（做成功了）。"}]},
  {id:"a36", title:"旅行准备", lvl:"A2", vol:"2", scene:"travel",
   ar:["جهزت حقيبتي للسفر","أخذت الملابس والكاميرا","نظرت إلى التذاكر مرة أخرى"],
   zh:["我收拾好了旅行包","带了衣服和相机","又检查了一遍机票"],
   q:[{q:"他在准备什么？",opts:["考试","旅行","搬家"],ans:1,exp:"للسفر（为旅行）。"},
      {q:"包里带了什么？",opts:["衣服和相机","书","食物"],ans:0,exp:"الملابس والكاميرا（衣服和相机）。"},
      {q:"他还查看了什么？",opts:["地图","机票","天气预报"],ans:1,exp:"التذاكر（机票）。"}]},
  /* —— 第三册（16 篇） —— */
  {id:"a37", title:"标准语和方言", lvl:"A2", vol:"3", scene:"lang",
   ar:["اللغة الفصحى لغة القراءة والكتابة","أما اللهجات فهي لغة الحياة اليومية","أتعلم الفصحى وأستمع للهجات"],
   zh:["标准语是读写所用的语言","而方言是日常生活的语言","我学标准语，也听方言"],
   q:[{q:"标准语用于什么？",opts:["日常聊天","读写","唱歌"],ans:1,exp:"لغة القراءة والكتابة（读写的语言）。"},
      {q:"方言用于什么？",opts:["日常生活","官方文件","教科书"],ans:0,exp:"لغة الحياة اليومية（日常生活的语言）。"},
      {q:"说话人怎么学？",opts:["只学标准语","只学方言","两者都学"],ans:2,exp:"أتعلم الفصحى وأستمع للهجات（学标准语也听方言）。"}]},
  {id:"a38", title:"学习语言的秘密", lvl:"A2", vol:"3", scene:"lang",
   ar:["أفضل طريقة لتعلم اللغة هي الممارسة","أستمع كل يوم وأتحدث بجرأة","الخطأ جزء من التعلم فلا تخف"],
   zh:["学语言的最好方法是实践","我每天听、大胆说","错误是学习的一部分，别害怕"],
   q:[{q:"学语言的最好方法是什么？",opts:["背字典","实践","只读语法"],ans:1,exp:"الممارسة（实践）。"},
      {q:"说话人每天做什么？",opts:["只听","只听和说","只写"],ans:1,exp:"أستمع وأتحدث（听和说）。"},
      {q:"对错误的态度是？",opts:["害怕","回避","错误是学习的一部分"],ans:2,exp:"الخطأ جزء من التعلم（错误是学习的一部分）。"}]},
  {id:"a39", title:"一则新闻", lvl:"A2", vol:"3", scene:"news",
   ar:["قرأت في الجريدة خبراً مهماً","افتتحت المدينة متحفاً جديداً","سيفتح أبوابه للزوار غداً"],
   zh:["我在报纸上读了一条重要新闻","城市新开了一座博物馆","明天将向参观者开放"],
   q:[{q:"新闻在哪里读到的？",opts:["网上","报纸","电视"],ans:1,exp:"في الجريدة（在报纸上）。"},
      {q:"新闻内容是什么？",opts:["新机场","新博物馆","新学校"],ans:1,exp:"متحفاً جديداً（新博物馆）。"},
      {q:"博物馆什么时候开放？",opts:["今天","明天","下月"],ans:1,exp:"غداً（明天）。"}]},
  {id:"a40", title:"电视节目", lvl:"A2", vol:"3", scene:"news",
   ar:["أشاهد البرامج الثقافية كثيراً","أحب برامج التاريخ والطبيعة","أتعلم منها معلومات جديدة"],
   zh:["我经常看文化类节目","我喜欢历史和自然类节目","我从中学到新知识"],
   q:[{q:"他常看什么节目？",opts:["体育","文化","综艺"],ans:1,exp:"البرامج الثقافية（文化节目）。"},
      {q:"他喜欢哪两类节目？",opts:["历史和自然","音乐和舞蹈","新闻和天气"],ans:0,exp:"التاريخ والطبيعة（历史和自然）。"},
      {q:"他从节目中收获什么？",opts:["娱乐","新信息","朋友"],ans:1,exp:"معلومات جديدة（新知识）。"}]},
  {id:"a41", title:"旧城漫步", lvl:"A2", vol:"3", scene:"travel",
   ar:["تجولنا في أزقة المدينة القديمة","البيوت قديمة والجدران مزخرفة","السياح يلتقطون الصور في كل مكان"],
   zh:["我们在老城的小巷里漫步","房屋古老，墙壁有装饰","游客们到处拍照"],
   q:[{q:"他们去了哪里？",opts:["新城","老城","城外"],ans:1,exp:"المدينة القديمة（老城）。"},
      {q:"老城的房屋怎么样？",opts:["新而现代","古老有装饰","很破旧"],ans:1,exp:"قديمة والجدران مزخرفة（古老、墙有装饰）。"},
      {q:"游客们在做什么？",opts:["购物","拍照","吃饭"],ans:1,exp:"يلتقطون الصور（拍照）。"}]},
  {id:"a42", title:"博物馆参观", lvl:"A2", vol:"3", scene:"school",
   ar:["زرنا المتحف الوطني أمس","شاهدنا آثاراً قديمة ونادرة","الدليل شرح لنا تاريخها"],
   zh:["昨天我们参观了国家博物馆","我们看到古老而珍贵的文物","讲解员给我们讲了它们的历史"],
   q:[{q:"参观了什么？",opts:["图书馆","国家博物馆","动物园"],ans:1,exp:"المتحف الوطني（国家博物馆）。"},
      {q:"看到了什么？",opts:["古文物","现代画","动物"],ans:0,exp:"آثاراً قديمة ونادرة（古老珍贵的文物）。"},
      {q:"谁讲解了历史？",opts:["老师","讲解员","朋友"],ans:1,exp:"الدليل（讲解员）。"}]},
  {id:"a43", title:"读书的乐趣", lvl:"A2", vol:"3", scene:"lang",
   ar:["القراءة أجمل هواياتي","أقرأ في الصباح قبل العمل","الكتب تفتح لي عوالم جديدة"],
   zh:["阅读是我最爱的爱好","我早晨上班前读书","书为我打开新的世界"],
   q:[{q:"最爱的爱好是什么？",opts:["运动","阅读","旅行"],ans:1,exp:"القراءة（阅读）。"},
      {q:"他什么时候读书？",opts:["晚上","早晨上班前","周末"],ans:1,exp:"في الصباح قبل العمل（早晨上班前）。"},
      {q:"书给他带来什么？",opts:["新世界","财富","名气"],ans:0,exp:"عوالم جديدة（新的世界）。"}]},
  {id:"a44", title:"阿拉伯咖啡", lvl:"A2", vol:"3", scene:"dining",
   ar:["القهوة العربية لها طعم خاص","تقدم في فناجين صغيرة","شربها مع الأصدقاء أجمل"],
   zh:["阿拉伯咖啡有独特的味道","用小杯子盛放","和朋友一起喝最惬意"],
   q:[{q:"阿拉伯咖啡有什么特点？",opts:["没味道","独特的味道","太甜"],ans:1,exp:"طعم خاص（独特的味道）。"},
      {q:"咖啡用什么杯子盛？",opts:["大杯","小杯","碗"],ans:1,exp:"فناجين صغيرة（小杯）。"},
      {q:"怎样喝最惬意？",opts:["一个人","和朋友","配点心"],ans:1,exp:"مع الأصدقاء（和朋友一起）。"}]},
  {id:"a45", title:"新闻记者", lvl:"A2", vol:"3", scene:"news",
   ar:["أخي يعمل مراسلاً صحفياً","يسافر كثيراً إلى أماكن مختلفة","يكتب تقارير عن الأحداث"],
   zh:["我哥哥是新闻记者","他经常出差去不同地方","报道各种事件"],
   q:[{q:"哥哥做什么工作？",opts:["摄影师","新闻记者","播音员"],ans:1,exp:"مراسلاً صحفياً（新闻记者）。"},
      {q:"他的工作特点是什么？",opts:["常在家","常出差","坐办公室"],ans:1,exp:"يسافر كثيراً（经常出差）。"},
      {q:"他写什么？",opts:["小说","诗歌","报道"],ans:2,exp:"تقارير عن الأحداث（事件报道）。"}]},
  {id:"a46", title:"春游", lvl:"A2", vol:"3", scene:"outing",
   ar:["في الربيع خرجنا إلى الريف","الخضرة تمتد والهواء نقي","تنزهنا وقطفنا الزهور البرية"],
   zh:["春天我们去了乡下","绿意连绵，空气清新","我们散步、采摘野花"],
   q:[{q:"什么时候去的乡下？",opts:["夏天","春天","秋天"],ans:1,exp:"في الربيع（在春天）。"},
      {q:"乡下环境怎么样？",opts:["绿而清新","干燥","炎热"],ans:0,exp:"الخضرة تمتد والهواء نقي（绿意绵延、空气清新）。"},
      {q:"他们做了什么？",opts:["游泳","摘野花","爬山"],ans:1,exp:"قطفنا الزهور البرية（采摘野花）。"}]},
  {id:"a47", title:"阿拉伯书法", lvl:"A2", vol:"3", scene:"lang",
   ar:["الخط العربي فن عريق","أتعلم أنواعه: النسخ والرقعة","الممارسة اليومية تحسن خطي"],
   zh:["阿拉伯书法是古老的艺术","我在学它的字体：誊抄体、行书体","每天练习改善了我的字"],
   q:[{q:"阿拉伯书法是什么？",opts:["新艺术","古老的艺术","外来艺术"],ans:1,exp:"فن عريق（古老的艺术）。"},
      {q:"他学了哪两种字体？",opts:["نسخ 和 رقعة","ثلث 和 كوفي","ديواني 和 فارسي"],ans:0,exp:"النسخ والرقعة（誊抄体和行书体）。"},
      {q:"什么改善了他的字？",opts:["买好笔","每日练习","临摹"],ans:1,exp:"الممارسة اليومية（每日练习）。"}]},
  {id:"a48", title:"天气预警", lvl:"A2", vol:"3", scene:"news",
   ar:["حذرت الأرصاد من عاصفة قوية","نصحوا الناس بعدم السفر","ألغيت بعض الرحلات في المطار"],
   zh:["气象台预报将有大风暴","他们建议人们不要出行","机场取消了部分航班"],
   q:[{q:"气象台警告什么？",opts:["暴雨","强风暴","高温"],ans:1,exp:"عاصفة قوية（强风暴）。"},
      {q:"他们建议什么？",opts:["出门","不要出行","关窗"],ans:1,exp:"عدم السفر（不要出行）。"},
      {q:"机场发生了什么？",opts:["关闭","取消部分航班","改道"],ans:1,exp:"ألغيت بعض الرحلات（取消部分航班）。"}]},
  {id:"a49", title:"我的爱好：摄影", lvl:"A2", vol:"3", scene:"outing",
   ar:["التصوير هوايتي المفضلة","أصوّر الطبيعة والمدن","أحتفظ بالصور في ألبوم"],
   zh:["摄影是我最爱的爱好","我拍自然和城市","我把照片保存在相册里"],
   q:[{q:"最爱的爱好是什么？",opts:["摄影","集邮","钓鱼"],ans:0,exp:"التصوير（摄影）。"},
      {q:"他拍什么？",opts:["人物","自然和城市","动物"],ans:1,exp:"الطبيعة والمدن（自然和城市）。"},
      {q:"照片保存在哪里？",opts:["电脑","相册","手机"],ans:1,exp:"في ألبوم（在相册里）。"}]},
  {id:"a50", title:"参加演讲比赛", lvl:"A2", vol:"3", scene:"school",
   ar:["شاركت في مسابقة الخطابة","تحدثت عن أهمية القراءة","فزت بالجائزة الأولى"],
   zh:["我参加了演讲比赛","演讲关于阅读的重要性","我获得了第一名"],
   q:[{q:"他参加了什么？",opts:["歌唱比赛","演讲比赛","体育比赛"],ans:1,exp:"مسابقة الخطابة（演讲比赛）。"},
      {q:"演讲主题是什么？",opts:["阅读的重要性","旅行的乐趣","环保"],ans:0,exp:"أهمية القراءة（阅读的重要性）。"},
      {q:"结果如何？",opts:["第二名","第一名","没获奖"],ans:1,exp:"الجائزة الأولى（一等奖）。"}]},
  {id:"a51", title:"阿拉伯的节日", lvl:"A2", vol:"3", scene:"lang",
   ar:["عيد الفطر يوم فرح للمسلمين","نزور الأهل ونقدم الهدايا","الأسواق مليئة بالزينة"],
   zh:["开斋节是穆斯林的欢乐节日","我们走访亲友、互赠礼物","市场上满是装饰"],
   q:[{q:"开斋节是什么日子？",opts:["悲伤的日子","欢乐的日子","工作的日子"],ans:1,exp:"يوم فرح（欢乐的日子）。"},
      {q:"节日里人们做什么？",opts:["走访亲友送礼物","上班","考试"],ans:0,exp:"نزور الأهل ونقدم الهدايا（走访亲友送礼物）。"},
      {q:"市场有什么？",opts:["清仓","装饰","关闭"],ans:1,exp:"مليئة بالزينة（满是装饰）。"}]},
  {id:"a52", title:"图书馆与未来", lvl:"A2", vol:"3", scene:"school",
   ar:["المكتبات أصبحت رقمية اليوم","نستطيع قراءة الكتب على الإنترنت","لكن الكتاب الورقي ما زال محبوباً"],
   zh:["如今图书馆变得数字化","我们能在网上读书","但纸质书依然受欢迎"],
   q:[{q:"图书馆有什么变化？",opts:["关门了","数字化","变小了"],ans:1,exp:"أصبحت رقمية（数字化了）。"},
      {q:"能在网上做什么？",opts:["读书","购物","聊天"],ans:0,exp:"قراءة الكتب（读书）。"},
      {q:"纸质书怎么样？",opts:["被淘汰","依然受欢迎","很少见"],ans:1,exp:"ما زال محبوباً（依然受欢迎）。"}]},
  {id:"a53", title:"给朋友的信", lvl:"A2", vol:"3", scene:"net",
   ar:["أكتب إليك لأخبرك بأخباري","حصلت على وظيفة جديدة","أتمنى أن أراك قريباً"],
   zh:["我写信告诉你我的近况","我找到了一份新工作","希望很快见到你"],
   q:[{q:"写信的目的是什么？",opts:["借钱","告知近况","告别"],ans:1,exp:"لأخبرك بأخباري（告诉你我的消息）。"},
      {q:"他有什么新情况？",opts:["新工作","搬家","结婚"],ans:0,exp:"حصلت على وظيفة جديدة（找到了新工作）。"},
      {q:"他表达了什么愿望？",opts:["快点见面","多写信","寄礼物"],ans:0,exp:"أراك قريباً（尽快见到你）。"}]},
  {id:"a54", title:"阿拉伯传统市场", lvl:"A2", vol:"3", scene:"shopping",
   ar:["السوق التقليدي مكان ساحر","الروائح والألوان تعبّر عن التراث","المساومة جزء من الثقافة"],
   zh:["传统市场是个迷人的地方","气味和色彩展现着遗产","讨价还价是文化的一部分"],
   q:[{q:"传统市场是怎样的地方？",opts:["无趣","迷人","危险"],ans:1,exp:"مكان ساحر（迷人的地方）。"},
      {q:"什么展现着遗产？",opts:["建筑","气味和色彩","音乐"],ans:1,exp:"الروائح والألوان（气味和色彩）。"},
      {q:"讨价还价是什么？",opts:["浪费时间的","文化的一部分","不礼貌"],ans:1,exp:"جزء من الثقافة（文化的一部分）。"}]},
  {id:"a55", title:"夜读", lvl:"A2", vol:"3", scene:"time",
   ar:["أفضل القراءة في الليل","الهدوء يساعدني على التركيز","أنهي يومي بقراءة بضع صفحات"],
   zh:["我喜欢在夜里读书","安静帮助我集中注意力","我以读几页书结束一天"],
   q:[{q:"他喜欢什么时候读书？",opts:["早晨","中午","夜里"],ans:2,exp:"في الليل（在夜里）。"},
      {q:"为什么？",opts:["凉快","安静助专注","有灯光"],ans:1,exp:"الهدوء يساعدني على التركيز（安静助专注）。"},
      {q:"一天怎么结束？",opts:["看手机","读几页书","散步"],ans:1,exp:"بقراءة بضع صفحات（读几页书）。"}]},
  /* —— 第四册（16 篇） —— */
  {id:"a56", title:"大使的访问", lvl:"A2", vol:"4", scene:"diplo",
   ar:["وصل السفير الصيني إلى عاصمتنا","عقد اجتماعاً مع وزير الخارجية","بحث الجانبان التعاون الاقتصادي"],
   zh:["中国大使抵达我们首都","他与外交部长举行了会谈","双方讨论了经济合作"],
   q:[{q:"谁抵达了首都？",opts:["中国大使","总统","记者"],ans:0,exp:"السفير الصيني（中国大使）。"},
      {q:"他和谁会谈？",opts:["总统","外交部长","商人"],ans:1,exp:"وزير الخارجية（外交部长）。"},
      {q:"讨论了什么？",opts:["军事","经济合作","文化"],ans:1,exp:"التعاون الاقتصادي（经济合作）。"}]},
  {id:"a57", title:"国际会议", lvl:"A2", vol:"4", scene:"diplo",
   ar:["عقدت العاصمة مؤتمراً دولياً","حضره ممثلون من عشرين دولة","ناقشوا قضايا البيئة والطاقة"],
   zh:["首都举办了一场国际会议","来自二十个国家的代表出席","他们讨论了环境和能源问题"],
   q:[{q:"哪里举办了会议？",opts:["首都","海边城市","山区"],ans:0,exp:"عقدت العاصمة（首都举办）。"},
      {q:"多少个国家参加？",opts:["十个","二十个","三十个"],ans:1,exp:"من عشرين دولة（二十个国家）。"},
      {q:"讨论了什么？",opts:["环境和能源","体育","旅游"],ans:0,exp:"قضايا البيئة والطاقة（环境和能源问题）。"}]},
  {id:"a58", title:"经济新闻", lvl:"A2", vol:"4", scene:"news",
   ar:["نشرت الصحيفة تقريراً عن الاقتصاد","النمو بلغ خمسة بالمئة","الاستثمار في التكنولوجيا يتزايد"],
   zh:["报纸发表了一篇经济报道","增长率达到百分之五","科技投资在增加"],
   q:[{q:"报纸发表了什么？",opts:["体育报道","经济报道","娱乐报道"],ans:1,exp:"تقريراً عن الاقتصاد（经济报道）。"},
      {q:"增长率是多少？",opts:["百分之三","百分之五","百分之十"],ans:1,exp:"خمسة بالمئة（百分之五）。"},
      {q:"什么在增加？",opts:["科技投资","进口","失业"],ans:0,exp:"الاستثمار في التكنولوجيا（科技投资）。"}]},
  {id:"a59", title:"谈判继续", lvl:"A2", vol:"4", scene:"diplo",
   ar:["استمرت المفاوضات بين البلدين","بحثوا التجارة الحرة","لم يصلوا إلى اتفاق نهائي بعد"],
   zh:["两国间的谈判仍在继续","他们商讨自由贸易","尚未达成最终协议"],
   q:[{q:"什么在继续？",opts:["谈判","战争","比赛"],ans:0,exp:"المفاوضات（谈判）。"},
      {q:"他们商讨什么？",opts:["自由贸易","军事合作","文化交流"],ans:0,exp:"التجارة الحرة（自由贸易）。"},
      {q:"达成协议了吗？",opts:["达成了","尚未","取消了"],ans:1,exp:"لم يصلوا إلى اتفاق نهائي（尚未达成最终协议）。"}]},
  {id:"a60", title:"发展与合作", lvl:"A2", vol:"4", scene:"diplo",
   ar:["التنمية تحتاج إلى تعاون دولي","تبادل الخبرات يفيد الجميع","المشاريع المشتركة تعزز الصداقة"],
   zh:["发展需要国际合作","经验交流惠及各方","共同项目增进友谊"],
   q:[{q:"发展需要什么？",opts:["闭门造车","国际合作","独自努力"],ans:1,exp:"تعاون دولي（国际合作）。"},
      {q:"什么对大家有益？",opts:["经验交流","保密","竞争"],ans:0,exp:"تبادل الخبرات（经验交流）。"},
      {q:"共同项目带来什么？",opts:["分歧","友谊","负担"],ans:1,exp:"تعزز الصداقة（增进友谊）。"}]},
  {id:"a61", title:"联合声明", lvl:"A2", vol:"4", scene:"diplo",
   ar:["أصدر الجانبان بياناً مشتركاً","أكدا رغبتهما في السلام","اتفقا على مواصلة الحوار"],
   zh:["双方发表了联合声明","重申了对和平的愿望","同意继续对话"],
   q:[{q:"双方发布了什么？",opts:["联合声明","新闻","法律"],ans:0,exp:"بياناً مشتركاً（联合声明）。"},
      {q:"他们重申了什么？",opts:["对和平的愿望","军事行动","经济制裁"],ans:0,exp:"رغبتهما في السلام（对和平的愿望）。"},
      {q:"达成了什么一致？",opts:["停止对话","继续对话","终止合作"],ans:1,exp:"مواصلة الحوار（继续对话）。"}]},
  {id:"a62", title:"历史遗迹", lvl:"A2", vol:"4", scene:"travel",
   ar:["المنطقة مليئة بالآثار التاريخية","القلعة تعود إلى مئات السنين","الحكومة تحمي هذه الكنوز"],
   zh:["这个地区遍布历史遗迹","城堡已有数百年历史","政府保护这些宝藏"],
   q:[{q:"地区有什么？",opts:["现代建筑","历史遗迹","工厂"],ans:1,exp:"آثار تاريخية（历史遗迹）。"},
      {q:"城堡有多久历史？",opts:["几十年","数百年","千年以上"],ans:1,exp:"مئات السنين（数百年）。"},
      {q:"政府做什么？",opts:["拆毁","保护","出售"],ans:1,exp:"تحمي هذه الكنوز（保护这些宝藏）。"}]},
  {id:"a63", title:"奖学金", lvl:"A2", vol:"4", scene:"school",
   ar:["حصلت على منحة للدراسة في الخارج","سأدرس اللغة في مصر","هذه فرصة ثمينة لحياتي"],
   zh:["我获得了出国留学的奖学金","我将在埃及学语言","这是我人生的宝贵机会"],
   q:[{q:"他获得了什么？",opts:["工作","奖学金","签证"],ans:1,exp:"منحة（奖学金）。"},
      {q:"他要去哪学习？",opts:["埃及","中国","法国"],ans:0,exp:"في مصر（在埃及）。"},
      {q:"他把这看作什么？",opts:["负担","宝贵机会","冒险"],ans:1,exp:"فرصة ثمينة（宝贵机会）。"}]},
  {id:"a64", title:"城市交通", lvl:"A2", vol:"4", scene:"direction",
   ar:["مدينتي تعاني من الازدحام","بنوا خطاً جديداً للمترو","الناس يفضلون المواصلات العامة"],
   zh:["我的城市交通拥堵","他们建了新的地铁线","人们更爱乘坐公共交通"],
   q:[{q:"城市面临什么问题？",opts:["拥堵","缺水","停电"],ans:0,exp:"الازدحام（拥堵）。"},
      {q:"建了什么？",opts:["新机场","地铁线","高架桥"],ans:1,exp:"خطاً جديداً للمترو（新的地铁线）。"},
      {q:"人们倾向什么？",opts:["私家车","公共交通","步行"],ans:1,exp:"المواصلات العامة（公共交通）。"}]},
  {id:"a65", title:"志愿工作", lvl:"A2", vol:"4", scene:"news",
   ar:["أشارك في العمل التطوعي كل جمعة","نساعد الأطفال في التعلم","العطاء يمنحني سعادة كبيرة"],
   zh:["我每周五参加志愿工作","我们帮孩子们学习","付出带给我巨大的快乐"],
   q:[{q:"他什么时候做志愿工作？",opts:["每天","每周五","每月"],ans:1,exp:"كل جمعة（每周五）。"},
      {q:"他们帮助谁？",opts:["老人","儿童","病人"],ans:1,exp:"الأطفال（孩子们）。"},
      {q:"付出带给他什么？",opts:["金钱","快乐","名气"],ans:1,exp:"سعادة كبيرة（巨大的快乐）。"}]},
  {id:"a66", title:"能源与环境", lvl:"A2", vol:"4", scene:"news",
   ar:["الطاقة الشمسية مستقبل واعد","تقلل التلوث وتوفر المال","دول كثيرة تستثمر فيها"],
   zh:["太阳能前途光明","它减少污染、节省开支","许多国家在投资它"],
   q:[{q:"什么前途光明？",opts:["煤炭","太阳能","石油"],ans:1,exp:"الطاقة الشمسية（太阳能）。"},
      {q:"太阳能的好处？",opts:["污染多","减污省钱","危险"],ans:1,exp:"تقلل التلوث وتوفر المال（减污省钱）。"},
      {q:"各国怎么做？",opts:["忽视","投资","禁止"],ans:1,exp:"تستثمر فيها（投资）。"}]},
  /* —— 第五册（8 篇） —— */
  {id:"a67", title:"科学发明", lvl:"B1", vol:"5", scene:"school",
   ar:["غيّر الاختراع حياة الإنسان الحديث","الهاتف الذكي أشهر مثال","العلم يتقدم بفضل العقول المجتهدة"],
   zh:["发明改变了现代人的生活","智能手机是最著名的例子","科学因勤奋的头脑而进步"],
   q:[{q:"什么改变了现代生活？",opts:["发明","天气","传统"],ans:0,exp:"الاختراع（发明）。"},
      {q:"最著名的例子是什么？",opts:["汽车","智能手机","飞机"],ans:1,exp:"الهاتف الذكي（智能手机）。"},
      {q:"科学靠什么进步？",opts:["运气","勤奋的头脑","金钱"],ans:1,exp:"العقول المجتهدة（勤奋的头脑）。"}]},
  {id:"a68", title:"人工智能", lvl:"B1", vol:"5", scene:"net",
   ar:["الذكاء الاصطناعي يدخل كل مجال","يساعد الأطباء في التشخيص","لكنه يطرح أسئلة أخلاقية"],
   zh:["人工智能进入各个领域","它帮助医生诊断","但也提出伦理问题"],
   q:[{q:"人工智能进入哪里？",opts:["每个领域","仅工业","仅游戏"],ans:0,exp:"كل مجال（每个领域）。"},
      {q:"它如何帮助医生？",opts:["开药","诊断","手术"],ans:1,exp:"في التشخيص（诊断）。"},
      {q:"它带来什么问题？",opts:["经济问题","伦理问题","语言问题"],ans:1,exp:"أسئلة أخلاقية（伦理问题）。"}]},
  {id:"a69", title:"历史的教训", lvl:"B1", vol:"5", scene:"lang",
   ar:["من ينسى التاريخ يكرر أخطاءه","نقرأ التاريخ لنفهم الحاضر","الحضارات بنيت على العلم والأخلاق"],
   zh:["忘记历史的人会重蹈覆辙","我们读历史以理解现在","文明建立在知识与道德之上"],
   q:[{q:"忘记历史会怎样？",opts:["重蹈覆辙","更聪明","自由"],ans:0,exp:"يكرر أخطاءه（重蹈覆辙）。"},
      {q:"为什么读历史？",opts:["娱乐","理解现在","考试"],ans:1,exp:"لنفهم الحاضر（理解现在）。"},
      {q:"文明建立在什么上？",opts:["知识与道德","武力","财富"],ans:0,exp:"العلم والأخلاق（知识与道德）。"}]},
  {id:"a70", title:"医学进步", lvl:"B1", vol:"5", scene:"health",
   ar:["الطب شهد تقدماً مذهلاً","أمراض كانت خطيرة أصبحت قابلة للعلاج","البحث المستمر هو السر"],
   zh:["医学取得了惊人进步","曾经危险的疾病如今可治","持续研究是关键"],
   q:[{q:"医学怎么样？",opts:["停滞","惊人进步","倒退"],ans:1,exp:"تقدماً مذهلاً（惊人进步）。"},
      {q:"曾经的危险疾病如今？",opts:["更危险","可治疗","无解"],ans:1,exp:"قابلة للعلاج（可治疗）。"},
      {q:"关键是什么？",opts:["持续研究","运气","新药"],ans:0,exp:"البحث المستمر（持续研究）。"}]},
  {id:"a71", title:"社会变迁", lvl:"B1", vol:"5", scene:"news",
   ar:["تغير المجتمع تغيراً كبيراً","الجيل الجديد يفكر بطريقة مختلفة","لكن القيم الأساسية باقية"],
   zh:["社会发生了巨大变化","新一代有不同的思维方式","但核心价值观仍在"],
   q:[{q:"社会怎么了？",opts:["没变","巨变","倒退"],ans:1,exp:"تغيراً كبيراً（巨大变化）。"},
      {q:"新一代有什么特点？",opts:["同样的思维","不同的思维","更保守"],ans:1,exp:"يفكر بطريقة مختلفة（不同的思维方式）。"},
      {q:"什么依然存在？",opts:["核心价值观","旧习惯","旧制度"],ans:0,exp:"القيم الأساسية（核心价值观）。"}]},
  {id:"a72", title:"阅读与文化", lvl:"B1", vol:"5", scene:"lang",
   ar:["القراءة نافذة إلى الثقافات الأخرى","نعرف الشعوب عبر أدبها","الكتب جسر بين الحضارات"],
   zh:["阅读是通向其他文化的窗口","我们通过文学认识各民族","书籍是文明之间的桥梁"],
   q:[{q:"阅读是什么？",opts:["负担","文化窗口","消遣"],ans:1,exp:"نافذة إلى الثقافات（通向文化的窗口）。"},
      {q:"我们如何认识各民族？",opts:["通过文学","通过战争","通过贸易"],ans:0,exp:"عبر أدبها（通过其文学）。"},
      {q:"书籍是什么？",opts:["墙","桥梁","堡垒"],ans:1,exp:"جسر بين الحضارات（文明间的桥梁）。"}]},
  {id:"a73", title:"财富与幸福", lvl:"B1", vol:"5", scene:"job",
   ar:["كثيرون يعتقدون أن المال هو السعادة","لكن السعادة في القلب والرضا","العلاقات الطيبة أثمن من الذهب"],
   zh:["许多人认为金钱就是幸福","但幸福在心里、在知足","良好的关系比黄金更珍贵"],
   q:[{q:"许多人相信什么？",opts:["金钱即幸福","健康即幸福","自由即幸福"],ans:0,exp:"المال هو السعادة（金钱就是幸福）。"},
      {q:"幸福在哪里？",opts:["银行","心里和知足","豪宅"],ans:1,exp:"في القلب والرضا（在心里、在知足）。"},
      {q:"什么比黄金珍贵？",opts:["宝石","良好关系","名车"],ans:1,exp:"العلاقات الطيبة（良好的关系）。"}]},
  {id:"a74", title:"环境保护", lvl:"B1", vol:"5", scene:"health",
   ar:["حماية البيئة مسؤولية الجميع","إعادة التدوير تقلل النفايات","الشجر حياة للأجيال القادمة"],
   zh:["保护环境是每个人的责任","回收利用减少垃圾","树木是后代的生机"],
   q:[{q:"保护环境是谁的责任？",opts:["政府","每个人","工厂"],ans:1,exp:"مسؤولية الجميع（每个人的责任）。"},
      {q:"回收利用有什么作用？",opts:["减少垃圾","增加污染","浪费"],ans:0,exp:"تقلل النفايات（减少垃圾）。"},
      {q:"树木意味着什么？",opts:["财富","后代的生机","装饰"],ans:1,exp:"حياة للأجيال القادمة（后代的生机）。"}]},
  /* —— 第六册（8 篇） —— */
  {id:"a75", title:"国际关系", lvl:"B1", vol:"6", scene:"diplo",
   ar:["العلاقات الدولية تشهد تحولات","الاقتصاد يقود السياسة اليوم","الحوار هو السبيل لحل الخلافات"],
   zh:["国际关系正在发生转变","今天经济引领政治","对话是解决分歧的途径"],
   q:[{q:"国际关系怎么样？",opts:["静止","转变","倒退"],ans:1,exp:"تشهد تحولات（经历转变）。"},
      {q:"今天什么引领政治？",opts:["军事","经济","宗教"],ans:1,exp:"الاقتصاد يقود السياسة（经济引领政治）。"},
      {q:"解决分歧的途径是什么？",opts:["战争","对话","制裁"],ans:1,exp:"الحوار（对话）。"}]},
  {id:"a76", title:"全球化", lvl:"B1", vol:"6", scene:"news",
   ar:["العولمة ربطت شعوب العالم","التجارة والثقافة تتدفق بلا حدود","لكن الهوية تبقى ضرورية"],
   zh:["全球化连接了世界各民族","贸易与文化无界流动","但身份认同依然必要"],
   q:[{q:"全球化做了什么？",opts:["隔离民族","连接民族","分裂世界"],ans:1,exp:"ربطت شعوب العالم（连接世界各民族）。"},
      {q:"什么在无界流动？",opts:["贸易和文化","军队","边界"],ans:0,exp:"التجارة والثقافة（贸易与文化）。"},
      {q:"什么依然必要？",opts:["身份认同","护照","关税"],ans:0,exp:"الهوية（身份认同）。"}]},
  {id:"a77", title:"法律的尊严", lvl:"B1", vol:"6", scene:"diplo",
   ar:["القانون حارس العدالة","الجميع متساوون أمامه","احترام القانون أساس الاستقرار"],
   zh:["法律是正义的守护者","人人在它面前平等","尊重法律是稳定的基础"],
   q:[{q:"法律是什么？",opts:["正义的守护者","权力的工具","惩罚"],ans:0,exp:"حارس العدالة（正义的守护者）。"},
      {q:"法律面前人人？",opts:["不平等","平等","特权"],ans:1,exp:"متساوون（平等）。"},
      {q:"稳定靠什么？",opts:["强权","尊重法律","金钱"],ans:1,exp:"احترام القانون（尊重法律）。"}]},
  {id:"a78", title:"媒体的力量", lvl:"B1", vol:"6", scene:"news",
   ar:["للإعلام تأثير قوي في الرأي العام","الصحافة الحرة تكشف الحقيقة","المسؤولية الأخلاقية واجبة"],
   zh:["媒体对舆论有强大影响","自由新闻业揭示真相","道德责任是必须的"],
   q:[{q:"媒体影响什么？",opts:["舆论","天气","经济"],ans:0,exp:"الرأي العام（公众舆论）。"},
      {q:"自由新闻业做什么？",opts:["掩盖","揭示真相","宣传"],ans:1,exp:"تكشف الحقيقة（揭示真相）。"},
      {q:"什么必须履行？",opts:["道德责任","利润","速度"],ans:0,exp:"المسؤولية الأخلاقية（道德责任）。"}]},
  {id:"a79", title:"和平的代价", lvl:"B1", vol:"6", scene:"diplo",
   ar:["السلام لا يأتي مجاناً","يبنى بالحوار والثقة","الشعوب تدفع ثمن الحرب غالياً"],
   zh:["和平不会凭空而来","它靠对话与信任建立","人民为战争付出沉重代价"],
   q:[{q:"和平怎么得来？",opts:["免费","靠对话与信任","靠武力"],ans:1,exp:"يبنى بالحوار والثقة（靠对话与信任建立）。"},
      {q:"战争让谁付出代价？",opts:["商人","人民","政客"],ans:1,exp:"الشعوب تدفع ثمن الحرب（人民为战争付代价）。"},
      {q:"战争代价怎么样？",opts:["便宜","沉重","无关紧要"],ans:1,exp:"غالياً（沉重）。"}]},
  {id:"a80", title:"知识的力量", lvl:"B1", vol:"6", scene:"lang",
   ar:["المعرفة أقوى سلاح في العصر الحديث","من يملك العلم يملك المستقبل","الاستثمار في التعليم استثمار في الإنسان"],
   zh:["知识是当代最强大的武器","掌握知识的人掌握未来","投资教育就是投资人类"],
   q:[{q:"最强大的武器是什么？",opts:["军事","知识","金钱"],ans:1,exp:"المعرفة（知识）。"},
      {q:"谁拥有未来？",opts:["掌握知识的人","有权势的人","有钱的人"],ans:0,exp:"من يملك العلم يملك المستقبل（掌握知识的人掌握未来）。"},
      {q:"投资教育就是？",opts:["浪费","投资人类","赚钱"],ans:1,exp:"استثمار في الإنسان（投资人类）。"}]}
];

/* 自测维度定义（听/说/读/写） */
const TEST_DIMS = [
  {key:"listen", name:"听",   icon:"🎧", desc:"听发音，选择正确中文释义"},
  {key:"speak",  name:"说",   icon:"🗣️", desc:"跟读句子并自评发音流利度"},
  {key:"read",   name:"读",   icon:"📖", desc:"看阿文，选择正确中文/转写"},
  {key:"write",  name:"写",   icon:"✍️", desc:"看中文，用屏幕键盘写出阿文"}
];
