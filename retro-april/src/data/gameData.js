// ─────────────────────────────────────────────
// GAME DATA — all screens, cards, navigation
// ─────────────────────────────────────────────

export const INITIAL_STATS = { stress: 2, quality: 2, speed: 2 };
export const MAX_STAT = 5;
export const MIN_STAT = 0;

// Step titles shown in the header
export const STEP_TITLES = {
  step1:   { step: '1', title: 'разбитые яйца' },
  step2_1: { step: '2', title: 'гонка за временем' },
  step2_2: { step: '2', title: 'разобраться с причинами' },
  step2_3: { step: '2', title: 'гонка за временем' },
  step4:   { step: '4', title: 'финал' },
};

// Step 3 title depends on the combination of step2Branch + step3Family chosen
export const STEP3_TITLES = {
  '1_1': 'работа на износ',
  '1_2': 'сделать меньше',
  '1_3': 'сделать самое главное',
  '2_1': 'успокоится и все обдумать',
  '2_2': 'решить на основе опыта',
  '2_3': 'посовещаться с другом',
  '3_1': 'положиться на помощника',
  '3_2': 'делать параллельно',
  '3_3': 'синхронизироваться',
};

// Card subtitle labels shown above cards
export const CARD_SUBTITLES = {
  step1:   ['Карточка 1.1', 'Карточка 1.2', 'Карточка 1.3'],
  step2:   ['Карточка 2.1', 'Карточка 2.2', 'Карточка 2.3'],
  step3:   ['Карточка 3.1', 'Карточка 3.2', 'Карточка 3.3'],
  step4:   ['Результат 1',  'Результат 2',  'Результат 3'],
};

// Card positions and rotations (matching Figma layout)
// Slightly lower than original Figma to clear the taller title + stats header stack
export const CARD_LAYOUT = [
  { left: 33,  top: 213, rotate: -1.83 },
  { left: 437, top: 280, rotate:  2.04 },
  { left: 847, top: 239, rotate:  0.19 },
];

export const RESULT_CARD_LAYOUT = [
  { left: 33,  top: 196, rotate: -1.5 },
  { left: 448, top: 197, rotate:  0   },
  { left: 862, top: 196, rotate:  1.5 },
];

// ─────────────────────────────────────────────
// STAT DEFINITIONS
// ─────────────────────────────────────────────
export const STAT_META = {
  stress:  { emoji: '😵‍💫', label: 'стресс',   color: '#fbc626' },
  quality: { emoji: '🥕',   label: 'качество',  color: '#fbc626' },
  speed:   { emoji: '🐇',   label: 'скорость',  color: '#fbc626' },
};

// ─────────────────────────────────────────────
// CARD DEFINITIONS
// ─────────────────────────────────────────────
export const CARDS = {
  // ── STEP 1 ──────────────────────────────────
  s1_1: {
    bg: '#3cda83',
    blurBg: '#3cda83',
    title: 'Не тратить время',
    desc: 'Собрать уцелевшие яйца и краски и в ускоренном темпе попытаться успеть к празднику',
    charImg: 'https://www.figma.com/api/mcp/asset/72c14685-9d03-4ee5-86d2-8fbdeeef18c7',
    blurImg: 'https://www.figma.com/api/mcp/asset/6c28ee09-f6b8-4121-b2cb-1637476ae677',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/8ec492c7-3d53-4d57-ae34-60414f076ddf',
    tags: [
      { stat: 'stress',  delta: +1 },
      { stat: 'speed',   delta: +1 },
    ],
    nextStep: 'step2_1',
  },
  s1_2: {
    bg: '#f284da',
    title: 'Разобраться в причинах',
    desc: 'Понять, что именно пошло не так, прежде чем действовать, чтобы случайно не повторить ту же ошибку',
    charImg: 'https://www.figma.com/api/mcp/asset/da54b65f-f114-47d1-a5f0-fda5bc5bb3c4',
    blurImg: 'https://www.figma.com/api/mcp/asset/89493322-1bc4-4057-bd9a-20d32ab3708c',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/dab6ed9f-626d-4c22-8725-fbd4dc441340',
    tags: [
      { stat: 'stress',  delta: -1 },
      { stat: 'quality', delta: +1 },
    ],
    nextStep: 'step2_2',
  },
  s1_3: {
    bg: '#9d8af1',
    title: 'Позвать на помощь',
    desc: 'В одиночку тут не справиться — нужно звать друга Цыпленка, чтобы разделить задачи и вместе успеть к празднику',
    charImg: 'https://www.figma.com/api/mcp/asset/a02ca442-2fbc-4267-95fa-46f803919368',
    blurImg: 'https://www.figma.com/api/mcp/asset/3ebb93f2-00e7-4e91-9398-ac7e055b092e',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/2b22ea01-647c-4d4e-a33b-748d2c3b7f3f',
    tags: [
      { stat: 'quality', delta: -1 },
      { stat: 'speed',   delta: -1 },
    ],
    nextStep: 'step2_3',
  },

  // ── STEP 2 — branch 1 (гонка за временем) ──
  s2_1_1: {
    bg: '#3cda83',
    title: 'Быстро переделать',
    desc: 'Найти замену разбитым яйцам и в ускоренном темпе красить изначально запланированное количество',
    charImg: 'https://www.figma.com/api/mcp/asset/f3289d08-0df9-4963-8cfc-81f08409f19f',
    blurImg: 'https://www.figma.com/api/mcp/asset/2923d880-471d-4cb2-93ea-87a869040485',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/2e3085c7-352d-4a3f-a5f7-0ccb4ee4c1ee',
    tags: [
      { stat: 'stress', delta: +1 },
      { stat: 'speed',  delta: +1 },
    ],
    nextStep: 'step3', nextFamily: 1,
  },
  s2_1_2: {
    bg: '#f284da',
    title: 'Сделать меньше',
    desc: 'Яиц будет меньше, но каждое из них останется таким же красочным и детально проработанным, как и задумывал изначально',
    charImg: 'https://www.figma.com/api/mcp/asset/6556644a-892f-4f70-a802-dd27d0dac674',
    blurImg: 'https://www.figma.com/api/mcp/asset/7ba220c7-9f0d-4c5c-aedf-09ee8be9f7cd',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/413183d8-f024-4d1c-90e2-48e654ad7a7b',
    tags: [
      { stat: 'speed',   delta: +1 },
      { stat: 'quality', delta: -1 },
    ],
    nextStep: 'step3', nextFamily: 2,
  },
  s2_1_3: {
    bg: '#9d8af1',
    title: 'Сделать самое главное',
    desc: 'Сохранить запланированное количество яиц, но отказаться от сложного узора — главное успеть к празднику',
    charImg: 'https://www.figma.com/api/mcp/asset/2692c041-8288-4dd8-995d-74123c5b7e28',
    blurImg: 'https://www.figma.com/api/mcp/asset/9c85139f-352e-4e40-8620-b1c430c6cc93',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/b5ea7756-ced6-41d6-9c65-cb3f56ec1b87',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'speed',   delta: +1 },
    ],
    nextStep: 'step3', nextFamily: 3,
  },

  // ── STEP 2 — branch 2 (разобраться с причинами) ──
  s2_2_1: {
    bg: '#3cda83',
    title: 'Успокоиться и всё обдумать',
    desc: 'Не суетиться, сделать глубокий вдох и спокойно взвесить оставшиеся возможные варианты действий',
    charImg: 'https://www.figma.com/api/mcp/asset/feb9ee11-bf3c-478a-ae5d-56382a873e87',
    blurImg: 'https://www.figma.com/api/mcp/asset/71126ad3-b7c7-4f92-9304-aa07562b6bba',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/71845ba8-000d-4ca1-9957-70b3fb957293',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'speed',   delta: -1 },
    ],
    nextStep: 'step3', nextFamily: 1,
  },
  s2_2_2: {
    bg: '#f284da',
    title: 'Решить на основе опыта',
    desc: 'Ничего страшного не случилось. Вспомнить, как действовал в похожей ситуации, которая была несколько лет назад',
    charImg: 'https://www.figma.com/api/mcp/asset/2b4f6ebf-8964-4a77-ba19-2120c5084139',
    blurImg: 'https://www.figma.com/api/mcp/asset/133d06fc-d494-4fb9-b368-422d62530a1b',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/0bbd9aad-6b22-4238-97c5-c0f05e4f13fe',
    tags: [
      { stat: 'speed',   delta: +1 },
      { stat: 'quality', delta: -1 },
    ],
    nextStep: 'step3', nextFamily: 2,
  },
  s2_2_3: {
    bg: '#9d8af1',
    title: 'Посовещаться с другом',
    desc: 'Обсудить случившееся с Цыплёнком. Свежий взгляд со стороны поможет увидеть решение, которое сразу не очевидно',
    charImg: 'https://www.figma.com/api/mcp/asset/f8988d32-4e71-4cca-a2fa-08eb75ddce62',
    blurImg: 'https://www.figma.com/api/mcp/asset/aac25f4a-d280-4584-ba4d-551fd85eb45b',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/a9787f1a-b91d-4d43-bd9f-73d0ff6cbf34',
    tags: [
      { stat: 'stress', delta: -1 },
      { stat: 'speed',  delta: -1 },
    ],
    nextStep: 'step3', nextFamily: 3,
  },

  // ── STEP 2 — branch 3 (гонка за временем, с помощником) ──
  s2_3_1: {
    bg: '#3cda83',
    title: 'Положиться на помощника',
    desc: 'Передать все дела по раскраске яиц Цыплёнку, а самому привести себя в порядок перед праздником',
    charImg: 'https://www.figma.com/api/mcp/asset/7ef94a65-5c35-4f8f-b35e-28f213aea3f9',
    blurImg: 'https://www.figma.com/api/mcp/asset/d733ebf6-d3fc-4bf3-849d-9b5ac6d5a20d',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/90669aad-d526-425f-a7ab-34ef714e7dd5',
    tags: [
      { stat: 'stress',  delta: -1 },
      { stat: 'quality', delta: -1 },
    ],
    nextStep: 'step3', nextFamily: 1,
  },
  s2_3_2: {
    bg: '#f284da',
    title: 'Делать параллельно',
    desc: 'Распределить объём работ поровну, и каждый сделает её по-своему, стараясь успеть к празднику',
    charImg: 'https://www.figma.com/api/mcp/asset/36cfe38d-3167-4917-ac02-ea87e9c205d0',
    blurImg: 'https://www.figma.com/api/mcp/asset/a9987f73-41bb-4423-99a2-e42599d92891',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/c69ee484-ed95-4036-bb4a-ee15f429eab2',
    tags: [
      { stat: 'speed',  delta: +1 },
      { stat: 'stress', delta: +1 },
    ],
    nextStep: 'step3', nextFamily: 2,
  },
  s2_3_3: {
    bg: '#9d8af1',
    title: 'Синхронизироваться',
    desc: 'Договариваются о плане и регулярно сверяются, чтобы всё получилось красиво и вовремя',
    charImg: 'https://www.figma.com/api/mcp/asset/e2481e97-340b-42e3-8758-8258a9e0cfb1',
    blurImg: 'https://www.figma.com/api/mcp/asset/bb6ffda6-501a-4622-9e59-9e18137c2e1f',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/4809f653-90f7-421e-8e51-001550c22642',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'stress',  delta: -1 },
    ],
    nextStep: 'step3', nextFamily: 3,
  },

  // ── STEP 3 — Branch 1, Family 1 (работа на износ) ──
  s3b1f1_1: {
    bg: '#3cda83',
    title: 'Доделать любой ценой',
    desc: 'Стиснув зубы продолжать работать, отодвинув мысли о сне и еде — очень важно всё закончить, чего бы это ни стоило',
    charImg: 'https://www.figma.com/api/mcp/asset/ebb1b254-39f7-41f0-8bc1-a10869117377',
    blurImg: 'https://www.figma.com/api/mcp/asset/641dd711-7b92-46e5-994f-f45e73646c48',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/d425a364-80c3-474f-bda2-7daa3475b94c',
    tags: [
      { stat: 'stress', delta: +1 },
      { stat: 'speed',  delta: +1 },
    ],
    nextStep: 'step4',
  },
  s3b1f1_2: {
    bg: '#f284da',
    title: 'Не забывать отдыхать',
    desc: 'Не забывать делать перерывы, чтобы выпить морковного сока и немного поспать перед важным днём',
    charImg: 'https://www.figma.com/api/mcp/asset/ce2be4ae-9069-4f37-82db-1b0d07dfe15d',
    blurImg: 'https://www.figma.com/api/mcp/asset/2898353b-300c-45e8-9344-a0412e8f0551',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/4c43e65b-a33c-44eb-a5cc-2307fcd8ee59',
    tags: [
      { stat: 'speed',  delta: -1 },
      { stat: 'stress', delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b1f1_3: {
    bg: '#9d8af1',
    title: 'Позвать на помощь',
    desc: 'Признать, что помощь не помешает, и позвать Цыплёнка, который с радостью возьмёт себе половину работы',
    charImg: 'https://www.figma.com/api/mcp/asset/f3738ada-f237-4512-a7b2-392b08316cd9',
    blurImg: 'https://www.figma.com/api/mcp/asset/96ed3e41-6b64-4f0e-b3a4-9a46b468424f',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/713d13f6-72a0-4a7c-9621-8a3eb6959a99',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'speed',   delta: -1 },
    ],
    nextStep: 'step4',
  },

  // ── STEP 3 — Branch 1, Family 2 (сделать меньше) ──
  s3b1f2_1: {
    bg: '#3cda83',
    title: 'Немного, но хорошо',
    desc: 'Сделать всего несколько яиц, но вложить в каждое всё своё мастерство, чтобы они стали настоящим украшением праздника',
    charImg: 'https://www.figma.com/api/mcp/asset/d4351cb7-aa54-4666-851a-221cd43b7329',
    blurImg: 'https://www.figma.com/api/mcp/asset/604a1172-1f91-489b-af91-58a314154423',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/f686b326-ceec-48a0-9597-295004c42bbf',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'speed',   delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b1f2_2: {
    bg: '#f284da',
    title: 'Доделать как получится',
    desc: 'Принять ситуацию и докрасить оставшиеся яйца оставшимися красками, чтобы получить приемлемый результат',
    charImg: 'https://www.figma.com/api/mcp/asset/7b456c0e-e179-4b57-9cf4-c69075db3ddb',
    blurImg: 'https://www.figma.com/api/mcp/asset/5b6ca590-c3bd-4b74-8a17-70e9108b24f9',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/2c1d7f4e-decc-4a4a-a826-7ad06a3832df',
    tags: [
      { stat: 'speed',  delta: +1 },
      { stat: 'stress', delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b1f2_3: {
    bg: '#9d8af1',
    title: 'Объяснить ситуацию',
    desc: 'Рассказать гостям, что случилось в мастерской, и предложить вместе подготовиться к празднику — превратить трудности в часть веселья',
    charImg: 'https://www.figma.com/api/mcp/asset/19174440-888c-4aaf-8981-1074c2aa56bb',
    blurImg: 'https://www.figma.com/api/mcp/asset/3d96ef11-ffb7-4481-b599-297cce4c32d7',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/00cb08c1-7277-4351-ae75-a0ff435e8c14',
    tags: [
      { stat: 'stress', delta: +1 },
      { stat: 'speed',  delta: +1 },
    ],
    nextStep: 'step4',
  },

  // ── STEP 3 — Branch 1, Family 3 (сделать самое главное) ──
  s3b1f3_1: {
    bg: '#3cda83',
    title: 'Сделать немного, но круто',
    desc: 'Раскрасить несколько яиц, но вложить в них всё своё умение, создав настоящие шедевры, которые затмят любую спешную работу',
    charImg: 'https://www.figma.com/api/mcp/asset/709f564e-faac-4b30-a684-355d80e422f0',
    blurImg: 'https://www.figma.com/api/mcp/asset/b4a4b2e4-4a8e-402c-9991-5cda0e85fc38',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/875f266d-dc57-4d86-a61a-8b5af55c0af9',
    tags: [
      { stat: 'speed',   delta: -1 },
      { stat: 'quality', delta: +1 },
    ],
    nextStep: 'step4',
  },
  s3b1f3_2: {
    bg: '#f284da',
    title: 'Найти баланс',
    desc: 'Рассчитать силы и время так, чтобы успеть сделать достаточно яиц, сохранив при этом достойное качество без выгорания',
    charImg: 'https://www.figma.com/api/mcp/asset/22f001df-dce8-47d7-8989-e0f9f0d1bae7',
    blurImg: 'https://www.figma.com/api/mcp/asset/d0a1c676-ec39-472e-b9a3-05f7c8ee99f4',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/deda3311-ebc8-4563-bf06-5eb7f509dbc9',
    tags: [
      { stat: 'speed',   delta: +1 },
      { stat: 'quality', delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b1f3_3: {
    bg: '#9d8af1',
    title: 'Сделать то, что получится',
    desc: 'Перестать переживать об идеале и просто начать подготовку в своё удовольствие, принимая любой результат',
    charImg: 'https://www.figma.com/api/mcp/asset/aea77e40-657b-4c73-85ed-c976032a6e8b',
    blurImg: 'https://www.figma.com/api/mcp/asset/dad60d9a-007a-4cf2-86f9-f5693682d9a6',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/8568a3d5-0120-48eb-82e2-1e20989afd90',
    tags: [
      { stat: 'quality', delta: -1 },
      { stat: 'stress',  delta: -1 },
    ],
    nextStep: 'step4',
  },

  // ── STEP 3 — Branch 2, Family 1 (успокоиться и всё обдумать) ──
  s3b2f1_1: {
    bg: '#3cda83',
    title: 'Перестроить процесс',
    desc: 'Взглянуть на ситуацию свежим взглядом и придумать более эффективный способ организации работы',
    charImg: 'https://www.figma.com/api/mcp/asset/ebb1b254-39f7-41f0-8bc1-a10869117377',
    blurImg: 'https://www.figma.com/api/mcp/asset/641dd711-7b92-46e5-994f-f45e73646c48',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/d425a364-80c3-474f-bda2-7daa3475b94c',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'speed',   delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b2f1_2: {
    bg: '#f284da',
    title: 'Сделать меньше, но круто',
    desc: 'Сократить количество яиц, но сделать каждое из них особенным — пусть их будет меньше, зато они будут идеальными',
    charImg: 'https://www.figma.com/api/mcp/asset/d4351cb7-aa54-4666-851a-221cd43b7329',
    blurImg: 'https://www.figma.com/api/mcp/asset/604a1172-1f91-489b-af91-58a314154423',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/f686b326-ceec-48a0-9597-295004c42bbf',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'stress',  delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b2f1_3: {
    bg: '#9d8af1',
    title: 'Расслабиться',
    desc: 'Отпустить контроль и дать себе разрешение просто наслаждаться процессом без лишних переживаний',
    charImg: 'https://www.figma.com/api/mcp/asset/f3738ada-f237-4512-a7b2-392b08316cd9',
    blurImg: 'https://www.figma.com/api/mcp/asset/96ed3e41-6b64-4f0e-b3a4-9a46b468424f',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/713d13f6-72a0-4a7c-9621-8a3eb6959a99',
    tags: [
      { stat: 'stress', delta: -1 },
      { stat: 'speed',  delta: -1 },
    ],
    nextStep: 'step4',
  },

  // ── STEP 3 — Branch 2, Family 2 (решить на основе опыта) ──
  s3b2f2_1: {
    bg: '#3cda83',
    title: 'Получить обратную связь',
    desc: 'Попросить кого-то со стороны оценить работу и дать честный отзыв — чтобы понять, что уже хорошо, а что стоит улучшить',
    charImg: 'https://www.figma.com/api/mcp/asset/ebb1b254-39f7-41f0-8bc1-a10869117377',
    blurImg: 'https://www.figma.com/api/mcp/asset/641dd711-7b92-46e5-994f-f45e73646c48',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/d425a364-80c3-474f-bda2-7daa3475b94c',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'speed',   delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b2f2_2: {
    bg: '#f284da',
    title: 'Применить новое решение',
    desc: 'Воспользоваться нестандартным подходом, который раньше не пробовал — иногда нужна свежая идея, чтобы всё сдвинулось с места',
    charImg: 'https://www.figma.com/api/mcp/asset/7b456c0e-e179-4b57-9cf4-c69075db3ddb',
    blurImg: 'https://www.figma.com/api/mcp/asset/5b6ca590-c3bd-4b74-8a17-70e9108b24f9',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/2c1d7f4e-decc-4a4a-a826-7ad06a3832df',
    tags: [
      { stat: 'speed',   delta: +1 },
      { stat: 'quality', delta: +1 },
    ],
    nextStep: 'step4',
  },
  s3b2f2_3: {
    bg: '#9d8af1',
    title: 'Принять любой результат',
    desc: 'Понять, что любой итог — это опыт, и позволить себе не стремиться к идеалу, наслаждаясь тем, что есть',
    charImg: 'https://www.figma.com/api/mcp/asset/19174440-888c-4aaf-8981-1074c2aa56bb',
    blurImg: 'https://www.figma.com/api/mcp/asset/3d96ef11-ffb7-4481-b599-297cce4c32d7',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/00cb08c1-7277-4351-ae75-a0ff435e8c14',
    tags: [
      { stat: 'stress', delta: -1 },
      { stat: 'speed',  delta: -1 },
    ],
    nextStep: 'step4',
  },

  // ── STEP 3 — Branch 2, Family 3 (посовещаться с другом) ──
  // node-id: 112-2382
  s3b2f3_1: {
    bg: '#3cda83',
    title: 'Разделить дела',
    desc: 'Договориться с Цыплёнком и разбить задачи между собой — вдвоём справиться проще, и у каждого есть своя зона ответственности',
    charImg: 'https://www.figma.com/api/mcp/asset/709f564e-faac-4b30-a684-355d80e422f0',
    blurImg: 'https://www.figma.com/api/mcp/asset/b4a4b2e4-4a8e-402c-9991-5cda0e85fc38',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/875f266d-dc57-4d86-a61a-8b5af55c0af9',
    tags: [
      { stat: 'speed',   delta: +1 },
      { stat: 'quality', delta: +1 },
    ],
    nextStep: 'step4',
  },
  s3b2f3_2: {
    bg: '#f284da',
    title: 'Обсудить',
    desc: 'Поговорить с Цыплёнком о том, что сейчас происходит, и вместе решить, как лучше всего действовать дальше',
    charImg: 'https://www.figma.com/api/mcp/asset/22f001df-dce8-47d7-8989-e0f9f0d1bae7',
    blurImg: 'https://www.figma.com/api/mcp/asset/d0a1c676-ec39-472e-b9a3-05f7c8ee99f4',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/deda3311-ebc8-4563-bf06-5eb7f509dbc9',
    tags: [
      { stat: 'stress',  delta: -1 },
      { stat: 'quality', delta: +1 },
    ],
    nextStep: 'step4',
  },
  s3b2f3_3: {
    bg: '#9d8af1',
    title: 'Выбрать то, что решит',
    desc: 'Вместе с другом определить самый важный шаг, который даст наибольший результат, и сосредоточиться только на нём',
    charImg: 'https://www.figma.com/api/mcp/asset/aea77e40-657b-4c73-85ed-c976032a6e8b',
    blurImg: 'https://www.figma.com/api/mcp/asset/dad60d9a-007a-4cf2-86f9-f5693682d9a6',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/8568a3d5-0120-48eb-82e2-1e20989afd90',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'stress',  delta: -1 },
    ],
    nextStep: 'step4',
  },

  // ── STEP 3 — Branch 3, Family 1 (положиться на помощника) ──
  // node-id: 115-2796
  s3b3f1_1: {
    bg: '#3cda83',
    title: 'Обсудить время',
    desc: 'Согласовать с Цыплёнком, сколько времени займёт каждая задача, чтобы реалистично спланировать работу и не опоздать',
    charImg: 'https://www.figma.com/api/mcp/asset/7ef94a65-5c35-4f8f-b35e-28f213aea3f9',
    blurImg: 'https://www.figma.com/api/mcp/asset/d733ebf6-d3fc-4bf3-849d-9b5ac6d5a20d',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/90669aad-d526-425f-a7ab-34ef714e7dd5',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'speed',   delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b3f1_2: {
    bg: '#f284da',
    title: 'Договориться о приоритетах',
    desc: 'Вместе с помощником определить, что важнее всего сделать в первую очередь, и выстроить работу вокруг главных задач',
    charImg: 'https://www.figma.com/api/mcp/asset/36cfe38d-3167-4917-ac02-ea87e9c205d0',
    blurImg: 'https://www.figma.com/api/mcp/asset/a9987f73-41bb-4423-99a2-e42599d92891',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/c69ee484-ed95-4036-bb4a-ee15f429eab2',
    tags: [
      { stat: 'speed',  delta: +1 },
      { stat: 'stress', delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b3f1_3: {
    bg: '#9d8af1',
    title: 'Поставить задание',
    desc: 'Чётко объяснить Цыплёнку, что нужно сделать, и доверить ему работу — иногда достаточно дать правильное задание',
    charImg: 'https://www.figma.com/api/mcp/asset/e2481e97-340b-42e3-8758-8258a9e0cfb1',
    blurImg: 'https://www.figma.com/api/mcp/asset/bb6ffda6-501a-4622-9e59-9e18137c2e1f',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/4809f653-90f7-421e-8e51-001550c22642',
    tags: [
      { stat: 'speed',   delta: +1 },
      { stat: 'quality', delta: -1 },
    ],
    nextStep: 'step4',
  },

  // ── STEP 3 — Branch 3, Family 2 (делать параллельно) ──
  // node-id: 118-3030
  s3b3f2_1: {
    bg: '#3cda83',
    title: 'Главная цель достигнута',
    desc: 'Сосредоточиться на том, что принесёт наибольший результат, и не отвлекаться на второстепенные детали',
    charImg: 'https://www.figma.com/api/mcp/asset/d4351cb7-aa54-4666-851a-221cd43b7329',
    blurImg: 'https://www.figma.com/api/mcp/asset/604a1172-1f91-489b-af91-58a314154423',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/f686b326-ceec-48a0-9597-295004c42bbf',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'stress',  delta: +1 },
    ],
    nextStep: 'step4',
  },
  s3b3f2_2: {
    bg: '#f284da',
    title: 'Обсудить с другом',
    desc: 'В процессе параллельной работы остановиться и сверить результаты с Цыплёнком, чтобы всё шло в одном направлении',
    charImg: 'https://www.figma.com/api/mcp/asset/7b456c0e-e179-4b57-9cf4-c69075db3ddb',
    blurImg: 'https://www.figma.com/api/mcp/asset/5b6ca590-c3bd-4b74-8a17-70e9108b24f9',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/2c1d7f4e-decc-4a4a-a826-7ad06a3832df',
    tags: [
      { stat: 'speed',   delta: -1 },
      { stat: 'quality', delta: +1 },
    ],
    nextStep: 'step4',
  },
  s3b3f2_3: {
    bg: '#9d8af1',
    title: 'Делать по подобию',
    desc: 'Следовать уже отработанному шаблону и не изобретать велосипед — повторить то, что уже однажды сработало',
    charImg: 'https://www.figma.com/api/mcp/asset/19174440-888c-4aaf-8981-1074c2aa56bb',
    blurImg: 'https://www.figma.com/api/mcp/asset/3d96ef11-ffb7-4481-b599-297cce4c32d7',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/00cb08c1-7277-4351-ae75-a0ff435e8c14',
    tags: [
      { stat: 'speed',  delta: +1 },
      { stat: 'stress', delta: -1 },
    ],
    nextStep: 'step4',
  },

  // ── STEP 3 — Branch 3, Family 3 (синхронизироваться) ──
  // node-id: 122-3125
  s3b3f3_1: {
    bg: '#3cda83',
    title: 'Выстраивать обратную связь',
    desc: 'Договориться с Цыплёнком регулярно обмениваться информацией о прогрессе — так проще скорректировать курс вовремя',
    charImg: 'https://www.figma.com/api/mcp/asset/709f564e-faac-4b30-a684-355d80e422f0',
    blurImg: 'https://www.figma.com/api/mcp/asset/b4a4b2e4-4a8e-402c-9991-5cda0e85fc38',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/875f266d-dc57-4d86-a61a-8b5af55c0af9',
    tags: [
      { stat: 'quality', delta: +1 },
      { stat: 'speed',   delta: -1 },
    ],
    nextStep: 'step4',
  },
  s3b3f3_2: {
    bg: '#f284da',
    title: 'Работать вразброс',
    desc: 'Каждый делает что хочет без координации — кажется, что свободы больше, но результат может не совпасть с ожиданиями',
    charImg: 'https://www.figma.com/api/mcp/asset/22f001df-dce8-47d7-8989-e0f9f0d1bae7',
    blurImg: 'https://www.figma.com/api/mcp/asset/d0a1c676-ec39-472e-b9a3-05f7c8ee99f4',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/deda3311-ebc8-4563-bf06-5eb7f509dbc9',
    tags: [
      { stat: 'stress', delta: +1 },
      { stat: 'speed',  delta: +1 },
    ],
    nextStep: 'step4',
  },
  s3b3f3_3: {
    bg: '#9d8af1',
    title: 'Решать это сообща',
    desc: 'Вместе с Цыплёнком обсудить каждый шаг и принимать решения только после того, как оба согласны с планом',
    charImg: 'https://www.figma.com/api/mcp/asset/aea77e40-657b-4c73-85ed-c976032a6e8b',
    blurImg: 'https://www.figma.com/api/mcp/asset/dad60d9a-007a-4cf2-86f9-f5693682d9a6',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/8568a3d5-0120-48eb-82e2-1e20989afd90',
    tags: [
      { stat: 'stress',  delta: -1 },
      { stat: 'quality', delta: +1 },
    ],
    nextStep: 'step4',
  },
};

// ─────────────────────────────────────────────
// STEP 3 CARD FAMILIES
// Key: `${step2Branch}_${step3Family}` — 9 unique screens
// ─────────────────────────────────────────────
export const STEP3_FAMILIES = {
  '1_1': ['s3b1f1_1', 's3b1f1_2', 's3b1f1_3'],
  '1_2': ['s3b1f2_1', 's3b1f2_2', 's3b1f2_3'],
  '1_3': ['s3b1f3_1', 's3b1f3_2', 's3b1f3_3'],
  '2_1': ['s3b2f1_1', 's3b2f1_2', 's3b2f1_3'],
  '2_2': ['s3b2f2_1', 's3b2f2_2', 's3b2f2_3'],
  '2_3': ['s3b2f3_1', 's3b2f3_2', 's3b2f3_3'],
  '3_1': ['s3b3f1_1', 's3b3f1_2', 's3b3f1_3'],
  '3_2': ['s3b3f2_1', 's3b3f2_2', 's3b3f2_3'],
  '3_3': ['s3b3f3_1', 's3b3f3_2', 's3b3f3_3'],
};

// ─────────────────────────────────────────────
// STEP CARD LISTS
// ─────────────────────────────────────────────
export const STEP_CARDS = {
  step1:   ['s1_1', 's1_2', 's1_3'],
  step2_1: ['s2_1_1', 's2_1_2', 's2_1_3'],
  step2_2: ['s2_2_1', 's2_2_2', 's2_2_3'],
  step2_3: ['s2_3_1', 's2_3_2', 's2_3_3'],
};

// ─────────────────────────────────────────────
// RESULT CARDS (Step 4)
// ─────────────────────────────────────────────
export const RESULT_CARDS = {
  bad: {
    bg: '#ff6c67',
    level: 'bad',
    title: 'Получилось не очень 😔',
    desc: 'Корзина получилась не такой, как ожидалось, и совсем небольшой — гости расстроились, а Кролик весь вечер чувствовал вину',
    charImg: 'https://www.figma.com/api/mcp/asset/0f558e7c-af43-425f-a580-101f02518984',
    blurImg: 'https://www.figma.com/api/mcp/asset/11410c2b-f3b3-42cc-85ea-a28ae753664c',
    starImg: 'https://www.figma.com/api/mcp/asset/c1432f9a-51a1-4fbe-a7af-1583fd2c44f0',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/667644f9-0841-4399-bfa3-139aecd073f4',
  },
  medium: {
    bg: '#ffa536',
    level: 'medium',
    title: 'Праздник удался, но... 😓',
    desc: 'Пасхальная корзина удалась, но Кролик так вымотался, что проспал половину торжества',
    charImg: 'https://www.figma.com/api/mcp/asset/7d493f2b-a8df-4009-9628-c3e971b23e42',
    blurImg: 'https://www.figma.com/api/mcp/asset/56d8f647-8b5e-4437-aaab-e2229894efaa',
    starImg: 'https://www.figma.com/api/mcp/asset/a6c8b215-7e1c-470f-927d-681588b0bdc8',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/988c1100-2141-44a8-96b0-5df32b694a0a',
  },
  good: {
    bg: '#3cda83',
    level: 'good',
    title: 'Праздник удался! 🤩',
    desc: 'Подарочная корзина обрадовала гостей! Кролик гордится собой — праздник прошёл идеально',
    charImg: 'https://www.figma.com/api/mcp/asset/cabbf746-508b-4a63-a42e-71efb2170702',
    blurImg: 'https://www.figma.com/api/mcp/asset/aab45274-a92f-4c63-87e4-be8e2878aab3',
    starImg: 'https://www.figma.com/api/mcp/asset/0a5ae656-5e12-4ba9-8a9e-4163dc3116f8',
    sparkleImg: 'https://www.figma.com/api/mcp/asset/5955f6c2-b531-4a02-8859-6abf24b9c0e8',
  },
};

// Result order on screen (left to right)
export const RESULT_ORDER = ['bad', 'medium', 'good'];

// ─────────────────────────────────────────────
// SCORE → RESULT
// ─────────────────────────────────────────────
export function computeResult(stats) {
  const score = stats.quality + stats.speed - stats.stress;
  if (score >= 4) return 'good';
  if (score >= 2) return 'medium';
  return 'bad';
}
