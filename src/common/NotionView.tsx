import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';
import { useNavigate } from 'react-router-dom';

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
  const nav = useNavigate();

  const { data: notionData, isLoading } = useQuery({
    queryKey: ['notionData', pageId],
    queryFn: () => fetchNotionData(pageId),
  });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    nav(`/portfolio/resume/${id}`);
    window.scrollTo({ top: 0 });
  };

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
          mapPageUrl={id => `/portfolio/resume/${id}`}
          components={{
            PageLink: ({
              href,
              children,
              ...rest
            }: {
              href: string;
              children: React.ReactNode;
              [key: string]: any;
            }) => {
              const pageId = href.split('/').pop();
              return (
                <a {...rest} href={href} onClick={e => handleLinkClick(e, pageId!)}>
                  {children}
                </a>
              );
            },
          }}
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

  & .notion-asset-wrapper {
    & div {
      width: 100% !important;
    }
  }
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
