'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Layout/Header';
import AgentCard from '@/components/Agent/AgentCard';
import { mockAgents, mockUser } from '@/data/mockData';
import { AIAgent } from '@/types';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleAgentClick = (agent: AIAgent) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    // 실제로는 에이전트 실행 페이지로 이동
    alert(`${agent.name} 실행 페이지로 이동합니다.`);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const featuredAgents = mockAgents.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        user={isLoggedIn ? mockUser : undefined}
        onLoginClick={() => setShowLoginModal(true)}
        onLogoutClick={handleLogout}
      />

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI 에이전트 허브
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              다양한 업무 지원 AI 에이전트를 통합한 플랫폼
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    로그인하고 시작하기
                  </button>
                  <Link href="/signup" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    회원가입
                  </Link>
                </>
              ) : (
                <Link href="/dashboard" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  대시보드로 이동
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 섹션 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              강력한 AI 에이전트들
            </h2>
            <p className="text-xl text-gray-600">
              업무 효율성을 높이는 다양한 AI 도구들을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAgents.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                onClick={handleAgentClick}
                disabled={!isLoggedIn}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/agents" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
              모든 AI 에이전트 보기
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">크레딧 기반 시스템</h3>
              <p className="text-gray-600">필요한 만큼만 크레딧을 충전하여 경제적으로 이용하세요</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">기업 계정 지원</h3>
              <p className="text-gray-600">팀 단위로 AI 에이전트를 관리하고 사용량을 모니터링하세요</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">다양한 업무 지원</h3>
              <p className="text-gray-600">문서 작성부터 마케팅까지 다양한 분야의 AI 도구를 제공합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* 로그인 모달 */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">로그인</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleLogin}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  로그인
                </button>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                >
                  취소
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">또는 소셜 로그인</p>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors text-sm">
                    카카오
                  </button>
                  <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-sm">
                    네이버
                  </button>
                  <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors text-sm">
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
