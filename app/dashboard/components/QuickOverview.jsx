import { Package, Mail, Funnel, ChartBarStacked } from 'lucide-react';


export default function QuickOverview() {
  const overviewData = [
    { title: "Products Listed", icon:<Package size={22} />, values: ["150", "45"], labels: ["Listed", "Favorite"] },
    { title: "Filters Created", icon:<Funnel size={22}  />, values: ["8", "3"], labels: ["Created", "Drafted"] },
    { title: "Category Created", icon:<ChartBarStacked size={22}  />, values: ["3", "0"], labels: ["Created", "Drafted"] },
    { title: "Messages List", icon:<Mail size={22} />, values: ["25", "5"], labels: ["Seen", "New"] },
  ];

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-cornelia-jetblack poppins">Quick Overview</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {overviewData.map((item, i) => (
          <div key={i} className="p-4 border-2 border-cornelia-darkpink drop-shadow-xl rounded-xl">
            <div className="flex flex-row gap-3 "> 
                <div className=' text-cornelia-darkpink'>{item.icon}</div>
                <h3 className="text-lg font-semibold leading-tight poppins text-cornelia-darkpink">{item.title}</h3>
            </div>
            <div className="mt-2 w-auto h-[0.15rem] bg-cornelia-darkpink"></div>
            <div className="grid grid-cols-2 mt-3 text-left poppins">
              <div className="text-lg font-bold text-cornelia-jetblack">{item.values[0]}</div>
              <div className="text-lg font-bold text-cornelia-jetblack">{item.values[1]}</div>
            </div>
            <div className="grid grid-cols-2 mt-2 text-left poppins">
              <span className="font-semibold text-cornelia-darkpink">{item.labels[0]}</span>
              <span className="font-semibold text-cornelia-softpink" >{item.labels[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
