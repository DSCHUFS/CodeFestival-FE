export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    id: 'item-1',
    question: '대회 신청은 어떻게 하면 되나요?',
    answer: '대회 홈페이지(https://codefestival.gdghufs.com)를 통해 참가 신청하실 수 있습니다.',
  },
  {
    id: 'item-2',
    question: '비기너 트랙과 챌린저 트랙의 차이는 무엇인가요?',
    answer:
      '비기너 트랙은 알고리즘 기본 기법으로 해결할 수 있는 비교적 낮은 난이도의 문제 7문제로 구성됩니다.\n챌린저 트랙은 알고리즘 기법을 응용하여 해결할 수 있는 난이도의 문제 7문제로 구성됩니다.',
  },
  {
    id: 'item-3',
    question: '참가 신청 후 선발 결과는 언제, 어떻게 알 수 있나요?',
    answer: '참가 선발자 안내는 2024년 10월 24일(목) 17:00에 휴대전화 및 이메일로 개별 안내됩니다.',
  },
  {
    id: 'item-4',
    question: '참가 자격에 휴학생과 졸업대기생도 포함되나요?',
    answer:
      '네, 한국외국어대학교 재학/휴학/졸업대기생 모두 참가 자격이 있습니다.\n단, 2024년 2학기 기준 재학생만 상금 수여가 가능하며, 휴학/졸업대기생은 상금을 지급받을 수 없습니다.',
  },
  {
    id: 'item-5',
    question: '대회 당일 필요한 준비물이나 복장은 무엇인가요?',
    answer:
      '학생증 또는 신분증을 지참하여 본인 확인을 진행해야 합니다. 특별한 복장 규정은 없으나 편안한 복장을 권장합니다.',
  },
  {
    id: 'item-6',
    question: '개인 노트북이나 장비를 가져가도 되나요?',
    answer:
      '대회는 한국외국어대학교 전산실습실 PC에서 진행되며, 개인 노트북이나 장비 사용은 허용되지 않습니다.',
  },
  {
    id: 'item-7',
    question: '대회 중 인터넷 사용이 가능한가요?',
    answer:
      '대회 중에는 인터넷 검색 및 외부 자료 열람이 금지되며, Goorm Edu 내 제공된 레퍼런스 문서만 사용 가능합니다.',
  },
  {
    id: 'item-8',
    question: '사용 가능한 프로그래밍 언어는 어떤 것이 있나요?',
    answer:
      'C (gcc 11.1.0), C++ (g++ 11.1.0), Java (Open JDK 14), Python3 (PyPy 7.3.5)를 사용할 수 있습니다.',
  },
  {
    id: 'item-9',
    question: '시상식에 참석하지 못하는 경우 상장과 상품은 어떻게 받나요?',
    answer:
      '상장 및 상품은 한국외국어대학교 글로벌캠퍼스 방문 수령이 원칙입니다. 부득이한 경우 대회 운영팀과 협의하여 대체 수령 방법을 논의할 수 있습니다. 우편 발송은 원칙적으로 불가하나, 특수 상황 시 별도 협의 가능합니다.',
  },
  {
    id: 'item-10',
    question: '참가 신청 인원이 정원을 초과하면 어떻게 되나요?',
    answer:
      '정원이 초과될 경우, 우선 선발 대상자를 가점 합계에 따라 선발하고, 동일한 가점을 가진 지원자들끼리는 무작위로 선발합니다.\n정원이 남을 경우, 그 다음으로 낮은 가점 합계를 가진 지원자들 중에서 무작위로 선발합니다.',
  },
];
