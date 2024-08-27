import {Shop} from '../pages'
import { Route, Router, Routes } from 'react-router-dom'
import React, { lazy, Suspense } from "react";
import { ThreeDots } from 'react-loader-spinner';

function CustomRoutes() {
    const About = lazy(
        () =>
            new Promise((resolve) => {
                return setTimeout(() => resolve(import("../pages/About")), 1000);
            })
    );
    const Save = lazy(
        () =>
            new Promise((resolve) => {
                return setTimeout(() => resolve(import("../pages/Save")), 1000);
            })
    );
  return (
    <>
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route
                    path="/about"
                    element={
                        <Suspense
                            fallback={
                                <div className="w-screen h-screen flex items-center justify-center">
                                    <ThreeDots
                                        visible={true}
                                        height="80"
                                        width="80"
                                        color="#4fa94d"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </div>
                            }
                        >
                            <About />
                        </Suspense>
                    }
                ></Route>
                <Route
                    path="/save"
                    element={
                        <Suspense
                            fallback={
                                <div className="w-screen h-screen flex items-center justify-center">
                                    <ThreeDots
                                        visible={true}
                                        height="80"
                                        width="80"
                                        color="#4fa94d"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </div>
                            }
                        >
                            <Save />
                        </Suspense>
                    }
                ></Route>
            </Routes>
    </>
  )
}

export default CustomRoutes

