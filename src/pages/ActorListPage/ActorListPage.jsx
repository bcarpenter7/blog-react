import "./ActorListPage.css"


export default function ActorListPage({ movies }){
    let newArr = [];

    for(let i = 0; i < movies.length - 1; i++){
        newArr.push( (movies[i].cast).join(', ') )
        
    }
    // let finalArr = newArr.flat().join(', ')
    
    let finalArr = new Set(newArr.flat().join(', ').split(','))
    let newFinal = [...finalArr]
    // console.log(newArr)
    return(
        <>
        <h1>Actors List</h1>
        { newFinal.map((m, idx) => (
            <div className={
                idx % 2 === 0 ? "actorDiv backOne" : "actorDiv backTwo"
                
            }
            
            
            
            >
                <h1>
                {m}
                </h1>
                <img src="https://picsum.photos/200"></img>

                
            </div>
        ))
        }
        </>
        
    )
}