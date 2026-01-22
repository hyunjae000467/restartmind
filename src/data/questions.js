export const questions = [
  {
    id: 1,
    text: "모의고사가 임박/끝난 직후인가?",
    type: "boolean",
    targetType: "Mock Exam", // Special boolean flag
  },
  {
    id: 2,
    text: "날씨가 더우면 슬럼프를 겪는 타입인가?",
    type: "scale",
    targetType: ["Physical Exhaustion", "Mental Collapse"],
  },
  {
    id: 3,
    text: "현재 외롭고 대화할 사람이 필요한가?",
    type: "scale",
    targetType: ["Isolation"],
  },
  {
    id: 4,
    text: "현재 바뀐 환경으로 인해 슬럼프를 겪고 있는가?",
    type: "scale",
    targetType: ["Environment Maladaptation"],
  },
  {
    id: 5,
    text: "성적의 정체, 하락으로 스트레스를 받는 중인가?",
    type: "scale",
    targetType: ["Grade Stagnation"],
  },
  {
    id: 6,
    text: "학습의 목표를 잃어서 슬럼프를 겪는 중인가?",
    type: "scale",
    targetType: ["Goal Loss"],
  },
  {
    id: 7,
    text: "아무것도 하기 싫고 의욕이 없다.",
    type: "scale",
    targetType: ["Motivation Loss"],
  },
  {
    id: 8,
    text: "평소에 수면 부족을 많이 겪는 편이다.",
    type: "scale",
    targetType: ["Physical Exhaustion"],
  },
  {
    id: 9,
    text: "선택과목의 선택 문제로 인해 슬럼프를 겪고 있다.",
    type: "boolean",
    targetType: "Optional Subject", // Special boolean flag
  },
];

export const types = {
  "Physical Exhaustion": { label: "체력 부족형", description: "체력이 떨어져서 집중하기 힘든 상태입니다. 휴식이 필요해요." },
  "Mental Collapse": { label: "멘탈 붕괴형", description: "멘탈이 흔들리고 있어요. 마인드 컨트롤이 필요합니다." },
  "Isolation": { label: "고립형", description: "혼자라는 생각에 힘들어하고 있어요. 대화가 필요합니다." },
  "Environment Maladaptation": { label: "환경 적응 불가형", description: "새로운 환경이 낯설어 적응하는 데 에너지를 쓰고 있네요." },
  "Grade Stagnation": { label: "성적 정체형", description: "노력에 비해 성적이 오르지 않아 답답함을 느끼고 있습니다." },
  "Goal Loss": { label: "목표 상실형", description: "무엇을 위해 공부하는지 잊어버린 상태입니다. 목표 재설정이 필요해요." },
  "Motivation Loss": { label: "의욕 상실형", description: "아무것도 하고 싶지 않은 무기력한 상태입니다. 작은 성취가 필요해요." },
  "Mock Exam": { label: "모의고사", description: "모의고사 전후로 겪는 일시적인 슬럼프일 수 있습니다." },
  "Optional Subject": { label: "선택과목", description: "선택과목에 대한 고민이 슬럼프의 원인이 되고 있습니다." },
};
