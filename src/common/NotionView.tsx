import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';

import { useQuery } from '@tanstack/react-query';

import styled from 'styled-components';

interface Props {
  pageId: string;
}

const fetchNotionData = async (pageId: string) => {
  const response = await fetch(`https://openai-chatbot-lilac.vercel.app/api/notion`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      pageId,
      limit: 100,
      chunkNumber: 0,
      cursor: { stack: [] },
      verticalColumns: false,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Notion data');
  }

  return response.json();
};

const NotionView = ({ pageId }: Props) => {
  const { data: notionData } = useQuery({
    queryKey: ['notionData', pageId],
    queryFn: () => fetchNotionData(pageId),
  });

  return (
    <Wrapper>
      {notionData && (
        <NotionRenderer
          recordMap={notionData.recordMap}
          fullPage={true}
          mapPageUrl={id => `/portfolio/project/${id}`}
        />
      )}
    </Wrapper>
  );
};

export default NotionView;

const Wrapper = styled.div`
  margin: 0 auto;
  z-index: 9;
  margin-top: 36px;
  text-align: left;
`;
