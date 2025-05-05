import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[44px]  bg-white bg-opacity-85 flex items-center justify-between px-6 lg:px-[10px] xl:px-[150px]  sticky top-0 z-40">
      
        <div className="px-[8px] flex w-full lg:justify-end ">
          <i className="fa-brands fa-apple lg:text-lg  text-2xl text-[#323232] transition duration-200 hover:text-black"></i>
        </div>
        

        {/* Dropdown for Store */}
        <div className="lg:flex items-center   hidden">
          <div className="relative group">
            <button className="text-xs font-medium px-2 text-[#535252]">
              Store
            </button>

            <div className="absolute left-[-90%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Shop</span>
                  <h1 className="text-2xl font-semibold py-1 pt-1">
                    Shop the latest
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Mac</h1>
                  <h1 className="text-2xl font-semibold py-1">iPad</h1>
                  <h1 className="text-2xl font-semibold py-1">iPhone</h1>
                  <h1 className="text-2xl font-semibold py-1">Apple watch</h1>
                  <h1 className="text-2xl font-semibold py-1">
                    Apple vision pro
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Accessories</h1>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Quik Links</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Find a store
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Order status
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple Trade In
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Financing</h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Personal Setup
                  </h4>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">
                    Shop Special stores
                  </span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Certified Refurbished
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Education</h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Business</h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Viterens and Military
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Government</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for Mac */}
          <div className="relative group">
            <button className="text-xs font-medium px-2 text-[#535252]">
              Mac
            </button>

            <div className="absolute left-[-220%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Explore Mac</span>
                  <h1 className="text-2xl font-semibold py-1 pt-1">
                    Shop the latest
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">
                    Explore All Mac
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Macbook Air</h1>
                  <h1 className="text-2xl font-semibold py-1">Macbook Pro</h1>
                  <h1 className="text-2xl font-semibold py-1">iMac</h1>
                  <h1 className="text-2xl font-semibold py-1">Mac Mini</h1>
                  <h1 className="text-2xl font-semibold py-1">Mac Studio</h1>
                  <h1 className="text-2xl font-semibold py-1">Mac Pro</h1>
                  <h1 className="text-2xl font-semibold py-1">Displays</h1>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Shop Mac</span>
                  <h4 className="text-sm font-medium py-1 pt-3">Shop Mac</h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Help me choose
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Mac Accessories
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple Trade In
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Financing</h4>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">More from Mac</span>
                  <h4 className="text-sm font-medium py-1 pt-3">Mac Support</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    AppleCare+ for Mac
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    macOS Sequoia
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apple Intelligence
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apps by Apple
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Continuity</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">iCloud+</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Mac for Business
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Education</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for iPad */}
          <div className="relative group">
            <button className="text-xs font-medium px-2 text-[#535252]">
              iPad
            </button>

            <div className="absolute left-[-320%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Explore iPad</span>
                  <h1 className="text-2xl font-semibold py-1 pt-1">
                    Explore All iPad
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">iPad Pro</h1>
                  <h1 className="text-2xl font-semibold py-1">iPad Air</h1>
                  <h1 className="text-2xl font-semibold py-1">iPad</h1>
                  <h1 className="text-2xl font-semibold py-1">iPad Mini</h1>
                  <h1 className="text-2xl font-semibold py-1">Apple Pencil</h1>
                  <h1 className="text-2xl font-semibold py-1">Keyboards</h1>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Shop iPad</span>
                  <h4 className="text-sm font-medium py-1 pt-3">Shop iPad</h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    iPad Accessories
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple Trade In
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Financing</h4>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">More from iPad</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    iPad Support
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    AppleCare+ for iPad
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">iPadOS 18</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apple Intelligence
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apps by Apple
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">iCloud+</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Education</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for iPhone */}
          <div className="relative group">
            <button className="text-xs font-medium px-2 text-[#535252]">
              iPhone
            </button>

            <div className="absolute left-[-310%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Explore iPhone</span>
                  <h1 className="text-2xl font-semibold py-1 pt-1">
                    Explore All iPhone
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">iPhone 16 Pro</h1>
                  <h1 className="text-2xl font-semibold py-1">iPhone 16</h1>
                  <h1 className="text-2xl font-semibold py-1">iPhone 16e</h1>
                  <h1 className="text-2xl font-semibold py-1">iPhone 15</h1>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Shop iPhone</span>
                  <h4 className="text-sm font-medium py-1 pt-3">Shop iPhone</h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    iPhone Accessories
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple Trade In
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Careers deal at Apple
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Financing</h4>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">More from iPhone</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    iPhone Support
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    AppleCare+ for iPhone
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">IOS 18</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apple Intelligence
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apps by Apple
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">iCloud+</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    iPhone Privacy
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Wallet,Pay,Card
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Siri</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for Watch */}
          <div className="relative group">
            <button className="text-xs font-medium px-2 text-[#535252]">
              Watch
            </button>

            <div className="absolute left-[-440%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Explore Watch</span>
                  <h1 className="text-xl font-semibold py-1 pt-1">
                    Explore All Apple Watch
                  </h1>
                  <h1 className="text-xl font-semibold py-1">
                    Apple Watch series 10
                  </h1>
                  <h1 className="text-xl font-semibold py-1">
                    Apple Watch Ultra 2
                  </h1>
                  <h1 className="text-xl font-semibold py-1">Apple Watch SE</h1>
                  <h1 className="text-xl font-semibold py-1">
                    Apple Watch Nike
                  </h1>
                  <h1 className="text-xl font-semibold py-1">
                    Apple Watch Hermes
                  </h1>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Shop Watch</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Shop Apple WAtch
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple WAtch Studio
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple WAtch Bands
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple WAtch Accessories
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple Trade In
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Financing</h4>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">More from Watch</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Apple Watch Support
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">AppleCare+</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">WatchOS 11</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apple Watch for your Kids
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apps by Apple
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apple Fitness+
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for Vision */}
          <div className="relative group">
            <button className="text-xs font-medium px-2 text-[#535252]">
              Vision
            </button>

            <div className="absolute left-[-550%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Explore Vision</span>
                  <h1 className="text-xl font-semibold py-1 pt-1">
                    Explore Apple Vision Pro
                  </h1>
                  <span className="text-sm font-medium mt-4">Guided Tour</span>
                  <span className="text-sm font-medium">Tech Specs</span>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Shop Vision</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Shop Apple Vision Pro
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple Viosion Pro Accessories
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Book a Demo</h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Financing</h4>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">More from Vision</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Apple Vision Pro Support
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">AppleCare+</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">VisionOS 2</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for Airpods */}
          <div className="relative group">
            <button className="text-xs font-medium px-2 text-[#535252]">
              Airpods
            </button>

            <div className="absolute left-[-550%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Explore AirPods</span>
                  <h1 className="text-xl font-semibold py-1 pt-1">
                    Explore All Airpods
                  </h1>
                  <h1 className="text-xl font-semibold py-1 pt-1">Airpods 4</h1>
                  <h1 className="text-xl font-semibold py-1 pt-1">
                    Airpods Pro 2
                  </h1>
                  <h1 className="text-xl font-semibold py-1 pt-1">
                    Airpods Max
                  </h1>
                  <span className="text-sm font-medium mt-4">
                    Compare Airpods
                  </span>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Shop Vision</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Shop Apple Vision Pro
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple Viosion Pro Accessories
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Book a Demo</h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Financing</h4>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">More from Vision</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Apple Vision Pro Support
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">AppleCare+</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">VisionOS 2</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for TV & Home */}
          <div className="relative group ">
            <button className="text-xs font-medium px-2 text-[#535252] whitespace-nowrap">
              TV & Home
            </button>

            <div className="absolute left-[-480%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Explore TV & Home</span>
                  <h1 className="text-2xl font-semibold py-1 pt-1">
                    Explore TV & Home
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Apple TV 4K</h1>
                  <h1 className="text-2xl font-semibold py-1">Homepod</h1>
                  <h1 className="text-2xl font-semibold py-1">Homepod Mini</h1>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Shop TV & Home</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Shop Apple TV 4K
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Shop HomePod
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Shop HomePod Mini
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Shop Siri Remote
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    TV & Home Accessories
                  </h4>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">
                    More from TV & Home
                  </span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Apple TV Support
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Homepod Support
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Applecare+ </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">
                    Apple TV App
                  </h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Apple TV+</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Home App</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Apple Music</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Siri</h4>
                  <h4 className="text-sm font-medium pb-1 pt-1">Air Play</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for Entertainment */}
          <div className="relative group ">
            <button className="text-xs font-medium px-2 text-[#535252]">
              Entertainment
            </button>

            <div className="absolute left-[-490%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">
                    Explore Entertainment
                  </span>
                  <h1 className="text-xl font-semibold py-1 pt-1">
                    Explore Entertainment
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Apple One</h1>
                  <h1 className="text-2xl font-semibold py-1">Apple TV+</h1>
                  <h1 className="text-2xl font-semibold py-1">Apple Music</h1>
                  <h1 className="text-2xl font-semibold py-1">Apple Arcade</h1>
                  <h1 className="text-2xl font-semibold py-1">
                    Apple Fitness+
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Apple News</h1>
                  <h1 className="text-2xl font-semibold py-1">
                    Apple Podcasts
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Apple Books</h1>
                  <h1 className="text-2xl font-semibold py-1">Apple Store</h1>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Support</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Apple TV+ Support
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple Music support
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for Accessories */}
          <div className="relative group ">
            <button className="text-xs font-medium px-2 text-[#535252]">
              Accessories
            </button>

            <div className="absolute left-[-705%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Shop Accessories</span>
                  <h1 className="text-xl font-semibold py-1 pt-1">
                    Shop All accessories
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Mac</h1>
                  <h1 className="text-2xl font-semibold py-1">iPad</h1>
                  <h1 className="text-2xl font-semibold py-1">iPhone</h1>
                  <h1 className="text-2xl font-semibold py-1">Apple Watch</h1>
                  <h1 className="text-2xl font-semibold py-1">
                    Apple Vision Pro
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Airpods</h1>
                  <h1 className="text-2xl font-semibold py-1">TV & Home</h1>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">
                    Explore Accessories
                  </span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Made by Apple
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Beats by Dr. Dre
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Air Tag</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown for Support */}
          <div className="relative group">
            <button className="text-xs font-medium px-2 text-[#535252]">
              Support
            </button>

            <div className="absolute left-[-1050%] w-[1000px] hidden group-hover:block bg-white shadow-md overflow-hidden">
              <div className="w-full py-6 mt-8 px-1 grid grid-cols-4 gap-4">
                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Explore Support</span>
                  <h1 className="text-xl font-semibold py-1 pt-1">iPhone</h1>
                  <h1 className="text-2xl font-semibold py-1">Mac</h1>
                  <h1 className="text-2xl font-semibold py-1">iPad</h1>
                  <h1 className="text-2xl font-semibold py-1">Watch</h1>
                  <h1 className="text-2xl font-semibold py-1">
                    Apple Vision Pro
                  </h1>
                  <h1 className="text-2xl font-semibold py-1">Airpods</h1>
                  <h1 className="text-2xl font-semibold py-1">Music</h1>
                  <h1 className="text-2xl font-semibold py-1">TV</h1>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Get Help</span>
                  <h4 className="text-sm font-medium py-1 pt-3">Community</h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Check coverage
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">Repair</h4>
                </div>

                <div className="flex items-start flex-col">
                  <span className="text-sm text-[gray]">Helpfull Topics</span>
                  <h4 className="text-sm font-medium py-1 pt-3">
                    Get Apple care+
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Apple Acount and Password
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Billing and subscription
                  </h4>
                  <h4 className="text-sm font-medium py-1 pt-1">
                    Accessibility
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search icon + Mobile menu */}
        <div className="flex items-center lg:justify-start justify-end lg:gap-10 gap-5 px-4 w-full lg:text-sm text-2xl ">
          <div className="flex">
            <i className="fa-solid fa-magnifying-glass lg:text-sm text-base text-[#535252]"></i>
          </div>
          <div className="flex">
            <i className="fa-solid fa-bag-shopping lg:text-sm text-base text-[#535252]"></i>
          </div>

       {/* Mobile Menu */}
        <div className="relative">
            <div className="flex lg:hidden relative">
              <i
                className="fa-solid fa-bars text-xl text-[#535252] cursor-pointer"
                onClick={() => setIsOpen(true)}
              ></i>
            </div>

    
            {isOpen && (
              <div className="fixed inset-0 w-full h-screen z-50 bg-white flex flex-col p-6 lg:hidden">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-5xl font-bold text-gray-700 focus:outline-none"
                >
                  ×
                </button>

                <a href="#" className="block py-2 px-8 mt-8 text-start text-2xl font-semibold text-gray-700">
                  Store
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                  Mac
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                  iPad
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                  iPhone
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                  Watch
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                  Vision
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                  Airpods
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                  TV & Home
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                  Entertainment
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                 Accessories
                </a>
                <a href="#" className="block py-2 px-8 text-start text-2xl font-semibold text-gray-700">
                  Support
                </a>
              </div>
            )}
          </div>

        </div>
      
    </header>
  );
}
