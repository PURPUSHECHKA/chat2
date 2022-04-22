import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../redux/store'
import Home from '../components/Home'
import About from '../components/About'

const Root = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Provider>
    )
}

export default Root
