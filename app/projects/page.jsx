import React from 'react'
import {notFound} from "next/navigation"

const Projects = ({searchParams}) => {
    if(searchParams.test==="true"){
        NotFound();
    }
  return (
    <div>Projects</div>
  )
}

export default Projects