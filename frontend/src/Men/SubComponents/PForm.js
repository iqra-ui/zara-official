import React from 'react'

function PForm() {
  return (
    <div>

<div class=" bg-white z-20 fixed top-16 md:top-20 lg:top-28 w-full md:top-28"><div class="p-3.5 w-full border-b border-black"><a class="text-black mx-3 text-[11px] md:text-xs cursor-pointer" href="/account">ACCOUNT</a><a class="text-black mx-3 text-[11px] md:text-xs cursor-pointer" href="/account/dashboard">DASHBOARD</a></div></div>

<div class="my-6 flex w-full justify-center text-xs"><span><input type="radio" name="category" id="women" class="hidden peer" checked=""/><label for="women" class="cursor-pointer w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4">WOMEN</label></span><span class="mx-4"><input type="radio" name="category" id="man" class="hidden peer"/><label for="man" class="cursor-pointer w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4">MAN</label></span><span><input type="radio" name="category" id="kids" class="hidden peer"/><label for="kids" class="cursor-pointer w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4">KIDS</label></span></div>
   
      <div class="md:p-10">
        <form class="mx-auto md:w-2/3 lg:w-1/2 shadow  flex flex-col p-6">
            
            <h1 class="text-center text-3xl mb-6 font-bold">Add Product</h1>
            <label for="imgs" class="font-bold">Images :</label>
            <input 
            type="file"
             accept="image/*" 
             name="imgs"
              multiple=""
               id="imgs" 
               class="border-b outline-none border-black p-1 text-sm w-full text-gray-500"/>

                <label for="name" class="font-bold mt-6">Name :</label>
                <input 
                type="text" 
                name="name"
                 id="name"
                  class="border-b outline-none border-black p-1 text-sm w-full text-gray-500" 
                  placeholder="Item Name" value=""/>
                    <label for="price" class="font-bold  mt-6">Price :</label>
                    <input 
                    type="number" 
                    name="price"
                     id="price"
                      class="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
                       placeholder="Item Price" 
                       value=""/>
                        <label for="description" class="font-bold  mt-6">
                            Description :</label>
                            
                        <input type="text" 
                        name="description" id="description" 
                        class="border-b outline-none border-black p-1 text-sm w-full text-gray-500" 
                        placeholder="Item Description" value=""></input>

                            <label for="category" class="font-bold  mt-6">Category :</label>
                            <select name="category" 
                            id="category" class="border-b outline-none border-black p-1 text-sm w-full text-gray-500">
                                <option value="" disabled="">Select Category</option>
                                <option value="women">Women</option>
                                <option value="men">Men</option>
                                <option value="kids">Kids</option>
                                </select>
                                <button 
                                class="text-sm text-center bg-black text-white mt-6  hover:border-gray-400 py-2.5 px-3.5">
                                  ADD
                                  </button>
                              
                             
                                </form>
      </div>
      <form class="w-full md:w-1/2 lg:w-1/3"><p class="text-sm font-bold">FIRST NAME</p><p class="border-b border-black p-1 text-sm w-full text-gray-500">Iqra </p><p class="pt-6 text-sm font-bold">LAST NAME</p><p class="border-b border-black p-1 text-sm w-full text-gray-500">Noor</p><p class="pt-6 text-sm font-bold">EMAIL</p><p class="border-b border-black p-1 text-sm w-full text-gray-500">iqran0333@gmail.com</p><p class="pt-6 text-sm font-bold">ADDRESS</p><p class="border-b border-black p-1 text-sm w-full text-gray-500">lahore</p><div class="w-full flex justify-end"><span class="text-center bg-black text-white my-3  hover:border-gray-400 py-2.5 px-3.5 text-xs cursor-pointer">EDIT</span></div><span class="cursor-pointer mt-10 text-sm border-b border-black text-gray-500 font-bold">Sign Out</span><p class="text-xs text-gray-400 my-6">At ZARA we take your privacy very seriously and are committed to the protection of your personal data. Learn more about how we care for and use your data in our Privacy Policy.</p></form>
























      
      </div>
    
  )
}

export default PForm;

