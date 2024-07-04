"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProduct() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            type,
            age,
            price,
            description,
            image
        };
        await axios.postForm('http://localhost:8000/plants', data);
        router.push('/shop');
    }
    return (
        <>
            <form onSubmit={submit}>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Name</label>
                    <input className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Type</label>
                    <select className="bg-[#475F45] text-white outline-none py-2 px-3 rounded-sm" value={type} onChange={(e) => setType(e.target.value)}>
                        <option>Indoor</option>
                        <option>Outdoor</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Age</label>
                    <input className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Price</label>
                    <input className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Description</label>
                    <textarea className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Image</label>
                    <input className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="file" onChange={(e) => setImage(e.target.files[0])}/>
                </div>
                <button className="bg-[#475F45] text-white py-2 px-4 rounded-sm font-semibold mt-5">Submit</button>
            </form>
        </>
    )
}