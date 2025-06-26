'use client';

import { useState } from 'react';
import Header from '@/components/Layout/Header';
import { mockAgents } from '@/data/mockData';

const adminUser = {
  id: 'admin1',
  email: 'admin@aigenthub.com',
  name: '관리자',
  type: 'admin' as const,
  credits: 999999
};

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'users' | 'agents' | 'payments' | 'settings'>('dashboard');

  const platformStats = {
    totalUsers: 1247,
    companyUsers: 89,
    totalRevenue: 15420000,
    totalAgentRuns: 8934,
    totalCreditsUsed: 45672
  };

  const recentUsers = [
    { id: '1', name: '홍길동', email: 'hong@example.com', type: 'individual', joinDate: '2024-01-15', status: 'active' },
    { id: '2', name: '테크컴퍼니', email: 'admin@techcompany.com', type: 'company', joinDate: '2024-01-14', status: 'pending' },
    { id: '3', name: '김영희', email: 'kim@example.com', type: 'individual', joinDate: '2024-01-13', status: 'active' }
  ];

  const tabs = [
    { id: 'dashboard', name: '대시보드', icon: '📊' },
    { id: 'users', name: '회원 관리', icon: '👥' },
    { id: 'agents', name: 'AI 에이전트', icon: '🤖' },
    { id: 'payments', name: '결제 관리', icon: '💳' },
    { id: 'settings', name: '설정', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={adminUser} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 페이지 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            관리자 대시보드
          </h1>
          <p className="text-gray-600">
            AI 에이전트 허브 플랫폼 관리
          </p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
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
            {/* 플랫폼 통계 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">👥</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">총 사용자</p>
                    <p className="text-2xl font-bold text-blue-600">{platformStats.totalUsers.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🏢</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">기업 사용자</p>
                    <p className="text-2xl font-bold text-green-600">{platformStats.companyUsers}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">💰</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">총 매출</p>
                    <p className="text-2xl font-bold text-purple-600">₩{platformStats.totalRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🤖</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">AI 실행 횟수</p>
                    <p className="text-2xl font-bold text-orange-600">{platformStats.totalAgentRuns.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">⚡</div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">사용된 크레딧</p>
                    <p className="text-2xl font-bold text-red-600">{platformStats.totalCreditsUsed.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 최근 활동 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 가입 사용자</h3>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email} • {user.type === 'company' ? '기업' : '개인'}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.status === 'active' ? '활성' : '승인대기'}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{user.joinDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">에이전트 사용 통계</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">회의록 자동화 AI</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">2,341회</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">이메일 작성 AI</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">1,892회</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">AI 블로그 생성기</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">1,456회</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">리뷰 분석 AI</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">1,203회</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 회원 관리 탭 */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">회원 관리</h2>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  크레딧 일괄 지급
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  공지사항 발송
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">사용자 정보</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">유형</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">가입일</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">크레딧</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">상태</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">관리</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.type === 'company' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.type === 'company' ? '기업' : '개인'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.joinDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.type === 'company' ? '500' : '150'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.status === 'active' ? '활성' : '승인대기'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">상세</button>
                        {user.status === 'pending' && (
                          <button className="text-green-600 hover:text-green-900 mr-3">승인</button>
                        )}
                        <button className="text-red-600 hover:text-red-900">정지</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* AI 에이전트 관리 탭 */}
        {activeTab === 'agents' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">AI 에이전트 관리</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                신규 에이전트 추가
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{agent.icon}</div>
                    <div className="flex items-center space-x-2">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          defaultChecked={true}
                          className="form-checkbox h-4 w-4 text-blue-600 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-600">활성</span>
                      </label>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {agent.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {agent.description}
                  </p>

                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="flex items-center">
                      <span className="text-yellow-500 mr-1">⚡</span>
                      {agent.creditCost} 크레딧
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                      {Math.floor(Math.random() * 1000 + 100)}회 실행
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm">
                      프롬프트 편집
                    </button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 text-sm">
                      모델 설정
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 결제 관리 탭 */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">결제 관리</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">일별 매출</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">₩{(847000).toLocaleString()}</p>
                <p className="text-sm text-green-600">+12.5% 전일 대비</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">월별 매출</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">₩{(15420000).toLocaleString()}</p>
                <p className="text-sm text-green-600">+18.2% 전월 대비</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">환불 요청</h3>
                <p className="text-3xl font-bold text-red-600 mb-2">3건</p>
                <p className="text-sm text-gray-600">₩{(45000).toLocaleString()} 환불 대기</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">크레딧 패키지 관리</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">
                신규 패키지 추가
              </button>
              <div className="text-sm text-gray-600">
                현재 4개의 크레딧 패키지가 운영 중입니다.
              </div>
            </div>
          </div>
        )}

        {/* 설정 탭 */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">시스템 설정</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">플랫폼 설정</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">신규 회원가입 허용</span>
                    <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">기업 계정 자동 승인</span>
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">유지보수 모드</span>
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">알림 설정</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">신규 가입 알림</span>
                    <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">결제 실패 알림</span>
                    <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">시스템 오류 알림</span>
                    <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-blue-600" />
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