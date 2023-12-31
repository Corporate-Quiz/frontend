import React, { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import StyledDiv from '../styled-components/StyledDiv';
import { ArrowIcon } from '../styled-components/icons';
import achieve1 from '@/assets/images/achievement-icons/icon1.png';
import achieve2 from '@/assets/images/achievement-icons/icon2.png';
import achieve3 from '@/assets/images/achievement-icons/icon3.png';

const UpdatedDiv = styled(StyledDiv)`
    width: 100%;
    max-width: 676px;
    display: flex;
    gap: 24px;
    flex-direction: column;
`;

export const IconWrapper = styled.div`
    width: 28px;
    height: 28px;
    background-color:rgba(63, 138, 224, 0.05);
    transition: all ease .3s;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(63, 138, 224, 0.15);
    }
`;

const ContainerHeader = styled.div`
    width:100%;
    justify-content: space-between;
    display: flex;
`;

const Title = styled.h3`
    font-size: 20px;
    font-family: 'SFProDisplay';
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.38px;
    color: #000;
    margin: 0;
`;

const AchieveImage = styled.img`
    width: 64px;
    height: 64px;
`;

// временное решение для индикации количества пройденных квизов
const Progress = styled.p`
    font-size: 13px;
    font-family: 'SFProDisplay';
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.078px;
    color: #828282;
    margin: 0;
`;

const AchievePlate = styled.li`
    display: flex;
    gap: 16px;
    padding: 12px 0;
    width: 100%;
    border-bottom: 1px solid #F2F3F5;
`;

const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: auto;
`;

// создать метод для высчитывания длины прогрессбара
const ProgressBar = styled.span<{ width?: number }>`
    width: 100%;
    height: 8px;
    margin-bottom: 2px;
    background-color: rgba(63, 138, 224, 0.15);
    border-radius: 8px;
    position: relative;
    &::before {
        content: '';
        border-radius: 8px 0 0 8px;
        background-color:#3F8AE0;
        height: 8px;
        position: absolute;
        width: ${({ width }) => width}px;
    }
`;

const AchievesContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Achieves: FC = () => {
  const navigate = useNavigate();
  return (
    <UpdatedDiv>
      <ContainerHeader>
        <Title>Ачивки</Title>
        <IconWrapper><ArrowIcon /></IconWrapper>
      </ContainerHeader>
      <AchievesContainer>
        <AchievePlate>
          <AchieveImage src={achieve1} alt='ачивка крутая' />
          <ProgressWrapper>
            <ContainerHeader>
              <Title>Вызов Июня</Title>
              <Progress>2/10</Progress>
            </ContainerHeader>
            <ProgressBar width={40} />
          </ProgressWrapper>
        </AchievePlate>

        <AchievePlate>
          <AchieveImage src={achieve2} alt='ачивка крутая' />
          <ProgressWrapper>
            <ContainerHeader>
              <Title>5 квизов без ошибок</Title>
              <Progress>2/10</Progress>
            </ContainerHeader>
            <ProgressBar width={60} />
          </ProgressWrapper>
        </AchievePlate>

        <AchievePlate>
          <AchieveImage src={achieve3} alt='ачивка крутая' />
          <ProgressWrapper>
            <ContainerHeader>
              <Title>Квизмэн</Title>
              <Progress>4/10</Progress>
            </ContainerHeader>
            <ProgressBar width={200} />
          </ProgressWrapper>
        </AchievePlate>
      </AchievesContainer>
    </UpdatedDiv>
  );
};

export default Achieves;
