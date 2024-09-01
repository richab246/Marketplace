import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex-start h-screen w-full">
      <Image
        src="/icon/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;