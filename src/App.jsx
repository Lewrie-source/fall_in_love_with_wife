import React, { useState, useEffect, useRef } from "react";

const dates = [
  {
    date: "06.12.2024",
    title: "Знакомство 💖",
    description: "Мы впервые встретились, не знали к чему это приведет. Но пьяные, на дне рождении у общего друга спорили про математику.",
  },
  {
    date: "13.12.2024",
    title: "Стали парой 🥰",
    description: "Было сложно, но я признался в своих чувстах к тебе. С того момента мы официально вместе и счастливы",
  },
  {
    date: "14.12.2024",
    title: "Первая ночевка 🌙",
    description: "Остались первый раз на ночевку вместе, это было не забываемо. А еще мы посмотрели субстанцию",
  },
  {
    date: "21.12.2024",
    title: "Первые полноценные прогулки и первые совместные фотки 😘",
    description: "Прошлись по центру Москвы, много говорили. А так же сделали первую совместную фотку",
    images: ["https://i.imgur.com/bIIUHYx.jpeg", "https://i.imgur.com/TuXLc0G.jpeg", "https://i.imgur.com/SssySWg.jpeg"],
  },
  {
    date: "25.12.2024",
    title: "Морозное сердцебиение вальса 💕",
    description: "Ты написала первый стих, посвященный мне. Я расплакался тогда",
  },
  {
    date: "28.12.2024",
    title: "Впервые зашли с тобой в террарию 🥰",
    description: "Впервые поиграли в террарию вместе. Это было замечательно, ни с кем так не кайфовал от игры",
  },
  {
    date: "01.01.2025",
    title: "Новый год 🎄",
    description: "Мы не смогли отметить новый год вместе, но я приехал на следующий день. Ты мне подарила коробочку с очень крутыми подарочками, я тебе подарил ночничек, который в Домодедово",
  },
  {
    date: "11.01.2025",
    title: "Посмотрели второй сезон игры в кальмара 🦑",
    description: "Ты потом захотела написать фанфик про нас",
  },
  {
    date: "21.01.2025",
    title: "Я первый раз съездил с тобой на курсы 💼",
    description: "Теперь всегда езжу с тобой на курсы)",
  },
  {
    date: "27.01.2025",
    title: "Ты впервые меня нарисовала 👩‍🎨",
    description: "Это было просто незабываемо, когда любимый человек, рисует тебя",
    images: ["https://imgur.com/IKUcmCw.jpeg"],
  },
  {
    date: "01.02.2025",
    title: "Те самые легендарные совместные фото 📸",
    description: "Они стояли у нас больше года",
    images: ["https://imgur.com/j8DFcSf.jpeg"],
  },
  {
    date: "14.02.2025",
    title: "Первое 14 февраля вместе 💝",
    description: "Обменялись крутыми подарочками и были самыми счастливыми на свете. Я приехал тебя поздравлять в 00:00",
    images: ["https://imgur.com/xYFwQPk.jpeg"],
  },
  {
    date: "23.02.2025",
    title: "Первое 23 февраля вместе 💝",
    description: "Ты мне подарила крутые подарочки, которые я до сих пор храню",
  },
  {
    date: "08.03.2025",
    title: "Первое 8 марта вместе 💝",
    description: "Я подарил тебе цветочки и много всего. ",
  },
  {
    date: "28.03.2025",
    title: "Твой день рождения 🎁",
    description: "Я подарил тебе цветочки и очень много всего. Через пару дней, мы поехали праздновать к тебе в дмд и была первая интимная близость. ",
  },
  {
    date: "01.04.2025",
    title: "ОГОНЕЧЕК В ТТ 100 ДНЕЙ 🔥",
    description: "Да, огонечек в тт, это важно",
    images: ["https://imgur.com/9JSWMOx.jpeg"],
  },
  {
    date: "26.04.2025",
    title: "Мы ходили гулять и сделали милый тренд из тт 💖",
    description: "До сих пор помню это всё",
    images: ["https://imgur.com/PzxgqtZ.jpeg"],
  },
  {
    date: "16.06.2025",
    title: "Мой день рождения 🎁",
    description: "Мы тогда вайбовенько отметили его вдвоем. Ты мне подарила ахуенный румбоксик!",
  },
  {
    date: "28.06.2025",
    title: "Первая совместная поездка в Касимов 🚌",
    description: "Мы вместе поехали в Касимов, отлично провели там время, отдохнули вдвоем. Много гуляли, болтали. В общем райское наслаждение",
    images: ["https://imgur.com/0WWlNZb.jpeg", "https://imgur.com/a/fZwpoh4.jpeg"],
  },
  {
    date: "23.10.2025",
    title: "Первая игра в майнкрафт вместе 💕",
    description: "Мы впервые пошли играть в майнкрафтик вместе. Это было романтично и очень круто",
    images: ["https://imgur.com/y90vceF.jpeg"],
  },
  {
    date: "13.12.2025",
    title: "МЫ ГОД ВМЕСТЕ 💖",
    description: "Мы много пережили, через много прошли, но ведь дальше больше?",
  },
  {
    date: "01.01.2026",
    title: "Новый год вместе 💕",
    description: "Мы отпраздновали новый год вместе. Это было очень круто, мы провели тонну времени вместе. Смотрели гравити фолз, гуляли, играли",

  },
  // РОМАНТИЧНАЯ ЗАКЛЮЧИТЕЛЬНАЯ НАДПИСЬ
  {
    date: "",
    title: "И это ещё не всё... 💖",
    description: "Я мог что-то пропустить, но впереди нас ждёт ещё больше удивительных моментов. Я очень сильно люблю тебя, и мы со всем справимся!",
  },
];

function formatDate(dateStr) {
  const [day, month, year] = dateStr.split(".");

  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];

  return {
    day: day ? Number(day) : "",
    month: month ? months[Number(month) - 1] : "",
    year: year || "",
  };
}

function FloatingHearts() {
  const hearts = Array.from({ length: 20 });
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((_, i) => (
        <div
          key={i}
          className="absolute text-purple-400 opacity-30 animate-float"
          style={{
            left: Math.random() * 100 + "%",
            fontSize: Math.random() * 20 + 10,
            animationDuration: 5 + Math.random() * 10 + "s",
            animationDelay: Math.random() * 5 + "s",
          }}
        >
          💜
        </div>
      ))}
    </div>
  );
}

function ImageModal({ src, onClose }) {
  if (!src) return null;
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img src={src} alt="preview" className="max-h-[90%] max-w-[90%] rounded-xl" />
    </div>
  );
}

function TimelineItem({ item, onImageClick }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const d = formatDate(item.date);
  return (
    <div
      ref={ref}
      className={`flex gap-4 items-start transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-purple-600 flex flex-col items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-purple-500/50 transition cursor-pointer">
          <div className="text-sm font-bold leading-none uppercase">{d.month}</div>
          <div className="text-xs text-purple-200">{d.day}</div>
        </div>
        <div className="text-xs text-gray-400 mt-2">{d.year}</div>
        <div className="relative w-px flex-1 bg-gray-700 mt-2 overflow-hidden">
          <div className={`absolute top-0 left-0 w-full bg-purple-500 transition-all duration-1000 ${visible ? "h-full" : "h-0"}`}></div>
        </div>
      </div>
      <div className="bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-4 flex-1 flex flex-col gap-3 hover:bg-gray-700 transition">
        <div>
          <div className="text-lg font-semibold text-purple-300">{item.title}</div>
          <div className="text-gray-300 text-sm mt-1">{item.description}</div>
        </div>
        {item.images && item.images.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {item.images.map((img, i) => (
              <img key={i} src={img} alt="photo" onClick={() => onImageClick(img)} className="w-full h-40 object-cover rounded-xl cursor-pointer hover:scale-105 transition" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="relative min-h-screen bg-gray-900 p-6 font-sans text-white overflow-hidden">
      <FloatingHearts />
      <style>{`@keyframes float {0% { transform: translateY(100vh) scale(1); opacity: 0; } 20% { opacity: 0.3; } 100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }} .animate-float {animation-name: float; animation-timing-function: linear; animation-iteration-count: infinite;}`}</style>
      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      <div className="text-center relative z-10 mb-4">
        <div className="text-2xl md:text-3xl font-bold text-purple-300">С Днем Рождения! 💜🎉</div>
        <div className="text-sm md:text-base text-gray-400 mt-1">Хочу чтобы каждый твой день, был наполнен любовью и теплом. Мы со всем справимся ❤️</div>
      </div>
      <h1 className="text-3xl font-bold text-center text-purple-400 mb-12 relative z-10">Наша история 💜</h1>
      <div className="max-w-2xl mx-auto space-y-10 relative z-10">
        {dates.map((item, index) => (<TimelineItem key={index} item={item} onImageClick={setSelectedImage} />))}
      </div>
    </div>
  );
}
