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
    'doctor.png',
  ];
  const [obr, setObr] = useState(0);

  return (
    <>
      <div className="carousel">
        {iconList.map((icon) => {
          return (
            <div key={iconList.indexOf(icon)} className="carousel__media">
              <button>
                <img
                  className="carousel__image"
                  src={`./img/IconsCalendar/${icon}`}
                  alt={icon}
                />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
