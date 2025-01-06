import { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';

import styled from 'styled-components';

interface Props {
  pageId: string;
}

const NotionView = ({ pageId }: Props) => {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    const fetchNotionData = async () => {
      try {
        const response = await fetch('/notion-api/api/v3/loadPageChunk', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pageId: pageId,
            limit: 100,
            chunkNumber: 0,
            cursor: {
              stack: [],
            },
            verticalColumns: false,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Notion data');
        }

        const data = await response.json();
        setNotionData(data);
      } catch (error) {
        console.error('Error fetching Notion data:', error);
      }
    };

    fetchNotionData();
  }, []);

  return (
    <Wrapper>
      {notionData && <NotionRenderer recordMap={notionData.recordMap} fullPage={true} />}
    </Wrapper>
  );
};

export default NotionView;

const Wrapper = styled.div`
  margin: 0 auto;
  z-index: 9;
  margin-top: 36px;
  text-align: left;

  & .notion-page-icon-span {
    left: 45px;
  }
`;
