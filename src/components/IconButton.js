function TextButton({ title, onClick, color}) {
  return (
    <button onClick={onClick} className={`animate-bounce bg-[#ffffe0] w-full min-h-[45px] hover:text-[#07638d] font-bold p-2 border border-[#876510] rounded-full`}>
      <p className="text-center text-[#876510]">{title}</p>
    </button>
  );
}

export default TextButton;
