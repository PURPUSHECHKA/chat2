import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../redux/store'
import Home from '../components/Home'
import About from '../components/About'
import Layout from '../components/Layout'

const Root = () => {
    return (
        <Provider store={store}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </Provider>
    )
}

export default Root
