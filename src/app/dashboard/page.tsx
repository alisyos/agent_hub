'use client';

import { useState } from 'react';
import Header from '@/components/Layout/Header';
import AgentCard from '@/components/Agent/AgentCard';
import { mockAgents, mockUser } from '@/data/mockData';
import { AIAgent } from '@/types';

export default function DashboardPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'general' | 'marketing' | 'content'>('all');
  const [user] = useState(mockUser);

  const handleAgentClick = (agent: AIAgent) => {
    // 실제로는 에이전트 실행 페이지로 이동
    alert(`${agent.name} 실행 페이지로 이동합니다.`);
  };

  const filteredAgents = selectedCategory === 'all' 
    ? mockAgents 
    : mockAgents.filter(agent => agent.category === selectedCategory);

  const categories = [
    { id: 'all', name: '전체', count: mockAgents.length },
    { id: 'general', name: '일반사무', count: mockAgents.filter(a => a.category === 'general').length },
    { id: 'marketing', name: '마케팅/광고', count: mockAgents.filter(a => a.category === 'marketing').length },
    { id: 'content', name: '콘텐츠 제작', count: mockAgents.filter(a => a.category === 'content').length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 대시보드 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            안녕하세요, {user.name}님! 👋
          </h1>
          <p className="text-gray-600">
            어떤 AI 에이전트를 사용해보시겠어요?
          </p>
        </div>

        {/* 빠른 통계 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="text-2xl mr-3">⚡</div>
              <div>
                <p className="text-sm font-medium text-gray-600">보유 크레딧</p>
                <p className="text-2xl font-bold text-blue-600">{user.credits.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="text-2xl mr-3">🤖</div>
              <div>
                <p className="text-sm font-medium text-gray-600">사용 가능한 에이전트</p>
                <p className="text-2xl font-bold text-green-600">{mockAgents.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="text-2xl mr-3">📊</div>
              <div>
                <p className="text-sm font-medium text-gray-600">이번 달 사용량</p>
                <p className="text-2xl font-bold text-purple-600">47</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="text-2xl mr-3">💰</div>
              <div>
                <p className="text-sm font-medium text-gray-600">이번 달 절약한 시간</p>
                <p className="text-2xl font-bold text-orange-600">12시간</p>
              </div>
            </div>
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* AI 에이전트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onClick={handleAgentClick}
              disabled={user.credits < agent.creditCost}
            />
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              해당 카테고리에 에이전트가 없습니다
            </h3>
            <p className="text-gray-600">
              다른 카테고리를 선택해보세요
            </p>
          </div>
        )}

        {/* 크레딧 부족 알림 */}
        {user.credits < 50 && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="text-yellow-400">⚠️</div>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  크레딧이 부족합니다
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>현재 보유 크레딧: {user.credits}</p>
                  <p>일부 에이전트 사용이 제한될 수 있습니다.</p>
                </div>
                <div className="mt-4">
                  <div className="-mx-2 -my-1.5 flex">
                    <button
                      type="button"
                      className="bg-yellow-50 px-2 py-1.5 rounded-md text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-600"
                    >
                      크레딧 충전하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 