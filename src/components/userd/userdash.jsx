import React from 'react'
import Usersidebar from './userpanel/usersidebar'
import BasicTable from './userpanel/usertable'
import Card from './userpanel/card/card';

function userd() {
    return (
        <div className="flex">
          <div className="basis-[12%] h-[100vh]">
            <Usersidebar/>
          </div>
          <div className="basis-[88%] border h-[100vh] font-bold text-2xl pt-[36px]">
          <div className=' mx-[30px] text-gray-500 '>
              <h1>DASHBOARD</h1>
          </div>  
          <div className='border-b-[1px] border-[#000000] mx-[20px] mt-[20px]'>
          </div> 
        <div>
            <Card/>
        </div>
          <div>
          <BasicTable/>
          </div>
          </div>
        </div>
    );
  }
  
  export default userd;