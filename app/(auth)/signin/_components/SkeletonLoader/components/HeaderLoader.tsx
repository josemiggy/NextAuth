const HeaderLoader = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 animate-pulse">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="flex rounded-full h-10 w-10 bg-slate-300" />
          <div className="flex flex-col gap-1">
            <div className="flex h-4 w-20 bg-slate-300 rounded-full" />
            <div className="flex h-4 w-32 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex rounded-full h-6 w-16 bg-slate-300" />
    </div>
  );
};

export default HeaderLoader;
