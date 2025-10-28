import React from "react";
import YandexMap from "./Map";
import "./styles/main.css"; // подключаем CSS

export default function Main() {
  const points = [
    { coords: [43.1155, 131.8855], name: "Точка 1" },
    { coords: [43.1200, 131.8800], name: "Точка 2" },
    { coords: [43.1250, 131.8900], name: "Точка 3" },
  ];

  return (
    <main className="main">
      <div className="map-filters-container">
        <div className="map-wrapper">
          <YandexMap points={points} />
        </div>

        <aside className="filters">
          <span>Фильтры:</span>
          <ul>
            <li><button>Холодная вода</button></li>
            <li><button>Горячая вода</button></li>
            <li><button>Электричество</button></li>
            <li><button>Отопление</button></li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
