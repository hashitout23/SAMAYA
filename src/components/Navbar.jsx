import { useState, useRef, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import LogInAsAdmin from "./LogInAsAdmin";
import { Link } from "react-router-dom";

// Profile Dropdown
const ProfileDropDown = (props) => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [state, setState] = useState(false)
    const profileRef = useRef()

    const navigation = [
        
        { title: "Dashboard Admin", path: "/dashboardAdmin" },
        { title: "LogIn As Admin", path: "/LogInAsAdmin " },
        { title: "Dashboard user", path: "/dashboardUser" },
        
       
    ]

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className={`relative ${props.class} z-50`}>
         
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-purple-800"
                    onClick={() => setState(!state)}
                >
                    {isAuthenticated&&<img src={user.picture} alt={user.name} className="w-full h-full rounded-full"/>}
                </button>
                <div className="lg:hidden">
                    <span className="block text-gray-500 font-black">{isAuthenticated &&<p>{user.name}</p>}</span>
                    <span className="block text-sm text-purple-800">{isAuthenticated &&<p>{user.email}</p>}</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li>
                             <li key={idx}>
                             <Link className="block text-purple-800 lg:hover:bg-gray-50 lg:p-2.5" to={item.path}>
                                {item.title}
                            </Link>
                            </li>
                        </li>
                    ))
                }
                {isAuthenticated ?(<button className="block text-purple-800 lg:hover:bg-gray-50 lg:p-2.5" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out</button>)
                            :(<button className=" block text-purple-800 lg:hover:bg-gray-50 lg:p-3" onClick={() => loginWithRedirect()}> LogIn As User</button>)}
            </ul>
        </div>
    )
}

export default () => {
    const [menuState, setMenuState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "javascript:void(0)" },
      { title: "About", path: "javascript:void(0)" },
      { title: "Departments", path: "javascript:void(0)" },
      { title: "Contact Us", path: "javascript:void(0)" },
  ]
    return (
        <nav className="bg-white border-b shadow-lg shadow-500/150">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <a href="javascript:void(0)">
                        <img
                            src="src\assets\Frame 8.png"             
                            width={65} 
                            height={100}
                            alt="Samaya logo"
                        />
                    </a>
                </div>

                
                <div className="flex-1 flex items-center justify-between font-bold text-xl ">
                    
                    {/* for home and other stuffs in navbar */}
                    
                    <div className={`bg-white  absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0 mr-4">
                        
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className=" hover:text-purple-800 text-gray-500 font-black">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))
                            }
                            
                            
                        </ul>
                        <ProfileDropDown 
                            class="mt-5 pt-5 border-t lg:hidden"
                        />
                    </div>
                    {/* for search bar and the profile */}
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <form className="flex items-center space-x-2 border rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-full outline-none appearance-none placeholder-grey-600 text-gray-500 sm:w-auto"
                                type="text"
                                placeholder="Search"
                                style={{outline: 'none', boxShadow: '0 0 0 2px #fff'}}
                                
                            />
                        </form>
                        <ProfileDropDown 
                            class="hidden lg:block"
                        />
                        <button 
                            className="outline-none text-purple-800 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}