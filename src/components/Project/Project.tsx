import { useParams } from 'react-router-dom';

import { NotionView } from 'common';

// 중첩 포스트 링크 클릭 시 해당 페이지 렌더링
const Project = () => {
  const { pageId } = useParams();

  if (!pageId) return null;

  return <NotionView pageId={pageId} />;
};

export default Project;
