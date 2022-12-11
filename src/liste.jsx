import React from 'react'

 function Liste(props) {
  return (
    <>
    {
        props.kisiler.map((eleman)=>{
          return (
            <article key={eleman.id} className="person">
              <img src={eleman.image} alt={eleman.name} />
              <div>
                <h4>{eleman.name}</h4>
                <p>{eleman.age}</p>
                </div>  
            </article>
          )
        })
      }
      </>
  )
}
export default Liste