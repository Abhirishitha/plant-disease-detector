import "./NearbyCenters.css";

function NearbyCenters(){

const openMaps=(type)=>{

window.open(

`https://www.google.com/maps/search/${type}+near+me`,

"_blank"

);

}

return(

<div className="center-card">

<h2>

🌾 Agricultural Support

</h2>

<p>

Need professional help?

Find nearby services.

</p>

<div className="center-buttons">

<button

onClick={()=>openMaps("Agriculture Office")}

>

Agriculture Office

</button>

<button

onClick={()=>openMaps("Plant Clinic")}

>

Plant Clinic

</button>

<button

onClick={()=>openMaps("Krishi Vigyan Kendra")}

>

KVK Center

</button>

<button

onClick={()=>openMaps("Fertilizer Shop")}

>

Fertilizer Shop

</button>

</div>

</div>

);

}

export default NearbyCenters;