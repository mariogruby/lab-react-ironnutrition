import React, { useState } from 'react'
import {Input} from 'antd'
import {Button} from 'antd'// no sirve !!!!


const AddFoodForm = ({ createNewElement }) => {

    const [AddName, setAddName] = useState("")
    const [AddImage, setAddImage] = useState("")
    const [AddCalories, setAddCalories] = useState("")
    const [AddServings, setAddServings] = useState("")
// crear receta function
    const submit = (e) => {
        e.preventDefault()
        createNewElement(
            {
                AddName,
                AddImage,
                AddCalories,
                AddServings
            })
        setAddName("")
        setAddImage("")
        setAddCalories("")
        setAddServings("")
    }
    return (
        <form onSubmit={submit}>
            <label>Food Name</label>
            <Input
                type="text"
                value={AddName}
                id="name"
                onChange={(e) => setAddName(e.target.value)}
            />
            <label>Image</label>
            <Input
                type="text"
                value={AddImage}
                id="image"
                onChange={(e) => setAddImage(e.target.value)}
            />
            <label>Calories</label>
            <Input
                type="number"
                value={AddCalories}
                id="calories"
                min={0}
                onChange={(e) => setAddCalories(e.target.value)}
            />
            <label>Servings</label>
            <Input
                type="number"
                value={AddServings}
                id='servings'
                min={0}
                onChange={(e) => setAddServings(e.target.value)}
            />
            <button type="submit">Create</button>
        </form>
    )
}

export default AddFoodForm