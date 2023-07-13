import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from '../components/Nav'
import Apropos from '../pages/Apropos'
// import Contact from '../pages/Contact'
// import Realisation from '../pages/Realisation'
// import Error404 from '../pages/Error404';

function App() {

    return (
        <div className="h-screen bg-black">
            <React.StrictMode>
                    <div className='flex flex-row'>
                        <Nav/>
                        <BrowserRouter>
                            <Routes>
                                <Route path="">
                                    <Route index element={<Apropos/>}/>
                                    {/*<Route path="Realisation" element={<Realisation />}/>*/}
                                    {/*<Route path="contact" element={<Contact/>}/>*/}
                                    {/*<Route path="*" element={< Error404/>}/>*/}
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </div>
            </React.StrictMode>
        </div>
    )
}

export default App