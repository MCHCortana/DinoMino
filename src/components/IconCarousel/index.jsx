import './style.css';
import { useState } from 'react';

export const IconCarousel = () => {
  const iconList = [
    'angel.png',
    'exercise.png',
    'playground.png',
    'basketball.png',
    'exerciseBoy.png',
    'presents.png',
    'bicycle.png',
    'father.png',
    'readBoy.png',
    'cat.png',
    'fish.png',
    'readGirl.png',
    'children.png',
    'flower-pot.png',
    'singing.png',
    'christmas-tree.png',
    'football.png',
    'sledding.png',
    'christmas-tree2.png',
    'fruits.png',
    'sleep.png',
    'cleaning.png',
    'giftbox.png',
    'swimming.png',
    'crayons.png',
    'granny.png',
    'tennis.png',
    'dancing.png',
    'jigsaw.png',
    'travel-luggage.png',
    'dinosaurColor.png',
    'monster.png',
    'travel.png',
    'disco-ball.png',
    'music-notes.png',
    'walking-the-dog.png',
    'dog.png',
    'paint-palette.png',
    'walking.png',
  ];
  const [obr, setObr] = useState(0);

  return (
    <>
      <div className="carousel">
        <button
          // onClick={() => {
          //   iconList < iconList.length - 1 ? setObr(iconList[] 1) : setObr(0);
          // }}
          className="carousel__predchozi"
          aria-label="předchozí"
        >
          ←
        </button>
        {iconList.map((icon) => {
          return (
            <div className="carousel__media">
              <img
                className="carousel__image"
                src={`./img/IconsCalendar/${icon}`}
                alt={icon}
              />
            </div>
          );
        })}
        <button
          onClick={() => {
            obr === 0 ? setObr(4) : setObr(obr - 1);
          }}
          className="carousel__dalsi"
          aria-label="další"
        >
          →
        </button>
      </div>
    </>
  );
};
