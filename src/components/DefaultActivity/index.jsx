import './style.css';

export const DefaultActivity = () => {
  return (
    <>
      <div className="year_wheel">
        <img
          className="year_wheel_img"
          src="./img/seasonsWheel.png"
          alt="Rok má 12 měsíců"
        />
      </div>
      <div className="days_months_content">
        <h2>Rok má 12 měsíců. </h2>
        <h2>Rok má 4 roční období </h2>
        <h2>Rok trvá od narozenin 🎂 do narozenin 🎂.</h2>
      </div>
    </>
  );
};
