export default function Text_head_3( { children, className } ) {
  return (
    <p className={`text-lg leading-none ${className}`}>
      {children}
    </p>
  );
}