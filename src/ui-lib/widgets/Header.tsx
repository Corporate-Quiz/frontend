/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Logo from '../styled-components/Logo';
import {
  BellIcon,
  RedBallIcon,
  LogOutIcon,
  AvatarIcon,
} from '../styled-components/icons';
import logoImg from '@/assets/images/logo/header__logo.svg';
import AdvBanner from './AdvBanner';
import AvatarUploadPopup from '@/ui-lib/popups/AvatarUploadPopup';
import { useGetCurrentUserQuery, jwt, useGetAllQuizzesQuery } from '@/api/api';
import { SRC_BASE_URL } from '@/api/api-url';

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 32px 80px 0;
  box-sizing: border-box;
`;
const UpdatedLogo = styled(Logo)`
  background-image: url(${logoImg});
  width: 71px;
  height: 71px;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ToolBar = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div<{ width: number, height: number }>`
  width:${({ width }) => width}px;
  height:${({ height }) => height}px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:hover {
    .avatarIcon {
      opacity: 1;
    }

    .overlay {
      opacity: 1;
    }
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const AvatarIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

const AvatarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.64);
  z-index: 1;
  opacity: 0;
`;

const UserName = styled.p`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.154px;
  font-weight: 400;
  color: #000;
  margin: 0 24px 0 0;
  align-self: center;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  margin-right: 24px;
  cursor: pointer;
`;

const Header: FC = () => {
  const navigate = useNavigate();
  const { data } = useGetCurrentUserQuery();
  /// нужно убрать этот ранний запрос за квизами
  const { data: quizzes } = useGetAllQuizzesQuery();
  const [isOpen, openModal] = useState(false);
  const [isAvatarPopupOpen, openAvatarPopup] = useState(false);
  const logOutFunction = () => {
    const isRemember = localStorage.getItem('isRemember') === 'true';
    jwt.remove(isRemember);
    localStorage.removeItem('isRemember');
    navigate('/login');
  };

  const closeAvatarPopup = () => {
    openAvatarPopup(false);
  };

  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      if (e.target!.closest('.banner') === null) { openModal(false); }
    });
    document.addEventListener('click', (e: any) => {
      if (e.target!.closest('.avatarPopup') === null) { openAvatarPopup(false); }
    });
  }, []);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <AdvBanner isOpen={isOpen} />
        <AvatarUploadPopup closeAvatarPopup={closeAvatarPopup} isOpen={isAvatarPopupOpen} />
        <UpdatedLogo to='/' />
        <ToolBar>
          <AvatarWrapper
            width={60}
            height={60}
            onClick={(e: any) => { e.stopPropagation(); openAvatarPopup(!isOpen); }}>
            <AvatarIconWrapper className='avatarIcon' style={{ zIndex: '2' }}><AvatarIcon style={{ zIndex: '2' }} /></AvatarIconWrapper>
            <AvatarOverlay className='overlay' />
            {data?.avatar
              ? (
                <Avatar src={`${SRC_BASE_URL}/${data?.avatar}`} alt={`${data?.firstName} ${data?.lastName}`} />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #f2fcfe, #1c92d2)',
                  }} />
              )}
          </AvatarWrapper>
          <UserName>{`${data?.firstName} ${data?.lastName}`}</UserName>
          <IconWrapper>
            <BellIcon onClick={(e: any) => { e.stopPropagation(); openModal(!isOpen); }} />
            {quizzes && <RedBallIcon top={3} left={17} />}
          </IconWrapper>
          <LogOutIcon onClick={logOutFunction} />
        </ToolBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
