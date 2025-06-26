'use client';

import { AIAgent } from '@/types';

interface AgentCardProps {
  agent: AIAgent;
  onClick: (agent: AIAgent) => void;
  disabled?: boolean;
}

const categoryNames = {
  general: '일반사무',
  marketing: '마케팅/광고',
  content: '콘텐츠 제작'
};

const categoryColors = {
  general: 'bg-blue-50 text-blue-700 border-blue-200',
  marketing: 'bg-green-50 text-green-700 border-green-200',
  content: 'bg-purple-50 text-purple-700 border-purple-200'
};

export default function AgentCard({ agent, onClick, disabled }: AgentCardProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 p-6 cursor-pointer transition-all hover:shadow-lg hover:border-blue-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={() => !disabled && onClick(agent)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{agent.icon}</div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium border ${categoryColors[agent.category]}`}>
          {categoryNames[agent.category]}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {agent.name}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {agent.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500">⚡</span>
          <span className="text-sm font-medium text-gray-700">
            {agent.creditCost} 크레딧
          </span>
        </div>
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            disabled
              ? 'bg-gray-200 text-gray-500'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          disabled={disabled}
        >
          실행하기
        </button>
      </div>
    </div>
  );
} 