// import React, { useState } from 'react'
// import axios from "axios"

// function UploadImage() {
//     const [data, setData]=useState([])
//     const handleImage =(e)=>{
//         const{ name,files}= e.target;
//         setData((prev)=>{
//             return{
//                 ...prev,
//                 [name]:files,
//             }
//         })
//     }

//     const handleChange =(e)=>{
//         const{ name,value}= e.target;
//         setData((prev)=>{
//             return{
//                 ...prev,
//                 [name]:value,
//             }
//         })
//     }
//     const handleSubmit =async (e)=>{
//         e.preventDefault();
//         console.log(data);
//         const formData= new FormData();
//         for( let i=0; i< data.images.length; i++){
//             formData.append("images",data.images[i]);
//         }
//         formData.append("name",data.name);
//         formData.append("description",data.description);
//         const response= await axios.post(https://zara-hof3.onrender.com + "category/create-category", formData);
//         setData({
//             images:[],
//             name:"",
//             description:"",
//         })
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//         type='file'
//         accept='image/*'
//         name='images'
//         multiple
//         id='images'
//         onChange={handleImage }
//        />

// <input
//         type='text'
    
//         name='name'
     
//         id='name'
//         onChange={handleChange }
//        />
//       </form>
//     </div>
//   )
// }

// export default UploadImage
