import React from "react";

export const Component3 = () => {
    return (
        <section id="Component3" className="h-full w-full text-[#050547]">
            <div className="page relative w-full h-[220px] flex justify-center items-center bg-bg-1">
                <h1 className="text-6xl font-semibold">About Us</h1>
                {/* <div className="w-full absolute bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fill-opacity="1" d="M0,288L1440,128L1440,320L0,320Z"></path>
                    </svg>
                </div> */}
            </div>
            <div className="page flex gap-[2.5rem] flex-col mt-[2.5rem]">
                <h3 className="text-center font-semibold px-5">Leading Australian BPO with offices in Melbourne</h3>
                <p className="text-center text-base px-10">
                    Founded in 2003, 24×7 Direct is a leading Australian BPO with offices in Melbourne, Australia and Cebu, Philippines focused on delivering intelligent, intuitive and effective Managed Offshore Staffing solutions for Australian businesses.
                </p>
            </div>
        </section>
    )
}