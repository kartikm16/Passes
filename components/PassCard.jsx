

const PassCard = ({ pass }) => {
  const isCombo = pass.type === 'combo';

  return (
    <main
  className="
    
    pt-2 sm:pt-32 md:pt-40
     sm:px-6 md:px-8
    relative
    z-10 group
  "
>

      {/* Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="">
       <div className=" rounded-2xl glass-card  lg:w-[90%] mx-auto"> {/*} glass-card card-3d card-border"*/}
        <img
    src={pass.image}
    alt={pass.title}
    className="
      
      object-cover object-center
      transition-transform duration-700
      group-hover:scale-105
    "
  />
       </div>
       </div>

      {/* <div
        className="
          relative
          bg-[#010c14]/90
          rounded-2xl
          overflow-hidden
          flex flex-col md:flex-row
          h-auto md:h-[400px]
          shadow-2xl
          glass-card card-3d card-border
        "
      >
<div
  className="
    relative
    w-fit
    md:flex-[3]
    aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]
    overflow-hidden
  "
>

  <img
    src={pass.image}
    alt={pass.title}
    className="
      absolute inset-0
      w-full h-full
      object-cover object-center
      transition-transform duration-700
      group-hover:scale-105
    "
  /> */}

  {/* Gradient overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
</div>
      </div> */}
    </main>
  );
};

export default PassCard;
