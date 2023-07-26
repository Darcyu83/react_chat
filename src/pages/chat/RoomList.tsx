import React from "react";
import RoomCard from "./components/RoomCard";
import styled from "@emotion/styled";

interface IProps {}

export const dummy = [
  { roomId: 11, roomNm: "Sky fly 달시", numOfMem: 13, lastMsg: "히하1" },
  { roomId: 12, roomNm: "SkySky fly 달시1", numOfMem: 131, lastMsg: "히하2" },
  { roomId: 13, roomNm: "Sky fly 달시2", numOfMem: 132, lastMsg: "히하3" },
  { roomId: 14, roomNm: "Sky Skyfly 달시3", numOfMem: 133, lastMsg: "히하4" },
  { roomId: 11, roomNm: "Sky fly 달시", numOfMem: 13, lastMsg: "히하1" },
  { roomId: 12, roomNm: "Sky fly 달시1", numOfMem: 131, lastMsg: "히하2" },
  {
    roomId: 13,
    roomNm: "Sky SkySkyfly 달시2",
    numOfMem: 132,
    lastMsg: "히하3",
  },
  { roomId: 14, roomNm: "Sky fly 달시3", numOfMem: 133, lastMsg: "히하4" },
  { roomId: 11, roomNm: "Sky fly 달시", numOfMem: 13, lastMsg: "히하1" },
  { roomId: 12, roomNm: "Sky Skyfly 달시1", numOfMem: 131, lastMsg: "히하2" },
  {
    roomId: 13,
    roomNm: "Sky SkySkyfly 달시2",
    numOfMem: 132,
    lastMsg: "히하3",
  },
  { roomId: 14, roomNm: "Sky fly 달시3", numOfMem: 133, lastMsg: "히하4" },
];

const Container = styled.div`
  padding: 10px;
  width: 100%;
  /* display: grid;
  background: dodgerblue;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr 2fr);
  grid-auto-flow: row;
 */

  display: flex;
  flex-wrap: wrap;

  & > * {
    flex: 1;
  }
`;

function RoomList(props: IProps) {
  return (
    <Container style={{}}>
      {dummy.map((room) => {
        return <RoomCard key={room.roomId} room={room} />;
      })}
    </Container>
  );
}

export default RoomList;
