import { STAT_META, MAX_STAT } from '../data/gameData';

const STAT_ORDER = ['stress', 'quality', 'speed'];

export default function StatsBar({ stats, prevStats }) {
  return (
    <div className="flex w-fit gap-[29px] items-center bg-white rounded-[64px] overflow-hidden pl-4 pr-8 py-4 shrink-0"
      style={{ boxShadow: '0 4px 24px rgba(49,27,70,0.12)' }}>

      {/* Avatar */}
      <div className="shrink-0 rounded-[40px] overflow-hidden border-3 border-white/20"
        style={{ width: 72, height: 72, background: '#8c9cf2' }}>
        <img src={`${import.meta.env.BASE_URL}avatar.png`} className="w-full h-full object-cover" alt="avatar" />
      </div>

      {/* Stat bars */}
      <div className="flex gap-8 items-start shrink-0">
        {STAT_ORDER.map(stat => {
          const meta = STAT_META[stat];
          const value = stats[stat];
          const prev = prevStats ? prevStats[stat] : value;
          const changed = value !== prev;
          const increased = value > prev;

          return (
            <div key={stat}
              className="flex items-center rounded-[24px] overflow-hidden"
              style={{ background: '#ececec', border: '5px solid #ececec', gap: 1 }}>

              {/* Label */}
              <div className="bg-white flex items-center px-2 py-1 rounded-l-[40px] shrink-0"
                style={{ width: 88 }}>
                <div className="flex gap-1 items-center">
                  <span style={{ fontSize: 17, lineHeight: 1.1, width: 16 }}>{meta.emoji}</span>
                  <span className="font-medium text-[12px] whitespace-nowrap">{meta.label}</span>
                </div>
              </div>

              {/* Pip cells */}
              {Array.from({ length: MAX_STAT }).map((_, i) => {
                const filled = i < value;
                const wasFilledBefore = i < prev;
                const isChanging = changed && (
                  (increased && i === value - 1) ||
                  (!increased && i === prev - 1)
                );
                return (
                  <div
                    key={i}
                    className={`shrink-0 transition-colors duration-500 ${
                      i === MAX_STAT - 1 ? 'rounded-br-[12px] rounded-tr-[12px]' : ''
                    } ${isChanging ? 'scale-110' : ''}`}
                    style={{
                      width: 27, height: 27,
                      background: filled ? '#fbc626' : 'white',
                      transition: 'background-color 0.4s, transform 0.2s',
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
