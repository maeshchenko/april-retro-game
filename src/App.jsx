import { useState, useEffect, useCallback } from 'react';
import StatsBar from './components/StatsBar';
import GameCard from './components/GameCard';
import ResultCard from './components/ResultCard';
import {
  INITIAL_STATS, MAX_STAT, MIN_STAT,
  CARD_LAYOUT,
  CARDS, STEP_CARDS, STEP3_FAMILIES,
  RESULT_CARDS, computeResult,
} from './data/gameData';

function clamp(v) {
  return Math.max(MIN_STAT, Math.min(MAX_STAT, v));
}

function applyTags(stats, tags) {
  const next = { ...stats };
  tags.forEach(({ stat, delta }) => {
    next[stat] = clamp(next[stat] + delta);
  });
  return next;
}

export default function App() {
  const [scale, setScale] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [opacity, setOpacity] = useState(1);

  // Game state
  const [step, setStep] = useState('step1');
  const [stats, setStats] = useState({ ...INITIAL_STATS });
  const [prevStats, setPrevStats] = useState(null);
  const [step2Branch, setStep2Branch] = useState(null); // 1,2,3
  const [step3Family, setStep3Family] = useState(null); // 1,2,3
  const [playerResult, setPlayerResult] = useState(null); // 'bad'|'medium'|'good'
  const [selectedCard, setSelectedCard] = useState(null); // selected card key during transition

  // Scale to viewport
  useEffect(() => {
    const update = () => {
      setScale(Math.min(window.innerWidth / 1280, window.innerHeight / 832));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Transition helper
  const navigate = useCallback((nextStep, nextStats, branch, family, result) => {
    setTransitioning(true);
    setOpacity(0);
    setTimeout(() => {
      setStep(nextStep);
      setStats(nextStats);
      if (branch !== undefined) setStep2Branch(branch);
      if (family !== undefined) setStep3Family(family);
      if (result !== undefined) setPlayerResult(result);
      setSelectedCard(null);
      setTimeout(() => {
        setPrevStats(null);
        setOpacity(1);
        setTransitioning(false);
      }, 50);
    }, 350);
  }, []);

  const handleCardSelect = useCallback((cardKey, card) => {
    if (transitioning) return;
    setSelectedCard(cardKey);
    const nextStats = applyTags(stats, card.tags);
    setPrevStats(stats);

    if (card.nextStep === 'step4') {
      const result = computeResult(nextStats);
      setTimeout(() => navigate('step4', nextStats, undefined, undefined, result), 400);
    } else if (card.nextStep === 'step3') {
      const family = card.nextFamily;
      // Determine which step2 branch we're in to set step3 title
      const branch = step2Branch;
      setTimeout(() => navigate('step3', nextStats, branch, family), 400);
    } else {
      // step2_X
      const branchNum = parseInt(card.nextStep.split('_')[1]);
      setTimeout(() => navigate(card.nextStep, nextStats, branchNum), 400);
    }
  }, [stats, step2Branch, transitioning, navigate]);

  const handleRestart = useCallback(() => {
    setTransitioning(true);
    setOpacity(0);
    setTimeout(() => {
      setStep('step1');
      setStats({ ...INITIAL_STATS });
      setPrevStats(null);
      setStep2Branch(null);
      setStep3Family(null);
      setPlayerResult(null);
      setSelectedCard(null);
      setTimeout(() => {
        setOpacity(1);
        setTransitioning(false);
      }, 50);
    }, 350);
  }, []);

  // ── Compute current screen data ──
  let cardIds = [];

  if (step === 'step1') {
    cardIds = STEP_CARDS.step1;
  } else if (step === 'step2_1' || step === 'step2_2' || step === 'step2_3') {
    cardIds = STEP_CARDS[step];
  } else if (step === 'step3') {
    cardIds = STEP3_FAMILIES[step3Family] || [];
  }

  const isResult = step === 'step4';

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: '100vw', height: '100vh',
      background: 'radial-gradient(ellipse at 50% 50%, #eafaff 0%, #b7eeff 100%)',
      overflow: 'hidden',
    }}>
      <div style={{
        width: 1280, height: 832,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        position: 'relative',
        flexShrink: 0,
        opacity,
        transition: 'opacity 0.35s ease',
      }}>

        {/* Stats bar */}
        <div
          className="absolute z-20"
          style={{ left: 34, top: 24, maxWidth: 'calc(100% - 68px)' }}
        >
          <StatsBar stats={stats} prevStats={prevStats} />
        </div>

        {/* Cards */}
        {!isResult && cardIds.map((cardId, i) => {
          const card = CARDS[cardId];
          if (!card) return null;
          const layout = CARD_LAYOUT[i];
          return (
            <GameCard
              key={cardId}
              card={card}
              cardKey={cardId}
              onClick={handleCardSelect}
              disabled={transitioning || selectedCard !== null}
              style={{
                left: layout.left,
                top: layout.top,
                rotate: layout.rotate,
                transform: undefined,
                zIndex: selectedCard === cardId ? 20 : 1,
              }}
            />
          );
        })}

        {/* Result card */}
        {isResult && playerResult && (
          <ResultCard
            key={playerResult}
            card={RESULT_CARDS[playerResult]}
            isPlayer={true}
            style={{
              left: 448,
              top: 165,
              rotate: 0,
            }}
          />
        )}

        {/* Restart button on result screen */}
        {isResult && (
          <button
            onClick={handleRestart}
            className="absolute font-semibold text-[16px] text-white rounded-[40px] transition-transform hover:scale-105 active:scale-95"
            style={{
              left: '50%', bottom: 40,
              transform: 'translateX(-50%)',
              background: 'rgba(0,0,0,0.18)',
              backdropFilter: 'blur(8px)',
              padding: '14px 36px',
              cursor: 'pointer',
              border: '2px solid rgba(255,255,255,0.3)',
              boxShadow: '0 4px 20px rgba(49,27,70,0.15)',
            }}
          >
            Сыграть ещё раз
          </button>
        )}
      </div>
    </div>
  );
}
