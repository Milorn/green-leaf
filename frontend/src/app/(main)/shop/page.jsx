import axios from "axios"

export default async function Shop() {
    const resp = await axios.get('http://localhost:8000/plants');
    const plants = resp.data;
    return (
        <>
            <div className="grid grid-cols-3 gap-3">
                {
                    plants.map(plant => (
                        <div key={plant._id}>
                            <img className="w-full h-auto" src={`http://localhost:8000/${plant.image}`} alt="" />
                            <h1>{plant.name}</h1>
                        </div>  
                    ))
                }
            </div>
        </>
    )
}