import { FC, useEffect, useState } from 'react';
import '@animxyz/core';
import { XyzTransitionGroup } from '@animxyz/react';
import axios from 'axios';
import { Card } from '../card/Card';
import './cardsList.css';


const apiUrl = import.meta.env.VITE_LARNU_API;
export interface Course {
  totalQuizzes: number,
  users: number,
  level: number,
  background: string,
  name: string
  icon: string,
  id: number
}

const CardsList: FC = () => {
  const [courses, setCourses] = useState<Array<Course>>([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(({ data }) => {
        setCourses(data.communityCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <XyzTransitionGroup
      appearVisible
      xyz="fade big stagger ease-in-out-back duration-8"
      className="card-container"
    >
      {courses.map((course) => {
        return (
          <div className="wrapper" key={course.id}>
            <Card {...course} />
          </div>
        );
      })}
    </XyzTransitionGroup>
  );
};

export default CardsList;
