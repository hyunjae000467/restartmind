export const questions = [
  // --- Special Boolean Flags (Preserved) ---
  {
    id: 1,
    text: "모의고사가 임박했거나 끝난 직후인가요?",
    type: "boolean",
    targetType: "Mock Exam",
  },
  {
    id: 2,
    text: "선택과목 선택으로 인해 고민이 많은가요?",
    type: "boolean",
    targetType: "Optional Subject",
  },
  // --- 1. Physical Exhaustion ---
  {
    id: 101,
    text: "평소보다 몸이 무겁고 어깨나 목의 통증이 심해 공부 집중이 안 된다.",
    type: "boolean",
    targetType: "Physical Exhaustion",
  },
  {
    id: 102,
    text: "주변에서 \"피곤해 보인다\"는 말을 자주 듣는다.",
    type: "boolean",
    targetType: "Physical Exhaustion",
  },
  {
    id: 103,
    text: "최근 공부 중에 나도 모르게 책상에서 졸거나 기절하듯 잠든 적이 있다.",
    type: "boolean",
    targetType: "Physical Exhaustion",
  },
  // --- 2. Mental Collapse ---
  {
    id: 201,
    text: "작은 실수에도 감정이 크게 흔들린다.",
    type: "boolean",
    targetType: "Mental Collapse",
  },
  {
    id: 202,
    text: "감정 기복이 행동에 크게 영향을 주는 성격이다.",
    type: "boolean",
    targetType: "Mental Collapse",
  },
  {
    id: 203,
    text: "나는 평소 완벽주의 성향이 강해 스스로를 심하게 몰아붙이는 편이다.",
    type: "boolean",
    targetType: "Mental Collapse",
  },
  // --- 3. Isolation ---
  {
    id: 301,
    text: "평소 속마음을 남에게 잘 표현하지 않고 혼자 감내하는 편이다.",
    type: "boolean",
    targetType: "Isolation",
  },
  {
    id: 302,
    text: "SNS를 보며 다른 사람들의 즐거운 모습에 박탈감을 크게 느꼈다.",
    type: "boolean",
    targetType: "Isolation",
  },
  {
    id: 303,
    text: "밥을 혼자 먹거나 혼자 이동하는 시간의 공허함이 학업 의욕을 꺾는다.",
    type: "boolean",
    targetType: "Isolation",
  },
  // --- 4. Environment Maladaptation ---
  {
    id: 401,
    text: "주변 사람들의 아주 작은 소음이나 움직임에도 공부 흐름이 끊긴다.",
    type: "boolean",
    targetType: "Environment Maladaptation",
  },
  {
    id: 402,
    text: "주변 환경 때문에 짜증이 나서 공부를 중단하고 집에 간 적이 있다.",
    type: "boolean",
    targetType: "Environment Maladaptation",
  },
  {
    id: 403,
    text: "쾌적한 환경만 갖춰진다면 지금보다 훨씬 잘할 수 있을 거라는 확신이 든다.",
    type: "boolean",
    targetType: "Environment Maladaptation",
  },
  // --- 5. Grade Stagnation ---
  {
    id: 501,
    text: "나의 학습 한계치에 도달했다는 생각이 들어 허무하다.",
    type: "boolean",
    targetType: "Grade Stagnation",
  },
  {
    id: 502,
    text: "나는 결과 지향적인 성격이라 과정보다는 성과가 중요하다고 생각한다.",
    type: "boolean",
    targetType: "Grade Stagnation",
  },
  {
    id: 503,
    text: "성적이 오르지 않는 이유를 도무지 알 수 없어 답답하다.",
    type: "boolean",
    targetType: "Grade Stagnation",
  },
  // --- 6. Goal Loss ---
  {
    id: 601,
    text: "지금 공부를 왜 하는지 잘 모르겠다.",
    type: "boolean",
    targetType: "Goal Loss",
  },
  {
    id: 602,
    text: "남들의 성공 수기를 봐도 나와는 상관없는 이야기처럼 들린다.",
    type: "boolean",
    targetType: "Goal Loss",
  },
  {
    id: 603,
    text: "남들이 하니까 억지로 하고 있다는 생각이 강하게 든다.",
    type: "boolean",
    targetType: "Goal Loss",
  },
  // --- 7. Method Doubt ---
  {
    id: 701,
    text: "다른 사람들의 공부법이나 교재를 보면 자꾸 내 것을 바꾸고 싶어진다.",
    type: "boolean",
    targetType: "Method Doubt",
  },
  {
    id: 702,
    text: "공부법에 관한 영상이나 글을 찾아보느라 정작 공부 시간을 뺏긴 적이 있다.",
    type: "boolean",
    targetType: "Method Doubt",
  },
  {
    id: 703,
    text: "방대한 공부 양을 어떻게 정리해야 할지 몰라 혼란스럽다.",
    type: "boolean",
    targetType: "Method Doubt",
  },
  // --- 8. Motivation Loss ---
  {
    id: 801,
    text: "무엇을 해도 재미가 없고 세상 만사가 귀찮게 느껴진다.",
    type: "boolean",
    targetType: "Motivation Loss",
  },
  {
    id: 802,
    text: "나는 한번 무기력함에 빠지면 스스로 빠져나오기 힘들어하는 편이다.",
    type: "boolean",
    targetType: "Motivation Loss",
  },
  {
    id: 803,
    text: "공부를 해야 한다는 사실은 알지만, 몸이 도저히 움직이지 않는다.",
    type: "boolean",
    targetType: "Motivation Loss",
  },
];

export const types = {
  "Physical Exhaustion": { label: "체력 부족형", description: "체력이 떨어져서 집중하기 힘든 상태입니다. 휴식이 필요해요." },
  "Mental Collapse": { label: "멘탈 붕괴형", description: "멘탈이 흔들리고 있어요. 마인드 컨트롤이 필요합니다." },
  "Isolation": { label: "고립형", description: "혼자라는 생각에 힘들어하고 있어요. 대화가 필요합니다." },
  "Environment Maladaptation": { label: "환경 적응 불가형", description: "새로운 환경이 낯설어 적응하는 데 에너지를 쓰고 있네요." },
  "Grade Stagnation": { label: "성적 정체형", description: "노력에 비해 성적이 오르지 않아 답답함을 느끼고 있습니다." },
  "Goal Loss": { label: "목표 상실형", description: "무엇을 위해 공부하는지 잊어버린 상태입니다. 목표 재설정이 필요해요." },
  "Method Doubt": { label: "학습 방향 의문형", description: "올바른 공부법인지 확신이 없어 불안해하고 있습니다." },
  "Motivation Loss": { label: "의욕 저하형", description: "아무것도 하고 싶지 않은 무기력한 상태입니다. 작은 성취가 필요해요." },

  // Preserved Types
  "Mock Exam": { label: "모의고사", description: "모의고사 전후로 겪는 일시적인 슬럼프일 수 있습니다." },
  "Optional Subject": { label: "선택과목", description: "선택과목에 대한 고민이 슬럼프의 원인이 되고 있습니다." },
};
