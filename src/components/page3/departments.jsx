import React from 'react'
import'./departments.css'
const departments = () => {
  return (
    <div className='department'>
        <h1>list of departments</h1>
        <div className='departments_1'>
            <button><img src="src\assets\DefenceIcon.png" alt="" /></button>
            <button><img src="src\assets\EducationIcon.png" alt="" /></button>
            <button><img src="src\assets\Finance.png" alt="" /></button>
            <button><img src="src\assets\Gov_sector.png" alt="" /></button>
            <button><img src="src\assets\HealthIcon.png" alt="" /></button>
            <button><img src="src\assets\Identity_icon.png" alt="" /></button>
            <button><img src="src\assets\Industry_sector.png" alt="" /></button>
            <button><img src="src\assets\Transport.png" alt="" /></button>
            <button>9</button>
            <button>10</button>
            <button>11</button>
            <button>12</button>
            <button>13</button>
            <button><img src="src\assets\others.png" alt="" /></button>
        </div>            
    </div>
  )
}

export default departments
