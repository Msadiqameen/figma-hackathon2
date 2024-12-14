import React from "react";

export default function footer() {
  return (
    <div className=" bg-black  text-white pt-10 px-20 font-poppins">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-10">
          <div>
            <h2 className="font-medium text--xl">Exclusive</h2>
            <p className="mt-4 text-white-200 font-light">Subscribe</p>
            <p className="mt-2 text-white-200 font-light">
              Get 10% off your first order
            </p>
            <div className="mt-4 relative border border-white rounded">
              <input
                type="email"
                placeholder="Enter your email"
                className=" bg-black text-white p-2 felx-grow outline-none rou w-full"
              />

              
            </div>
          </div>

          {/*support Section*/}
          <div>
            <h2 className="font-medium tex--xl">Support</h2>
            <p className="mt-4 text-zinc-200 font-light">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="mt-3 text-zinc-200 font-light">exclusive@gmail.com</p>
            <p className="mt-3 text-zinc-200 font-light">+88015-88888-9999</p>
          </div>

          {/*Account Section*/}
          <div>
            <h2 className="font-medium text-xl">Account</h2>
            <ul className="mt-4 space-y-3  text-zinc-200 font-light">
              <li>My Account</li>
              <li>Logim/Registred</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/*Quick Section*/}
          <div>
            <h2 className="font-medium text-xl">Quick Link</h2>
            <ul className="mt-4 space-y-3  text-zinc-200 font-light">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/*Download App Section*/}
          <div>
            <h2 className="font-medium text-xl ">Download App</h2>
            <p className="mt-4 text-zinc-200 font-light">
              Save $3 with App New User Only
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-[100px] h-[100px]">
                <img
                  src="/qrcode.png"
                  alt="qr code"
                  className="w-full h-full object-contain"
                />
              </div>
              {/*App Section*/}

              <div>
                <img
                  src="/gplay.png"
                  alt="google play"
                  className="w-36-h-12 object-contain"
                />
                <img
                  src="/store.png"
                  alt="apple"
                  className="w-36-h-12 object-contain"
                />
              </div>
            

            

            </div>
          </div>

          {/*end*/}
        </div>
      </div>
    </div>
  );
}
