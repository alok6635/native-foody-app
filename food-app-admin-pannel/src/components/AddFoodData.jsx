import { useState } from 'react';
import './addFoodData.css';
// firebase imports
import {db,storage} from '../firebase/FirebaseConfig';
import { addDoc,collection } from 'firebase/firestore';
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage';


const AddFoodData = () => {
    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState('');
    const [foodImage, setFoodImage] = useState(null);
    const [foodCategory, setFoodCategory] = useState('');
    const [foodDescription, setFoodDescription] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantPhone, setRestaurantPhone] = useState('');


const handleSubmit=(e)=>{
     e.preventDefault();
     if(foodImage== null){
        alert('please select an image');
        return;
     }
     else{
             const imageRef= ref(storage,`FoodImages/${foodImage.name}`);
             uploadBytes(imageRef,foodImage)
             .then(()=>{
                // alert('Image upload sucess');
                getDownloadURL(imageRef)
                .then((url)=>{
                     const foodData={
                        foodName,
                        foodPrice,
                        foodImageUrl: url,
                        foodCategory,
                        foodDescription,
                        restaurantName,
                        restaurantAddress,
                        restaurantPhone
                     }
                console.log(foodData);
                try{
                    const docRef = addDoc(collection(db,"foodData"),foodData)
                    alert("data added sucessfully", docRef.id);
                }
                catch(error){
                    alert("Error adding document", error);
                }
                })
             })
             .catch((error)=>{
                alert(error.message)
             })
     }
    }
    return (
        <>
            <div className="form_outer">
                <h1>Add food data</h1>
                <form className="form_inner">
                    <label>Food Name</label>
                    <input type="text" name="food_name" onChange={(e) => setFoodName(e.target.value)} />
                    <br />
                    <label>food description</label>
                    <input type="text" name="food_description" onChange={(e) => setFoodDescription(e.target.value)} />
                    <br />
                    <label>food price</label>
                    <input type="number" name="food_price" onChange={(e) => setFoodPrice(e.target.value)} />
                    <br />
                    <label>food category</label>
                    <input type="text" name="food_category" onChange={(e) => setFoodCategory(e.target.value)} />
                    <br />
                    <label>Food Image</label>
                    <input type="file" name="food_Image" onChange={(e) => setFoodImage(e.target.files[0])} />
                    <br />
                    <label>Restaurant Name</label>
                    <input type="text" name="restaurant_name" onChange={(e) => setRestaurantName(e.target.value)} />
                    <br />
                    <label>Restaurant Address</label>
                    <input type="text" name="restaurant_address" onChange={(e) => setRestaurantAddress(e.target.value)} />
                    <br />
                    <label>Restaurant Phone</label>
                    <input type="number" name="restaurant_phone" onChange={(e) => setRestaurantPhone(e.target.value)} />
                    <br />
                    <button onClick={handleSubmit}>Add Food</button>
                </form>
            </div>
        </>
    )

}


export default AddFoodData;