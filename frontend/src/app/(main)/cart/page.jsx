"use client";

import { useSelector } from "react-redux"

export default function Cart() {
    const items = useSelector(state => state.cart.items);
    return (
        <>
            <h1>Cart Page</h1>
            <ul>
                {
                    items.map(item => (
                        <li key={item.plant._id}>{item.plant.name}</li>
                    ))
                }
            </ul>
        </>
    )
}