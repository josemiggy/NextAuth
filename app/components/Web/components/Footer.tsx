const Footer = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="grid grid-cols-3 items-center border-y border-color p-1">
        <button className="hover-item flex h-10 items-center justify-center gap-2 rounded-sm text-sm">
          Like
        </button>
        <button className="hover-item flex h-10 items-center justify-center gap-2 rounded-sm text-sm">
          Follow
        </button>
        <button className="hover-item flex h-10 items-center justify-center gap-2 rounded-sm text-sm">
          Share
        </button>
      </div>
    </div>
  );
};

export default Footer;
