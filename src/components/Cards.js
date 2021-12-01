import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the SERVICES and PRODUCTS that we offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/personaltraining1.jpg'
              text='Take Your Workouts To The Next Level'
              label='Personal Training'
              path='/services'
            />
            <CardItem
              src='images/groupfitness1.jpg'
              text='Get Motivated By Others'
              label='Group Fitness'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/salad1.jpg'
              text='Custom Meal Plans'
              label='Nutrition'
              path='/services'
            />
            <CardItem
              src='images/fitnessequipment1.jpg'
              text='Aspyre-Branded Equipment'
              label='Equipment'
              path='/products'
            />
            <CardItem
              src='images/nutrition1.jpg'
              text='Ready To Eat Nutritious Meals'
              label='Meal Delivery Service'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;