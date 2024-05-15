const Body = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-80 p-4">
      <span className="text-2xl font-bold">User Information</span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray">Email:</span>
          <span className="text-sm font-bold">jose@jetpak.so</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray">User ID:</span>
          <span className="text-sm font-bold">1234</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray">Client ID:</span>
          <span className="text-sm font-bold">1234</span>
        </div>
      </div>
    </div>
  );
};

export default Body;
