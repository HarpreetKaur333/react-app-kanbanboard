import styled from 'styled-components';

export const ColumnContainer = styled.div`
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 15px;
  width: 250px;
  margin: 0 10px;
`;

export const ColumnHeader = styled.h3`
  text-align: center;
`;

export const AddButton = styled.button`
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const TaskList = styled.div`
  margin-top: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const ModalButton = styled.button<{ cancel?: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.cancel ? '#ff4d4d' : '#4caf50')};
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: ${(props) => (props.cancel ? '0' : '10px')};
  cursor: pointer;
`;
export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background-color: #fde68a;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

export const TaskContent = styled.span`
  font-size: 14px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ef4444;
  font-size: 16px;
`;