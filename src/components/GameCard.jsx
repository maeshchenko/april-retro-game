import { useState } from 'react';
import { STAT_META } from '../data/gameData';

function TagIcon({ isPlus }) {
  return (
    <div className="overflow-clip relative shrink-0" style={{ width: 24, height: 24 }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full" style={{
          width: 20, height: 20,
          background: isPlus ? '#22d066' : '#ff6c67',
        }} />
      </div>
      <div className="absolute bg-white rounded-[4px]"
        style={{ width: 12, height: 2, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
      {isPlus && (
        <div className="absolute bg-white rounded-[4px]"
          style={{ width: 2, height: 12, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
      )}
    </div>
  );
}

export default function GameCard({ card, cardKey, onClick, style = {}, disabled }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const { left, top, rotate, zIndex, transform: _t, ...styleRest } = style;

  const handleClick = () => {
    if (disabled) return;
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
      onClick(cardKey, card);
    }, 150);
  };

  const scale = pressed ? 0.96 : hovered ? 1.04 : 1;

  return (
    <div
      className="absolute"
      style={{
        width: 384,
        height: 502,
        cursor: disabled ? 'default' : 'pointer',
        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s',
        transform: `rotate(${rotate ?? 0}deg) scale(${scale})`,
        transformOrigin: 'center center',
        left: left ?? 0,
        top: top ?? 0,
        filter: disabled ? 'opacity(0.6)' : hovered ? 'brightness(1.04) drop-shadow(0 24px 36px rgba(49,27,70,0.3))' : 'none',
        zIndex: hovered || pressed ? 10 : zIndex ?? 1,
        ...styleRest,
      }}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={handleClick}
    >
      {/* Card — original Figma flex-wrap layout */}
      <div
        className="relative overflow-hidden rounded-[40px]"
        style={{
          width: 384,
          height: 502,
          boxSizing: 'border-box',
          background: card.bg,
          border: '12px solid rgba(255,255,255,0.2)',
          boxShadow: '0px 30px 46px -8px rgba(49,27,70,0.25)',
          padding: '32px 126px 32px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          rowGap: 16,
        }}
      >
        {/* Blur circle */}
        <div className="absolute" style={{ width: 192, height: 192, left: '50%', top: 13, transform: 'translateX(-50%)' }}>
          <div className="absolute" style={{ inset: '-31.25%' }}>
            <img src={card.blurImg} className="block h-full w-full" alt="" />
          </div>
        </div>

        {/* Character image */}
        <div className="overflow-clip relative shrink-0" style={{ width: 190, height: 250, marginRight: -94 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={card.charImg} className="pointer-events-none max-h-full max-w-full object-contain" alt="" />
          </div>
          <img src={card.sparkleImg} className="pointer-events-none absolute" style={{ width: 14, height: 14, left: 19, top: 115 }} alt="" />
          <img src={card.sparkleImg} className="pointer-events-none absolute" style={{ width: 14, height: 14, left: 145, top: 54 }} alt="" />
          <img src={card.sparkleImg} className="pointer-events-none absolute" style={{ width: 9, height: 9, left: 165, top: 82 }} alt="" />
          <img src={card.sparkleImg} className="pointer-events-none absolute" style={{ width: 9, height: 9, left: 10, top: 129 }} alt="" />
        </div>

        {/* Info section */}
        <div className="flex flex-col gap-4 items-center relative shrink-0" style={{ width: 322, marginRight: -94 }}>
          {/* White content box */}
          <div className="bg-white flex flex-col overflow-hidden relative rounded-[16px] shrink-0 w-full"
            style={{ padding: '16px 16px 24px' }}>
            <div className="flex flex-col gap-2 items-start text-black text-center w-full">
              <p className="font-bold leading-normal shrink-0 w-full" style={{ fontSize: 18 }}>
                {card.title}
              </p>
              <p
                className="font-normal w-full overflow-y-auto [scrollbar-gutter:stable]"
                style={{ fontSize: 12, lineHeight: 1.5, maxHeight: 108 }}
              >
                {card.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Tags — pinned absolutely to card bottom so they never get pushed out */}
        <div className="absolute flex gap-2 items-center justify-center" style={{ bottom: 28, left: 32, right: 32 }}>
          {card.tags.map((tag, i) => {
            const meta = STAT_META[tag.stat];
            return (
              <div key={i} className="bg-white flex gap-2 items-center overflow-hidden rounded-[40px] shrink-0"
                style={{ padding: '4px 12px 4px 4px' }}>
                <TagIcon isPlus={tag.delta > 0} />
                <div className="flex gap-1 items-center text-black text-center shrink-0">
                  <span style={{ fontSize: 17, lineHeight: 1.1, width: 14 }}>{meta.emoji}</span>
                  <span className="font-medium text-[12px] whitespace-nowrap">{meta.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
