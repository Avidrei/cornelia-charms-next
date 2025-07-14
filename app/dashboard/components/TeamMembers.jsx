import Image from "next/image";
import sampleImg from "@/assets/LOGIN-BG.jpg"; 


export default function TeamMembers() {
  const members = [
    { name: "Jenn Andrei Palad", role: "Owner" },
    { name: "David Raniel Cauba", role: "Developer" },
    { name: "Chammy", role: "Developer" },
  ];

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-cornelia-jetblack poppins">Team Members</h2>
      <div className="flex flex-col h-auto gap-2 p-4 space-y-2 bg-cornelia-softpink rounded-xl">
        {members.map((member, i) => (
          <div key={i} className="flex gap-4 px-4 py-3 rounded-2xl bg-cornelia-softwhite">
            <Image src={sampleImg} alt="Product" width={35} height={45} className="rounded-full" />
            <div className="flex flex-col items-start justify-center gap-1">
                <span className="text-sm font-semibold poppins">{member.name}</span>
                <span className="text-xs font-semibold text-cornelia-darkpink poppins">({member.role})</span>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center">
            <button className="justify-center items-center w-[50%] py-2 mt-2 text-sm font-medium text-cornelia-softpink rounded-full bg-cornelia-softwhite">Add Members</button>
        </div>
      </div>
    </div>
  );
}
