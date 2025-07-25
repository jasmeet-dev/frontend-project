


 export default function GroceryCard({foodData})
{


    return(
        <>
        <div className="flex-none">
          
        <a href={foodData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        <h2 className="font-bold">{foodData?.action?.text}</h2>
        </div>
        </>
    )
}