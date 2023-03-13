import React from "react";
import './Component1.css';


export const Component1 = () => {
    return (
        <section id="Component1" className="h-full w-full bg-bg-1 flex  max-md:flex-col">
            <div className="h-full w-2/4 flex justify-center items-center flex-col text-black gap-[1.5rem] max-md:w-full max-md:h-2/4">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-center text-6xl font-semibold text-[#050547] tracking-[3px] max-md:text-5xl max-sm:text-4xl">We Simplify</h1>
                    <h1 className="text-center text-6xl font-semibold text-[#050547] tracking-[3px] max-md:text-5xl max-sm:text-4xl">  Building</h1>
                    <h1 className="text-center text-6xl font-semibold text-[#050547] tracking-[3px] max-md:text-5xl max-sm:text-4xl"> Virtual Teams</h1>
                </div>
                <button className="text-xl min-w-[250px] bg-button-color hover:bg-button-color-hover font-base py-[10px] px-[20px] text-sm text-white rounded">Book a Call</button>
            </div>
            <div className="h-full w-2/4 flex justify-center items-center max-md:w-full max-md:h-2/4">
                <div className="w-full px-6 py-10 max-md:w-3/4 max-md:py-5 max-[576px]:w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 645 370" class="pp-devices-svg">
                        <rect class="back-shape frame" fill="#000000" x="59" y="0" width="527" height="357" rx="20"></rect>
                        <rect class="back-shape base" fill="#242424" x="0" y="350" width="645" height="11"></rect>
                        <rect class="overlay-shape base-tint" fill="#6b6a6a" x="0" y="350" width="645" height="11"></rect>
                        <path class="overlay-shape dent" d="M277,350 L368,350 L368,354 C368,356.209139 366.202696,358 364.001926,358 L280.998074,358 C278.789999,358 277,356.204644 277,354 L277,350 Z" fill="#383838"></path>
                        <circle class="overlay-shape camera" fill="#383838" cx="323" cy="11" r="3"></circle>
                        <path class="back-shape bottom" d="M0,361 C0,361 3.91836515,370 37.3210755,370 L320.849959,370 L324.150041,370 L607.694382,370 C641.097092,370 645,361 645,361 L0,361 Z" fill="#000000"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}