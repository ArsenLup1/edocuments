import React from 'react';
import Styled from 'styled-components';

const FooterStc=Styled.div`
    background:#080250;
    padding-top:80px;
    padding-bottom:80px;
    height: auto;

    p{
        color: #fff;
    }

    .divMenu
    {
        text-align:right;
        @media (max-width: 768px) {
            display:none;
        }
    }
`;
export default FooterStc;