// 'use client'
import Image from "next/image";

interface Item {
  name: string;
  colour: string;
  size: string;
  cost: number;
}

interface Customer {
  name: string;
  vatRate: number;
  addressLineOne: string;
  addressLineTwo?: string;
  addressLineThree?: string;
  town: string;
  postCode: string;
}

const customer: Customer = {
  name: "Moores Metal LTD",
  vatRate: 17.5,
  addressLineOne: "Chemical Lane",
  town: "Stoke-on-Trent",
  postCode: "ST6 4PB",
};

const data: Item[] = [
  { name: "High Visibility Jacket", colour: "Yellow", size: "XL", cost: 14.9 },
  { name: "High Visibility Jacket", colour: "Blue", size: "XS", cost: 0.9 },
  { name: "Spray Gun", colour: "N/A", size: "XL", cost: 7.26 },
  { name: "Paper Cups (12oz)", colour: "White", size: "120z", cost: 8.18 },
];

const cost: number = data.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.cost;
}, 0);

const formattedSubTotal: number = parseFloat(cost.toFixed(2));

const costWithVat: number = formattedSubTotal * (1 + customer.vatRate / 100);

export default function Home() {
  return (
    // main container
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-24 sm:bg-red-500 md:bg-blue-500 lg:bg-yellow-500">
      {/* main grid layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* item column 1 */}
        <div className="flex flex-col gap-6">
          {data.map((d: Item, i) => {
            return (
              <div
                className="w-full h-full bg-white flex flex-col gap-12 p-6 rounded-md shadow-md relativ"
                key={i}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 absolute top-0 right-1 m-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <div className="grid grid-cols-4">
                  {/* <div className="grid grid-cols-3 gap-2">
                    <p>Product:</p>  </div> */}
                    {/* <h3 className="font-semibold">{d.name}</h3>
                    <div className="grid grid-cols-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                        />
                      </svg>    
                      <div className="col-span-1 grid grid-cols-2 gap-2">
                
                        <p>Colour:</p>
                        <p className="flex flex-wrap">{d.colour}</p>
                 
                  
                        <p>Size:</p>
                        <p>{d.size}</p>
                 
                
                        <p>Cost:</p>
                        <p>£{d.cost}</p>
                  
                    </div>
                    </div> */}
                    <div className="flex gap-2 col-span-2"><p>Product</p>   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                        />
                      </svg> 
                      {/* <p>jhfsj fjsdh jshfjds fjshd js fjsd fjs fjs dsk oa o a os js  al aa skhdb fbhsd </p> */}
                      </div>
                      <div className="flex gap-4 col-span-2"><p>Quantity</p><p>Price</p></div>
      
        

                
                
                </div>
              </div>
            );
          })}
        </div>
        {/* item column 2 */}
        <div className="flex flex-col md:grid-cols-2 lg:grid-cols-2 gap-6 lg:col-span-2">
          <div className="w-full bg-white flex flex-col gap-2 p-2 md:p-6 rounded-md shadow-md relative lg:col-span-2">
            <div className="flex py-4 justify-between">
              <p>Subtotal</p>
              <p>{formattedSubTotal}</p>
            </div>
            <hr />
            <div className="flex py-4 justify-between">
              <p>VAT</p>
              <p>{customer.vatRate}</p>
            </div>
            <hr />
            <div className="flex py-4 justify-between">
              <p>Total</p>
              <p>{costWithVat}</p>
            </div>
            <hr />
            <h4 className="py-4 font-semibold text-2xl">Delivery Point</h4>
            <div className="bg-white rounded-md shadow-xl flex flex-col gap-2 lg:gap-6">
              <div className="flex justify-between p-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <p className="p-2 font-semibold text-2xl">{customer.name}</p>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <p>{customer.addressLineOne}</p>
                {customer.addressLineTwo && <p>{customer.addressLineTwo}</p>}
                <p>{customer.town}</p>
                <p>{customer.postCode}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 md:gap-2 justify-between p-2 items-center">
                <a
                  href="https://www.google.com"
                  className="text-blue-500 hover:italic"
                >
                  Change delivery point
                </a>
                <button className="bg-red-900 rounded-md shadow-md py-2 px-6 text-white font font-semibold">
                  Create Delivery Point
                </button>


              </div>
              <div className="flex flex-col gap-6 p-2">
              <input className="bg-gray-200 py-2 px-6 rounded-md shadow-md" placeholder="Please Enter a Valid Purchase Order Number"></input>
              <div className="flex w-full justify-center">
                <button className="bg-red-900 rounded-md shadow-md py-2 px-6 text-white font font-semibold mb-2 w-1/2">
                  Place Order
              </button>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
