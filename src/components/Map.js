import React, { useEffect, useRef } from "react";

export default function Map({ points }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadYandex = () => {
      window.ymaps.ready(() => {
        if (!mapRef.current) {
          const map = new window.ymaps.Map("yandex-map", {
            center: [43.1155, 131.8855],
            zoom: 10,
            controls: ["zoomControl", "fullscreenControl"]
          });

          points.forEach(point => {
            const placemark = new window.ymaps.Placemark(point.coords, {
              balloonContent: point.name
            });
            map.geoObjects.add(placemark);
          });

          mapRef.current = map;
        }
      });
    };

    if (!window.ymaps) {
      const script = document.createElement("script");
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=f257c9c7-e7d6-4cec-9155-9baa6fdbcb6e&lang=ru_RU`;
      script.type = "text/javascript";
      script.onload = loadYandex;
      document.body.appendChild(script);
    } else {
      loadYandex();
    }
  }, [points]);

  return <div id="yandex-map" className="yandex-map"></div>;
}
