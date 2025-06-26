'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Layout/Header';
import { mockUser, mockAgents } from '@/data/mockData';

export default function MeetingAIPage() {
  const [user] = useState(mockUser);
  const agent = mockAgents.find(a => a.id === 'meeting-ai')!;
  const [formData, setFormData] = useState({
    meetingContent: '',
    meetingFile: null as File | null,
    meetingFormat: '표준'
  });
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, meetingFile: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (user.credits < agent.creditCost) {
      alert('크레딧이 부족합니다. 크레딧을 충전해주세요.');
      return;
    }

    setIsRunning(true);
    
    // 목업 AI 실행 시뮬레이션
    setTimeout(() => {
      setResult(`# 프로젝트 킥오프 회의록

## 회의 정보
- **일시**: 2024년 1월 20일 오후 2:00 - 3:30
- **참석자**: 김팀장, 이개발자, 박디자이너, 최기획자
- **장소**: 회의실 A

## 회의 안건
1. 새로운 AI 에이전트 허브 프로젝트 시작
2. 역할 분담 및 일정 논의
3. 기술 스택 및 아키텍처 결정

## 주요 논의 내용

### 1. 프로젝트 개요
- AI 에이전트들을 통합한 플랫폼 개발
- 크레딧 기반 시스템 도입
- B2B 및 B2C 모두 지원

### 2. 역할 분담
- **김팀장**: 프로젝트 매니지먼트, 클라이언트 커뮤니케이션
- **이개발자**: 백엔드 개발, AI 모델 연동
- **박디자이너**: UI/UX 디자인, 프론트엔드 마크업
- **최기획자**: 기능 기획, 사용자 시나리오 작성

### 3. 개발 일정
- **1주차**: 기획 완료, 와이어프레임 작성
- **2-3주차**: UI 디자인, 백엔드 아키텍처 설계
- **4-8주차**: 개발 및 AI 모델 연동
- **9-10주차**: 테스트 및 버그 수정
- **11주차**: 베타 런칭

## 결정 사항
1. React + Next.js로 프론트엔드 개발
2. Node.js + Express로 백엔드 개발
3. OpenAI API 우선 연동, 추후 다른 모델 추가
4. 매주 금요일 오후 진행상황 공유 회의

## 액션 아이템
- [ ] 김팀장: 프로젝트 일정표 작성 (1/22까지)
- [ ] 이개발자: 기술 스택 상세 검토 (1/23까지)
- [ ] 박디자이너: 경쟁사 분석 및 레퍼런스 수집 (1/24까지)
- [ ] 최기획자: 사용자 페르소나 및 시나리오 작성 (1/25까지)

## 다음 회의
- **일시**: 2024년 1월 26일 오후 2:00
- **안건**: 기획안 및 디자인 시안 검토`);
      setIsRunning(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 뒤로가기 */}
        <div className="mb-6">
          <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            대시보드로 돌아가기
          </Link>
        </div>

        {/* 에이전트 정보 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{agent.icon}</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{agent.name}</h1>
                <p className="text-gray-600 mb-4">{agent.description}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <span className="text-yellow-500 mr-1">⚡</span>
                    {agent.creditCost} 크레딧 필요
                  </span>
                  <span className="flex items-center">
                    <span className="text-blue-500 mr-1">💰</span>
                    보유 크레딧: {user.credits}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 입력 폼 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">입력 정보</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  회의 내용 *
                </label>
                <textarea
                  name="meetingContent"
                  required
                  rows={8}
                  value={formData.meetingContent}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="회의에서 논의된 내용을 입력하세요..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  회의 자료 파일 (선택사항)
                </label>
                <input
                  type="file"
                  name="meetingFile"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX, TXT 파일만 지원</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  회의록 양식 *
                </label>
                <select
                  name="meetingFormat"
                  required
                  value={formData.meetingFormat}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="표준">표준</option>
                  <option value="간단">간단</option>
                  <option value="상세">상세</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isRunning || user.credits < agent.creditCost}
                className={`w-full font-medium py-3 px-4 rounded-md transition-colors ${
                  isRunning || user.credits < agent.creditCost
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isRunning ? '회의록 생성 중...' : `회의록 생성하기 (${agent.creditCost} 크레딧)`}
              </button>
            </form>
          </div>

          {/* 결과 영역 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">생성 결과</h2>
            
            {isRunning && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600">AI가 회의록을 생성하고 있습니다...</span>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800">{result}</pre>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                    다운로드
                  </button>
                  <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                    복사하기
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    재생성
                  </button>
                </div>
              </div>
            )}

            {!isRunning && !result && (
              <div className="text-center py-12 text-gray-500">
                <div className="text-4xl mb-4">📝</div>
                <p>회의 내용을 입력하고 실행 버튼을 눌러주세요</p>
              </div>
            )}
          </div>
        </div>

        {/* 사용 가이드 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">📋 사용 가이드</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">입력 팁</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• 회의 참석자, 일시, 장소를 포함해주세요</li>
                <li>• 주요 안건과 결정사항을 명확히 기록해주세요</li>
                <li>• 액션 아이템과 담당자를 포함해주세요</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">결과물</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• 체계적으로 정리된 회의록</li>
                <li>• 주요 결정사항과 액션 아이템 정리</li>
                <li>• 다운로드 가능한 문서 형태</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 