import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { BiLeaf } from "react-icons/bi";


export default function Home() {
  return (
    <>
      <div className="fixed top-0 right-0 min-h-screen w-[80px] bg-[#475F45] flex flex-col justify-center items-center gap-20">
        <FiFacebook className="size-5 text-white" />
        <FiInstagram className="size-5 text-white" />
        <FiTwitter className="size-5 text-white" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <button className="bg-[#AC7728] text-white px-8 py-[6px] rounded-full text-sm font-medium" >Plant</button>
          <h1 className="text-5xl font-medium mt-3 text-[#343D33]">Grow Plants To <br />Please Your Soul</h1>
          <p className="text-[#727671] text-sm font-semibold my-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Iste deserunt consectetur soluta quidem saepe. Beatae <br />
            nesciunt nemo rem est nesciunt nemo em est.
          </p>
          <div className="flex gap-5">

            <button className="bg-[#475F45] py-3 px-4 rounded-md flex gap-2 items-center">
              <ShoppingCartIcon className="size-5 text-white" />
              <span className="text-white text-sm font-medium">Shop Now</span>
            </button>

            <button className="py-3 px-4 rounded-md flex gap-2 items-center">
              <span className="text-[#475F45] text-sm font-semibold">Care Tips</span>
              <BiLeaf className="size-5 fill-[#475F45]" />
            </button>

          </div>
        </div>
        <img className="rounded-full h-96 w-96" src="/bg.jpg" alt="Image of an interior room with plants" />
      </div>
      
      <div className="mt-20 flex justify-center items-center gap-5">
        <div className="px-8 bg-white-500 shadow-md">
          <div className="flex items-center">
            <img className="w-40" src="/pot1.jpg" alt="" />
            <div>
              <h2 className="text-lg text-[#475F45] font-semibold mb-2 flex-1">Plants for Interiors</h2>
              <div className="flex gap-2 items-center">
                <BiLeaf className="size-5 fill-[#475F45]" />
                <span className="text-[#475F45] text-sm font-light">Care Tips</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 bg-white-500 shadow-md">
          <div className="flex items-center">
            <img className="w-40" src="/pot1.jpg" alt="" />
            <div>
              <h2 className="text-xl text-[#475F45] font-semibold mb-2">Plants for Interiors</h2>
              <div className="flex gap-2 items-center">
                <BiLeaf className="size-5 fill-[#475F45]" />
                <span className="text-[#475F45] text-sm font-light">Care Tips</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 bg-white-500 shadow-md">
          <div className="flex items-center">
            <img className="w-40" src="/pot1.jpg" alt="" />
            <div>
              <h2 className="text-xl text-[#475F45] font-semibold mb-2">Plants for Interiors</h2>
              <div className="flex gap-2 items-center">
                <BiLeaf className="size-5 fill-[#475F45]" />
                <span className="text-[#475F45] text-sm font-light">Care Tips</span>
              </div>
            </div>
          </div>
        </div>
        

      </div>
      {/* <div className="absolute bottom-0 right-0 w-screen h-[80px] bg-[#475F45]"></div> */}
    </>
  );
}
