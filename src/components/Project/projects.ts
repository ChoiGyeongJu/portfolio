import ChatbotImages from '$assets/projects/chatbot';
import foodiImages from '$assets/projects/foodist';
import PortfolioImages from '$assets/projects/portfolio';
import seoulEduImages from '$assets/projects/seoulEdu';
import ThumbnailImages from '$assets/projects/thumbnailMaker';

const {
  'foodi_chart.png': foodiChart,
  'foodi_comment.png': foodiComment,
  'foodi_detail.png': foodiDetail,
  'foodi_home.png': foodiHome,
  'foodi_mobile_comment.png': MfoodiComment,
  'foodi_mobile_home.png': MfoodiHome,
} = foodiImages;

const {
  'edu_list.png': eduList,
  'edu_detail.png': eduDetail,
  'edu_category.png': eduCategory,
  'edu_write.png': eduWrite,
} = seoulEduImages;

const {
  'chat_pc.png': chat_pc,
  'chat_delete.png': chat_delete,
  'chat_mobile.png': chat_mobile,
  'chat_mobile_LNB.png': chat_mobile_LNB,
} = ChatbotImages;

const { 'main.png': main, 'example.png': example } = ThumbnailImages;

const {
  'banner.png': banner,
  'about.png': about,
  'skills.png': skills,
  'projects.png': project,
  'career.png': career,
} = PortfolioImages;

export const projects = [
  {
    id: 1,
    title: '서울시교육청 사업건',
    date: '2024.10 (사내 프로젝트)',
    description: '서울시 교육청 게시판 서비스 개발',
    features: [
      'TanStack Query를 활용한 상태 관리 및 데이터 캐싱 최적화',
      'Modal과 사용자 정보를 Context API와 Provider 패턴을 활용해 전역으로 관리',
    ],
    links: {
      notion: '',
      github: '',
      site: '',
    },
  },
  {
    id: 2,
    title: '성공식당 커뮤니티',
    date: '2024.08 (사내 프로젝트)',
    description: '자영업 사장님들의 커뮤니티',
    features: [
      '게시판 및 식자재 시세 차트 서비스 개발',
      ' 검색엔진 최적화를 위한 메타 태그 관리',
      'TinyMce 에디터 커스텀 및 셀프호스팅 적용',
      '공통 컴포넌트 사내 npm 라이브러리 배포',
    ],
    links: {
      notion: '',
      github: '',
      site: '',
    },
  },
  {
    id: 3,
    title: 'GPT chat-bot',
    date: '2024.12 (개인 프로젝트)',
    description: 'openAI 기반 챗봇',
    features: [
      'openAI 통신용 express 서버 구축 및 vercel 배포',
      '로컬스토리지를 활용해 채팅 내역 관리',
    ],
    links: {
      notion: '',
      github: 'https://github.com/ChoiGyeongJu/openai-chatbot',
      site: 'https://chat-jupt.vercel.app',
    },
  },
  {
    id: 4,
    title: 'Portfolio',
    date: '2024.10 (개인 프로젝트)',
    description: '포트폴리오 웹사이트',
    features: ['개인 포트폴리오 웹사이트 개발', 'github pages 배포'],
    links: {
      notion: '',
      github: 'https://github.com/ChoiGyeongJu/portfolio',
      site: 'https://choigyeongju.github.io/portfolio',
    },
  },
  {
    id: 5,
    title: 'Thumbnail Maker',
    date: '2024.09 (개인 프로젝트)',
    description: '간편 썸네일 제작 플랫폼',
    features: ['html2canvas를 사용한 썸네일 제작 및 저장', 'github pages 배포'],
    links: {
      notion: 'https://www.notion.so/Thumbnail-Maker-29b1704ee7044773be654ab80fa74ade',
      github: 'https://github.com/ChoiGyeongJu/thumbnail_maker',
      site: 'https://choigyeongju.github.io/thumbnail_maker/',
    },
  },
];

export const project_details = [
  {
    id: 1,
    title: '서울시교육청 게시판',
    description: `교육청 내부 게시판 서비스 개발`,
    images: [eduList, eduCategory, eduDetail, eduWrite],
    techStacks: [
      'React',
      'TypeScript',
      'styled-components',
      'Vite',
      'Tanstack Query',
      'react-beautiful-dnd',
      'Tinymce',
      'React Hook Form',
    ],
    works: [
      '공지사항, FAQ, Q&A 게시판 서비스 개발',
      'Tanstack Query를 활용한 상태 관리 및 데이터 캐싱',
      'Drag&Drop으로 카테고리 순서 변경 기능 제공',
      'React Hook Form을 활용한 게시글 폼 관리',
      '사내 npm 라이브러리 배포를 통해 타 팀에 게시판 컴포넌트 제공',
    ],
  },
  {
    id: 2,
    title: '성공식당커뮤니티',
    description: `자영업 사장님들이 자유롭게 소통하고 질문할 수 있는 플랫폼`,
    images: [foodiHome, foodiDetail, foodiComment, foodiChart, MfoodiHome, MfoodiComment],
    techStacks: [
      'React',
      'TypeScript',
      'styled-components',
      'Webpack',
      'mobX',
      'rechart',
      'react-helmet',
      'TinyMce',
    ],
    works: [
      '공지사항, 자유게시판, Q&A등 다양한 게시판 서비스 개발',
      '일, 주, 월별 식자재 시세정보 차트 시각화하여 제공',
      'TinyMce 셀프호스팅 도입하여 유료 플랜 없이 서비스 사용하도록 구현',
      '게시글 컴포넌트를 사내 npm 라이브러리 배포를 통해 타 팀에서 재사용하도록 제공',
      'React Helmet을 활용하여 메타 태그와 오픈 그래프를 관리해 검색엔진 최적화(SEO)를 구현',
    ],
  },
  {
    id: 3,
    title: 'GPT 챗봇',
    description: `openAI 기반 챗봇`,
    images: [chat_pc, chat_delete, chat_mobile, chat_mobile_LNB],
    techStacks: ['node.js', 'express', 'React', 'TypeScript', 'styled-components', 'mui', 'Vite'],
    works: [
      'openAI와 통신하는 express 서버 구축',
      '로컬스토리지를 활용해 채팅 내역 관리 (CRD)',
      '백엔드&프론트엔드 vercel 배포',
    ],
  },
  {
    id: 4,
    title: 'Portfolio',
    description: `개인 포트폴리오 홈페이지`,
    images: [banner, about, skills, project, career],
    techStacks: [
      'React',
      'TypeScript',
      'styled-components',
      'Vite',
      'github pages',
      'React Slick',
      'react-type-animation',
    ],
  },
  {
    id: 5,
    title: 'Thumbnail Maker',
    description: `간편 썸네일 제작 플랫폼`,
    images: [main, example],
    techStacks: ['React', 'TypeScript', 'styled-components', 'Vite', 'html2canvas', 'github pages'],
    works: [
      '썸네일 구성 요소 커스텀 기능 제공',
      '썸네일 배경 이미지 파일 업로드 제공',
      'html2canvas 라이브러리를 통해 썸네일 영역 캡처',
    ],
  },
];
