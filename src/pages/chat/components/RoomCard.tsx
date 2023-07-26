import React from "react";
import { OutlinedContainer, RoomTitle } from "./styles";

interface IProps {
  room: { roomId: number; roomNm: string; numOfMem: number; lastMsg: string };
}

function RoomCard({ room }: IProps) {
  return (
    <OutlinedContainer>
      <RoomTitle>
        {room.roomNm}:{room.numOfMem}{" "}
      </RoomTitle>
      <span>{room.lastMsg}</span>
    </OutlinedContainer>
  );
}

export default RoomCard;
