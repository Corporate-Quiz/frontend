import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import {
  Div,
  Title,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useGetQuizQuery, useGetStatisticQuery } from '@/api/api';
import ReviewDetails from '@/ui-lib/widgets/ReviewDetails';
import StyledButton from '@/ui-lib/styled-components/StyledButton';
import ErrorParsing from '@/ui-lib/widgets/ErrorParsing';

const StyledButtonWrapper = styled(Div)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`;

const QuizErrorsReview: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetQuizQuery(Number(id));
  const { data: stata } = useGetStatisticQuery(Number(id));
  const [questions, setQuestions] = useState(data ? data.questions : []);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(data ? data.questions : []);
  }, [data]);

  return (
    <Div style={{
      padding: 0,
      width: '100%',
      maxWidth: '914px',
    }}>
      <Title
        weight='2'
        style={{
          marginBottom: '24px',
        }}>
        {data?.name}
      </Title>
      <ReviewDetails
        data='18 августа 2023'
        questionsAmount={data?.questions.length ?? 0}
        rightQuestionsAmount={stata?.statistics.filter((el) => el.is_right).length ?? 0} />
      <ErrorParsing statistics={stata?.statistics} questions={questions} />
      <StyledButtonWrapper>
        <StyledButton onClick={() => navigate(`/quizzes/${id}`)}>Пройти снова</StyledButton>
        <StyledButton
          onClick={() => navigate('/quizzes')}
          style={{
            background: '#ffffff',
            border: '1px solid #2688eb',
            color: '#2688eb',
          }}>
          К списку квизов
        </StyledButton>
      </StyledButtonWrapper>
    </Div>
  );
};

export default QuizErrorsReview;
