import React from 'react';
import {posts} from "../Data/data";
import Card from "../Card/Card"

export default function Home() {
  return (
    <div>
        {
            posts.map((item)=>{
                return(
                    <Card key={item.id} data={item}/>
                )
            })
        }
    </div>
  )
}
