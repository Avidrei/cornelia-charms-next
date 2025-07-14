import { MoveRight } from 'lucide-react'; // optional icon, can replace → with this

export default function QuickActions() {
  const actions = [
    { label: "Add a New Product" },
    { label: "Add a New Brand" },
    { label: "Manage Old Banners" },
  ];

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-cornelia-jetblack poppins">Quick Actions</h2>
      <div className="flex w-full gap-10">
        {actions.map((action, i) => (
          <button
            key={i}
            className="flex items-center justify-between flex-1 px-6 py-5 text-[1.15rem] font-semibold text-left poppins transition-colors duration-300 text-cornelia-softwhite rounded-xl bg-cornelia-darkpink hover:bg-cornelia-softpink"
          >
            {action.label}
            <span className="flex items-center justify-center w-8 h-8 bg-white bg-opacity-100 rounded-full text-cornelia-softwhite">
              <MoveRight size={22} className="font-bold text-cornelia-darkpink" />
              {/* Or use → instead:
              <span className="text-lg">→</span>
              */}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
