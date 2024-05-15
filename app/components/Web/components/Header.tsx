const Header = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2">
        <div className="flex rounded-full h-10 w-10 bg-slate-300" />
        <div className="flex flex-col">
          <span className="text-base font-semibold">Jose Miguel</span>
          <span className="text-sm text-gray">@Username</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
