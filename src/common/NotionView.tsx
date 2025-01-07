import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';

import Spinner from '@mui/material/CircularProgress';

import { useQuery } from '@tanstack/react-query';

import { useDarkmode } from 'hooks';
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
  const { isDarkMode } = useDarkmode();

  const { data: notionData, isLoading } = useQuery({
    queryKey: ['notionData', pageId],
    queryFn: () => fetchNotionData(pageId),
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>
          <Spinner />
        </Loader>
      ) : (
        <NotionRenderer
          fullPage={true}
          darkMode={isDarkMode}
          recordMap={notionData.recordMap}
          mapPageUrl={id => `/portfolio/project/${id}`}
        />
      )}
    </Wrapper>
  );
};

export default NotionView;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  z-index: 9;
  margin-top: 36px;
  text-align: left;
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
