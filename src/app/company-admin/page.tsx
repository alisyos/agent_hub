'use client';

import { useState } from 'react';
import Header from '@/components/Layout/Header';
import { mockCompanyUser, mockAgents } from '@/data/mockData';

export default function CompanyAdminPage() {
  const [user] = useState(mockCompanyUser);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'employees' | 'agents' | 'stats'>('dashboard');

  const employees = [
    { id: '1', name: '김직원', email: 'employee1@company.com', department: '마케팅팀', position: '사원', credits: 50, status: 'active' },
    { id: '2', name: '이직원', email: 'employee2@company.com', department: '개발팀', position: '대리', credits: 75, status: 'active' },
    { id: '3', name: '박직원', email: 'employee3@company.com', department: '기획팀', position: '주임', credits: 30, status: 'inactive' }
  ];

  const companyStats = {
    totalEmployees: 25,
    activeEmployees: 22,
    totalCreditsUsed: 1250,
    totalAgentRuns: 87,
    costSavings: 45
  };

  const tabs = [
    { id: 'dashboard', name: '대시보드', icon: '📊' },
    { id: 'employees', name: '직원 관리', icon: '👥' },
    { id: 'agents', name: '에이전트 관리', icon: '🤖' },
    { id: 'stats', name: '통계', icon: '📈' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 페이지 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            회사 관리자 대시보드
          </h1>
          <p className="text-gray-600">
            {user.company?.name} - {user.name}님
          </p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'dashboard' | 'employees' | 'agents' | 'stats')}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* 대시보드 탭 */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* 통계 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">👥</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">총 직원 수</p>
                    <p className="text-2xl font-bold text-blue-600">{companyStats.totalEmployees}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">✅</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">활성 직원</p>
                    <p className="text-2xl font-bold text-green-600">{companyStats.activeEmployees}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">⚡</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">이번 달 크레딧 사용</p>
                    <p className="text-2xl font-bold text-purple-600">{companyStats.totalCreditsUsed}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">💰</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">절약된 시간</p>
                    <p className="text-2xl font-bold text-orange-600">{companyStats.costSavings}시간</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 최근 활동 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 직원 활동</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">김직원</p>
                      <p className="text-sm text-gray-600">회의록 자동화 AI 사용</p>
                    </div>
                    <span className="text-xs text-gray-500">2시간 전</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">이직원</p>
                      <p className="text-sm text-gray-600">AI 블로그 생성기 사용</p>
                    </div>
                    <span className="text-xs text-gray-500">4시간 전</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">박직원</p>
                      <p className="text-sm text-gray-600">리뷰 분석 AI 사용</p>
                    </div>
                    <span className="text-xs text-gray-500">1일 전</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">인기 에이전트</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">회의록 자동화 AI</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">24회</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">이메일 작성 AI</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">18회</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">AI 블로그 생성기</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">15회</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 직원 관리 탭 */}
        {activeTab === 'employees' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">직원 관리</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                직원 초대
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      직원 정보
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      부서/직급
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      보유 크레딧
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      상태
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      관리
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{employee.department}</div>
                        <div className="text-sm text-gray-500">{employee.position}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {employee.credits}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          employee.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {employee.status === 'active' ? '활성' : '비활성'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">권한 설정</button>
                        <button className="text-red-600 hover:text-red-900">비활성화</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 에이전트 관리 탭 */}
        {activeTab === 'agents' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">에이전트 관리</h2>
              <p className="text-sm text-gray-600">직원들이 사용할 수 있는 에이전트를 선택하세요</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{agent.icon}</div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="form-checkbox h-4 w-4 text-blue-600 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">활성화</span>
                    </label>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {agent.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {agent.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <span className="text-yellow-500 mr-1">⚡</span>
                      {agent.creditCost} 크레딧
                    </span>
                    <button className="text-blue-600 hover:text-blue-800">
                      권한 설정
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 통계 탭 */}
        {activeTab === 'stats' && (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-gray-900">사용 통계</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">월별 크레딧 사용량</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">1월</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <span className="text-sm font-medium">1,250</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">12월</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                      <span className="text-sm font-medium">980</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">11월</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-sm font-medium">720</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">에이전트별 사용 현황</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">회의록 자동화 AI</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">24회 (28%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">이메일 작성 AI</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">18회 (21%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">AI 블로그 생성기</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">15회 (17%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">리뷰 분석 AI</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">12회 (14%)</span>
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