const FooterLoader = () => {
  return (
    <div className="flex flex-col gap-2 p-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex w-[40px] h-4 bg-slate-300 rounded-full" />
        <div className="flex w-[80px] h-4 bg-slate-300 rounded-full" />
      </div>
      <div className="grid grid-cols-3 items-center p-1 gap-2">
        <div className="flex h-10 bg-slate-300 rounded-lg" />
        <div className="flex h-10 bg-slate-300 rounded-lg" />
        <div className="flex h-10 bg-slate-300 rounded-lg" />
      </div>
    </div>
  );
};

export default FooterLoader;
