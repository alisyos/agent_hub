'use client';

import { useState } from 'react';
import Header from '@/components/Layout/Header';
import { mockUser, mockCreditPackages } from '@/data/mockData';
import { CreditPackage } from '@/types';

export default function CreditsPage() {
  const [user] = useState(mockUser);
  const [selectedPackage, setSelectedPackage] = useState<CreditPackage | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePurchase = (creditPackage: CreditPackage) => {
    setSelectedPackage(creditPackage);
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    alert(`${selectedPackage?.name} 패키지 결제가 완료되었습니다!`);
    setShowPaymentModal(false);
  };

  const recentTransactions = [
    { id: '1', date: '2024-01-15', package: '스탠다드', credits: 300, amount: 25000, method: '신용카드' },
    { id: '2', date: '2024-01-10', package: '베이직', credits: 100, amount: 10000, method: '카카오페이' },
    { id: '3', date: '2024-01-05', package: '프리미엄', credits: 500, amount: 40000, method: '네이버페이' }
  ];

  const usageHistory = [
    { id: '1', date: '2024-01-16', agent: '회의록 자동화 AI', credits: 10 },
    { id: '2', date: '2024-01-16', agent: 'AI 블로그 생성기', credits: 15 },
    { id: '3', date: '2024-01-15', agent: '이메일 작성 AI', credits: 5 },
    { id: '4', date: '2024-01-15', agent: '리뷰 분석 AI', credits: 12 },
    { id: '5', date: '2024-01-14', agent: 'AI 카드뉴스 생성기', credits: 25 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 페이지 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            크레딧 관리
          </h1>
          <p className="text-gray-600">
            크레딧을 충전하고 사용 내역을 확인하세요
          </p>
        </div>

        {/* 현재 크레딧 현황 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">현재 보유 크레딧</h2>
              <p className="text-3xl font-bold">{user.credits.toLocaleString()}</p>
            </div>
            <div className="text-4xl">⚡</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 크레딧 패키지 */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">크레딧 패키지</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockCreditPackages.map((creditPackage) => (
                <div
                  key={creditPackage.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 relative hover:shadow-lg transition-shadow"
                >
                  {creditPackage.bonus && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      +{creditPackage.bonus} 보너스
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {creditPackage.name}
                    </h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {creditPackage.credits.toLocaleString()}
                      {creditPackage.bonus && <span className="text-lg text-red-500">+{creditPackage.bonus}</span>}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">크레딧</p>
                    <div className="text-2xl font-bold text-gray-900 mb-4">
                      ₩{creditPackage.price.toLocaleString()}
                    </div>
                    <button
                      onClick={() => handlePurchase(creditPackage)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      구매하기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 사이드바 - 통계 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">이번 달 통계</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">사용한 크레딧</span>
                  <span className="font-semibold">67</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">실행한 에이전트</span>
                  <span className="font-semibold">15회</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">절약한 시간</span>
                  <span className="font-semibold">12시간</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">크레딧 사용 팁</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 복잡한 작업일수록 더 많은 크레딧이 필요합니다</li>
                <li>• 패키지 구매 시 보너스 크레딧을 받을 수 있습니다</li>
                <li>• 에러 발생 시 크레딧이 차감되지 않습니다</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 거래 내역 */}
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 충전 내역 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 충전 내역</h3>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{transaction.package}</p>
                      <p className="text-sm text-gray-600">{transaction.date} • {transaction.method}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-blue-600">+{transaction.credits}</p>
                      <p className="text-sm text-gray-600">₩{transaction.amount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 사용 내역 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 사용 내역</h3>
              <div className="space-y-4">
                {usageHistory.map((usage) => (
                  <div key={usage.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{usage.agent}</p>
                      <p className="text-sm text-gray-600">{usage.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">-{usage.credits}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 결제 모달 */}
      {showPaymentModal && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">결제하기</h2>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">{selectedPackage.name} 패키지</h3>
              <p className="text-gray-600">
                {selectedPackage.credits.toLocaleString()}
                {selectedPackage.bonus && ` (+${selectedPackage.bonus} 보너스)`} 크레딧
              </p>
              <p className="text-xl font-bold text-blue-600 mt-2">
                ₩{selectedPackage.price.toLocaleString()}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">결제 방법</p>
              <div className="space-y-2">
                {[
                  { id: 'card', name: '신용카드/체크카드' },
                  { id: 'kakaopay', name: '카카오페이' },
                  { id: 'naverpay', name: '네이버페이' },
                  { id: 'tosspay', name: '토스페이' }
                ].map((method) => (
                  <label key={method.id} className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">{method.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handlePayment}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                결제하기
              </button>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 