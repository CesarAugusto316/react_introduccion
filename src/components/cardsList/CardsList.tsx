import { FC, useEffect, useState } from 'react';
import '@animxyz/core';
import { XyzTransitionGroup } from '@animxyz/react';
import axios from 'axios';
import { Card } from '../card/Card';
import './cardsList.css';
import { Spinner } from '../spinner/Spinner';


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

export const CardsList: FC = () => {
  const [courses, setCourses] = useState<Array<Course>>([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(({ data }) => {
        console.log(data);
        setCourses(data.communityCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (courses?.length === 0) {
    return <Spinner />;
  }
  return (
    <XyzTransitionGroup
      appear
      appearVisible
      xyz="fade big up stagger-2 ease-in-out-back"
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
