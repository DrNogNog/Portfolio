import React, { useEffect, useState } from 'react';
import '../styles/partly.css';

const Photography = () => {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Close popup if click is outside popup image AND outside thumbnails
      if (
        popupImage &&
        !target.closest('#PopDiv img') &&
        !target.closest('.hellox')
      ) {
        setPopupImage(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [popupImage]);

  const images = [
    '/images/picture (1).jpg',
    '/images/picture (2).jpg',
    '/images/picture (3).jpg',
    '/images/picture (4).jpg',
    '/images/picture (5).jpg',
    '/images/picture (6).jpg',
  ];

  return (
    <div className="startedx">
      <div className="containerx">
        {Array.from({ length: 2 }).map((_, rowIdx) => (
          <div className="row" key={rowIdx}>
            {images.slice(rowIdx * 3, rowIdx * 3 + 3).map((src, i) => (
              <img
                className="hellox"
                key={i}
                src={src}
                alt=""
                onClick={() => setPopupImage(src)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Popup */}
      {popupImage && (
        <div id="PopDiv" className="active">
          <img src={popupImage} alt="" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Photography;
