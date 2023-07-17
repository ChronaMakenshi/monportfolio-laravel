import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from '../Components/Nav'
import Apropos from '../Pages/Apropos'
import Realisation from '../Pages/Realisation'
import Contact from '../Pages/Contact'


function App() {
    return (
        <div className="h-screen bg-black">
            <React.StrictMode>
                <div className='flex flex-row'>
                    <BrowserRouter>
                        <Nav/>
                        <Routes>
                            <Route path="">
                                <Route index element={<Apropos/>}/>
                                <Route path="Realisation" element={<Realisation/>}/>
                                <Route path="contact" element={<Contact/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </React.StrictMode>
        </div>
    )
}

export default App