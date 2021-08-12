import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Acessibility</p>
        <p>Lorem ipsum dolor sit</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum dolor sit</p>
        <p>Lorem</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum dolor sit</p>
        <p>Trust & Safety</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}
