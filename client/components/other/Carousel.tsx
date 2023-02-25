export const Carousel = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
      {children}
    </div>
  );
};
