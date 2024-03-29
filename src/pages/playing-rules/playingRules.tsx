import { Helmet } from "react-helmet";
import classes from "./playingRules.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { RegulationType, RuleType } from "../../types/types";

export const PlayingRules: React.FC = () => {
  const regulations: RegulationType[] = [
    {
      id: "1",
      title: "زمین",
      body: [
        {
          id: "1",
          title: "اندازه زمين بازی فوتسال: ",
          text: " طول زمین فوتسال حداقل 25 متر و حداكثر 42 متر می باشد. عرض زمین فوتسال حداقل 15 متر و حداكثر 25 متر است.  در مسابقات بين المللی اندازه زمين فوتسال برابر است با طول حداقل 38 متر و حداكثر 42 متر و عرض حداقل 18 متر و حداكثر 25 متر می باشد. پهناي كليه خطوط زمین فوتسال 8 سانتيمتر است. اندازه دايره وسط زمين فوتسال 3 متر مي باشد.",
        },
        {
          id: "2",
          title: "نقطه پنالتي:",
          text: "فاصله نقطه پنالتي تا خط دروازه زمین فوتسال 6 متر مي باشد. فاصله نقطه پنالتي دوم زمین فوتسال تا خط دروازه 10 متر مي باشد. اندازه ربع دايره هاي گوشه زمين فوتسال (كرنر) 25 سانتيمتر می باشد.",
        },
        {
          id: "3",
          title: "اندازه دروازه های زمین فوتسال : ",
          text: "فاصله بين دو تير دروازه زمین فوتسال 3 متر و ارتفاع تير افقي تا سطح زمين 2 متر است.",
        },
      ],
      extraTxt: [
        "* تذكر : ورود و خروج بازيكنان فوتسال در موقع تعويض بايستی از محدوده مشخص شده زمین فوتسال انجام گيرد.",
      ],
    },
    {
      id: "2",
      title: "توپ",
      body: [
        {
          id: "1",
          title: "جنس توپ:",
          text: " توپ فوتسال از چرم يا مواد مشابه مي باشد و محيط آن حداقل 62 و حداكثر 64 سانتيمتر است.",
        },
        {
          id: "2",
          title: "وزن توپ: ",
          text: " توپ فوتبال درشروع بازی نبايستي كمتر از 390 گرم و يا بيشتر از 430 گرم باشد.",
        },
        {
          id: "3",
          title: "فشار توپ فوتسال: ",
          text: " 0.4 – 0.6اتمسفر برابر با 400 تا 600 گرم بر سانتيمتر مكعب از سطح دريا باشد.",
        },
      ],
    },
    {
      id: "3",
      title: "بازيکنان ",
      body: [
        {
          id: "1",
          title: "تعداد بازيكنان: ",
          text: " در يك مسابقه فوتسال با شركت دو تيم فوتسال نبايد بيش يا كمتر از 5 بازيكن براي هر تيم فوتسال باشد كه يكي از آنها دروازه بان با لباس مشخص است. اگر به دليل اخراج، تعداد بازيكنان يك تيم فوتسال به كمتر از 3 بازيكن برسد بازی فوتسال بايد تعطيل شود.",
        },
        {
          id: "2",
          title: "بازيكنان ذخيره: ",
          text: " تعداد بازيكنان ذخيره فوتسال حداكثر 7 نفر مي باشد.",
        },
        {
          id: "3",
          title: "تعويض: ",
          text: " تعداد تعويض در فوتسال سيار و نامحدود است حتي دروازه بان فوتسال. ( رنگ لباس دروازه بان فوتسال متمايز از بازيكنان دیگر فوتسال است ) بازيكني كه تعويض ميشود مي تواند دوباره به زمين بازی فوتسال برگردد. دروازه بان فوتسال مي تواند جاي خود را با ساير بازيكنان فوتسال عوض نمايد. ( تعويض دروازه بان بدون توقف بازی فوتسال و مثل ساير بازيكنان صورت مي گيرد ) تعويضها در فوتسال بايد از محل مشخص شده براي هر تيم فوتسال صورت پذيرد.",
        },
      ],
      extraTxt: [
        "الف. عمل تعويض در بازی فوتسال زماني خاتمه مي يابد كه بازيكن جانشين وارد زمين فوتسال شود.",
        "ب.  چنانچه در جريان تعويض سيار در بازی فوتسال، بازيكن جانشين قبل از اينكه بازيكن تعويضي كاملاً زمين فوتسال را ترك كند وارد زمين شود، داور بایستی بازی فوتسال را قطع ( با رعايت آوانتاژ به تيم حريف ) و بازيكن تعويضي را به بیرون بفرستد و به بازيكن جانشين اخطار و بازی فوتسال را با يك ضربه آزاد غير مستقيم به نفع تيم مقابل از محل توقف توپ آغاز نماید.",
        "* تذكر : اگر هنگامي كه داور بازی فوتسال را متوقف كرد توپ فوتسال درون محوطه جريمه بوده ضربه آزاد غير مستقيم از روي خط محوطه جريمه و نزديكترين محل به محل توقف توپ انجام مي شود.",
        "ج. اگر بازيكن جانشين يا بازيكن تعويضی از محلی به غير از منطقه تعويض وارد زمين بازی فوتسال شده يا از زمين بازی خارج گرديده داور بایستی بازی فوتسال را متوقف كرده و به بازيكن خاطی اخطار بدهد و بازی را با يك ضربه آزاد غير مستقيم عليه تيم خاطی از محل توپ زمانيكه بازی را متوقف كرده است مجددا شروع نماید.",
      ],
    },
    {
      id: "4",
      title: "مدت بازی",
      extraTxt: [
        "1. دو وقت 10 دقيقه ای برای بازی و زمان بين دو نيمه استراحت 5 دقيقه ای می باشد.",
        "2. براي ضربه پنالتي فوتسال و ضربات آزاد بدون ديوار دفاعي در فوتسال (پنالتي دوم 5 خطا) به اندازه زدن ضربات مذكور در پايان وقت به زمان بازی اضافه مي شود. در بازيهای فوتسالی كه بايستي نتيجه مشخص شود در صورتي كه بعد از پايان وقت قانوني نتيجه بازي فوتسال مساوي باشد از دو وقت اضافه 5 دقيقه اي استفاده مي شود. در طي دو وقت اضافه 5 دقيقه اي هيچ گونه تايم اوتي به تيمهای فوتسال داده نمي شود.",
      ],
    },
  ];

  const rules: RuleType[] = [
    {
      id: "1",
      title: "قانون اول",
      text: [
        "محیط توپ فوتسال حداقل ۶۲ و حداکثر ۶۴ سانتیمتر وزن توپ ۳۹۰ الی ۴۳۰ گرم (توپ فوتسال  نمره ۴)",
      ],
      definition: {
        title: "روش شناسایی استاندارد توپ فوتسال: ",
        description:
          " هنگامی که توپ فوتسال از ارتفاع ۲ متری به زمین رها می‌شود نباید بیشتر از ۶۵ و کمتر از ۵۵ سانتیمتر از زمین مسابقه جهش نماید.",
      },
    },
    {
      id: "2",
      title: "قانون دوم",
      text: [
        "تعداد بازیکنان یک مسابقه فوتسال با شرکت دو تیم نباید بیش از ۵ بازیکن باشد که یکی از آنها دروازه بان فوتسال با لباس مشخص است. در شروع مسابقه حداقل بازیکن هر تیم فوتسال باید ۵ نفر باشد.",
        "حداکثر بازیکن ذخیره در فوتسال ۷ نفر می‌باشد. تعداد تعویض در فوتسال سیار و نامحدود است حتی دروازه بان فوتسال. (رنگ لباس دروازه بان فوتسال متمایز از سایر بازیکنان فوتسال است) عمل تعویض در فوتسال زمانی خاتمه می‌یابد که بازیکن جانشین وارد زمین فوتسال شود.",
      ],
    },
    {
      id: "3",
      title: "قانون سوم",
      definition: {
        title: "وسایل بازیکنان فوتسال: ",
        description:
          " استفاده از کفش مخصوص فوتسال برای بازیکن فوتسال اجباری است. در صورت نقض این قانون بازیکن خاطی از زمین فوتسال به خارج فرستاده شده و با تکمیل وسایل با اجازه داوران فوتسال حتماً در هنگام توقف بازی فوتسال وارد زمین می شود.",
      },
    },
    {
      id: "4",
      title: "قانون چهارم",
      text: [
        "برای اداره بازی فوتسال یک داور اصلی یا سر داور تعیین می‌گردد. قدرت داور فوتسال که قانون به او تفویض نموده‌ است از هنگام شروع بازی فوتسال تا هنگام اتمام بازی است. در هر مورد مرتبط با بازی فوتسال نتیجه نهایی و تصمیم با اوست. در صورت عدم حضور وقت نگهدار این مسؤولیت به عهده داور فوتسال است.",
      ],
    },
    {
      id: "5",
      title: "قانون پنجم",
      text: [
        "کمک داور (داور دوم) بایستی برای هر مسابقه فوتسال تعیین شود. در طرف مقابل داور اصلی فوتسال انجام وظیفه می‌کند و همان قدرت اجرایی را دارد به جز (همه وقایعی را که قبل در حین یا بعد از بازی فوتسال می‌افتد ثبت و گزارش کند) در صورت نبودن وقت نگهدار وظیفه دارد دو دقیقه اخراجی بازیکنان و تایم یک دقیقه را محاسبه نماید و  اینکه تعویض سیار صحیح انجام گرفته‌ باشد. در صورت دخالت بی مورد از جانب کمک داور، داور اصلی فوتسال بایستی او را از وظیفه آن معاف شخصی دیگری جانشین وی موضوع را گزارش کند.",
        "* تذکر: در صورت وجود اختلاف نظر بین داور اصلی و کمک داور فوتسال، سرداور (داور اصلی) حاکم خواهد بود.",
      ],
    },
    {
      id: "6",
      title: "قانون ششم",
      text: [
        "برای یک بازی فوتسال یک داور اصلی و یک کمک داور تعیین می‌گردد.",
        "وقت نگهدار در خارج از بازی در امتداد خط میانی در منطقه تعویض بازیکنان فوتسال قرار دارد. وظایف وقت نگهدار فوتسال، نگهداری وقت بازی فوتسال،نگهداری وقت ۲ دقیقه اخراجی، یادداشت تایم اوت‌ها و دادن علامت تایم اوت به داوران فوتسال، اعلام زمان بازی فوتسال با صوت به داوران و یادداشت ۵ خطای اول هر تیم فوتسال در هر نیمه که توسط داوران فوتسال اعلام شده، ثبت شماره گلزنان و بازیکنان اخراجی و اخطاری و تایم اوت‌های تیم های فوتسال می‌باشد.",
      ],
    },
    {
      id: "7",
      title: "قانون هفتم",
      text: [
        "مدت بازی فوتسال دو وقت ۲۰ دقیقه‌ای و زمان بین دو نیمه استراحت ۱۵ دقیقه‌ می‌باشد. هر تیم فوتسال می‌تواند در هر نیمه یک تایم درخواست کند (در بازی‌های حذفی فوتسال در وقت اضافی تایم اوت وجود ندارد).",
        "برنده قرعه برای شروع بازی فوتسال، اختیار انتخاب زمین فوتسال و بازنده قرعه ضربه شروع بازی فوتسال را می‌زند. ضربه شروع بازی فوتسال به داخل زمین حریف با علامت داور اصلی فوتسال خواهد بود که فاصله بازیکن مقابل با توپ فوتسال ۳ متر خواهد بود. از ضربه شروع بازی فوتسال مستقیماً گل به دست نمی‌آید.",
      ],
    },
    {
      id: "8",
      title: "قانون هشتم",
      text: [
        "وقتی توپ بازی فوتسال به طور کامل از خط طولی یا عرضی زمین فوتسال، چه از هوا و چه از زمین گذشته باشد، همچنین برخورد توپ به سقف سالن فوتسال، اوت اعلام می شود و ادامه بازی فوتسال از روی خط طولی نزدیکتر از سر گرفته می شود.",
      ],
    },
    {
      id: "9",
      title: "قانون نهم",
      text: [
        "روش به دست آمدن گل در فوتسال: تمام توپ فوتسال از خط دروازه بین تیرهای عمودی و افقی عبور کرده به شرطی که بازیکن مهاجم توپ فوتسال را با دست یا بازو و پرتاب، حمل یا هل نداده باشد.",
      ],
    },
    {
      id: "10",
      title: "قانون دهم",
      definition: {
        title: "ضربه آزاد در فوتسال: ",
        description:
          " تحت عنوان دو دسته ضربه آزاد مستقیم و ضربه آزاد غیر مستقیم می‌باشد. در ضربه آزاد مستقیم در فوتسال می‌توان مستقیماً به حریف گل زد.",
      },
    },
    {
      id: "11",
      title: "قانون یازدهم",
      text: ["در فوتسال می توان با ضربه آزاد مستقیم به حریف گل زد."],
      definition: {
        title: "ضربه پنالتی در فوتسال: ",
        description:
          " از نقطه پنالتی زمین فوتسال زده می‌شود. زننده ضربه باید مشخص باشد. ضربه پنالتی فوتسال حتماً باید به طرف جلو (دروازه حریف) زده شود.",
      },
    },
    {
      id: "12",
      title: "قانون دوازدهم",
      text: [
        "مهاجمین و مدافعین فوتسال باید فاصله ۵ متر را رعایت کنند.",
        "* تذکر: اگر خطای ششم عقبتر از نقطه پنالتی دوم زمین فوتسال بود، مستقیم به نقطه پنالتی دوم زمین فوتسال منتقل شده ضربه زده می‌شود (حق پاس دادن نیز وجود ندارد).",
      ],
      definition: {
        title: "خطاهای جمع شده در فوتسال: ",
        description:
          " در صورتی که خطاهای یک تیم فوتسال در هر نیمه به ۵ رسیده (از خطاهای ۱۱ گانه آزاد مستقیم فوتسال)، (کلیه خطاها قانون ۱۲) باشد از آن به بعد اگر یکی از تیم های فوتسال خطایی مرتکب شود خطای ششم به صورت یک ضربه آزاد مستقیم (از نقطه پنالتی دوم) یا محل وقوع خطا (اگر محل خطا بین نقطه پنالتی دوم زمین فوتسال و دروازده حریف باشد) بدون تشکیل دیوار دفاعی به صورت مستقیم زده می‌شود.",
      },
    },
    {
      id: "13",
      title: "قانون سیزدهم",
      definition: {
        title: "ضربه اوت در فوتسال: ",
        description:
          " هرگاه تمام توپ فوتسال از خط طولی چه از روی زمین چه از هوا بگذرد، توپ باید از محلی که خارج شده توسط تیم فوتسال مقابل با پا به داخل زمین فوتسال زده شود. زننده ضربه بایستی توپ فوتسال را به صورت ساکن روی خط طولی یا خارج از زمین عقب تر از خط طولی قرارداده و سپس ضربه بزند. بازیکنان تیم مقابل حداقل ۵ متر از محل ضربه باید فاصله داشته باشند. از ضربه اوت در فوتسال نمی‌توان مستقیم گل زد.",
      },
    },
    {
      id: "14",
      title: "قانون چهاردهم",
      definition: {
        title: "پرتاب اوت دروازه: ",
        description:
          " پرتاب اوت دروازه به این معنی است که توپ توسط دروازه بان با دست به بیرون از محوطه جریمه پرتاب گردد. پرتاب اوت دروازه خطای ۴ ثانیه ندارد. برگشت اوت دروازه دوباره به دروازه بان توسط مدافع (با دست لمس کردن یا کنترل) یک ضربه آزاد غیر مستقیم از محل ۶ متری انجام می‌گیرد. با پرتاب اوت دروازه نمی‌توان در فوتسال مستقیم گل زد.",
      },
    },
    {
      id: "15",
      title: "قانون پانزدهم",
      text: [
        " تیمی در فوتسال می‌تواند تایم استراحت بگیرد که صاحب توپ باشد مثل ضربه کرنر، پرتاب اوت، ……. دروازه بان فوتسال می‌تواند در زمین حریف بیش از ۴ ثانیه بازی کند. دروازه بان فوتسال نمی‌تواند در جریان بازی مستقیم توپ فوتسال را با دست وارد دروازه حریف کند. در فوتسال پاس عقب مادامی محسوب می‌شود که توپ فوتسال از ضربه مچ پا به پایین زده شود (فقط از ناحیه کفش). در زدن اوت در فوتسال  پا بایستی روی خط نباشد.",
      ],
      definition: {
        title: "ضربه کرنر فوتسال: ",
        description:
          " از ضربه کرنر در فوتسال می‌توان مستقیم گل زد.ضربه کرنر در فوتسال خطای ۴ ثانیه دارد. اگر ضربه کرنر به طور صحیح زده نشود، ضربه تکرار خواهد شد. در موقع زدن خطاها توپ فوتسال باید ساکن باشد. همشه برنده قرعه ی سکه صاحب زمین بازی یا زننده پنالتی یا انتخاب رنگ پیراهن می‌باشد.",
      },
    },
    {
      id: "16",
      title: "قانون شانزدهم",
      text: [
        "1 – لگد زدن. 2- پشت پا زدن.3 – پريدن روي حريف . 4 – تنه شديد و خطرناك. 5 – تنه از پشت به حريف. 6 – تف انداختن. 7 – زدن حريف . 8 – گرفتن حريف. 9 – هل دادن حريف. 10 – با شانه به حريف حمله كردن .      11 – تكل كردن.",
        "خطای پنجم به بعد در فوتسال هر کجای زمین که باشد از نقطه پنالتی دوم زده می شود.",
        "هر گونه خطايي كه به نفع تيم مهاجم و درون محوطه جريمه تيم مدافع ( خاطي ) صورت پذيرد ضربه آزاد از روي خط محوطه جريمه زمین فوتسال كه نزديكترين منطقه به محل وقوع خطا درون محوطه جريمه است زده مي شود.",
        "هر گاه خطا درون محوطه جريمه تيم مدافع و به نفع تيم مدافع صورت پذيرد بازيكنان تيم مدافع مي توانند از درون محوطه جريمه خودي خطا را بزنند و موقعي توپ در بازي است كه بعد از ضربه خوردن يا رها شدن توسط دروازه بان از محوطه جريمه زمین فوتسال خارج شود.",
      ],
      definition: {
        title: "خطاهای فوتسال: ",
        description:
          "هرگاه بازيكن فوتسال سهواً يا از روي بي احتياطي يا نيروي نامتعادل يا بيش از اندازه 11 خطاي زير را مرتكب شود يك ضربه آزاد مستقيم – يك ضربه پنالتي- به نفع تيم فوتسال مقابل ( اگر داخل محوطه جريمه باشد ) گرفته مي شود :",
      },
    },
  ];

  const fouls = [
    "بازیکن فوتسال مرتكب رفتار غير ورزشي گردد.",
    "بازیکن فوتسال با گفتار و كردار به تصميم داور اعتراض نمايد.",
    "بازیکنان فوتسال مكرراً قوانين بازي را نقص نمايند.",
    "بازیکن فوتسال شروع مجدد بازي را به تأخير اندازد.",
    "بازیکن فوتسال هنگام شروع مجدد بازي، ضربه آزاد و ضربه كرنر فاصله لازم را رعايت نكند.",
    "بازیکن فوتسال بدون اجازه داور وارد زمين شود.",
    "بازیکن فوتسال بدون اجازه داور زمين را ترك كند.",
  ];

  const sacks = [
    "بازیکن فوتسال مرتكب خطاي شديد بازي شود.",
    "بازیکن فوتسال مرتكب برخورد با زننده ضربه شود.",
    "بازیکن فوتسال روي حريف يا هر فرد ديگر تف بيندازد.",
    "بازیکن فوتسال عمداً با دست زدن به توپ، حريف را از يك گل يا موقعيت گل محروم نمايد.",
    "بازیکن فوتسال موقعيت آشكار گل حريف به سمت دروازه را با خطاي آزاد مستقيم سلب نمايد.",
    "بازیکنان فوتسال كلمات توهين آميز بر زبان بياورند.",
    "بازیکن فوتسال در يك مسابقه اخطار دوم بگيرد.",
  ];
  return (
    <>
      <Helmet>
        <title>قوانین بازی</title>
      </Helmet>

      <Navbar />
      <div className={`${classes.playingRulesWrapper} shape-box`}>
        <div className={classes.title}>
          <p> قوانین و مقررات بازی در ایران بیزینس کاپ </p>
        </div>
        <div className={classes.regulationSection}>
          <h3>مقررات</h3>
          <ul className={classes.regulationTopics}>
            {regulations.map((regulationTopic) => (
              <li key={regulationTopic.id} className={classes.regulationTopic}>
                <h4>{regulationTopic.title}</h4>
                <ul className={classes.regulations}>
                  {regulationTopic.body &&
                    regulationTopic.body.map((regulation) => (
                      <li className={classes.regulation}>
                        <span>{regulation.title}</span>
                        <p>{regulation.text}</p>
                      </li>
                    ))}
                  {regulationTopic.extraTxt?.map((item) => (
                    <p className={classes.extraTxt}>{item}</p>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.rulesSection}>
          <h3>قوانین</h3>
          <ul className={classes.rules}>
            {rules.map((rule) => (
              <li className={classes.rule}>
                <h4>{rule.title}</h4>
                {rule.definition && (
                  <div className={classes.definition}>
                    <span>{rule.definition?.title}</span>
                    <p>{rule.definition?.description}</p>
                  </div>
                )}
                {rule.text?.map((item) => (
                  <p className={classes.extraTxt}>{item}</p>
                ))}
              </li>
            ))}
          </ul>
          <div className={classes.foulSection}>
            <p>
              هفت خطاي منجر به <span className={classes.bold}>اخطار</span>  در
              بازی فوتسال:
            </p>
            <ul className={classes.fouls}>
              {fouls.map((foul) => (
                <li className={classes.foul}>{foul}</li>
              ))}
            </ul>
          </div>
          <div className={classes.sackSection}>
            <p>
              هفت خطاي منجر به <span className={classes.bold}>اخراج</span>  در
              بازی فوتسال:
            </p>
            <ul className={classes.sacks}>
              {sacks.map((sack) => (
                <li className={classes.sack}>{sack}</li>
              ))}
            </ul>
            <div className={classes.footnote}>
              <p>
                بازیکن فوتسال اخراج شده حق ورود مجدد به بازي و يا حتي نشستن روي
                نيمكت بازيكنان ذخيره را ندارد.
              </p>
              <p>
                ** تذكر مهم : بازیکن فوتسالی كه اخراج مي گردد توسط داور بازي
                حتماً بايد به رختكن هدايت شود و بعد از 2 دقيقه تيم فوتسال مي
                تواند بازيكن ديگری جايگزين نمايد . مگر اينكه قبل از اتمام 2
                دقيقه گلي به ثمر برسد.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
