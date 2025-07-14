import Image from "next/image";
import sampleImg from "@/assets/LOGIN-BG.jpg"; 

export default function TopProductViews() {
  const products = ["", "", ""]; // placeholders

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-cornelia-jetblack poppins ">Top Product Views</h2>
      <div className="space-y-5">
        {products.map((_, i) => (
          <div key={i} className="flex items-center justify-between p-5 shadow bg-gradient-to-r from-cornelia-softpink to-cornelia-softpink rounded-xl">
            <div className="flex gap-5">
              <Image src={sampleImg} alt="Product" width={45} height={45} className="border-2 border-white rounded-md" />
              <div>
                <div className="text-lg font-semibold leading-tight poppins text-cornelia-softwhite">Product Name</div>
                <div className="font-medium text-cornelia-softwhite text-md">Product ID</div>
              </div>
            </div>
            <span className="px-6 py-2 text-gray-700 bg-white rounded-full shadow text-md">-- views</span>
          </div>
        ))}
      </div>
    </div>
  );
}
