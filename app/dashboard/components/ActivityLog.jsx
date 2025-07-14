export default function ActivityLog() {
  const logs = ["", "", "", "", "", "", "", "", "", "", ]; // More items for scroll test

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold text-cornelia-jetblack poppins">Activity Log</h2>
      <div className="p-3 space-y-2 overflow-y-auto border-2 border-cornelia-softpink bg-cornelia-softhwite rounded-xl max-h-[336px]">
        {logs.map((_, i) => (
          <div
            key={i}
            className="px-4 py-3 text-sm rounded-lg shadow-sm bg-cornelia-softpink poppins text-cornelia-softwhite"
          >
            Activity placeholder #{i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
