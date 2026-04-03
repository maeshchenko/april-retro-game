export default function ResultCard({ card, isPlayer, style = {} }) {
  return (
    <div
      className="absolute"
      style={{
        width: 384,
        height: 502,
        transform: `rotate(${style.rotate ?? 0}deg) scale(${isPlayer ? 1.06 : 0.94})`,
        transformOrigin: 'center center',
        left: style.left ?? 0,
        top: style.top ?? 0,
        zIndex: isPlayer ? 10 : 1,
        filter: isPlayer
          ? 'drop-shadow(0 32px 48px rgba(49,27,70,0.35))'
          : 'opacity(0.6)',
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s',
        ...style,
      }}
    >
      <div
        className="relative rounded-[40px] overflow-hidden flex flex-wrap items-start justify-center"
        style={{
          width: 384,
          height: 502,
          background: card.bg,
          border: `12px solid rgba(255,255,255,${isPlayer ? 0.3 : 0.15})`,
          boxShadow: isPlayer
            ? '0px 30px 46px -8px rgba(49,27,70,0.35)'
            : '0px 20px 30px -8px rgba(49,27,70,0.15)',
          padding: '32px 126px 32px 32px',
        }}
      >
        {/* Star burst */}
        <div className="absolute" style={{ width: 320, height: 320, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={card.starImg} className="w-full h-full" alt="" />
        </div>

        {/* Blur */}
        <div className="absolute" style={{ width: 192, height: 192, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <div style={{ position: 'absolute', inset: '-31.25%' }}>
            <img src={card.blurImg} className="block w-full h-full" alt="" />
          </div>
        </div>

        {/* Content: character image + text */}
        <div className="flex flex-col gap-2 items-start justify-center relative shrink-0"
          style={{ width: 320, height: 438, marginRight: -94 }}>

          {/* Character image area */}
          <div className="relative overflow-clip" style={{ flex: '1 0 0', width: 320 }}>
            <div className="absolute" style={{
              width: 261, height: 344,
              left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
              <img src={card.charImg}
                className="w-full h-full object-contain pointer-events-none" alt="" />
            </div>
            {/* Sparkles */}
            <img src={card.sparkleImg} className="absolute pointer-events-none" style={{ width: 25, height: 25, left: 40, top: 123 }} alt="" />
            <img src={card.sparkleImg} className="absolute pointer-events-none" style={{ width: 25, height: 25, left: 266, top: 121 }} alt="" />
            <img src={card.sparkleImg} className="absolute pointer-events-none" style={{ width: 16, height: 16, left: 250, top: 96 }} alt="" />
            <img src={card.sparkleImg} className="absolute pointer-events-none" style={{ width: 16, height: 16, left: 29, top: 153 }} alt="" />
          </div>

          {/* White text box */}
          <div className="bg-white flex flex-col items-start justify-center overflow-hidden relative rounded-[16px] shrink-0 w-full"
            style={{ padding: '16px 16px 24px' }}>
            <div className="flex flex-col gap-2 items-start text-black text-center w-full">
              <p className="font-bold leading-normal w-full" style={{ fontSize: 18 }}>
                {card.title}
              </p>
              <p className="font-normal w-full" style={{ fontSize: 12, lineHeight: 1.5 }}>
                {card.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
