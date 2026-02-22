import ThreeBillionLogo from '../../assets/3billion.png';
import TmaxLogo from '../../assets/tmax.png';

export interface Task {
  title: string;
  date: string;
  details: string[];
}

export interface CareerItem {
  company: string;
  date: string;
  description: string;
  skills: string[];
  tasks: Task[];
  logo: string;
}

export const CAREER_DATA: CareerItem[] = [
  {
    company: '3billion',
    date: '2025.04 - 현재',
    description: '프론트엔드 개발자',
    skills: [
      'React',
      'Next',
      'Vite',
      'Zustand',
      'Tanstack Query',
      'Styled-components',
      'Mui',
      'Growthbook',
      'Sentry & Datadog',
    ],
    tasks: [
      {
        title: 'B2C/B2B 통합 주문 플랫폼 (포탈)',
        date: '2025.04 ~',
        details: [
          '외부 Google Form 기반 주문 프로세스를 플랫폼에 내재화하여 주문 데이터 일원화 및 운영 효율 개선',
          '주문 임시저장(Draft) 기능 구현으로 폼 유실 방지 및 주문 완료율 개선',
          '멀티 프로필 기능 설계 및 구현 (하나의 계정에서 여러 B2B 주문 가능)',
          '동적 주문 폼 구조 설계 및 Validation 로직 고도화 (사용자 입력 오류 감소)',
          'Growthbook 기반 Feature Flag 운영으로 점진적 기능 배포',
          'Sentry와 Datadog를 활용한 에러 모니터링 및 성능 분석',
        ],
      },
      {
        title: '사내 세일즈 운영 플랫폼',
        date: '2025.04 ~',
        details: [
          '반복 수동 업무를 UI 자동화로 전환하여 세일즈 운영 효율 개선',
          'Role 기반 접근 제어 구현으로 사용자 권한별 데이터 접근 분리',
          '주문 플랫폼 데이터와 연동하여 주문 상태 관리 및 내부 처리 프로세스 구축',
          '주문과 고객별 메모 기능 구현으로 세일즈 커뮤니케이션 이력 관리 체계화',
        ],
      },
    ],
    logo: ThreeBillionLogo,
  },
  {
    company: '주식회사 티맥스와플',
    date: '2023.05 - 2024.10 (1년 6개월)',
    description: '프론트엔드 개발 담당, 게시판 모듈 담당',
    skills: [
      'React',
      'styled-components',
      'Webpack',
      'Vite',
      'react-hook-form',
      'Mobx',
      'Tanstack Query',
    ],
    tasks: [
      {
        title: '서울시 교육청 사업건',
        date: '2024.08 - 퇴사',
        details: [
          'React 기반의 게시판 서비스 개발',
          'TanStack Query를 활용한 상태 관리 및 데이터 캐싱 최적화',
          'Modal과 사용자 정보를 Context API와 Provider 패턴을 활용해 전역으로 관리',
          '사내 npm 레지스트리 모듈 배포',
        ],
      },
      {
        title: '(주)푸디스트 사업건',
        date: '2023.06 - 2024.08',
        details: [
          'React 기반의 게시판 & 차트 서비스 개발',
          'Mobx를 활용한 전역 상태 관리',
          '사내 npm 레지스트리 모듈 배포',
          'react-helmet을 사용한 SEO 관련 메타 태그 관리',
          'VOC 이슈 대응 및 고도화 작업',
        ],
      },
    ],
    logo: TmaxLogo,
  },
];
