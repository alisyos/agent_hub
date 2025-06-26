'use client';

import Link from 'next/link';
import { User } from '@/types';

interface HeaderProps {
  user?: User;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
}

export default function Header({ user, onLoginClick, onLogoutClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              🤖 AI 에이전트 허브
            </Link>
          </div>

          {/* 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              대시보드
            </Link>
            <Link href="/agents" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              AI 에이전트
            </Link>
            <Link href="/credits" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              크레딧 충전
            </Link>
            {user?.type === 'company' && (
              <Link href="/company-admin" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                회사 관리
              </Link>
            )}
            {user?.type === 'admin' && (
              <Link href="/admin" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                관리자
              </Link>
            )}
          </nav>

          {/* 사용자 정보 */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">크레딧</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">
                    {user.credits.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">{user.name}님</span>
                  <button
                    onClick={onLogoutClick}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    로그아웃
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={onLoginClick}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  로그인
                </button>
                <Link href="/signup" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  회원가입
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 