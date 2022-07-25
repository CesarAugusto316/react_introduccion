import { FC } from 'react';
import fallbackImage from '../../assets/1JFXCO18.png';
import { Course } from '../cardsList/CardsList';
import { Button } from '../button/Button';
import './card.css';


export const Card: FC<Course> = ({
  background, icon, level, name, totalQuizzes, users,
}) => {
  return (
    <div className="card">
      <figure className="figure">
        <img className="card__image" src={background || fallbackImage} alt="" />
        <img className="card__icon" src={icon} alt="" />
      </figure>

      <div className="card__body">
        <h3 className="card__title">{name}</h3>

        <div className="card__content">
          <div>
            <span>TotalQuizzes</span>
            <p>{totalQuizzes}</p>
          </div>
          <div>
            <span>Level</span>
            <p>{level}</p>
          </div>
          <div>
            <span>users</span>
            <p>{users}</p>
          </div>
        </div>

        <Button />
      </div>
    </div>
  );
};
