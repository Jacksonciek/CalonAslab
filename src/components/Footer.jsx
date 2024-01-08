import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
        <footer className="justify-between flex" id="foote">
            <div className="footer-col">
                <h4>Contact Me</h4>
                <h5 className="text-md">Made by @jacksonciek</h5>
            </div>
            <div className="footer-col">
                <h4 className="text-white text-lg font-bold">Email</h4>
                <div className="links">
                    <p>Dormitory Universitas Multimedia Nusantara.
                        Jl. Pd. Hijau Golf Raya, Cihuni, Kec. Klp. Dua,
                        Kabupaten Tangerang, Banten 15810
                    </p>
           
                </div>
            </div>
            <div className="footer-col">
                <h4 className="text-white text-lg font-bold">Phone Number</h4>
                <div className="links">
              
                    <p>+62 851 0040 8480</p>
                  
                </div>
            </div>
            <div className="footer-col">
                <h4 className="text-white text-lg font-bold">Email</h4>
                <div className="links">
              
                    <p>jacksonciek@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};