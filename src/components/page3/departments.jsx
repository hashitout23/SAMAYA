import React from 'react'
import'./departments.css'
const departments = () => {
  return (
    <div className='department'>
        <h1>List of Departments</h1>
        <div className='departments_1'>
            <button><img src="src\assets\DefenceIcon.png" alt="" />defence</button>
            <button><img src="src\assets\EducationIcon.png" alt="" />Education</button>
            <button><img src="src\assets\Finance.png" alt="" />Finance</button>
            <button><img src="src\assets\Gov_sector.png" alt="" />Gov sector</button>
            <button><img src="src\assets\HealthIcon.png" alt="" />Health</button>
            <button><img src="src\assets\Identity_icon.png" alt="" />Cybersecurity</button>
            <button><img src="src\assets\Industry_sector.png" alt="" />Industry</button>
            <button><img src="src\assets\Transport.png" alt="" />Transport</button>
            <button><img src="src\assets\agri.png" alt="" />Agriculture</button>
            <button><img src="src\assets\envi.png" alt="" />Environment</button>
            <button><img src="src\assets\family.png" alt="" />Insurance</button>
            <button><img src="src\assets\ecommerce.png" alt="" />E-commerce</button>
            <button><img src="src\assets\water.png" alt="" />Water</button>
            <button><img src="src\assets\others.png" alt="" />Others</button>
        </div>            
    </div>
  )
}

export default departments
