export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-primary hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
