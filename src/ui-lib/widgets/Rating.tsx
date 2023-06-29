import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  Title,
  Div,
  Text,
  Subhead,
  Caption,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import StyledDiv from '../StyledDiv';

export const StyledNavLink = styled(NavLink)`
  display: block;
  width: 28px;
  height: 28px;
  background-color: rgba(63, 138, 224, 0.05);
  border-radius: 4px;
  background-image: url('../images/navlink_icon.svg');
  background-size: 7px 12px;
  background-repeat: no-repeat;
  background-position: center;
`;

const UserWrapper = styled.div<{ width: number, height: number }>`
  width:${({ width }) => width}px;
  height:${({ height }) => height}px;
  border-radius: 50%;
  overflow: hidden;
`;

const User = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Rating: React.FC = () => (
  <StyledDiv
    style={{
      width: '318px',
      height: '226px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '24px',
    }}>
    <Div
      style={{
        width: '100%',
        padding: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
      }}>
      <Title
        style={{ textAlign: 'left' }}
        level='2'>
        Рейтинг
      </Title>
      <StyledNavLink to='#' />
    </Div>
    <Div
      style={{
        padding: '0',
        width: '224px',
        height: '126px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
      <Div
        style={{
          position: 'relative',
          width: '60px',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '2px',
        }}>
        <Div style={{
          padding: '0',
          width: '21px',
          height: '21px',
          borderRadius: '50%',
          backgroundColor: '#FFC107',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '0',
          left: '0',
        }}>
          <Caption>21</Caption>
        </Div>
        <UserWrapper height={60} width={60}>
          <User src='../images/vera_petrova.png' alt='Аватар' />
        </UserWrapper>
        <Caption
          style={{
            textAlign: 'center',
            letterSpacing: '-1px',
          }}>
          Вера Петрова
        </Caption>
      </Div>
      <Div
        style={{
          position: 'relative',
          width: '80px',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignSelf: 'flex-start',
          gap: '5px',
        }}>
        <Div style={{
          padding: '0',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: '#FFC107',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '0',
          left: '0',
        }}>
          <Text>20</Text>
        </Div>
        <UserWrapper height={80} width={80}>
          <User src='../images/derick_mckinney.png' alt='Аватар' />
        </UserWrapper>
        <Subhead>Вы</Subhead>
      </Div>
      <Div
        style={{
          position: 'relative',
          width: '60px',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '2px',
        }}>
        <Div style={{
          padding: '0',
          width: '21px',
          height: '21px',
          borderRadius: '50%',
          backgroundColor: '#FFC107',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '0',
          left: '0',
        }}>
          <Caption>19</Caption>
        </Div>
        <UserWrapper height={60} width={60}>
          <User src='../images/nicolay_smirnov.png' alt='Аватар' />
        </UserWrapper>
        <Caption
          style={{
            textAlign: 'center',
            letterSpacing: '-1px',
          }}>
          Николай Смирнов
        </Caption>
      </Div>
    </Div>
  </StyledDiv>
);

export default Rating;