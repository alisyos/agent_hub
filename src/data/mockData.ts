import { AIAgent, CreditPackage, User } from '@/types';

export const mockAgents: AIAgent[] = [
  // 일반사무 카테고리
  {
    id: 'meeting-ai',
    name: '회의록 자동화 AI',
    category: 'general',
    description: '회의 내용을 자동으로 정리하여 체계적인 회의록을 생성합니다.',
    creditCost: 10,
    icon: '📝',
    inputs: [
      { name: '회의내용', type: 'text', required: true },
      { name: '회의자료 파일', type: 'file', required: false },
      { name: '회의록 양식', type: 'select', required: true, options: ['표준', '간단', '상세'] }
    ],
    outputs: ['회의제목', '일시', '회의록']
  },
  {
    id: 'email-ai',
    name: '이메일 작성 AI',
    category: 'general',
    description: '목적에 맞는 전문적인 이메일을 자동으로 작성해드립니다.',
    creditCost: 5,
    icon: '📧',
    inputs: [
      { name: '사용자 말투', type: 'select', required: true, options: ['정중함', '친근함', '공식적'] },
      { name: '이메일 유형', type: 'select', required: true, options: ['업무협조', '제안서', '감사인사'] },
      { name: '이메일 목적/내용', type: 'text', required: true }
    ],
    outputs: ['작성 이메일 본문']
  },
  {
    id: 'ppt-ai',
    name: 'AI PPT 슬라이드 생성기',
    category: 'general',
    description: '내용을 바탕으로 완성도 높은 PPT 슬라이드를 생성합니다.',
    creditCost: 15,
    icon: '📊',
    inputs: [
      { name: '내용입력', type: 'text', required: true },
      { name: '파일 업로드', type: 'file', required: false },
      { name: '목적', type: 'select', required: true, options: ['제안서', '보고서', '교육자료'] },
      { name: '타겟', type: 'text', required: true },
      { name: '슬라이드수', type: 'select', required: true, options: ['5장', '10장', '15장', '20장'] }
    ],
    outputs: ['슬라이드 내용', '시각적 제안', '발표 스크립트']
  },
  {
    id: 'voice-doc-ai',
    name: '음성파일 기반 문서 자동화',
    category: 'general',
    description: '음성 파일을 분석하여 다양한 형태의 문서로 변환합니다.',
    creditCost: 20,
    icon: '🎤',
    inputs: [
      { name: '음성파일', type: 'file', required: true },
      { name: '문서유형', type: 'select', required: true, options: ['회의록', '제안서', '업무보고서'] }
    ],
    outputs: ['생성문서']
  },

  // 마케팅/광고 카테고리
  {
    id: 'review-ai',
    name: '리뷰 분석 AI',
    category: 'marketing',
    description: '고객 리뷰를 종합 분석하여 인사이트와 개선방안을 제시합니다.',
    creditCost: 12,
    icon: '⭐',
    inputs: [
      { name: '리뷰자료', type: 'text', required: true },
      { name: '리뷰 파일', type: 'file', required: false },
      { name: '제품/서비스 군', type: 'text', required: true },
      { name: '제품/서비스 이름', type: 'text', required: true }
    ],
    outputs: ['리뷰분석 보고서 - 긍부정 비율, 리뷰분석, 개선방안 및 인사이트']
  },
  {
    id: 'keyword-ai',
    name: '키워드 분석',
    category: 'marketing',
    description: '키워드 트렌드와 플랫폼별 분석 결과를 제공합니다.',
    creditCost: 8,
    icon: '🔍',
    inputs: [
      { name: '분석요청 키워드', type: 'text', required: true }
    ],
    outputs: ['블로그 영역 분석', '카페영역 분석', '유튜브 분석', '뉴스영역 분석', '세부분석: 키워드빈도, 감정분석, 긍부정평가']
  },
  {
    id: 'sns-event-ai',
    name: 'SNS 이벤트 기획 AI',
    category: 'marketing',
    description: '효과적인 SNS 이벤트 기획안을 자동으로 생성합니다.',
    creditCost: 18,
    icon: '🎉',
    inputs: [
      { name: '카테고리', type: 'text', required: true },
      { name: '제품명', type: 'text', required: true },
      { name: '특징', type: 'text', required: true },
      { name: '목표KPI', type: 'text', required: true },
      { name: '타겟', type: 'text', required: true },
      { name: '예산', type: 'text', required: true },
      { name: '기간', type: 'text', required: true }
    ],
    outputs: ['이벤트 기획안 - 실행 계획, 콘텐츠 전략, 목표&성과, 경품&예산']
  },
  {
    id: 'ad-analysis-ai',
    name: '광고 문구 분석 및 제안',
    category: 'marketing',
    description: '경쟁사 광고를 분석하고 효과적인 광고 소재를 제안합니다.',
    creditCost: 14,
    icon: '📢',
    inputs: [
      { name: '검색키워드/자사명', type: 'text', required: true },
      { name: '광고 데이터', type: 'text', required: true },
      { name: '광고 이미지', type: 'file', required: false }
    ],
    outputs: ['자사광고 분석', '경쟁사 분석', '광고 소재 제안']
  },

  // 콘텐츠 제작 카테고리
  {
    id: 'cardnews-ai',
    name: 'AI 카드뉴스 생성기',
    category: 'content',
    description: '매력적인 카드뉴스를 기획부터 이미지까지 자동 생성합니다.',
    creditCost: 25,
    icon: '🎨',
    inputs: [
      { name: '카드뉴스 유형', type: 'select', required: true, options: ['정보전달', '홍보', '교육'] },
      { name: '내용', type: 'text', required: true },
      { name: '목적', type: 'text', required: true },
      { name: '타겟', type: 'text', required: true },
      { name: '문체', type: 'select', required: true, options: ['정중함', '친근함', '유머러스'] },
      { name: '카드 수', type: 'select', required: true, options: ['5장', '8장', '10장'] }
    ],
    outputs: ['카드뉴스 목차', '카드뉴스 제안', '카드뉴스 이미지']
  },
  {
    id: 'blog-ai',
    name: 'AI 블로그 생성기',
    category: 'content',
    description: 'SEO 최적화된 전문적인 블로그 포스팅을 자동 생성합니다.',
    creditCost: 15,
    icon: '✍️',
    inputs: [
      { name: '유형', type: 'select', required: true, options: ['정보성', '리뷰', '하우투'] },
      { name: '목적', type: 'text', required: true },
      { name: '내용입력', type: 'text', required: true },
      { name: '파일 업로드', type: 'file', required: false },
      { name: '페르소나', type: 'text', required: true },
      { name: '타겟', type: 'text', required: true },
      { name: '문체', type: 'select', required: true, options: ['전문적', '친근함', '유머러스'] }
    ],
    outputs: ['블로그 포스팅 내용', '이미지 생성 프롬프트', '해시태그']
  }
];

export const mockCreditPackages: CreditPackage[] = [
  { id: 'basic', name: '베이직', credits: 100, price: 10000 },
  { id: 'standard', name: '스탠다드', credits: 300, price: 25000, bonus: 30 },
  { id: 'premium', name: '프리미엄', credits: 500, price: 40000, bonus: 100 },
  { id: 'enterprise', name: '엔터프라이즈', credits: 1000, price: 70000, bonus: 300 }
];

export const mockUser: User = {
  id: 'user1',
  email: 'user@example.com',
  name: '홍길동',
  type: 'individual',
  credits: 150
};

export const mockCompanyUser: User = {
  id: 'user2',
  email: 'company@example.com',
  name: '김직원',
  type: 'company',
  credits: 500,
  company: {
    name: '테크컴퍼니',
    businessNumber: '123-45-67890',
    department: '마케팅팀',
    position: '팀장'
  }
}; 