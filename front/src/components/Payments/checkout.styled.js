import styled from 'styled-components';

export const Container  = styled.div`
  section.payments_checkout--section {
      background: #eee;
      display: flex;
      flex-direction: column;
      max-width: 300px;
      width: 100%;
      height: 112px;
      border-radius: 6px;
      justify-content: space-between;
      box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    }
    .payments_checkout--product {
      display: flex;
      justify-content: end;
    }
    .payments_checkout--description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
    }
    h3.payments_checkout--h3,
    h5.payments_checkout--h5 {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.154px;
      color: #000;
      margin: 0;
      text-align: right;
    }
    h5.payments_checkout--h5 {
      margin-top: 10px;
      font-size: 24px;
      font-weight: bold;
      color: #037203;
    }
    button.payments_checkout--button {
      height: 36px;
      background: #037203;
      color: #fff;
      width: 100%;
      font-size: 14px;
      border: 0;
      font-weight: 500;
      cursor: pointer;
      letter-spacing: 0.6;
      border-radius: 0 0 6px 6px;
      transition: all 0.2s ease;
      box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    }
    button.payments_checkout--button:hover {
      background: #2a8b2a;
    }

    div.payments_checkout--success {
      background-color: #ffffff;
      border-radius: 0 0 6px 6px;
      color: #037203;
      height: 36px;
      text-align: center;
      font-size: 14px;
      line-height: 36px;
    }
`;


