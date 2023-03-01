// import logo from './logo.svg';
import { Card } from 'antd';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [foodElement, setFoodElement] = useState(foods)
  const [foodFilter, setFoodFilter] = useState("")
  //////////////////////////
  const createNewElement = ({ AddName, AddImage, AddCalories, AddServings }) => {
    const newFood = { name: AddName, image: AddImage, calories: AddCalories, servings: AddServings }
    setFoodElement([...foodElement, newFood])
  }
  // buscar comida 
  const search = (value) => {
    setFoodFilter(value)
  };

  const filteredFood = foodElement.filter((food) =>
    food.name.toLowerCase().includes(foodFilter.toLowerCase())
  );
  // borrar comida 
  const deleteFood = (newFood) => {
    setFoodElement(foodElement.filter((food) => food.name !== newFood))
  };

  return (
    <>
      <div className="App">

        <h2>Food Entry</h2>
        <AddFoodForm createNewElement={createNewElement} />

        <h2>Search</h2>
        <Search search={search} />
        {/* <div className="footss"> */}
        <h1>Food List</h1>
        {filteredFood.map((food) => {
          return (
            <Card key={food.name} title={food.name}>

              <FoodBox  {...food} onDelete={() => deleteFood(food.name)} />

            </Card>

          );
        })
        }
        {/* </div> */}
      </div>
    </>
  )
}

export default App;
